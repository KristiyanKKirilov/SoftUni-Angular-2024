import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BrandsComponent } from './brands/brands.component';
import { AllCarsComponent } from './car/all-cars/all-cars.component';
import { LoginComponent } from './user/login/login.component';
import { AuthenticationComponent } from './user/authentication/authentication.component';
import { AddCarComponent } from './car/add-car/add-car.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'brands', component: BrandsComponent},
    {path: 'all-cars', component: AllCarsComponent},
    {path: 'auth', component: AuthenticationComponent},
    {path: 'add-car', component: AddCarComponent},

];
