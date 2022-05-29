import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private service:WelcomeDataService,private router:Router) { }

  ngOnInit(): void {
    this.showTodos();
  }

  handleDeleteTodo(id:number){
    this.service.deleteTodo(id).subscribe();
    this.message="Todo "+id+' Deleted Successfully';
    this.showTodos();

  }

  handleUpdateTodo(id:number){
    this.router.navigate(['todos',id])
  }

  showTodos(){
    this.service.retrieveAllTodos().subscribe(
      response=>this.todos=response
    )
  }

  addTodo(){
    this.router.navigate(['todos',0]);
  }

  

}
