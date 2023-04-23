import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'description',
})
export class DescriptionPipe implements PipeTransform {

  transform(value: String): String[] {

    return value.split('\n');
  }

}
