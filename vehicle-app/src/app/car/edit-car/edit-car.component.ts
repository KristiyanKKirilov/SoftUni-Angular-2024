import { Component, OnInit } from '@angular/core';
import { Car } from '../../types/car';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from '../car.service';
import { LoaderComponent } from '../../shared/loader/loader.component';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-car',
  standalone: true,
  imports: [LoaderComponent, FormsModule],
  templateUrl: './edit-car.component.html',
  styleUrl: './edit-car.component.css'
})
export class EditCarComponent implements OnInit {
  car = {} as Car;
  isLoading = true;
  
  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.carService.getSingleCar(id).subscribe(car => {
      this.car = car;
      this.isLoading = false;
      console.log(car.userId);
    });

  }

  editCar(form: NgForm): void {
      if(form.invalid){
        return;
      }

      const {
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
        firstImageUrl,
        secondImageUrl        
      } = form.value;
      
      this.carService.updateCar( 
        this.car._id,
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
        firstImageUrl,
        secondImageUrl)
        .subscribe(() =>{
          this.router.navigate([`/cars/${this.car._id}`]);
        });
  }


}
