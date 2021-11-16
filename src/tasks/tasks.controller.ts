import { Controller, Get, Post, Put, Delete, Body, Param, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
//import { Request, Response } from "express";
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    @Get() //decorardor es solo un metodo que proporciona informacion extra
    /*
    este no se utiliza ya que no le corresponde a nest
        getTask(@Req() req, @Res() res): Response {
        return res.send('hellor world');
    }
    */
    getTasks(): { hello: string} { //recibe json
        return {"hello": "letras"};
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