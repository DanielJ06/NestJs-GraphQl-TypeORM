import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService
  ) {}

  @Query(() => LessonType)
  lesson(): LessonType {
    return {
      id: '1',
      name: 'React class',
      startDate: (new Date()).toISOString(),
      endDate: (new Date()).toISOString(),
    }
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('name') name: string,
    @Args('startDate') startDate: string,
    @Args('endDate') endDate: string,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(name, startDate, endDate);
  }
}

