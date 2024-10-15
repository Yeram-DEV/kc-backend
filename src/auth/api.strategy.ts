import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class ApiStrategy {
  constructor(private configService: ConfigService) {}

  validate(req: Request): boolean {
    const apiKey = req.headers['x-api-key']

    // 환경 변수에서 올바른 API 키를 가져옵니다.
    const validApiKey = this.configService.get<string>('API_KEY')

    // API 키가 없거나 올바르지 않으면 예외 발생
    if (!apiKey || apiKey !== validApiKey) {
      throw new UnauthorizedException('API 검증 실패')
    }

    return true
  }
}
