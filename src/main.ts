import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { NestExpressApplication } from '@nestjs/platform-express'
import { ValidationPipe, VersioningType } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, { cors: true })
  app.disable('x-powered-by', 'X-Powered-By')
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true
    })
  )

  app.enableVersioning({
    type: VersioningType.URI,
    defaultVersion: '1'
  })

  const config = new DocumentBuilder()
    .setTitle('지식센터 API')
    .setDescription(
      '<div>' +
        '<p>지식센터 API는 사용자들이 책과 관련된 다양한 작업을 수행할 수 있는 종합적인 서비스입니다. 다음과 같은 기능들을 제공합니다:</p>' +
        '<ul>' +
        '<li><b>📖 책 조회:</b> 책 목록을 확인하고, 상세 정보를 얻을 수 있습니다.</li>' +
        '<li><b>📚 대여:</b> 사용자가 책을 대여하고, 대여 상태를 관리할 수 있습니다.</li>' +
        '<li><b>🔄 반납:</b> 대여한 책을 반납할 수 있습니다.</li>' +
        '<li><b>👤 유저 정보:</b> 프로필 및 대여 기록을 조회할 수 있습니다.</li>' +
        '<li><b>⏳ 대기:</b> 원하는 책이 대여 가능할 때까지 대기 목록에 추가할 수 있습니다.</li>' +
        '<li><b>⭐ 찜하기:</b> 관심 있는 책을 찜하여 저장할 수 있습니다.</li>' +
        '<li><b>📝 리뷰:</b> 책에 대한 리뷰를 작성하고 다른 사람들의 리뷰를 확인할 수 있습니다.</li>' +
        '<li><b>💬 구매 요청:</b> 시스템에 없는 책을 구매 요청할 수 있습니다.</li>' +
        '</ul>' +
        '<hr>' +
        '<p>이 API는 <b>API 키 인증</b>을 통해 보호되며, 각 요청에는 유효한 API 키가 필요합니다.</p>' +
        '</div>'
    )
    .setVersion('1.0')
    .addApiKey({ type: 'apiKey', name: 'x-api-key', in: 'header' }, 'x-api-key')
    .build()
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('api', app, document, {
    swaggerUiEnabled: true,
    customSiteTitle: '지식센터 API',
    swaggerOptions: {
      filter: true
    }
  })
  await app.listen(4010)
}

bootstrap().then((r) => console.debug(r))
