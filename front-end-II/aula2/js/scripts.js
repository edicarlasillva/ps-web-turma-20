// const h1 = document.createElement('h1')
// h1.innerText = 'Contador de likes'
// document.body.appendChild(h1)

// const container = document.createElement('div')
// container.setAttribute('class', 'container')
// document.body.appendChild(container)

// const h2 = document.createElement('h2')
// h2.innerText = 'Postagem'
// container.appendChild(h2)

// const contador = document.createElement('p')
// contador.innerText = 0
// container.setAttribute('id', 'contador')
// container.appendChild(contador)

// const botao = document.createElement('button')
// botao.innerText = 'Curtir'
// container.appendChild(botao)

// const status = document.createElement('p')
// status.innerText = 'Seja o primeiro a curtir'
// status.setAttribute('class', 'aguardando')
// container.appendChild(status)

// let numeroLikes = 0
// const numeroMinimoLikes = 10

// function incrementarLikes() {
//   numeroLikes++
//   contador.innerText = numeroLikes

//   if (numeroLikes >= numeroMinimoLikes) {
//     status.innerText = 'Post Popular.'
//     status.classList.replace('aguardando', 'postagem-popular')
//   } else {
//     status.innerText = 'Seja o primeiro a curtir.'
//     status.classList.replace('postagem-popular', 'aguardando')
//   }
// }

// botao.onclick = incrementarLikes


// let counter = 0
// const element = document.getElementById('counter')
// const button = document.querySelector('button')

// function incrementCounter(event) {
//   console.log(event.type)
//   console.log(event.clientX, event.clientY)
//   counter++
//   element.innerText = counter
//   console.log(this)
//   this.innerText = 'O texto mudou'
// }

// button.addEventListener('click', incrementCounter)

// onMouseOver e onMouseOut

// const element = document.querySelector('.element')

// function highlighted() {
//   element.classList.add('highlighted')
// }

// function unHighlighted() {
//   element.classList.remove('highlighted')
// }

// element.addEventListener('mouseover', highlighted)
// element.addEventListener('mouseout', unHighlighted)

// const inputElement = document.getElementById('input')
// const feedback = document.getElementById('feedback')

// inputElement.addEventListener('keydown', (event) => {
//   feedback.innerText = `A tecla digitada foi ${event.key}`
// })

// inputElement.addEventListener('keyup', () => {
//   feedback.innerText = 'Tecla liberada.'
// })

// GET, POST, PUT, DELETE
// /users/:id route params
// ?city=Salvador query params
// {name: 'Carla'} // body params

// const promessa = new Promise((resolve, reject) => {
//   const condicao = false

//   if (condicao) {
//     setTimeout(() => {
//       resolve('Fui resolvida.')
//     }, 2000)
//   } else {
//     reject('Ocorreu um erro.')
//   }
// })

// promessa
//   .then(resultado => console.log(resultado))
//   .catch(error => console.log('Erro: ', error))

// async function fetchUsers() {
//   try {
//     const response = await axios.get('https://reqres.in/api/users')
//     const users = response.data.data

//     console.log(users)
//   } catch (error) {
//     console.error('Erro ao buscar usuários: ', error)
//   } finally {
//     console.log('Finalizou!!')
//   }
// }

// fetchUsers()

// function fetchUsers() {
//   axios.get('https://reqres.in/api/users')
//     .then(response => {
//       const users = response.data.data
//       console.log(users)
//     }).catch(error => {
//       console.error('Erro ao buscar usuários: ', error)
//     }).finally(() => console.log('Finalizou!'))
// }

// fetchUsers()