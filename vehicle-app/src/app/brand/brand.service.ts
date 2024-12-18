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
    .get<Brand[]>('/api/brands')
    .pipe(map(response => response));;
  }

  getAllCarsWithCurrentBrand(id: number):Observable<Car[]>{
    return this.http.get<{brand: Brand, cars: Car[]}>(`/api/brands/${id}`)
    .pipe(map(response => response.cars));
  }
}
