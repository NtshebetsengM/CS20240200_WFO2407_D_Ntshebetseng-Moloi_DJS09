import { populateUser, showTotalReviews, getTopTwoReviews } from "./utils";
import { Permissions, LoyaltyUser } from "./enums";
import { Country, Price } from "./types";
const reviews :any[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: LoyaltyUser.BRONZE_USER,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: LoyaltyUser.SILVER_USER,
        date: '27-03-2021',
        description: 'Great hosts, location was a bit further than said.'
    },
]



const properties : {
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
        price: 30,
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
        price: 25,
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

 
const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    age: 23,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow'],
    isReturning: true,
    permissions: Permissions.ADMIN,
}

const footer = document.querySelector('.footer')
let currentLocation :[string, string, number]
 = ['Johannesburg', '13:21', 26]


footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`

let authorityStatus : any

//isLoggedIn = true

function showDetails(authorityStatus: boolean | Permissions, element : HTMLDivElement, price: number) {
   if (authorityStatus) {
       const priceDisplay = document.createElement('div')
       priceDisplay.innerHTML = price.toString() + '/night'
       element.appendChild(priceDisplay)
   }
}

for (let i = 0; i < properties.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = properties[i].title
    const image = document.createElement('img')
    image.setAttribute('src', properties[i].img)
    card.appendChild(image)
    propertyContainer.appendChild(card)
    showDetails(you.permissions, card, properties[i].price)
}

//calling functions
showTotalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)


const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')

let count = 0
function addReviews(array: {name:string; stars: number; LoyaltyUser:LoyaltyUser; date: string}[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}

button.addEventListener('click', () => addReviews(reviews))