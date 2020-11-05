'use strict'


/**
function look() {
  if (promptDirection("Which way?") == "L")
    return "a house";
  else
    return "two angry bears";
}


try {
  console.log("You see", look());
} catch (error) {
  console.log("Something went wrong: " + error);
}



var context = null

function withContext(newContext, body) {

  var oldContext = context
  context = newContext

  try {
    return body()
  } finally {
    context = oldContext
  }

}

try {

  withContext(5, function(){
    if(context < 10)
      throw new Error('Not enough context')
  })

} catch (e) {
  console.log('Ignoring: ', e)
}

console.log(context)


function InputError(message) {
  this.message = message
  this.stack = (new Error()).stack
}

InputError.prototype = Object.create(Error.prototype)
InputError.prototype.name = 'InputError'

function promptDirection(question) {
  var result = prompt(question, "");
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}


for (; ;) {
  try {

    var dir = promptDirection('Where ?')
    console.log('You chose ', dir)
    break

  } catch (e) {

    if(e instanceof InputError)
      console.log('Not a valid direction. Try again.')
    else
      throw e

  }
}


function AssertionFailed(message){
  this.message = message
}

AssertionFailed.prototype = Object.create(Error.prototype)

function assert(test, message){
  
  if (!test)
    throw new AssertionFailed(message)

}

function lastElement(array){

  
  assert(array.length > 0, "empty array in lastElement")
  return array[array.length - 1]

}



function MultiplicatorUnitFailure(message) {
  this.message = message
  this.stack = (new Error()).stack
}

MultiplicatorUnitFailure.prototype = Object.create(Error.prototype)
MultiplicatorUnitFailure.prototype.name = "MultiplicatorUnitFailure"


function primitiveMultiply(a, b) {
  if (Math.random() < 0.5)
    return a * b
  else
    throw new MultiplicatorUnitFailure("< 0.5")
}

function reliableMultiply(a, b) {

  for(; ;){
    try {
      
      let result = primitiveMultiply(a, b)
      console.log(result)
      break

    } catch (e) {
      console.log(e)      
    }
  }

}

console.log(reliableMultiply(8, 8))

*/


// caixa trancada

let box = {
  locked: true,
  unlock: function(){ this.locked = false },

  lock: function(){ this.locked = true },

  _content: [],
  
  get content(){
    if(this.locked) throw new Error('Locked!')
    return this._content
  }

}

function withBoxUnlocked(body) {
  console.log(body)
}

withBoxUnlocked(function() {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(function() {
    throw new Error("Pirates on the horizon! Abort!");
  });
} catch (e) {
  console.log("Error raised:", e);
}

console.log(box.locked);

