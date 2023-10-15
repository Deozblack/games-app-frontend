import { Component, Input, inject } from '@angular/core';
import { ProductElement } from 'src/app/core/interfaces/product.interface';
import { ModalService } from 'src/app/core/services/modal.service';

@Component({
  selector: 'app-dynamic-modal',
  templateUrl: './dynamic-modal.component.html',
  styleUrls: ['./dynamic-modal.component.scss']
})
export class DynamicModalComponent {
 
  public modalName: string = '';
  private modalService = inject(ModalService);

  @Input() productData!:ProductElement;

  ngOnInit(): void {
    this.getModal();
  }
  
  getModal(){
    this.modalService.currentModalState.subscribe(modalName => {
      this.modalName = modalName;
    });
  }

}
