import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-listing/product-detail/product-detail.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/product-listing/cart/cart.component';
import { NewDealsComponent } from './new-deals/new-deals.component';
import { AddProductComponent } from './components/product-listing/add-product/add-product.component';

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
        path:'add-product', component: AddProductComponent
      },
      {
        path:'cart',component:CartComponent
      },
      {
        path:'new-deal',component:NewDealsComponent
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
