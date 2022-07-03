export interface Author{
    firstName: string
    lastName: string
    thumbnail: string
}

export interface  Book {
    title: string
    description: string
    price: number
    thumbnail: string
    currency: string
    author: Author
}

