import { Component, Input, inject } from '@angular/core';
import { Product, ProductElement } from 'src/app/core/interfaces/product.interface';
import { ModalService } from 'src/app/core/services/modal.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {

  @Input() id!:string;
  private productService = inject(ProductService);
  private modalService = inject(ModalService);
  public product!: ProductElement;
  public isOpen:boolean = false;

  ngOnInit(): void {
    this.getProduct();
    this.getStateIsOpen();
  }
  
  ngOnDestroy(): void {
    this.productService.resetProduct();
  }
  
  ngAfterContentChecked(): void {
    this.setProduct();
  }

  setProduct(){
    this.productService.product.subscribe({
      next: (resp) => {
        this.product = resp!;
      }
    })
  }
  
  getProduct(){
    this.productService.getProductById(this.id).subscribe()
  }

  getStateIsOpen(){
    this.modalService.isOpenState.subscribe({
      next: (resp)=> {
        this.isOpen = resp;
      }
    })
  }

  openModal(modalName: string) {
    this.modalService.openModal(modalName);
  }

}
