import { Injectable, Inject } from '@nestjs/common';
import { Tasks } from './interfaces/task';
//import { InjectModel } from 'sequelize-typescript';
import { Task } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {

    constructor(
        @Inject('TASKS_REPOSITORY')
        private tasksRepository: typeof Tasks,
      ) {}
      private readonly tasks: Task[] = [];
    
      create(task: Tasks) {
        this.tasks.push(task);
      }
    async getTasks(){
        return await this.TasksRepository.find();
    }
}
