import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule , NgForm} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [ FormsModule , NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Omarform';
  user = {
    email: '',
    password: ''


  
}

Userlist : {email:string ; password:string} [] = [];
submitted = false;

onSubmit(verificationForm: any) {
  if (verificationForm.valid) {

    this.Userlist.push(
      {email: verificationForm.value.email,
      password: verificationForm.value.password,
    }
    );


  }

  this.submitted = true;
  console.log(this.Userlist);

  
}}
