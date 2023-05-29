import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './model/project';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Project[], args: string): Project[] {
    if (value) {
      return value.sort((a: Project, b: Project) => {
        if (a[args as keyof Project] < b[args as keyof Project]) {
          return -1;
        } else if (a[args as keyof Project] > b[args as keyof Project]){
          return 1;
        }

        return 0;
      });
    } else {
      return [];
    }
  }
}
