const formNewUser = document.getElementById('form-new-user')

const name = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')

async function addNewUser(data) {
  try {
    const response = await api.post('/users/signup', data)

    if (response.status === 201) {
      location.href = 'list-note.html'
    }
  } catch (error) {
    console.error('Erro ao cadastrar usuário', error)
  }
}

formNewUser.addEventListener('submit', (event) => {
  event.preventDefault() // impede o comportamento padão do submit

  const data = {
    name: name.value,
    email: email.value,
    password: password.value
  }

  addNewUser(data)
})