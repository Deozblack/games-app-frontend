import { NgModule } from '@angular/core';
import { RouterModule, Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children:[
      {
        path: 'list',
        component: ListProductsComponent
      },
      {
        path: 'add',
        title: 'Agregar producto',
        component: AddProductComponent
      },
      {
        path: 'view/:id',
        component: ViewProductComponent,
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class ProductsRoutingModule { }
