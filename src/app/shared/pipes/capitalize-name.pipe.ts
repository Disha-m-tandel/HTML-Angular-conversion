import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizeName',//using it in a angular html page as {{ userName | capitalizeName }}
  standalone: true
})
export class CapitalizeNamePipe implements PipeTransform {//This class follows Angular's pipe rules.
//Angular's PipeTransform requires us to have a method called transform() method
//value is the value passed to the pipe from the HTML.
  transform(value: string): string {//in value the value will get from pipe and that should be in string 
                                    //The : string after the parentheses means the method must return a string.
    return value.toUpperCase();// Converts the value received by the pipe to uppercase
    // and returns the converted value.
  }
}








