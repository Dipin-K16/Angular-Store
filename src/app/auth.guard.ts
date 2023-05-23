import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route,state,) => {

  const auth = localStorage.getItem('userToken');

  const isLoggedIn = auth!=undefined && auth.length>1;

  // if (!isLoggedIn) {
  //   // User is not logged in, redirect to login page
  //   router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
  //   // Display a message to inform the user to login
  //   alert('Please login to access this page.');
  // }

  return isLoggedIn;
};
