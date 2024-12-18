import { User } from "./user";

export interface Car{
        _id: string,
        brand: string,
        model: string,
        price: number,
        year: string,
        city: string,
        kilometers: number,
        engine: string,
        color: string,
        gearbox: string,
        horsepowers: number,
        doors: number,
        firstImageUrl: string,
        secondImageUrl: string,
        userId: string,
        user: User,
        created_at: string,
        updatedAt: string,
        __v: number
}
