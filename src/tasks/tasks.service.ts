import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksRepository } from './tasks.repository';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) {}

  //   private tasks: Task[] = [];
  //   getAllTasks(): Task[] {
  //     return this.tasks;
  //   }

  getTaskById(id: string): Promise<Task> {
    return this.tasksRepository.getTaskById(id);
  }

  //   getTaskById(id: string): Task {
  //     const found = this.tasks.find((task) => task.id === id);
  //     if (!found) {
  //       throw new NotFoundException(`Task with ID "${id}" not found`);
  //     }
  //     return found;
  //   }

  createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  //   createTask(createTaskDto: CreateTaskDto): Task[] {
  //     const { title, description } = createTaskDto;
  //     const task: Task = {
  //       id: uuid(),
  //       title: title,
  //       description: description,
  //       status: TaskStatus.PENDING,
  //     };
  //     this.tasks.push(task);
  //     return this.tasks;
  //   }

  deleteTask(id: string): Promise<void> {
    return this.tasksRepository.deleteTask(id);
  }

  //   deleteTask(id: string): void {
  //     const found = this.getTaskById(id);
  //     this.tasks = this.tasks.filter((task) => task.id !== found.id);
  //   }
  //   updateTaskStatus(id: string, status: TaskStatus): Task | undefined {
  //     const task = this.getTaskById(id);
  //     if (task) {
  //       task.status = status;
  //     }
  //     return task;
  //   }
  //   getTasksWithFilters(filterDto: GetTasksFilterDto): Task[] {
  //     const { status, search } = filterDto;
  //     let tasks = this.getAllTasks();
  //     if (status) {
  //       tasks = tasks.filter((task) => task.status === status);
  //     }
  //     if (search) {
  //       tasks = tasks.filter((task) => {
  //         if (
  //           task.title.toLowerCase().includes(search) ||
  //           task.description.toLowerCase().includes(search)
  //         ) {
  //           return true;
  //         }
  //         return false;
  //       });
  //     }
  //     return tasks;
  //   }
}
