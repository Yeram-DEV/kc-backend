import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Rental, Return } from '@rental/entities'
import { RentalController } from '@rental/rental.controller'
import { RentalService } from '@rental/rental.service'

@Module({
  imports: [TypeOrmModule.forFeature([Rental, Return])],
  controllers: [RentalController],
  providers: [RentalService]
})
export class RentalModule {}
