

// function getAddressKey() {
   
//     return "address";
// }
// const person = {id: 123, first_name: 'Vasya',
//  last_name: 'Ivanov', year: 2000, address: {city: 'Lod',
//   street: 'Sokolov', app: 100}
// };
// const name1 = getAddressKey();

// console.log(person[name1])
// const personArr = [123, 'Vasya', 'Ivanov', 2000,
//  ['Lod', 'Sokolov', 100]]
//  console.log(personArr[3])
//  console.log(person.address);
 
function displayOccurrences(strings) {
    const occurrences = {};
    strings.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    //console.log(Object.entries(occurrences));
    const occurrencesAr = Object.entries(occurrences)
    occurrencesAr.sort((e1, e2) => e2[1] - e1[1])
    console.log(occurrencesAr);

 }
//  const x = {};
//  const string = "abc";
//  x[string] = 1;
//  console.log(x);
//  x[string]++;
//  console.log(x);
const strings = ["a","opr","lmn", "abc", "lmn","abc", "lmn", "lmn", "abc", "a"];
displayOccurrences(strings);

//anagram
function isAnagram(word, anagram) {
    
    let occurances = Array.from(word.toLowerCase()).reduce((res, e) => {
        if(res[e]) {
            res[e]++
        } else {
            res[e] = 1
        } 
        return res
    }, {})
    
    return Array.from(anagram.toLowerCase()).every((e) => {  
        let result = true
        if(occurances[e]) {
            occurances[e]--
        } else {
            result = false
        }
        return result
    })
}

console.log(isAnagram("sally", "lasyl"))


//creating objects
/*
+function createEmployee(id, name, birthYear, salary) {
    return {id, name, birthYear, salary};
}
const empl1 = createEmployee(123, "Vasya", 2000, 10000);
const empl2 = empl1;
console.log(empl1==empl2);
function updateSalary(empl1, newSalary) {
    empl1 = createEmployee(123, "Vasya", 2000, newSalary)
}
+updateSalary(empl1, 15000);
console.log(empl1);
function updateSalaryPrimitive(salary, newSalary) {
    salary = newSalary;
}

//primitives
let salary = 10000;
updateSalaryPrimitive(salary, 20000);
console.log("salary", salary);

*/
//**********************************
//createRandomEmployees
function createRandomEmployees(nEmployees, idDigits, minSalary, maxSalary, minBirthYear, maxBirthYear) {
    let employess = []
    let unicIds = getUnicIds(nEmployees, idDigits)
    return unicIds.map(id => {
        const salary = getSalary(minSalary, maxSalary)
        const birthYear = getbirthYear(minBirthYear, maxBirthYear)
       return createEmployee(id, "name" + id, salary, birthYear)
    })
}

function getUnicIds(count, idDigits) {
    const min = Math.pow(10, idDigits - 1)
    const max = Math.pow(10, idDigits)
    ids = []
    for(i = 0; i < count; i++) {
        let id
        do {
            id = Math.floor(Math.random() * (max - min) + min)
            console.log(`id${id}, iteration ${i}` )
        } while (ids.includes(id)); 
        ids.push(id)
    }
    
    return ids
}

function getSalary(minSalary, maxSalary) {
    return Math.floor(Math.random() * (maxSalary - minSalary) + minSalary)
}

function getbirthYear(minBirthYear, maxBirthYear) {
    return Math.floor(Math.random() * (maxBirthYear - minBirthYear) + minBirthYear)
}

function createEmployee(id, name, salary, birthYear) {
    return {id, name, salary, birthYear}
}

employeesArr = createRandomEmployees(10, 3, 10000, 60000, 1950, 2000)
console.log(employeesArr)


//**********************************
//getAverageAge of Employees

function getAverageAge(employees) {
    return employees.reduce((res, employee) => {
       return res += new Date().getFullYear() - employee.birthYear
    }, 0) / employees.length
}

console.log(getAverageAge(employeesArr))


function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    return employees
        .filter(emploee => emploee.salary >= salaryFrom && emploee.salary < salaryTo)
        .sort((emploee1, emploee2) => emploee1.salary < emploee2.salary)
}

console.log(getEmployeesBySalary(employeesArr, 20000, 40000))

function increaseSalary(employees, borderSalary, percent) {
    employees.forEach(employee => {
        if(employee.salary < borderSalary) {
            employee.salary *= (1 + (percent/100)) 
        }
    })
}

increaseSalary(employeesArr, 30000, 100)
console.log(employeesArr)



// function f1() {
//     const a = this;
//     return a;
// }
// const f2 = () => {
//     const a = this;
//     return a; 
// }
// const f = f1;
// f();
// f2();
// f1.d = 20;
// console.log(f1.d);
// console.log(f1);
// const rectangle = {
//     width: 3,
//     height:5,
//     square: function() {
        
//         return this.width * this.height;
//     },
//     perimeter: function() {
//         return this.width * 2 + this.height * 2;
//     },
//     display: function() {
//         console.log(`square is ${this.square()}; perimeter is ${this.perimeter()}`)
//     }
// }
function createRectangle(width, height) {
    return {
            width,
            height:height,
            square: function() {
                
                return this.width * this.height;
            },
            perimeter: function() {
                return this.width * 2 + this.height * 2;
            },
            display: function() {
                console.log(`square is ${this.square()}; perimeter is ${this.perimeter()}`)
            }
        }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    square() {
        return this.width * this.height;
    }
    perimeter() {
        return this.width * 2 + this.height * 2;
    }
}
const rectangles1 = [new Rectangle(3, 5),
new Rectangle(10, 20)];
const rectangles2 = [createRectangle(3, 5), createRectangle(10, 20)]
console.log(rectangles2[0].square());
console.log(rectangles2[1].perimeter());
//rectangle.display();
const ar = [1, 2, 3];
Array.prototype.mymap = function(fun) {
    console.log("This is my map method, congratulations");
    const res = [];
    for(let i = 0; i < this.length; i++) 
    return this.map(fun)
}
console.log(ar.mymap(e => e * 2));
Object.prototype.toString = function() {
    return "kuku";
}
Array.prototype.toString = function() {
    return "kukureku";
}
console.log(`${rectangles1[0]}`)
console.log(`${ar}`)