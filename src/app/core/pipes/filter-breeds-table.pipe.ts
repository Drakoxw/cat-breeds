import { Pipe, PipeTransform } from '@angular/core';
import { BreedsListResponse } from '@interfaces/index';

@Pipe({
  name: 'filterBreedsTable',
  standalone: true
})
export class FilterBreedsTablePipe implements PipeTransform {

  transform(data: BreedsListResponse[], page = 1, length = 10): BreedsListResponse[] {
    const startIndex = (page - 1) * length;
    const endIndex = startIndex + length;
    return data.slice(startIndex, endIndex);
  }

}
