const moreBtn = document.querySelector('.btn-more')  // Extraemos la clase
const moreCourses = document.querySelector('.more')  // Extraemos el Div la clase

moreBtn.addEventListener('click', () => {
  toggleMoreCourses()  // Al hacer click en el boton mandamos llamar la función
})

function toggleMoreCourses() {
  if (!moreCourses.classList.contains('show')) {  // Si no tiene esa clase
    moreCourses.classList.add('show')  // Agregamos esta clase
    moreBtn.innerHTML = 'Hide courses'  // Le cambiamos el titulo al boton
  } else {
    moreCourses.classList.remove('show')  // Si no removemos la clase
    moreBtn.innerHTML = 'Show more courses'    // Le cambiamos el titulo al boton
  }
}
