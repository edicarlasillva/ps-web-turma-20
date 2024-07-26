async function deleteNote(noteId) {
  try {
    const response = await api.delete(`/notes/${noteId}`)

    if (response.status === 200 ) {
      alert('Recado deletado com sucesso.')
    }
  } catch (error) {
    console.error('Erro ao deletar recado.', error)
  }
}