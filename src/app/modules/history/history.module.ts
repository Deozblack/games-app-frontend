import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryComponent } from './history.component';
import { ListHistoryComponent } from './pages/list-history/list-history.component';
import { LoaderComponent } from 'src/app/shared/components/loader/loader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { NoLogsComponent } from './components/no-logs/no-logs.component';


@NgModule({
  declarations: [
    HistoryComponent,
    ListHistoryComponent,
    NoLogsComponent
  ],
  imports: [
    CommonModule,
    HistoryRoutingModule,
    LoaderComponent,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class HistoryModule { }
