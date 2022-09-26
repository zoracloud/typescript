// Build in types
let sales:number = 100_000_000;
let course: string = "TypeScript";
let is_published: boolean = true;

// The any type
let level;
level = 1;

function render(document:any){
    console.log(document)
}

// Arrays
let numbers: number[] = [1, 3, 4, 5]
// numbers.forEach(n => n.)

//Tuples (fixed lenth arrays) pair of values

let user: [number, string] = [1, "allan"]

//Enums (list of related constants)
const enum Size {
    Small = 1,
    Medium,
    Large
}

let mySize: Size = Size.Medium