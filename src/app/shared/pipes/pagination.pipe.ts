import { Pipe, PipeTransform } from '@angular/core';
import { ProductElement } from '../../core/interfaces/product.interface';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(products: ProductElement[], page: number ): ProductElement[] {

    return products.slice(page, page + 5);

  }

}
