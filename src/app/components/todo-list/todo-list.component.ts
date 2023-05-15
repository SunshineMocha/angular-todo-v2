import { Component, Input } from '@angular/core';
import { Todo } from 'src/app/models/todo';
import { DataManagerService } from 'src/app/services/data-manager.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  @Input() todoArray:Todo[] = [];

  constructor(public dataManagerServ: DataManagerService){
    this.todoArray = this.dataManagerServ.todos;
  }

}
