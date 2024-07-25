const notesContainer = document.querySelector('.notes-list')

async function fetchNotes() {
  try {
    notesContainer.innerHTML = ''

    const userId = '8f260651-f4b3-4c06-be5d-1118d2d2f27c'

    const response = await api.get(`/notes/${userId}`)
    const notes = response.data

    console.log(notes)

  } catch (error) {
    console.error('Erro ao buscar recados.')
  }
}

fetchNotes()