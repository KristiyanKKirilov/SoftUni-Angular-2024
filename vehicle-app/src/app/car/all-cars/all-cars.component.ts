import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../../types/car';

@Component({
  selector: 'app-all-cars',
  standalone: true,
  imports: [],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent implements OnInit{
  cars: Car[] = [];

  constructor(private carService: CarService){}

  ngOnInit(): void {
    this.carService
    .getCarEntries()
    .subscribe((cars) => {
      this.cars = cars;
      console.log(cars);
      console.log(this.cars);
    })
  }

  

}
