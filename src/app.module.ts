import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './auth/auth.module'
import { BookModule } from './book/book.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env.local'
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PW,
      database: process.env.DB_SCHEMA,
      autoLoadEntities: true,
      synchronize: false,
      logging: true
    }),
    AuthModule,
    BookModule
  ]
})
export class AppModule {}
