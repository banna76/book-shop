export interface Author{
    firstName: string
    lastName: string
    thumbnail: any
}

export interface  Book {
    id: number
    title: string
    description: string
    price: number
    thumbnail: any
    currency: string
    author: Author
    amount: number
}