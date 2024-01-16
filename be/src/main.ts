import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  app.setGlobalPrefix('api/v1')

  app.useGlobalPipes(new ValidationPipe({ transform: true }))

  const PORT = app.get('PORT') || 8080
  await app.listen(PORT, () => console.log(`App is running on port ${PORT}`))
}
bootstrap()
