const notesContainer = document.querySelector('.notes-list')

const prevPage = document.getElementById('prev-page')
const nextPage = document.getElementById('next-page')

let currentPage = 1
let totalPages = 1

async function fetchNotes(page) {
  try {
    notesContainer.innerHTML = ''

    // const userId = '071ca4b9-3695-4c66-a769-04f806187185'
    const userId = localStorage.getItem('userId')

    if (!userId) {
      alert('Você precisa fazer login para visualizar os recados.')
      return
    }

    const params = {
      page,
      perPage: 3
    }

    const response = await api.get(`/notes/${userId}`, { params })
    const notes = response.data.userNotes

    totalPages = response.data.totalPages

    notes.forEach(note => {
      const noteCard = document.createElement('div')
      noteCard.classList.add('card')

      noteCard.innerHTML = `
        <h2 class="card-title">${note.title}</h2>
        <p class="card-description">${note.description}</p>

        <div class="card-icons">
          <i class="fa-solid fa-trash" data-id=${note.id}></i>
          <i class="fa-solid fa-edit" data-id=${note.id}></i>
        </div>
      `

      notesContainer.appendChild(noteCard)

      const deleteIcon = noteCard.querySelector('.fa-trash')

      // Deletar uma nota
      deleteIcon.addEventListener('click', () => {
        const noteId = deleteIcon.getAttribute('data-id')

        deleteNote(noteId)
      })

      // Editar uma nota
      const editIcon = noteCard.querySelector('.fa-edit')
      editIcon.addEventListener('click', () => {
      const noteId = editIcon.getAttribute('data-id')

      navigateToEditPage(noteId)
      })
    })

    if (notes.length === 0) {
      const emptyNoteList = document.createElement('h3')
      emptyNoteList.innerText = 'Nenhum recado encontrado.'
      notesContainer.appendChild(emptyNoteList)
    }

    updatePaginationButtons()
  } catch (error) {
    console.error('Erro ao buscar recados.', error)
  }
}

function navigateToEditPage(noteId) {
  location.href = `edit-note.html?id=${noteId}`
}

fetchNotes(currentPage)

prevPage.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--
    fetchNotes(currentPage)
  }
})

nextPage.addEventListener('click', () => {
  if (currentPage < totalPages) {
    currentPage++
    fetchNotes(currentPage)
  }
})

function updatePaginationButtons() {
  prevPage.disabled = currentPage === 1
  nextPage.disabled = currentPage === totalPages
}
