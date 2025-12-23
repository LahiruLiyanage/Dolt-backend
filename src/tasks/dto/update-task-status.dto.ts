import { IsEnum } from 'class-validator';
import { TaskStatus } from './../task.model';

/* eslint-disable @typescript-eslint/no-unsafe-call */
export class UpdateTaskStatusDto {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
