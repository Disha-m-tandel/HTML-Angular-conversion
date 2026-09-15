
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile',
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.scss'
})
export class ProfileComponent {


  userForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required, Validators.email])
  })

  onSubmit(){
    if(this.userForm.invalid){
     this.userForm.markAllAsTouched();
     return;
    }
    console.log(this.userForm.value);
  }
}
