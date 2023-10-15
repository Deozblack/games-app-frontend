import { Directive, Input, ViewContainerRef, inject } from '@angular/core';
import { ProductElement } from 'src/app/core/interfaces/product.interface';
import { ModalService } from 'src/app/core/services/modal.service';
import { DeleteProductModalComponent } from 'src/app/modules/products/components/delete-product-modal/delete-product-modal.component';
import { EditProductModalComponent } from 'src/app/modules/products/components/edit-product-modal/edit-product-modal.component';

@Directive({
  selector: '[appModalDynamic]'
})
export class ModalDynamicDirective {

  private viewContainerRef = inject(ViewContainerRef);
  private _name:string = '';
  private _productData!: ProductElement;

  @Input() set name( value:string ){
    this._name = value
  }

  @Input() set productData( value:ProductElement ){
    this._productData = value
  }
 
  ngOnInit(): void {
    this.modalGenerate(this._name, this._productData);
  }

  modalGenerate(name:string, productData: ProductElement){
    switch (name) {
      case 'edit':
        const editRef = this.viewContainerRef.createComponent(EditProductModalComponent);
        editRef.instance.product = productData
        break;

      case 'delete':
        const deleteRef = this.viewContainerRef.createComponent(DeleteProductModalComponent);
        deleteRef.instance.product = productData
        break;
    
      default:
        console.log(null);
        break;
    } 
  }
 

}
