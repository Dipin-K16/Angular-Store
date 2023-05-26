import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService implements OnInit{

  constructor(private http: HttpClient) { }


  // userLogin(username: string, password: string){

  //   const headers = new HttpHeaders().set('Content-Type', 'application/json');
  //   const body = JSON.stringify({ username: 'username', password: 'password' });
  
  //   return this.http.post(' https://fakestoreapi.com/auth/login',body, { headers: headers });
  // }

  // userLogin(username: string, password: string) {
  //   const headers = new HttpHeaders();
  //   const formData = new FormData();
  //   formData.append('username', username);
  //   formData.append('password', password);
  
  //   return this.http.post('https://fakestoreapi.com/auth/login', formData, { headers: headers });

  // }

  

  // userLogin(username: any, password: any): Observable<any>{
  //   const url = 'https://fakestoreapi.com/auth/login';
  //   const body = {
  //     username: username,
  //     password: password
  //   };
  //   return this.http.post(url, body).pipe(
  //     catchError((error) => {
  //       console.log('Error:', error);
  //       return throwError(error);
  //     })
  //   );
  // }

  ngOnInit(): void {
      
  }

  userLogin(username: any, password: any){
    const apiUrl = 'https://fakestoreapi.com/auth/login';
    console.log("loginnn workinggg");
    return this.http.post(apiUrl, {username:username,password:password})
    
  }
  

  


}

  


