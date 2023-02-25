import { SuccessOrderComponent } from './components/success-order/success-order.component';
import { CartComponent } from './components/cart/cart.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { CompareComponent } from './components/compare/compare.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { FaqComponent } from './components/faq/faq.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { AboutComponent } from './components/about/about.component';
import { ShoppingComponent } from './components/shopping/shopping.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shopping', component: ShoppingComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'about-us', component: AboutComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog/:id', component: BlogDetailsComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'compare', component: CompareComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: 'cart', component: CartComponent },
  { path: 'confirmation', component: SuccessOrderComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
