//Rewrite the following functions using map, filter and reduce.

function names(persons)
 { let ns = [] for (let i = 0; i < persons.length; i++) 
    { ns.push(person[i].name) } return ns }

function adults(persons) { let as = [] for(let i = 0; i < persons.length; i++) { if (persons[i].age >= 18) { as.push(persons[i]) } } return as }

function oldest_person(persons) { let oldest = null for(let i = 0; i < persons.length; i++) { if (!oldest || persons[i].age > oldest.age) { oldest = person[i] } } return oldest }

function total_salaries_of_seniors(employees) { let total = 0 for(let i = 0; i < persons.length; i++) { if (persons[i].age >= 60) { total += persons[i].salary } }

return total }