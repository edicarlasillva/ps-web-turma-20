// const sayHello = function() {
//   console.log('Hello');
// }

// sayHello()

// function sayHello() {
//     console.log('Hello');
//   }

// sayHello()

// function sum(a = 2, b = 3) {
//   console.log(a)
//   console.log(b)
//   console.log(a + b)

//   return a + b
// }

// console.log(sum())

// const functionName = () => {
//   return result
// }

// const sum = (a, b) => {
//   return a + b
// }

// console.log(sum(2, 3))

// const multiply = num => num * num
// console.log(multiply(3))

// const multiply = (num) => {
//   return num * num
// }

// const sayHello = name => `Hello, ${name}`
// console.log(sayHello('Carla'))

// const welcome = () => 'Seja bem-vinda!'
// console.log(welcome())

// const ages = [15, 22, 18, 27, 14]
// const filteredAges = ages.filter(age => age >=18)

// // const filteredAges = ages.filter(function(age) {
// //   return age >= 18
// // })

// console.log(filteredAges)

// Encontrar o índice do primeiro número par. 
// const numberList = [1, 3, 5, 4, 7, 9, 10, 11]

// const findIndexOfFirstEvenNumber = numberList.findIndex(number => number % 2 === 0)
// console.log(findIndexOfFirstEvenNumber)

// const numbers = [1, 2, 3, 4, 5]
// numbers.forEach(num => console.log(num * 2))

// const fruits = ['maçã', 'banana', 'goiaba', 'melão', 'banana']
// const result = fruits.find(fruit => fruit === 'banana')
// console.log(result)


// const ages = [15, 22, 18, 27, 14]
// const index = ages.findIndex(age => age >= 30)

// if (index === -1) {
//   console.log(index)
//   console.log('Nenhuma idade maior que 30 foi encontrada.')
// } else {
//   console.log(index)
// }

// const scores = [85, 92, 78, 95, 88, 100]
// const filteredScores = scores.filter(score => score >= 90)
// console.log(filteredScores)

// const colors = ['red', 'green', 'blue', 'yellow']
// const removedColors = colors.splice(1, 2, 'purple', 'orange')
// console.log(removedColors)
// console.log(colors)

// const colors = ['red', 'green', 'blue', 'yellow']
// const updatedColors = [...colors] // imutabilidade
// const removedColors = updatedColors.splice(1, 2, 'purple', 'orange')

// console.log(colors)
// console.log(updatedColors)

// const temperatures = [25, 30, 15, 28, 18]
// const hasHotTemperature = temperatures.some(temp => temp > 28)
// console.log(hasHotTemperature)

// const temperatures = [32, 30, 45, 29, 40]
// const hasHotTemperature = temperatures.every(temp => temp > 28)
// console.log(hasHotTemperature)

// const numbers = [1, 2, 3, 4, 5]
// // const squaredNumbers = numbers.map(num => num ** num)
// const squaredNumbers = numbers.map(num => Math.pow(num, 2))
// console.log(squaredNumbers)

// const numbers = [40, 1, 100, 5, 200, 10]
// const orderedNumbers = numbers.sort()
// console.log(orderedNumbers)

// const names = ['Alice', 'Debora', 'Mariana', 'Joana']
// const sortedNames = names.sort()
// console.log(sortedNames)

// const numbers = [40, 1, 95, 95, 200, 10]
// const orderedNumbers = numbers.sort((a, b) => a - b)
// console.log(orderedNumbers)

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.includes(6))

// const numbers = [1, 2, 3, 4, 5]
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
// console.log(sum)