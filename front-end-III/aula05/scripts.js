const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

const paginationsItems = document.querySelectorAll('#pagination .page-item')

paginationsItems.forEach(item => {
  item.addEventListener('click', (event) => {
    event.preventDefault()

    paginationsItems.forEach(item => {
      item.classList.remove('active')
    })

    item.classList.add('active')
  })
})

const btnEl = document.getElementById('btn-modal')

btnEl.addEventListener('click', () => {
  const modalEl = document.getElementById('exampleModal')

  const modal = new bootstrap.Modal(modalEl)
  modal.show()
})