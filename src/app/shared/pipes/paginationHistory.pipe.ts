import { Pipe, PipeTransform } from '@angular/core';
import { Log } from 'src/app/core/interfaces/history.interface';

@Pipe({
  name: 'paginationHistory'
})
export class PaginationHistoryPipe implements PipeTransform {

  transform(logs: Log[], page: number ): Log[] {

    return logs.slice(page, page + 5);

  }

}
