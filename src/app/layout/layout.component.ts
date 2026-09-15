import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadersComponent } from './headers/headers.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footbar/footer.component';


@Component({
    selector: 'app-layout',
    imports: [RouterOutlet, HeadersComponent, FooterComponent, SidebarComponent],
    templateUrl: './layout.component.html',
    styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
