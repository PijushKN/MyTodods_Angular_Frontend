import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from '../models/todo.model';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})

export class TodoComponent implements OnInit {
  declare todo:Todo;
  id!: number;
  constructor(private route: ActivatedRoute, private service: WelcomeDataService, private router: Router) { }

  ngOnInit(): void {
    this.todo = new Todo(-1,'',new Date(),false)
    this.id = this.route.snapshot.params['id'];
    if(this.id!=0){
    this.service.retrieveTodo(this.id).subscribe(
      response => this.todo = response
    );
    }
  }

  saveTodo() {
    if (this.id == 0) { 
      console.log('todo: '+this.todo.id)
      this.service.createTodo(this.todo).subscribe(
        response=>{
          this.router.navigate(['list-todos'])
        }
      );
    }
    else {
      this.service.updateTodo(this.id, this.todo).subscribe(
        response => console.log(response)
      );
      this.router.navigate(['list-todos']);
    }
  }

}
