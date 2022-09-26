"use strict";
let sales = 100000000;
let course = "TypeScript";
let is_published = true;
let level;
level = 1;
function render(document) {
    console.log(document);
}
let numbers = [1, 3, 4, 5];
let user = [1, "allan"];
let mySize = 2;
function calculateTax(income, taxYear) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000, 2022);
function calculateTax2(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax2(10000, 2022);
function calculateTax3(income, taxYear = 2022) {
    if (taxYear < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax3(10000, 2023);
//# sourceMappingURL=index.js.map