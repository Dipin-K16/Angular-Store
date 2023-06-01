import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { ProductDetailComponent } from './components/product-listing/product-detail/product-detail.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/product-listing/cart/cart.component';
import { NewDealsComponent } from './new-deals/new-deals.component';
import { AddProductComponent } from './components/product-listing/add-product/add-product.component';
import { authGuard } from './auth.guard';
import { WishlistComponent } from './components/product-listing/wishlist/wishlist.component';
import { PaymentComponent } from './components/product-listing/cart/payment/payment.component';
import { OrdersComponent } from './components/orders/orders.component';

const routes: Routes = [

  {
    path: '',
    component: MainSectionComponent, children: [

      {
        path: '', component: ProductListingComponent
      },
      {
        path: 'product-detail', component: ProductDetailComponent
      },
      {
        path: 'add-product', component: AddProductComponent
      },
      {
        path: 'cart', component: CartComponent,
        // canActivate:[authGuard]
      },
      {
        path: 'orders', component: OrdersComponent,
        // canActivate:[authGuard]
      },
      {
        path:'cart/payment', component: PaymentComponent,
        // canActivate:[authGuard]
      },
      {
        path: 'wishlist', component: WishlistComponent,
        // canActivate:[authGuard]
      },
      {
        path: 'new-deal', component: NewDealsComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'product-detail/:id', component: ProductDetailComponent
      },
      {
        path: 'wishlist/product-detail/:id', component: ProductDetailComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
