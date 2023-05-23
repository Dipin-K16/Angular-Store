import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftSideBarComponent } from './components/left-side-bar/left-side-bar.component';
import { ProductCardComponent } from './components/product-listing/product-card/product-card.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailComponent } from './components/product-listing/product-detail/product-detail.component';
import { MainSectionComponent } from './components/main-section/main-section.component';
import { CartComponent } from './components/product-listing/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewDealsComponent } from './new-deals/new-deals.component';
import { AddProductComponent } from './components/product-listing/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ProductListingComponent,
    LeftSideBarComponent,
    ProductCardComponent,
    ProductDetailComponent,
    MainSectionComponent,
    CartComponent,
    FooterComponent,
    NewDealsComponent,
    AddProductComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
