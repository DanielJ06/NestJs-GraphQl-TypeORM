import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { Lesson } from './lesson.entity';
import { CreateLessonInput } from './dto/lesson.input.dto';

@Resolver(() => LessonType)
export class LessonResolver {
  constructor(
    private lessonService: LessonService
  ) {}

  @Query(() => LessonType)
  lesson(
    @Args('id') id: string,
  ): Promise<Lesson> {
    return this.lessonService.getLesson(id);
  }

  @Mutation(() => LessonType)
  createLesson(
    @Args('createLessonInput') createLessonInput: CreateLessonInput,
  ): Promise<Lesson> {
    return this.lessonService.createLesson(createLessonInput);
  }
}

