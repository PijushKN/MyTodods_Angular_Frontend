import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloWorld } from 'src/app/models/hello-world.model';
import { Todo } from 'src/app/models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  commonUrl:string = 'http://localhost:8080/'

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorld>(this.commonUrl+'hello-world-bean');
  }
  executeHelloWorldBeanServiceWithPathVariable(name:string){
    return this.http.get<HelloWorld>(this.commonUrl+'hello-world/'+name);
  }

  retrieveAllTodos(){
    return this.http.get<Todo[]>(this.commonUrl+'todos');
  }

  retrieveTodo(id:number){
    return this.http.get<Todo>(this.commonUrl+"todos/"+id);
  }
  deleteTodo(id:number){
    return this.http.delete(this.commonUrl+'todos/'+id);
  }

  updateTodo(id:number,todo:Todo){
    return this.http.put(this.commonUrl+'todos/'+id,todo);
  }

  createTodo(todo:Todo){
    return this.http.post(this.commonUrl+"todos",todo);
  }


}
