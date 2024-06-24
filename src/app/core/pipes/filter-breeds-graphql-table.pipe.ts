import { Pipe, PipeTransform } from '@angular/core';
import { BreedsListGraphResponse } from '@interfaces/index';

@Pipe({
  name: 'filterBreedsGraphqlTable',
  standalone: true
})
export class FilterBreedsGraphqlTablePipe implements PipeTransform {

  transform(data: BreedsListGraphResponse[], page = 1, length = 10): BreedsListGraphResponse[] {
    const startIndex = (page - 1) * length;
    const endIndex = startIndex + length;
    return data.slice(startIndex, endIndex);
  }

}
