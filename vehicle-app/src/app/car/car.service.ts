import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Car } from '../types/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]>{
    return this.http.get<{cars: Car[]}>('http://localhost:3000/cars')
    .pipe(map(response => response.cars));
  }

  createCar( 
    brand: string, 
    model: string, 
    imageUrl: string,
    price: number,
    year: string,
    city: string,
    kilometers: number,
    gearbox: string,
    color: string,
    doors: number,
    horsepowers: number,
  ):Observable<Car>{
    const userId = "5fa64a072183ce1728ff3719";
    const [createdAt,  updatedAt] = ["2024-11-07T07:19:59.933Z", "2024-12-07T07:19:59.933Z"];
    const images = [];
    images.push(imageUrl);
    const payload = {
      brand, 
      model, 
      images, 
      price, 
      year,
      city,
      kilometers, 
      gearbox, 
      color, 
      doors, 
      horsepowers,
      userId, 
      createdAt,
      updatedAt,
    };
    return this.http.post<Car>('http://localhost:3000/add-car', payload);
  }

}
