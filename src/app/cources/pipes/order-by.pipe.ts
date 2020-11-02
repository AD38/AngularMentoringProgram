import { Pipe, PipeTransform } from '@angular/core';
import { ICource } from '../models/icource';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(courceItems: ICource[]): ICource[] {
    return courceItems.sort((firstCource, secondCource) => 
      this.compareDates(firstCource.creationDate, secondCource.creationDate));
  }
  
  private compareDates(firstDate: Date, secondDate: Date): number {
    if(firstDate < secondDate) {
      return 1;
    }

    if(firstDate > secondDate) {
      return -1;
    }

    return 0;
  }
}
