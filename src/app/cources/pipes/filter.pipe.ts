import { Pipe, PipeTransform } from '@angular/core';
import { ICource } from '../models/icource';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(courceItems: ICource[], searchText: string): ICource[] {
    if(!searchText) {
      return courceItems;
    }
    
    return courceItems.filter(cource => cource.title.toLowerCase().includes(searchText.toLowerCase()));
  }

}
