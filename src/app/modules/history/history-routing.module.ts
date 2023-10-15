import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history.component';
import { ListHistoryComponent } from './pages/list-history/list-history.component';

const routes: Routes = [
  {
    path: '',
    component: HistoryComponent,
    children: [
      {
        path: 'list',
        component: ListHistoryComponent
      },
      {
        path: '**',
        redirectTo: 'list'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoryRoutingModule { }
