import { LoyaltyUser } from "./enums"

const reviewTotalDisplay = document.querySelector('#reviews')
const userNameDisplay = document.querySelector('#user')
const returningUserDisplay = document.querySelector('#returning-user')



export function showTotalReviews (value : number, reviewer : string, loyalty : LoyaltyUser){
    if(!reviewTotalDisplay){
        return console.error('element not found')
    }
    
    reviewTotalDisplay.innerHTML = `review total ${value.toString()} | last reviewed by ${reviewer}`
    if(LoyaltyUser.GOLD_USER){
        reviewTotalDisplay.innerHTML += ' ⭐'
    }
}

export function populateUser(isReturning : boolean, userName : string ) {
    if(!returningUserDisplay || !userNameDisplay){
        return console.error('element not found')
    }
    
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName
}