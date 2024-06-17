import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ReadProductsComponent } from './read-products/read-products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'create-product', component: CreateProductComponent},
  {path: 'delete-product', component: DeleteProductComponent},
  {path: 'read-products', component: ReadProductsComponent},
  {path: 'update-product', component: UpdateProductComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
