export interface Author{
    firstName: string
    lastName: string
    thumbnail: any
}

export interface  Book {
    title: string
    description: string
    price: number
    thumbnail: any
    currency: string
    author: Author
}

