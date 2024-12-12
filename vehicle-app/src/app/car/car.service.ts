import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../types/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  getCarEntries(): Observable<Car[]>{
    return this.http.get<Car[]>('http://localhost:3000/cars');
  }
}
