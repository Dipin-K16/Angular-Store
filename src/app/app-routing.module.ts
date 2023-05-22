import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-listing/product-detail/product-detail.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/product-listing/cart/cart.component';

const routes: Routes = [

  {
    path:'',
    component:MainSectionComponent, children:[

      {
        path:'',component:ProductListingComponent
      },
      {
        path:'product-detail', component: ProductDetailComponent
      },
      {
        path:'cart',component:CartComponent
      },
      {
        path:'login',component:LoginComponent
      },
      {
        path:':id',component:ProductDetailComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
