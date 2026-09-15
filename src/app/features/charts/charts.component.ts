import { Component } from '@angular/core';
import { BarchartComponent } from '../../../../projects/shared-ui/src/public-api';


@Component({
    selector: 'app-charts',
    imports: [BarchartComponent],
    templateUrl: './charts.component.html',
    styleUrl: './charts.component.scss'
})
export class ChartsComponent {

}
