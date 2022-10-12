type Employee = {
    readonly id: number,
    name: string
    retire: (date: Date) => void
}

let employee4: Employee = {
    id: 1,
    name: "allan",
    retire: (date: Date) => {
        console.log(date)
    }
}
