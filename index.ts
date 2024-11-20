
import MainProperty from "./classes";
import { LoyaltyUser, Permissions } from "./enums";
import { Property, Review } from "./interfaces";
import { getTopTwoReviews, populateUser, showTotalReviews } from "./utils";

const reviews :Review[] | any[] = [
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



const properties : Property[]=[
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
            postcode: 'SW4 5XW',
            country: 'United Kingdom',
        },
        contact: [+34829374892553 ,'andyluger@aol.com'],
        isAvailable: true 
    },
    {
        img: 'images/malia-property.jpg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            postcode: 45334,
            country: 'Malaysia',
        },
        contact: [+60349822083, 'lee34@gmail.com'],
        isAvailable: false,
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
    if(!propertyContainer){
        console.error('element not found')
    }else {
        propertyContainer.appendChild(card)
    }
    
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

if(!footer){
    console.error('element not found')
} else{
    footer.innerHTML = `${currentLocation[0]} ${currentLocation[1]} ${currentLocation[2]}°`}


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

    if(!propertyContainer){
        console.error("element not found")
    }else{
        propertyContainer.appendChild(card)
    }
    
    showDetails(you.permissions, card, properties[i].price)
}

//calling functions
showTotalReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)
populateUser(you.isReturning, you.firstName)


const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
const button = document.querySelector('button')

let count = 0
function addReviews(array: Review[]) : void {
    if(!container || !reviewContainer || !button){
        return console.error("element not found")
    }
    
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
if(!button){
    console.error('element not found')
}else{
    button.addEventListener('click', () => addReviews(reviews))
}





let yourMainProperty = new MainProperty(
    'images/italian-property.jpg', 
    'Italian House',
    [{
        name: 'Olive',
        stars: 5,
        loyaltyUser: LoyaltyUser.GOLD_USER,
        date: '12-04-2021'
    }] )

const mainImageContainer = document.querySelector('.main-image')
const image = document.createElement('img')
image.setAttribute('src', yourMainProperty.src)
if(!mainImageContainer){
    console.error("element not found")
}else{
    mainImageContainer.appendChild(image)
}

