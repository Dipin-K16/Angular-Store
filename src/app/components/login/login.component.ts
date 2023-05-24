import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  userName = new FormControl()
  password = new FormControl()



  onLogin() {
    const username = this.userName.value;
    const password = this.password.value;
    this.loginService.userLogin(username, password).subscribe((response: any) => {
      this.userToken = response.token;
      localStorage.setItem('userToken', this.userToken)
      console.log(response);
      alert('Login success')
    },
      (error) => {
        alert('Login failed');
        console.log(error);
      }
    )
  }

}
