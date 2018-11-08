var kittens = [] //define your array here

// Add your functions and code here

var kittens = [
  "Milo", "Otis", "Garfield"
  ]
  
function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

<<<<<<< HEAD
function appendKitten(name) {
  var kittens2 = [...kittens]
  kittens2.push(name)
  return kittens2
}

function prependKitten(name) {
  var kittens2 = [...kittens]
  kittens2.unshift(name)
  return kittens2
}

function removeLastKitten() {
  var kittens2 = [...kittens]
  kittens2.pop()
  return kittens2
}

function removeFirstKitten() {
  var kittens2 = [...kittens]
  kittens2.shift()
  return kittens2
}





=======
function destructivelyRemoveFirstKitten() {
  kittens.shift()
}
>>>>>>> 1904fa32ba5d5c0bb7ef0e445eb901041011a082
