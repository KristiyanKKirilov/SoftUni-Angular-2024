import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-car',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-car.component.html',
  styleUrl: './add-car.component.css'
})
export class AddCarComponent {
  addCar(form: NgForm): void {
    if (form.invalid) {
      return;
    }
    const {
      brand, 
      model, 
      imageUrl, 
      price, 
      year, 
      city, 
      kilometers, 
      gearbox, 
      color, 
      doors } = form.value;


  }
}
