import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AllBrandsComponent } from './brand/all-brands/all-brands.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';
import { CarDetailsComponent } from './car/car-details/car-details.component';
import { ErrorComponent } from './error/error.component';
import { AllCarsComponent } from './car/all-cars/all-cars.component';
import { AddCarComponent } from './car/add-car/add-car.component';
import { CurrentBrandComponent } from './brand/current-brand/current-brand.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'brands', children: [
        {path: '',  component: AllBrandsComponent},
        {path: ':id', component:  CurrentBrandComponent},
    ]}, 
    {path: 'cars', children: [
        {path: '', component: AllCarsComponent},
        {path: ':id', component: CarDetailsComponent}
    ]},
    {path: 'auth', component: AuthenticationComponent},
    {path: 'add-car', component: AddCarComponent},
    {path: '404', component: ErrorComponent},
    {path: '**', redirectTo: '/404'}

];
