import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(mobs: string[], args?: string): string[] {

 console.log(`Argument is ${args}`);

    if (args) {
      // tslint:disable-next-line:prefer-const
      let filterd = [];
      mobs.forEach(mb => {
        if (mb.charAt(0) === args) {
          filterd.push(mb);
        }
      });
      return filterd;
    }
    return mobs;
  }
}
