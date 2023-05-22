import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService){}

  username: any;
  password:any;
  userToken: any=null;


  onLogin(){
    this.loginService.userLogin(this.username,this.password).subscribe((response: any)=>{
      console.log("response of login generated token", response);
      
    })
  }


}
