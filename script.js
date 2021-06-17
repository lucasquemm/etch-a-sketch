const container = document.getElementById('container')
let reset = document.querySelector('.reset')
let pincel = false

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows)
  container.style.setProperty('--grid-cols', cols)
  for (c = 0; c < rows * cols; c++) {
    let cell = document.createElement('div')
    // cell.innerText = c + 1
    container.appendChild(cell).className = 'grid-item'
    cell.addEventListener('mouseover', function () {
      if (pincel) {
        cell.style.backgroundColor = 'black'
      }
    })
    cell.addEventListener('click', function () {
      cell.style.backgroundColor = 'black'
    })
    cell.addEventListener('mousedown', function () {
      pincel = true
    })
    cell.addEventListener('mouseup', function () {
      pincel = false
    })
  }
}
container.addEventListener('mouseleave', function () {
  pincel = false
})

reset.addEventListener('click', function () {
  document
    .querySelectorAll('.grid-item')
    .forEach((celula) => (celula.style.backgroundColor = 'transparent'))
})

makeRows(50, 50)
