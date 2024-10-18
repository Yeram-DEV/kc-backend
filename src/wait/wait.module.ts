import { Module } from '@nestjs/common'
import { WaitController } from '@wait/wait.controller'
import { WaitService } from '@wait/wait.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Wait } from '@wait/entities'

@Module({
  imports: [TypeOrmModule.forFeature([Wait])],
  controllers: [WaitController],
  providers: [WaitService]
})
export class WaitModule {}
