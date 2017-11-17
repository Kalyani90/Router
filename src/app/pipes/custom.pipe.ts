import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, args?: any): any {

          let op = '';
          for (let i = 0; i < args; i++) {
            op = op + `, ${value}`;
          }
          return op;
        }

  }

