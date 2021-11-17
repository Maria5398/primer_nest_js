import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
//import { Request, Response } from "express";
import { TasksService } from './tasks.service';
import { Task } from './interfaces/task';

@Controller('tasks')
export class TasksController {

    constructor(private taskService: TasksService) {} //con esto se puede usar el metodo 

    @Get() //decorardor es solo un metodo que proporciona informacion extra

    getTasks(): Task[] { //recibe json
        return this.taskService.getTasks();
    }

    @Get(':id')
    getTask(@Param('id') id: string){
        return this.taskService.getTask(parseInt(id));
    }
    

    @Post() 
    createTask(@Body() task: CreateTaskDto) {
        console.log(task.description, task.titulo, task.done);
        return 'crear tasks';
    }
    @Delete(':id') 
    deleteTask(@Param('id') id): string {
        console.log(id);
        return 'deleting tasks number: ' + id;
    }
    @Put(':id') 
    updateTask(@Body() task:CreateTaskDto, @Param('id') id) {
        console.log(task);
        console.log(id);
        return 'edit tasks ' + id;
    }
 
    
}