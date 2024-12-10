import { Component } from '@angular/core';
import { LoginComponent } from "../login/login.component";
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [
    LoginComponent, 
    RegisterComponent
  ],
  templateUrl: './authentication.component.html',
  styleUrl: './authentication.component.css'
})
export class AuthenticationComponent {
  isActive: boolean = false;

  loadSignInView():void{
    this.isActive = false;
    console.log(this.isActive);
  }

  loadSignUpView():void{
    this.isActive = true;
    console.log(this.isActive);
  }
}
