import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { tasks } from './entities/task.entity';

@Module({
    imports: [TypeOrmModule.forFeature([tasks])],
    controllers: [TasksController],
    providers: [TasksService]
})
export class TasksModule {}
