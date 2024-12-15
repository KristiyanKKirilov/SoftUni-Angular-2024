import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { User } from '../types/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user$$ = new BehaviorSubject<User | null>(null);
  private user$ = this.user$$.asObservable(); 
  
    USER_KEY = '[user]';
    user: User | null = null;
  
    get isLogged(): boolean{
      return !!this.user;
    }

  constructor(private http: HttpClient) {
    this.user$.subscribe((user) => {
      this.user = user;
    });
   }

   login(email: string, password: string){    
    console.log(email);
    console.log(password);
    return this.http
    .post<User>('/api/login', {email, password})
    .pipe((tap((user) =>{ 
      console.log(user)
      this.user$$.next(user)
    }))); 
   
  }
  
  register(username: string, email: string, phoneNumber: string, password: string ){
      return this.http.post<User>('/api/register', {username, email, phoneNumber, password})
      .pipe((tap((user) => this.user$$.next(user))));
  }

  getProfile(){
    return this.http.get<User>('/api/users/profile')
    .pipe(tap((user) => this.user$$.next(user)));
  }
}
