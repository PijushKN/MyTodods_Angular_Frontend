import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  username = ''
  msg = ''
  constructor(
    private route:ActivatedRoute,
    private service:WelcomeDataService) { }

  ngOnInit(): void {
    this.username = this.route.snapshot.params['name']
  }

  getCustomizedMessage(){
   this.service.executeHelloWorldBeanService().subscribe(
     response=>this.msg=response.message,
     error=>console.log(error.error.message)
   );
  }

  getSuperCustomizedMessage(){
    this.service.ExecuteHelloWorldBeanServiceWithPathVariable(this.username).subscribe(
      response=>this.msg=response.message,
      error=>console.log(error.error.message)
    );
   }

 

}
