// const passwordField = document.getElementById('senha')
// const togglePassword = document.getElementById('togglePassword')

// togglePassword.addEventListener('click', () => {
//   const type = passwordField.getAttribute('type') === 'password' ? 'text' : 'password'
//   passwordField.setAttribute('type', type)
// })

// const esportes = document.querySelectorAll('input[name="esporte"]')

// esportes.forEach(esporte => {
//   esporte.addEventListener('change', () => {
//     console.log(`A opção escolhida foi ${esporte.value}`)
//   })
// })

const checkboxes = document.querySelectorAll('input[name="interesses"]')

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      console.log(`Checkbox marcado: ${checkbox.value}`)
    } else {
      console.log(`Checkbox desmarcado: ${checkbox.value}`)
    }
  })
})

const select = document.getElementById('cidades')
console.log(select)

select.addEventListener('change', () => {
  console.log(`Cidade selecionada: ${select.value}`)
})
