import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CarService } from '../car.service';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {

  constructor(private carService: CarService, private router: Router, private userService: UserService) { }

  addCar(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const {
      brand,
      model,
      firstImage,
      secondImage,
      price,
      year,
      city,
      kilometers,
      gearbox,
      color,
      doors,
      horsepowers,
      engine
    } = form.value;

    this.carService.createCar(
      brand,
      model,
      price,
      year,
      city,
      kilometers,
      engine,
      color,
      gearbox,
      horsepowers,
      doors,
      firstImage,
      secondImage
    ).subscribe(() => {
      // this.userService.updateProfile(
      //   this.userService.user!._id,
      //   this.userService.user!.username,
      //   this.userService.user!.email,
      //   this.userService.user!.phoneNumber,
      //   this.userService.user!.password,
      //   this.userService.user!.cars).subscribe(() => {
          this.router.navigate(['/cars']);
        // });
    });
  }
}
