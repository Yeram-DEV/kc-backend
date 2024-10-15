import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { ApiStrategy } from './api.strategy'
import { ApiMiddleware } from './api.middleware'

@Module({
  imports: [ConfigModule],
  providers: [ApiStrategy],
  exports: [ApiStrategy]
})
export class AuthModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ApiMiddleware) // 미들웨어 등록
      .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
