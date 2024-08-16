const formEditNote = document.getElementById('form-edit-note')
const title = document.getElementById('title-edit')
const description = document.getElementById('description-edit')

const urlParams = new URLSearchParams(location.search) //?id=2a4lsjfj
const noteId = urlParams.get('id')

async function populateEditForm() {
  try {
    const response =await api.get(`/notes/details/${noteId}`)
    const note = response.data

    title.value = note.title
    description.value = note.description
  } catch (error) {
    console.error('Erro ao buscar recado.', error)
  }
}

populateEditForm()

formEditNote.addEventListener('submit', (event) => {
  event.preventDefault()

  const note = {
    title: title.value,
    description: description.value
  }

  updatedNote(noteId, note)
})

async function updatedNote(noteId, note) {
  try {
    const response = await api.put(`/notes/${noteId}`, note)

    if (response.status === 200) {
      alert('Recado editado com sucesso.')
    }

    location.href = 'list-note.html'
  } catch (error) {
    console.error('Erro ao atualizar recado.', error)
  }
}