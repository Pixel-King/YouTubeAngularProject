import { formatNumber } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numeralReduction',
})
export class NumeralReductionPipe implements PipeTransform {
  constructor(
    @Inject(LOCALE_ID) public locale: string) {}

  transform(str: String): String {
    if (str.length > 6) {
      return `${formatNumber(+str / 1000000, this.locale, '1.0-1')}M`;
    }
    if (str.length > 3) {
      return `${formatNumber(+str / 1000, this.locale, '1.0-1')}K`;
    }
    return str;
  }
}
