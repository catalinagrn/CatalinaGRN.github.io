colors = [
  '#EEC643',
  '#B00101',
  '#EEF0F2',
  '#0D21A1',
  '#011638'
]

function hover(element, i) {
  document.body.style.background = colors[i]  
  document.body.classList.add('hovering')
}

function leave(element) {
  document.body.style.background ="rgb(13, 3, 161)"
   document.body.classList.remove('hovering')
  
}