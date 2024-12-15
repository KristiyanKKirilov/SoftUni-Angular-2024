import { Component, OnInit } from '@angular/core';
import { Car } from '../../types/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-details',
  standalone: true,
  imports: [],
  templateUrl: './car-details.component.html',
  styleUrl: './car-details.component.css'
})
export class CarDetailsComponent implements OnInit {
  car = {} as Car;

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.carService.getSingleCar(id).subscribe(car => {
      console.log(car);
      this.car = car;
    });

  }
}
