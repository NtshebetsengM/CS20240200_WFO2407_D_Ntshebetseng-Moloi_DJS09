
const reviewTotalDisplay = document.querySelector('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')

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

function showTotalReviews (value : number, reviewer : string, star : boolean){
    if(!reviewTotalDisplay){
        return console.error('element not found')
    }
    
    reviewTotalDisplay.innerHTML = `review total ${value.toString()} | last reviewed by ${reviewer}`
    if(star){
        reviewTotalDisplay.innerHTML += ' ⭐'
    }
}

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




function populateUser(isReturning : boolean, userName : string ) {
    if(!returningUserDisplay || !userNameDisplay){
        return console.error('element not found')
    }
    
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}

populateUser(you.isReturning, you.firstName)