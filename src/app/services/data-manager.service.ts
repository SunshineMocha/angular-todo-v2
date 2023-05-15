import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  todos: Todo[];

  constructor() {
    this.todos = [
      {
        title: 'Regalo al pane',
        description: 'Compra il profumo che gli piace tanto',
        priority: 3
      },
      {
        title: 'Compra la nonna',
        priority: 1
      }
    ]
  }
  addTodo(todo: Todo){
    this.todos.push(todo);
  }

  deleteTodo(todoToDelete: Todo){
    console.log('Devo cancellare', todoToDelete.title)
    this.todos = this.todos.filter(todo => todo.title !== todoToDelete.title)
  }
}
