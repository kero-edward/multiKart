import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routes } from '../app/app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ScrollToTopComponent } from './components/layout/scroll-to-top/scroll-to-top.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { FaqComponent } from './components/faq/faq.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { MatInputModule } from '@angular/material/input';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CompareComponent } from './components/compare/compare.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SuccessOrderComponent } from './components/success-order/success-order.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogElementComponent } from './components/mat-dialog-element/mat-dialog-element.component';
import { CompareMatDialogElementComponent } from './components/compare-mat-dialog-element/compare-mat-dialog-element.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ScrollToTopComponent,
    HomeComponent,
    NotFoundComponent,
    ShoppingComponent,
    FaqComponent,
    BlogsComponent,
    AboutComponent,
    ContactUsComponent,
    BlogDetailsComponent,
    ProductDetailsComponent,
    WishlistComponent,
    CompareComponent,
    CartComponent,
    CheckoutComponent,
    SuccessOrderComponent,
    MatDialogElementComponent,
    CompareMatDialogElementComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatTabsModule,
    BrowserModule,
    CarouselModule,
    MatTableModule,
    MatBadgeModule,
    MatInputModule,
    MatDialogModule,
    AppRoutingModule,
    MatDividerModule,
    HttpClientModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }