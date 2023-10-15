import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalDynamicDirective } from './directives/modal-dynamic.directive';
import { ValidateDirective } from './directives/validate.directive';
import { PaginationPipe } from './pipes/pagination.pipe';
import { PaginationHistoryPipe } from './pipes/paginationHistory.pipe';



@NgModule({
  declarations: [
    ModalDynamicDirective,
    ValidateDirective,
    PaginationPipe,
    PaginationHistoryPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ModalDynamicDirective, ValidateDirective, PaginationPipe, PaginationHistoryPipe]
})
export class SharedModule { }
