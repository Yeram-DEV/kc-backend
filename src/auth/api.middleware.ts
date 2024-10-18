import { Injectable, Logger, NestMiddleware, UnauthorizedException } from '@nestjs/common'
import { ApiStrategy } from './api.strategy'

@Injectable()
export class ApiMiddleware implements NestMiddleware {
  private readonly logger = new Logger(ApiMiddleware.name)

  constructor(private apiKeyStrategy: ApiStrategy) {}

  use(req: Request, res: Response, next: () => void) {
    try {
      this.apiKeyStrategy.validate(req)
      next()
    } catch (error) {
      this.logger.error(error)
      throw new UnauthorizedException('API 검증 실패')
    }
  }
}
