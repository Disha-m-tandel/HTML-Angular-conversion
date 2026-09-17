import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CapitalizeNamePipe } from '../../../../../src/app/shared/pipes/capitalize-name.pipe';
import { RowHighlightDirective } from '../../../../../src/app/shared/directives/row-highlight/row-highlight.directive';
import { TooltipDirective } from '../../../../../src/app/shared/directives/tool-tip/tool-tip.directive';



@Component({
  selector: 'app-user-table',
  standalone: true,
  imports: [CommonModule, RouterModule, CapitalizeNamePipe, RowHighlightDirective, TooltipDirective, CapitalizeNamePipe],
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
@Input() users: any[] = []; //"I am a reusable component. Give me users from outside." And initially it will be empty array then when the parent data gives then to child then the data wil get store
//here will get the users details from the parent component
//@Input() users : receives/stores that data in the child component.

//Note : Just don't think of [users] as a variable that stores the data. It's the binding that connects the two users properties.

//@Input() users: any[] = []; means
//           ↑     ↑       ↑
//         name   type    value
//users : This is the property/variable name. You're creating a property called users.
//users : any[] : users is an array, and its items can be any type(number or boolean or string).
//= [] : This gives users its initial/default value. [] means an empty array. So when the component first starts: users: any[] = []; empty array then Later, when the parent sends the actual data through @Input(): []
                                                                                                                                                                                                            // ↓                    
   @Input() columns: {
  key: string;
  label: string;
}[] = [];                                                                                                                                                                                           //[Sarah, Rafi, Nadia, Mina, Jon]
}
