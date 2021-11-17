export interface Task {
    id?: number,  //puede que tenga o no id por eso el signo pregunta y es del tipo numerico
    titulo: string;
    description: string;
    done: boolean;
}