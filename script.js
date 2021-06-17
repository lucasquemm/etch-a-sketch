const container = document.getElementById('container')
let reset = document.querySelector('.reset')

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', cols)
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div')
    // cell.innerText = c + 1
    container.appendChild(cell).className = 'grid-item'
    cell.addEventListener('mouseover', function () {
      cell.style.backgroundColor = 'grey'
    })
    cell.addEventListener('mouseout', function () {
      cell.style.backgroundColor = 'black'
    })
  }
}

reset.addEventListener('click', function () {
  document
    .querySelectorAll('.grid-item')
    .forEach((celula) => (celula.style.backgroundColor = 'transparent'))
  console.log('u')
})

makeRows(24, 24)
