import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ProductElement } from 'src/app/core/interfaces/product.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { ModalService } from 'src/app/core/services/modal.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-delete-product-modal',
  templateUrl: './delete-product-modal.component.html',
  styleUrls: ['./delete-product-modal.component.scss']
})
export class DeleteProductModalComponent {
  
  private modalService = inject(ModalService);
  private productService = inject(ProductService);
  private alertService = inject(AlertService);
  private router = inject(Router);
  public product!:ProductElement;

  closeModalHandler(): void {
    this.modalService.closeModal();
  }

  deleteProduct(){
    this.productService.deleteProduct(this.product._id).subscribe({
      next: (resp) => {
        this.modalService.closeModal();
        this.alertService.getMessage('info', `El producto ${resp.name} se eliminó correctamente.`)
        this.router.navigateByUrl('../')
      },
      error: (err)=> {
        this.alertService.getMessage('error', err)
      }
    })
  }

}
