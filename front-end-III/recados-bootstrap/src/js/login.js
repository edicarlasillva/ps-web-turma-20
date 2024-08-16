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

  const inputs = formLogin.querySelectorAll('input')
  let valid = true

  inputs.forEach(input => {
    if (!input.value) {
      setError(input, `${input.name} é obrigatório`)
      valid = false
    } else {
      setSuccess(input)
    }
  })

  if (valid) {
    const data = {
      email: email.value,
      password: password.value
    }

    login(data)
  }

  // if (!email.value) {
  //   setError(email, 'E-mail é obrigatório')
  // } else {
  //   setSuccess(email)
  // }

  // if (!password.value) {
  //   setError(password, 'Senha é obrigatória')
  // } else {
  //   setSuccess(password)
  // }

  // if (data.email && data.password) {
  //   login(data)
  // }

  // if (!data.email || !data.password) {
  //   console.error('E-mail e senha são obrigatórios.')
  // } else {
  //   login(data)
  // }
})

function setError(input, message) {
  const formControl = input.parentElement
  const small = formControl.querySelector('small')

  small.innerText = message
  formControl.classList.remove('success')
  formControl.classList.add('error')
}

function setSuccess(input) {
  const formControl = input.parentElement

  formControl.classList.remove('error')
  formControl.classList.add('success')
}