import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from "@angular/router";
import { CapitalizeNamePipe } from '../../../../../src/app/partials/pipes/capitalize-name.pipe';
import { RowHighlightDirective } from '../../../../../src/app/partials/directives/row-highlight/row-highlight.directive';
import { TooltipDirective } from '../../../../../src/app/partials/directives/tool-tip/tool-tip.directive';


@Component({
    selector: 'app-user-table',
    imports: [CommonModule, RouterModule, CapitalizeNamePipe, RowHighlightDirective, TooltipDirective],
    templateUrl: './user-table.component.html',
    styleUrl: './user-table.component.scss'
})
export class UserTableComponent {
@Input() users: any[] = []; //"I am a reusable component. Give me users from outside."
//here will get the users details from the parent component
}
