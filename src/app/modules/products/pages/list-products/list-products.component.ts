import { Component, inject } from '@angular/core';
import { Product, ProductElement } from 'src/app/core/interfaces/product.interface';
import { ProductService } from 'src/app/core/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent {

  private productService = inject(ProductService);
  private searchService = inject(SearchService);
  public listProduct!:ProductElement[];
  public page:number = 0;

  public searchForm:FormGroup = new FormGroup({
    term: new FormControl('' , [Validators.required])
  })

  ngOnInit(): void {
    this.getProducts();
    this.setProducts();
  }

  getProducts(){
    this.productService.getProducts().subscribe();
  }

  setProducts(){
    this.productService.products.subscribe({
      next:(resp) => {
        this.listProduct = resp!
      }
    })
  }

  searchProducts(){
    const {term} = this.searchForm.value;
    
    if (this.searchForm.invalid) {
      return
    }

    this.searchService.getProductsByInput('products', term).subscribe();
  }

  searchProductsByTags(term: string){
    this.searchService.getProductsByTags('tags', term).subscribe();
  }

  nextPage(){
    this.page += 5;
  }

  previousPage(){
    if (this.page > 0) {
      this.page -= 5;
    }
  }

}
