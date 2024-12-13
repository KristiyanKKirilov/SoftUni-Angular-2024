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



}
