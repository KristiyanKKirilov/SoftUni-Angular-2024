import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Car } from '../types/car';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  constructor(private http: HttpClient, private userService: UserService) { }

  getAllCars(): Observable<Car[]>{
    return this.http.get<{cars: Car[]}>('/api/cars')
    .pipe(map(response => response.cars));
  }

  createCar( 
    brand: string, 
    model: string, 
    price: number,
    year: string,
    city: string,
    kilometers: number,
    engine:string,
    color: string,
    gearbox: string,
    horsepowers: number,
    doors: number,
    firstImageUrl: string,
    secondImageUrl: string,
  ):Observable<Car>{
    const userId = this.userService.user?._id;
    const created_at = new Date().toISOString;
    const updatedAt = new Date().toISOString;
    const images = [];
    const _id = userId + brand + model + year;

    images.push(firstImageUrl, secondImageUrl);
    
    const payload = {
      _id,
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
      images, 
      userId, 
      created_at,
      updatedAt
    };
    
    console.log(payload);
    return this.http.post<Car>('/api/cars', payload);
  }

  getSingleCar(id: string): Observable<Car>{
    return this.http.get<Car>(`/api/cars/${id}`);
  }

}
