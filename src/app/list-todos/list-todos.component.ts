import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  todos: Todo[] = [];
  message:string='';
  constructor(private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.showTodos();
  }

  handleDeleteTodo(id:number){
    this.service.deleteTodo(id).subscribe();
    this.showTodos();
    this.message="Todo "+id+' Deleted Successfully';

  }

  showTodos(){
    this.service.retrieveAllTodos().subscribe(
      response=>this.todos=response
    )
  }

  

}
