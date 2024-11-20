import { Review } from "./interfaces"

export default class MainProperty{
    reviews: Review[]
    src: string
    title: string
    constructor( src: string,title: string, reviews: Review[] ){
        this.src = src
        this.title = title
        this.reviews = reviews  
    }
}