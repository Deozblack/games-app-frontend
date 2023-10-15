import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  
  private productService = inject(ProductService);
  private alertService = inject(AlertService);
  private router = inject(Router);
  public productForm!:FormGroup;

  ngOnInit(): void {
    this.productForm = new FormGroup(
      {
        sku: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
        price: new FormControl('', [Validators.required]),
        stock: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required]),
        tag: new FormControl('', [Validators.required])
      }
    )
  }

  createProduct(){
    const product = this.productForm.value;

    if (this.productForm.invalid) {
      this.productForm.markAllAsTouched();
      return
    }

    this.productService.createProduct(product).subscribe({
      next: (resp) => {
        this.alertService.getMessage('success', `Producto creado: ${resp.name}`);
        this.router.navigateByUrl('../')
      },
      error: (err)=> {
        this.alertService.getMessage('error', err);
      }
    })
  }
}
