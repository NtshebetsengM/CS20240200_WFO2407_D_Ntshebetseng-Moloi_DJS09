import { populateUser, showTotalReviews } from "./utils";

const reviews :{
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

const properties : {
    img: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        postcode: number;
        country: string;
    };
    contact: string;
    isAvailable: boolean;
}[]=[
    {   img: '',
        title: 'Colombian Shack',
        price: 45 ,
        location: {
            firstLine: 'shack 37',
            city:'Bogota' ,
            postcode: 24363 ,
            country:'Colombia' ,
        },
        contact:'marywinkle@gmail.com' ,
        isAvailable:true ,
    },
    {
        img: '',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            postcode: 343903,
            country: 'Poland'
        },
        contact: 'garydavis@hotmail.com',
        isAvailable: false 
    },
    {
        img: '',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            postcode: 35433,
            country: 'United Kingdom',
        },
        contact: 'andyluger@aol.com',
        isAvailable: true 
    }
    
]



showTotalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

 
const you : {
    firstName: string;
    lastName: string;
    age: number;
    stayedAt: string[];
    isReturning: boolean;
} = {
    firstName: 'Bobby',
    lastName: 'Brown',
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
    isReturning: true,
}


populateUser(you.isReturning, you.firstName)