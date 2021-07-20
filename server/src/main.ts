import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { config } from 'dotenv'
import { Console } from 'console'

config()
async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const port = process.env?.PORT || 5000
  await app.listen(port, () => {
    console.log('Listening at port ' + port)
  })
}
bootstrap()
