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
    contact: [ number, string ];
    isAvailable: boolean;
}[]=[
    {   img: '/images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45 ,
        location: {
            firstLine: 'shack 37',
            city:'Bogota' ,
            postcode: 24363 ,
            country:'Colombia' ,
        },
        contact:[ +112343823978921, 'marywinkle@gmail.com'] ,
        isAvailable:true ,
    },
    {
        img: '/images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            postcode: 343903,
            country: 'Poland'
        },
        contact: [ +1298239028490830 ,'garydavis@hotmail.com'],
        isAvailable: false 
    },
    {
        img: '/images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            postcode: 35433,
            country: 'United Kingdom',
        },
        contact: [+34829374892553 ,'andyluger@aol.com'],
        isAvailable: true 
    }
    
]
const propertyContainer = document.querySelector('.properties')



for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].img)
    card.appendChild(image)
    propertyContainer.appendChild(card)
}

 
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

const footer = document.querySelector('.footer')
let currentLocation :[string, string, number]
 = ['Johannesburg', '13:21', 26]


footer.innerHTML = currentLocation[0] + ' ' + currentLocation[1] + ' ' + currentLocation[2] + '°'

//calling functions
showTotalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)

