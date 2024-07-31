const formLogin = document.getElementById('form-login')
const email = document.getElementById('email-login')
const password = document.getElementById('password-login')

async function login(data) {
  try {
    const response = await api.post('/users/login', data)

    if (response.status === 200) {
      const userData = response.data

      localStorage.setItem('userId', userData.userId)
      location.href = 'list-note.html'
    }
  } catch (error) {
    console.error('Erro ao fazer login', error)
  }
}

formLogin.addEventListener('submit', (event) => {
  event.preventDefault()

  const data = {
    email: email.value,
    password: password.value
  }

  if (!data.email || !data.password) {
    console.error('E-mail e senha são obrigatórios.')
  } else {
    login(data)
  }
})

