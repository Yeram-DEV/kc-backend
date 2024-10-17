import { ConflictException, Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { CreateRentalDto, QueryRentalDto } from '@rental/dto'
import { Rental, Return } from '@rental/entities'
import { addBusinessDays } from '@utils/date'
import dayjs from 'dayjs'

@Injectable()
export class RentalService {
  private readonly logger = new Logger(RentalService.name)

  constructor(
    @InjectRepository(Rental) private readonly rentalRepository: Repository<Rental>,
    @InjectRepository(Return) private readonly returnRepository: Repository<Return>
  ) {}

  async create(createRentalDto: CreateRentalDto) {
    try {
      const existRental = await this.rentalRepository.findOne({
        where: { book_id: createRentalDto.book_id, user_id: createRentalDto.user_id }
      })

      if (existRental) {
        throw new ConflictException('해당 책은 이미 대여 중입니다.')
      }
      const rental = this.rentalRepository.create({
        ...createRentalDto,
        rental_date: dayjs().toDate(),
        rental_due_date: addBusinessDays(14)
      })
      return await this.rentalRepository.save(rental)
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error
      }
      this.logger.error(`대여 생성 실패: ${error.message}`, error.stack)
      throw new InternalServerErrorException('대여 생성에 실패했습니다.')
    }
  }

  async findOne({ book_id, user_id }: QueryRentalDto): Promise<Rental | null> {
    try {
      return await this.rentalRepository.findOne({ where: { book_id, ...(user_id && { user_id }) } })
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 대여정보를 가져오는 중 오류가 발생했습니다.')
    }
  }

  async remove(rental_id: string): Promise<boolean> {
    try {
      const rental = await this.rentalRepository.findOne({ where: { rental_id } })

      if (!rental) {
        throw new NotFoundException(`${rental_id}에 해당하는 대여 기록을 찾을 수 없습니다.`)
      }

      const result = await this.rentalRepository.delete(rental_id)

      if (!!result.affected) {
        const returnRecord = this.returnRepository.create({
          user_id: rental.user_id,
          book_id: rental.book_id
        })
        await this.returnRepository.save(returnRecord)
      }

      return !!result.affected
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      this.logger.error(error)
      throw new InternalServerErrorException('서버에서 반납 중 오류가 발생했습니다.')
    }
  }
}
