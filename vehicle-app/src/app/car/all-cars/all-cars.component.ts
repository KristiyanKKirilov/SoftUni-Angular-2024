import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-all-cars',
  standalone: true,
  imports: [],
  templateUrl: './all-cars.component.html',
  styleUrl: './all-cars.component.css'
})
export class AllCarsComponent {
  
  constructor(private carService: CarService){}

}
