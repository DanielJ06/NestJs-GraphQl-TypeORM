import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonModule } from './lesson/lesson.module';
import { Lesson } from './lesson/lesson.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: 'mongodb+srv://daniel06:daniel06@cluster0.whprp.mongodb.net/School?retryWrites=true&w=majority',
      synchronize: true,
      useUnifiedTopology: true,
      entities: [
        Lesson
      ]
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true
    }),
    LessonModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
