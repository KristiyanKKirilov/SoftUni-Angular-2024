import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Brand } from '../types/brand';
import { Car } from '../types/car';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor(private http: HttpClient) { }

  getAllBrands():Observable<Brand[]>{
    return this.http
    .get<{brands: Brand[]}>('http://localhost:3000/brands')
    .pipe(map(response => response.brands));;
  }

  getAllCarsWithCurrentBrand(id: number):Observable<Car[]>{
    return this.http.get<{brand: Brand, cars: Car[]}>(`http://localhost:3000/brands/${id}`)
    .pipe(map(response => response.cars));
  }
}
