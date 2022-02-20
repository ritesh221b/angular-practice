import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  name:string = "Ritesh";
  isDisabled:boolean = false;

  sayName:Function = ()=>{
    return this.name;
  } 

  changeName(){
    this.name = "changed "+this.name;
    this.isDisabled = true;
  }

  getLogin(){
    this.loginservice.getRequest().subscribe((res)=>{
      console.log("subscribed with ",res);
    });
  }

  constructor(private loginservice:LoginService) { 
    console.log("contructor to inject");
  }

  ngOnInit(): void {
    console.log("calling login services");
    console.log(this.getLogin());
  }

}
