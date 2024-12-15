import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    ReactiveFormsModule, 
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: '../authentication/authentication.component.css'
})
export class LoginComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required])
  });

  constructor(private userService: UserService, private router: Router){}

  login():void{
    if(this.form.invalid){
      return;
    }

    const {email ,password} = this.form.value;
    this.userService.login(email!, password!)
    .subscribe(() => {
      this.router.navigate(['/cars']);
    })
  }
}
