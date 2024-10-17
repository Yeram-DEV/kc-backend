import { Injectable, InternalServerErrorException, Logger, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateWaitDto, QueryWaitDto } from '@wait/dto'
import { Wait } from '@wait/entities'

@Injectable()
export class WaitService {
  private readonly logger = new Logger(WaitService.name)

  constructor(
    @InjectRepository(Wait)
    private readonly waitRepository: Repository<Wait>
  ) {}

  async create(createWaitDto: CreateWaitDto): Promise<Wait> {
    try {
      const existingWaits = await this.waitRepository.count({
        where: { book_id: createWaitDto.book_id }
      })

      const wait = this.waitRepository.create({
        ...createWaitDto,
        wait_order_num: existingWaits + 1
      })

      return await this.waitRepository.save(wait)
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('대기 목록에 추가하는 중 오류가 발생했습니다.')
    }
  }

  async findAll({ book_id, user_id }: QueryWaitDto): Promise<Wait[] | null> {
    try {
      return await this.waitRepository.find({
        where: { book_id, ...(user_id && { user_id }) },
        order: { wait_order_num: 'ASC' }
      })
    } catch (error) {
      this.logger.error(error)
      throw new InternalServerErrorException('대기 목록을 불러오는 중 오류가 발생했습니다.')
    }
  }

  async remove(wait_id: string): Promise<boolean> {
    try {
      const wait = await this.waitRepository.findOne({ where: { wait_id } })

      if (!wait) {
        throw new NotFoundException('해당 대기 기록을 찾을 수 없습니다.')
      }

      const deleteResult = await this.waitRepository.delete(wait_id)

      if (!deleteResult.affected) {
        return false
      }

      const remainingWaits = await this.waitRepository.find({
        where: { book_id: wait.book_id },
        order: { wait_order_num: 'ASC' }
      })

      await Promise.all(
        remainingWaits.map((remainingWait, index) => {
          remainingWait.wait_order_num = index + 1
          return this.waitRepository.save(remainingWait)
        })
      )

      return !!deleteResult.affected
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error
      }
      this.logger.error(error)
      throw new InternalServerErrorException('대기 취소 중 오류가 발생했습니다.')
    }
  }
}
