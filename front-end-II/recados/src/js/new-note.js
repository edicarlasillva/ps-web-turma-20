const formNewNote = document.getElementById('form-new-note')
const title = document.getElementById('title')
const description = document.getElementById('description')

async function createNewNote(note) {
  try {
    const response = await api.post('/notes', note)

    if (response.status === 201) {
      alert('Recado cadastrado com sucesso.')

      title.value = ''
      description.value = ''

      location.href = 'list-note.html'
    }
  } catch (error) {
    console.error('Erro ao criar recado.', error)
  }
}

formNewNote.addEventListener('submit', (event) => {
  event.preventDefault()

  const userId = localStorage.getItem('userId')
  // const userId = '071ca4b9-3695-4c66-a769-04f806187185'

  const newNote = {
    title: title.value,
    description: description.value,
    userId
  }

  createNewNote(newNote)
})

