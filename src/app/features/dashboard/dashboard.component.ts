import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserDetailsService } from '../../services/user-details.service';
import { User } from '../../models/userInterface';
import { UserTableComponent } from '../../../../projects/shared-ui/src/lib/user-table/user-table.component';
import { BarchartComponent } from '../../../../projects/shared-ui/src/public-api';


@Component({
    selector: 'app-dashboard',
    imports: [UserTableComponent, BarchartComponent, RouterLink],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

 users: User[] = [];

  constructor(private userService: UserDetailsService) {}

  ngOnInit(): void {
    this.userService.getUser().subscribe({
      next: (data) => {
        this.users = data;
        console.log('Users:', this.users);
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

}
