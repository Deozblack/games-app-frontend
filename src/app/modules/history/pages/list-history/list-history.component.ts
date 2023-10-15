import { Component, inject } from '@angular/core';
import { Log } from 'src/app/core/interfaces/history.interface';
import { HistoryService } from 'src/app/core/services/history.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SearchService } from 'src/app/core/services/search.service';

@Component({
  selector: 'app-list-history',
  templateUrl: './list-history.component.html',
  styleUrls: ['./list-history.component.scss']
})
export class ListHistoryComponent {
  
  private historyService = inject(HistoryService);
  private searchService = inject(SearchService);
  public listHistory!:Log[];
  public page:number = 0;

  public searchForm:FormGroup = new FormGroup({
    term: new FormControl('', [Validators.required])
  })

  ngOnInit(): void {
    this.getHistories();
    this.setHistories();
  }

  getHistories(){
    this.historyService.getHistories().subscribe();
  }

  setHistories(){
    this.historyService.logs.subscribe({
      next: (resp)=> {
        this.listHistory = resp!;
      },
    })
  }

  searchHistories(){
    const {term} = this.searchForm.value;
    
    console.log(term)
    if (this.searchForm.invalid && term === '') {
      this.getHistories();
      return
    }

    this.searchService.getLogsByName('logs', term).subscribe();
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
