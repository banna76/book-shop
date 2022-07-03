import { Author, Book } from "./models";

export const MOCK_BOOKS: Book[] = [
    {
        title : 'Remarkably Bright Creatures: A Novel',
        description: 'Remarkably Bright Creatures is a beautiful examination of how loneliness can be transformed, cracked open, with the slightest touch from another living thing.',
        price: 17.76,
        thumbnail:'remarkably.jpg',
        currency:  '€',
        author: {
            firstName:"Shelby Van",
            lastName:"Pelt",
            thumbnail:'shelby_van_pelt.jpg',
        }
    },
    {
        title : 'What My Bones Know: A Memoir of Healing from Complex Trauma',
        description: 'A searing memoir of reckoning and healing by acclaimed journalist Stephanie Foo, investigating the little-understood science behind complex PTSD and how it has shaped her life.',
        price: 18.76,
        thumbnail:'whatMyBonesKnow.jpg',
        currency:  '€',
        author: {
            firstName:"Stephanie",
            lastName:"Foo",
            thumbnail:'stephanie_foo.jpg',
        }
    },
    {
        title : 'All My Rage: A Novel',
        description: 'An INSTANT NEW YORK TIMES BESTSELLER!An INSTANT INDIE BESTSELLER!"All My Rage is a love story, a tragedy and an infectious teenage fever dream about what home means when you feel you don’t fit in." — New York Times Book Review',
        price: 12.93,
        thumbnail:'AllMyRage.jpg',
        currency:  '€',
        author: {
            firstName:"Sabaa",
            lastName:"Tahir",
            thumbnail:'sabaa_tahir.jpg',
        }
    },
    {
        title : 'River of the Gods: Genius, Courage, and Betrayal in the Search for the Source of the Nile',
        description: 'NEW YORK TIMES BESTSELLER • The harrowing story of one of the great feats of exploration of all time and its complicated legacy—from the New York Times bestselling author of The River of Doubt and Destiny of the Republic.',
        price: 19.50,
        thumbnail:'RiverOfTheGods.jpg',
        currency:  '€',
        author: {
            firstName:"Candice",
            lastName:"Millard",
            thumbnail:'candice_millard.jpg',
        }
    },
    {
        title : 'The Maid: A Novel ',
        description: '#1 NEW YORK TIMES BESTSELLER • GOOD MORNING AMERICA BOOK CLUB PICK • “A heartwarming mystery with a lovable oddball at its center” (Real Simple), this cozy whodunit introduces a one-of-a-kind heroine who will steal your heart.',
        price: 16.04,
        thumbnail:'TheMaidANovel.jpg',
        currency:  '€',
        author: {
            firstName:"Nita",
            lastName:"Prose",
            thumbnail:'nita_prose.jpg',
        }
    }
]