import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../../types/user';
import { RouterLink } from '@angular/router';
import { CarService } from '../../car/car.service';
import { Car } from '../../types/car';
import { LoaderComponent } from '../../shared/loader/loader.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    RouterLink,
    LoaderComponent
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit{
  cars: Car[] = [];
  carIds: string[] | undefined = [];
  isLoading: boolean = true;

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get user(): User | null{
    return this.userService.user || null;
  }

  // get cars(): Cars[] {
// 
    // return this.carService.getSingleCar()
  // }

  constructor(private userService: UserService, private carService: CarService) { }
  ngOnInit(): void {
    this.carIds = this.userService.user?.cars;

    if(this.carIds){
      for (const car of this.carIds) {
          this.carService.getSingleCar(car).subscribe((car) =>{
              this.cars.push(car);
          })
      }
    }
    console.log(this.cars);

    this.isLoading = false;
  }

  loadCars():void{
    console.log(this.cars);
  }
}
