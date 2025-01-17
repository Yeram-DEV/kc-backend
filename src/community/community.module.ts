import { Module } from '@nestjs/common'
import { CommunityController } from '@community/community.controller'
import { CommunityService } from '@community/community.service'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Event, Notice, Review } from '@community/entities'

@Module({
  imports: [TypeOrmModule.forFeature([Event, Notice, Review])],
  controllers: [CommunityController],
  providers: [CommunityService]
})
export class CommunityModule {}
