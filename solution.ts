
// Problem 1 

function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }

    else if (typeof value === "number") {
        return value * 10;
    }

    else if (typeof value === "boolean") {
        return !value;
    }

    return value;
}

// Problem 2 
function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    }
    else if (Array.isArray(value)) {
        return value.length;
    }

    return 0;
}

//  problem 3 
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}


//  problem 4 
type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): Item[] {
    return items.filter(item => item.rating >= 4);
}

//  problem 5 
type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};
function filterActiveUsers(users: User[]): User[] {
    return users.filter(user => user.isActive === true);
}

//  problem 6
interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(book: Book): void {
    const availability = book.isAvailable ? "Yes" : "No";
    console.log(
        `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availability}`
    );
}
const myBook: Book = {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publishedYear: 1925,
    isAvailable: true,
};

printBookDetails(myBook);




//  problem 7 
function getUniqueValues(arr1: (string | number)[], arr2: (string | number)[]): (string | number)[] {
    const result: (string | number)[] = [];


    for (let i = 0; i < arr1.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (arr1[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = arr1[i];
        }
    }


    for (let i = 0; i < arr2.length; i++) {
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (arr2[i] === result[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            result[result.length] = arr2[i];
        }
    }

    return result;
}

//  problem 8 
type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            const totalPrice = product.price * product.quantity;

            if (product.discount !== undefined) {
                const discountAmount = (totalPrice * product.discount) / 100;
                return totalPrice - discountAmount;
            }

            return totalPrice;
        })
        .reduce((sum, value) => sum + value, 0);
};
const products = [
    { name: 'Pen', price: 10, quantity: 2 },
    { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
    { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
