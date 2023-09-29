
//ARRAY INIT

let ar = [];
ar[10000] = 100;
ar[1] = [1, 2, 3];
console.log("length of array = ",ar.length);
ar[0] = "hello";
console.log("10000-th element = ", ar[10000]);
console.log("0-th element = ", ar[0]);
console.log("1-th element = ", ar[1]);

//ARRAY FROM STRING
let str = "Hello";
let arStr = Array.from(str); //getting array of the string's symbols
console.log("String 'Hello' -> array is ", arStr);
// for (let i = 0; i < arStr.length; i++) {
//     console.log("element at index ", i, arStr[i]);
function println(element, index, array) {
    console.log("element at index ", index, element);
}
arStr.forEach(println);

//MAP
let arCodeAscii = arStr.map(function(symbol, index) {
    return index % 2 == 0 ? symbol.charCodeAt() : symbol;
})
console.log(arStr, arCodeAscii);
let sumAscii = arStr.reduce(function(res, cur) {
    return res + cur.charCodeAt();
}, 0)
console.log("sum of ascii ", sumAscii)
console.log(arStr.reduce(function(res, cur) {
return res + cur
}, ""));
function checkTeudatZehut(teudatStrNumber) {
    //TODO
    //control sum of for even index digit value, for odd index digit * 2
    //control sum should be divide on 10 with no remainder
    //example 123456782 => 1*2 + 2 + 3*2 + 4 + 5*2 + 6 + 7*2(1+4) + 8 + 2 = 45 % 10 != 0 => false
    //    123456783 => 1 + 4 +3 + 8 +5 + 3 + 7 + 7 + 3 => false
    let res = false;
    if (teudatStrNumber.length == 9 && !isNaN(teudatStrNumber)) {
        let arrayForSum = getArrayForSum(teudatStrNumber);
        let sum = getSum(arrayForSum);
        res = sum % 10 == 0;
    }
    return res
}

function getSum(array) {
    // let res = 0;
    // for (let i = 0; i < array.length; i++) {
    //     res += array[i];
    // }
    return array.reduce(function (res, cur) {
        return res + cur;
    }, 0);
}

function getNumberOddIndex(element) {
    let res = element * 2;
    if (res > 9) {
        res -= 9;
    }
    return res;
}
function getCurrentNumber(element, index) {
    return index % 2 == 0 ? +element : getNumberOddIndex(element);
}
function getArrayForSum(teudatStrNumber) {
    let array = Array.from(teudatStrNumber);
    return array.map(getCurrentNumber);
}

function generateRandomTeudatZehut() {
    //TODO
    //returns string of 9 symbols matching checkTeudatZehut
    //make 8 random digits from 0 to 9
    //9 - th symbol should be with accordance of matching
    //to get random digit Math.round(Math.random() * 9)
    let numberArray = []
    let stringTeudatZehut = ""
    for(let i = 0; i < 9; i++) {
        digitsArray[i] = Math.round(Math.random() * 9)
        stringTeudatZehut += digitsArray[i]
    }

    if(!checkTeudatZehut(stringTeudatZehut)) {
        
    }
}

let numbers = ['123456782', '1234', 'abcd123', '123456783'];
numbers.forEach(function (e) {
    console.log(`teudat zehut: ${e}, return of the method checkTeudatZehut: ${checkTeudatZehut(e)}`)
});


// function ulSurround(strings) {
//     let res = strings.map(str => `<li>${str}</li>`)
//     res.unshift("<ul>");//res.splice(0, 0, "<ul>"); 
//     res.push("</ul>");//res.splice(strings.length, 0, "</ul>")
//     return res;
// }

// let ar = ["123", "abc", "lmn", "lmn"];
// console.log(`input: ${ar} output: ${ulSurround(ar)}`)
// function count(array, element) {
//     return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
// }

//let str = "abc"
// console.log(`input: ${ar}, counter of ${str} is ${count(ar, str)} `)
// function arrayCopy(src, srcPos, dst, dstPos, length) {
//     let arForCopy = src.slice(srcPos, srcPos + length); 
//     dst.splice(dstPos, 0, ...arForCopy);
//     //arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
//     return dst;
// }
// let ar1 = [1, 2, 3, 4, 5, 6];
// let ar2 = [10, 30, 40, 50];
// arrayCopy(ar1,2,ar2,1,3);

// console.log(`ar1: ${ar1}, ar2: ${ar2} arrayCopy(ar1,2,ar2,1,3): ${ar2}`)

// function move(array, index, offset) {
//     let movedElem = array.splice( index, 1)[0];
//     array.splice(index + offset, 0, movedElem);
//     return array;
// }

//FILTER
function getEvenNumbers(numbers) {
    let res = numbers.filter((n) => i % 2 == 0);
    return res;
}


//SORT
// let ar=[ 2,9, 3, 1999];
// ar.sort((a, b)=>a - b);

// console.log(ar);
// ar = ["abc","a", "lmn", "y"];
// ar.sort((a, b)=>a.length - b.length);
// console.log(ar);


function minMax(numbers) {
   return numbers.reduce((res, element) => {
        if(element < res[0]) {
            res[0] = element
        } else if (element > res[1]) {
            res[1] = element
        }
        return res
    }, [numbers[0], numbers[0]])
}
arrNum = [2, 3, 9, 99, 201, -12, 1111]
resMinMax = minMax(arrNum)
console.log(`min: ${resMinMax[0]}, max: ${resMinMax[1]}`)


a = ["abc", "old_abc", "lmn", "123", "old_lmn"]
function deleteWithPrefix(strings, prefix) {
    strings = strings.filter(s => !s.startsWith(prefix))
    return strings
} 

console.log(deleteWithPrefix(["abc", "old_abc", "lmn", "123", "old_lmn"], "old_"))
// returns array [“abc”, “lmn”, “123"]

function getSortedEvenOdd(numbers) {
    numbers.sort((e1, e2) => {
        res = Math.abs(e1 % 2) - Math.abs(e2 % 2)
        if(res == 0) {
            res = e1 % 2 == 0 ? e1 - e2 : e2 - e1
        }
        return res
    })
}

let numbersTest = [1,6,3,8,5,2,7,4]
console.log(numbersTest)
getSortedEvenOdd(numbersTest)
console.log(numbersTest)