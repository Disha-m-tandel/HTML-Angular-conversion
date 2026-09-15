import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-add-users',
    imports: [RouterLink, ReactiveFormsModule, CommonModule],
    templateUrl: './add-users.component.html',
    styleUrl: './add-users.component.scss'
})
export class AddUsersComponent {


  constructor(){

  }
  //form validation
  userForm = new FormGroup({
    name : new FormControl('', Validators.required),
    lastName : new FormControl('', Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    phone : new FormControl('',[Validators.required,  Validators.pattern(/^[0-9]{10}$/)]),
    role : new FormControl('',Validators.required),
    team : new FormControl('',Validators.required),
    notes : new FormControl(''),  
  })

  onSubmit() {
  if (this.userForm.invalid) {//invalid it tells you whether any of the validation rules are failing.
    this.userForm.markAllAsTouched();// if the condition is true then "Consider all the fields as touched."
    return;
  }

  console.log(this.userForm.value);//if it fasle then it will show the data in console.log
}
}
