import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route,state) => {

 
  const auth = localStorage.getItem('userToken');

  let isLoggedIn = auth!=undefined && auth.length>1;

  
  return isLoggedIn;
};

