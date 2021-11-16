import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/task';
@Injectable()
export class TasksService {

    tasks: Task[] = [
        { //simula db
            id:1,
            titulo: "prueba",
            description: "prueba tarea",
            done: true
        },
        {
            id:2,
            titulo: "prueba 2",
            description: "prueba tarea 2",
            done: true
        },
        {
            id:3,
            titulo: "prueba 3",
            description: "prueba tarea 3",
            done: true
        }
    ];
    getTask(): Task[] { //devuelve todas las tareas
        return this.tasks;
    }
    getTask(id): Task { //solo devuelve la tarea selecionada
        return this.tasks.find(task => task.id === id);
    }

}
