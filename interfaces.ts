
import { LoyaltyUser } from "./enums";
import { Price, Country } from "./types";

export interface Review {
    name: string;
    stars: number;
    loyaltyUser: LoyaltyUser;
    date: string;
}

export interface Property {
    img: string;
    title: string;
    price: Price;
    location: {
        firstLine: string;
        city: string;
        postcode: number;
        country: Country;
    };
    contact: [ number, string ];
    isAvailable: boolean;
}