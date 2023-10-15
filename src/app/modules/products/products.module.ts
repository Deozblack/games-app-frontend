import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ListProductsComponent } from './pages/list-products/list-products.component';
import { ProductsComponent } from './products.component';
import { AddProductComponent } from './pages/add-product/add-product.component';
import { ViewProductComponent } from './pages/view-product/view-product.component';

import { ReactiveFormsModule } from '@angular/forms';
import { EditProductModalComponent } from './components/edit-product-modal/edit-product-modal.component';
import { DeleteProductModalComponent } from './components/delete-product-modal/delete-product-modal.component';
import { DynamicModalComponent } from './components/dynamic-modal/dynamic-modal.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ErrorMessageComponent } from 'src/app/shared/components/error-message/error-message.component';
import { NoProductsComponent } from './components/no-products/no-products.component';


@NgModule({
  declarations: [
    ListProductsComponent,
    ProductsComponent,
    AddProductComponent,
    ViewProductComponent,
    EditProductModalComponent,
    DeleteProductModalComponent,
    DynamicModalComponent,
    ProductFormComponent,
    NoProductsComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    LoaderComponent,
    ErrorMessageComponent
  ]
})
export class ProductsModule { }
