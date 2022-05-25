import { Component, OnInit } from '@angular/core';
export class Todo{
  constructor(
    public id:number,
    public description:String,
    public targetDate:Date,
    public isDone:boolean
    ){}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos = [
    new Todo(1,"Study Angular 12", new Date(),false),
    new Todo(1,"Study Spring Boot", new Date(),false),
    new Todo(1,"Create Project Using Both", new Date(),false)
]

}
