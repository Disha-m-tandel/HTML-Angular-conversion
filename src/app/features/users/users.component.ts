import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

import { UserDetailsService } from '../../services/user-details.service';
import { User } from '../../models/userInterface';
import { UserTableComponent } from '../../../../projects/shared-ui/src/lib/user-table/user-table.component';


@Component({
    selector: 'app-users',
    imports: [RouterLink, UserTableComponent],
    templateUrl: './users.component.html',
    styleUrl: './users.component.scss'
})
export class UsersComponent {
  users: User[] = [];
  
  columns = [
  { key: 'name', label: 'User' },
  { key: 'role', label: 'Role' },
  { key: 'team', label: 'Team' },
  { key: 'status', label: 'Status' },
  { key: 'joined', label: 'Joined' },
  { key: 'action', label: 'Action' }
];
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
