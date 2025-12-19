import { Tasks } from './tasks.model';
import { TasksService } from './tasks.service';
import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Tasks[] {
    return this.tasksService.getAllTasks();
  }
}
