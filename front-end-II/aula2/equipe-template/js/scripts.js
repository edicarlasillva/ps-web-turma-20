const userContainer = document.querySelector('.user-list')
const loadingIndicator = document.querySelector('.loading')
const userCardTemplate = document.getElementById('user-card-template').content

async function fetchUsers() {
  loadingIndicator.style.display = 'block'
  userContainer.innerHTML = '' // limpa o container de usuários

  try {
    const response = await api.get('/users')
    const users = response.data.data

    users.forEach(user => {
      const userCard = userCardTemplate.cloneNode(true)

      userCard.querySelector('img').src = user.avatar
      userCard.querySelector('img').alt = `${user.first_name} ${user.last_name}`
      userCard.querySelector('h2').innerText = `${user.first_name} ${user.last_name}`
      userCard.querySelector('p').innerText = `E-mail: ${user.email}`

      userContainer.appendChild(userCard)
    })
  } catch (error) {
    console.error('Erro ao buscar usuários', error)
  } finally {
    loadingIndicator.style.display = 'none'
  }
}

fetchUsers()

async function createNewNote() {
  const newNote = {
    title: 'Estudar axios',
    description: '1h por dia',
    userId: 'a3f094f1-e6b5-4894-a187-e5852011e5a9'
  }

  try {
    const response = await api.post('/notes', newNote)

    if (response.status === 201) {
      console.log('Recado cadastrado com sucesso!')
    }
  } catch (error) {
    console.log(error)
  }
}

createNewNote()