import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/product.service';
import { FormGroup, FormControl, Validators, FormArray } from "@angular/forms";
import { ProductElement } from 'src/app/core/interfaces/product.interface';
import { ModalService } from 'src/app/core/services/modal.service';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  private productService = inject(ProductService);
  private alertService = inject(AlertService);
  private modalService = inject(ModalService);
  public productForm!:FormGroup;
  @Input() product!:ProductElement; 

  ngOnInit(): void {
    this.productForm = new FormGroup(
      {
        sku: new FormControl(this.product.sku, [Validators.required]),
        name: new FormControl(this.product.name, [Validators.required]),
        description: new FormControl(this.product.description, [Validators.required]),
        price: new FormControl(this.product.price, [Validators.required]),
        stock: new FormControl(this.product.stock, [Validators.required]),
        image: new FormControl(this.product.image, [Validators.required]),
        tag: new FormControl(this.product.tag, [Validators.required]),
      }
    )
  }

  updateProduct(){
    const product = this.productForm.value;

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return
    }

    this.productService.updateProduct(product, this.product._id).subscribe({
      next: (resp) => {
        this.modalService.closeModal();
        this.alertService.getMessage('success', `El producto ${resp.name} se actualizadó.`)
      },
      error:(err)=> {
        this.alertService.getMessage('error', err)
      }
    })
  }

}
