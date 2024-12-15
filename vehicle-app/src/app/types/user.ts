import { Car } from "./car";

export interface User{
    _id: string;
    email: string;
    phoneNumber: string;
    password: string;
    username: string;
    cars: Car[];
    created_at: string;
};
