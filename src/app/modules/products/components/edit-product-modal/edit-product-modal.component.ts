import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ProductElement } from 'src/app/core/interfaces/product.interface';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.scss']
})
export class EditProductModalComponent {

  private modalService = inject(ModalService);
  public product!:ProductElement;

  closeModalHandler(): void {
    this.modalService.closeModal();
  }
}
