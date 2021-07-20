import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { join } from 'path'

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      path: '/api/graphql',

      // cors: {
      //   origin: ['http://localhost:3000'],
      //   credentials: true,
      // },
    }),
    /**
     * Include modules as entities here
     */
    TypeOrmModule.forRoot({
      // type: 'sqlite',
      // database: ':memory:',
      // entities: ['dist/**/*entity{.ts,.js}'],
      // synchronize: true,
      type: 'mysql',
      host: 'localhost',
      username: 'rakiabodyjm',
      password: 'rakiabodyjm4690',
      database: 'axies',
      entities: [],
      synchronize: true,
      logging: false,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
