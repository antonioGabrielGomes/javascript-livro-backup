/*
var dayName = function(){
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"]
    return function(number){
        return names[number]
    }
}()

//console.log(dayName(0))

(function () {
    function square(x) { return x * x; }
    var hundred = 100;

    console.log(square(hundred));
})()

// Objetos como namespaces
(function(exports){
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

    exports.name = function(number){
        return names[number]
    }
    exports.number = function(name){
        return names.indexOf(name)
    }
})(weekDay = {})

console.log(weekDay.name(weekDay.number("Sunday")));
*/


/*

function evalAndReturnX(code){
    eval(code)
    return x
}

console.log(evalAndReturnX("var x = 2"))


var plusOne = new Function('n', 'return n + 1')
console.log(plusOne(45))

*/


function require(name){
    if (name in require.cache)
        return require.cache[name]

    var code = new Function('exports, module', readFile(name))
    var exports = {}, module = { exports: exports }
    code(exports, module)

    require.cache[name] = module.exports
    return module.exports
}

require.cache = Object.create(null)






