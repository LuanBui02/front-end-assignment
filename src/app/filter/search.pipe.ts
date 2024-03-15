import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value : any[], filterString: string, propName:string): any[] {
    const result:any =[];
    const str = result || ' ';
    if(!value || filterString==='' || propName ===''){
      return value;
    }
    value.forEach((a:any)=>{
      if(a[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        str.push(a);
      }
    });
    return str;
  }
}
