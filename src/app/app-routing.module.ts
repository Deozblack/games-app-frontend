import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'products',
    title: 'Lista de productos',
    loadChildren: ()=> import('./modules/products/products.module').then(routes => routes.ProductsModule ),
  },
  {
    path:'history',
    title: 'Historial de productos',
    loadChildren: ()=> import('./modules/history/history.module').then(routes => routes.HistoryModule ),
  },
  {
    path: '**',
    redirectTo: 'products'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
