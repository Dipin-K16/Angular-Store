import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private loginService: LoginService) { }

  // username: string='';
  // password: string='';
  userToken: any = null;

  loginForm= new FormGroup({  
    userName:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required)
  })
    
  get userName(){return this.loginForm.get('userName')}
  get password(){return this.loginForm.get('password')}



  onLogin() {

    const formData = this.loginForm.value
    const username = formData.userName
    const password = formData.password
    this.loginService.userLogin(username, password).subscribe((response: any) => {
      this.userToken = response.token;
      localStorage.setItem('userToken', this.userToken)
      console.log(response);
      alert('Login success')
    },
      (error) => {
        // alert('Login failed');
        console.log(error);
      }
    )
  }

}
