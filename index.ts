
const reviewTotalDisplay = document.querySelector('#reviews')

const reviews = [
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

function showTotalReviews (value : number, name : string){
    if(!reviewTotalDisplay){
        return console.log('container not found')
    }
    
    reviewTotalDisplay.innerHTML = `review total ${value.toString()} by ${name}`
}

showTotalReviews(reviews.length, reviews[0].name)