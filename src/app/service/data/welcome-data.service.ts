import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HelloWorld } from 'src/app/models/hello-world.model';

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService(){
    return this.http.get<HelloWorld>('http://localhost:8080/hello-world-bean');
  }
  ExecuteHelloWorldBeanServiceWithPathVariable(name:string){
    return this.http.get<HelloWorld>('http://localhost:8080/hello-world/'+name);
  }
}
