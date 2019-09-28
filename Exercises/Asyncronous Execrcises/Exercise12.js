//Rewrite the following functions using map, filter and reduce.
function Person(name, age, salary) {
    this.name = name
    this.age = age
    this.salary = salary
}

person1 = new Person("Peter", 23, 1000)
person2 = new Person("Andrew", 32, 2000)
person3 = new Person("Xena", 27, 3000)
person4 = new Person("Alexa", 16, 4000)
person5 = new Person("Martin", 64, 5000)
person6 = new Person("Morten", 18, 4000)
person7 = new Person("Susan", 60, 6000)

let persons = [person1, person2, person3, person4,person5,person6,person7]

function names(persons) {
    let ns = []
    for (let i = 0; i < persons.length; i++) { ns.push(persons[i].name) }
    console.log(ns)
    return ns

}

//using .map
let sortredNames = persons.map((person) => person.name)
console.log(sortredNames)
console.log("Sorted names " + "==========================================================")


function adults(persons) {
    let as = []
    for (let i = 0; i < persons.length; i++) { if (persons[i].age >= 18) { as.push(persons[i]) } } return as
}
// filter
let sortedAdults = persons.filter((person) => person.age >= 18)
console.log(sortedAdults)
console.log("sorted adults" + "==========================================================")
console.log(persons)
console.log("Persons" + "==========================================================")

function oldest_person(persons) {
    let oldest = null
    for (let i = 0; i < persons.length; i++) { if (!oldest || persons[i].age > oldest.age) { oldest = person[i] } } return oldest
}



//reduce
function biggest(acc, value) {
    if (acc < value) {
        acc = value
    }
    return acc
}
function smallest(acc, value) {

    if (acc === 0) {
        acc = value
    } else if (acc > value) {
        acc = value
    }
    return acc
}

let youngest = persons.reduce((acc, person) => smallest(acc, person.age), 0)
let youngest2 = persons.reduce((acc, person) => {
    if (acc === 0) {
        acc = person.age
    }
    if (acc > person.age) {
        acc = person.age
    }
    return acc
}, 0)


let oldestP = persons.reduce((acc, person) => biggest(acc, person.age), 0)

let oldestP3 = persons.reduce(function (acc, person) {
    if (acc < person.age) {
        acc = person.age
    }
    return acc
}, 0)

let oldestP4 = persons.reduce((acc, person) => {
    if (acc < person.age) {
        acc = person.age
    }
    return acc
})





console.log(oldestP)
console.log('youngest', youngest)
console.log(oldestP3)
console.log('oldest4 ', oldestP3)
console.log('youngest2 ', youngest2)
console.log('persons', persons)

console.log("Oldest and youngest" + "===============================================================")

function total_salaries_of_seniors(employees) {
    let total = 0
    for (let i = 0; i < persons.length; i++) { if (persons[i].age >= 60) { total += persons[i].salary } }

    return total
}

//filter + reduce
let totalsalaryForSeniors = persons.filter((person) => person.age >= 60).reduce((acc, person) => acc += person.salary, 0)
console.log(totalsalaryForSeniors)
console.log("Total" + "===============================================================")

