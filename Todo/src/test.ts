let value: string = 'Вася';
let value2: number = 10;
let value3: boolean = true;
let value4: object = {};
let value5: null = null;
let value6: undefined = undefined;
let value7: string | number = 5;
value7 = 'Петя';
let arr: string[] = ['Вася', 'Петя', 'Илья'];
let arr1: Array<string | number> = ['Вася', 'Петя', 'Илья'];
arr1.push(10);

let tuple: [string, number, boolean] = ['Вася', 10, false]; 
type strType = string | string[];
let text: strType = 'Вася';
text = ['React', 'HTML', 'CSS'];

type User = {
    id: number,
    name: string,
    age: number,
    alive?: boolean
}

type Prof = {
    skill: string[]
}

type Admin = User & Prof;

const vasya: Admin = {
    id: 1,
    name: 'Вася',
    age: 25,
    skill: ['JavaScript', 'CSS', 'SCSS']
    // alive: true
}

interface IProduct {
    id: number,
    title: string,
    desc: string | string[],
    price: number
}

interface IBonus {
    discount: number,
    info: ()=>void
}

interface ISale extends IProduct, IBonus {}

let apple: ISale = {
    id: 15,
    title: 'apple',
    desc: 'green apple',
    price: 15000,
    discount: 0.2,
    info() {
        console.log(this.price * this.discount);
    },
}

// function find (value: string): string[] {
//     return [value]
// }
function find <T> (value: T): T[] {
    return [value]
}

find('Вася')
find<number>(10)
find<boolean>(true)