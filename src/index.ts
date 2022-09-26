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

// Functions
function calculateTax(income: number, taxYear: number): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3
}

calculateTax(10_000, 2022)

// Functions with optional parameters
function calculateTax2(income: number, taxYear?: number): number {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3
}

calculateTax2(10_000, 2022)

// Functions with optional parameters
function calculateTax3(income: number, taxYear=2022): number {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3
}

calculateTax3(10_000, 2023)