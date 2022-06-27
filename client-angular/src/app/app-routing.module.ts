import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { SignupComponent } from './signup/signup.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'customers-component', component: CustomersComponent },
  { path: 'signup-component', component: SignupComponent },
  { path: 'products-component', component: ProductsComponent },
  { path: 'orders-component', component: OrdersComponent },
  { path: 'login-component', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
