import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {
  transform(value: string): string {
    const raw = value.trim();
    let formattedNumber = raw;
    switch (raw.length) {
      case 10:
        const areaCode = raw.substr(0, 3);
        const prefix = raw.substr(3, 3);
        const suffix = raw.substr(6, 4);
        formattedNumber = `${areaCode}-${prefix}-${suffix}`;
        break;
      default:
        break;
    }
    return formattedNumber;
  }
}
