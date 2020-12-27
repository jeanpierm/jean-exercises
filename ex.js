const multiply = (a, b) => {
  let result = 0
  const positive = Math.abs(b) == b
  for (i = 0; i < Math.abs(b); i++) {
    result = positive ? result + a : result - a
  }

  return result
}
const a = multiply(50, 50)
console.log(a)

// obtener al numero mayor
const getBiggest = (arr) => arr.reduce((acc, el) => acc > el ? acc : el)
const b = getBiggest([50, -1500, 1000, 0, 1, 54])
console.log(b)


const clean = (arr) => arr.reduce((acc, el) => {
  // limpiar los valores nulos o indefinidos
  if (el) {
    acc.push(el)
  }
  return acc
}, [])
const c = clean([1, undefined, null, 0, 2, 3])
console.log(c)


const arr = [[1, 2], [[3, 4]], [1, []]]
// aplanar un array
// [1, 2, [3, 4], 1, []]
const flatten = arr => arr.reduce((acc, el) => acc.concat(el), [])
const d = flatten(arr)
console.log(d)


const repeated = str => {
  // econtrar la letra más repetida
  const lowered = str.toLowerCase()
  const splitted = lowered.split(' ')
  const reduced = splitted.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++
    } else {
      acc[el] = 1
    }
    return acc
  }, {})

  return Object.entries(reduced).reduce((acc, el) => acc[1] > el[1] ? acc : el)
}
const e = repeated('this is a repeated word test this is a a')
console.log(e)


const isPalindrome = (str) => {
  // es palíndromo
  str = str.replace(/\s/g, '') // sin espacios
  const lowered = str.toLowerCase()
  const splitted = lowered.split('')
  const reversed = splitted.reverse()
  const joined = reversed.join('')
  // console.log('Original word: ' + lowered)
  // console.log('Reversed word: ' + joined)

  return lowered == joined
}
const f = isPalindrome('Do geese see God')
console.log(f)


const removeDuplicates = (array) => {
  // remover duplicados
  const mySet = new Set(array)
  return Array.from(mySet)
}
const g = removeDuplicates([1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8, 8, 8, 8, 9])
console.log(g)


const findMissing = (arr) => {
  // encontrar el número faltante
  let index = 0
  let missingNumbers = []
  let lastNumberCheck = arr[0]

  while (index < arr.length - 1) {
    if (arr[index + 1] === lastNumberCheck + 1) {
      index++
    } else {
      missingNumbers.push(lastNumberCheck + 1)
    }
    lastNumberCheck++
  }
  return missingNumbers
}
const h = findMissing([0, 1, 3, 4, 5, 6, 8, 9])
console.log(h)


const fibonacciIterative = (n) => {
  // fibonacci de forma iterativa
  if (n === 0) return [0]
  let fib = [0, 1]
  for(let i = 2; i < n; i++) {
    fib.push(fib[i - 1] +  fib[i - 2])
  }
  return fib
}
console.log(fibonacciIterative(1))


const fibonacciRecursive = (n) => {
  // fibonacci de forma recursiva
  if (n === 0) return 0
  if (n === 1) return 1
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}
console.log(fibonacciRecursive(5))


const reverseString = (str) => {
  let textReverse = ""
  for (letter of str) {
    textReverse = letter + textReverse
  }
  return textReverse
}
console.log(reverseString('hola mundo'))

const reverseRecursive = (str) => {
  if (str === '') {
    return ''
  }
  return reverseRecursive(str.substring(1)) + str.charAt(0)
}
console.log(reverseRecursive('hola mundo'))

const reverseForWord = (str) => {
  let arrayStr = str.split(" ")
  return arrayStr.map(word => reverseString(word)).join(" ")
}
console.log(reverseForWord("hola mundo"))

