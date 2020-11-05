
function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);



function greaterThan(n) {
    return function (m) { return m > n }
}

var greaterThan10 = greaterThan(10)

console.log(greaterThan10(11))



function noisy(f) {
    return function (arg) {
        console.log("calling with", arg)
        var val = f(arg)
        console.log("called with", arg, "- got", val)
    }
}

noisy(Boolean)(0)

var ancestry = 
    [
        {
            name: 'a',
            born: 1900,
            died: 1996
        },
        {
            name: 'b',
            born: 1901,
            died: 1974
        },
        {
            name: 'c',
            born: 1945,
            died: 2000
        },
        {
            name: 'd',
            born: 1923
            ,died: 1999
        },
        {
            name: 'e',
            born: 1800,
            died: 1891
        },
        {
            name: 'g',
            born: 1903,
            died: 1980
        },
        {
            name: 'h',
            born: 1925,
            died: 1970
        },
    ]

    // exemplo de como funciona a funçao filter

function filter(array, test) {
    var passed = []

    for (var i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i])
    }

    return passed
}
/*
console.log(filter(ancestry, (person) => {
    return person.born > 1900 && person.born < 1925
}))
*/

console.log(ancestry.filter(p => {
    return p.name == 'h'
}))

// exe. filter
function map(array, transform){
    var mapped = []
    for(var i=0; i<array.length; i++)
        mapped.push(transform(array[i]))
    return mapped
}

var overNinety = ancestry.filter(p => {
    return p.died - p.born > 90
})

console.log(map(overNinety, p => { return p.name }))


// exe. reduce
function reduce(array, combine, start){
    var current = start
    for(var i=0; i<array.length; i++)
        current = combine(current, array[i])
    return current
}

console.log(reduce([1, 2, 3, 4], (a, b) => {
    return a + b
}, 0))

console.log(ancestry.reduce((min, cur) => {
    if (cur.born < min.born) return cur
    else return min
}))



// exemplo idade media
function average(array){
    function plus(a, b) { return a + b }
    return  array.reduce(plus) / array.length
}

function age(p){ return p.died - p.born }
function male(p){ return p.sex == "m" }
function female(p){ return p.sex == "f" }

//console.log(average(ancestry.filter(male).map(age)))
//console.log(average(ancestry.filter(female).map(age)))


var byName = {}
ancestry.forEach(function(p){
    byName[p.name] = p
})

console.log(byName['g'])