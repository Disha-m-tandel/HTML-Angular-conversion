import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
    selector: 'app-user-details',
    imports: [RouterLink],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent {
 userId!: number;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = Number(this.route.snapshot.paramMap.get('id'));

    console.log('User ID:', this.userId);
  }
}
