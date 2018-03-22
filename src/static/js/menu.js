window.addEventListener("load", () => {
  let menu = document.getElementsByClassName('fa-bars')[0],
  nav = document.getElementsByTagName('nav')[0]
  menu.addEventListener('click', () => {
    return (nav.clientHeight === 0) ? showMenu(nav) : hideMenu(nav)
  })
})

function hideMenu(elem) {
  let a = elem.getElementsByTagName('a')
  elem.style.cssText = "height: 0; margin-top: 0;"
  return Array.from(a).forEach((link) => {
    link.style.cssText = "display: none"
  })
}

function showMenu(elem) {
  let a = elem.getElementsByTagName('a')
  elem.style.cssText = "height: auto; margin-top: 30px;"
  return Array.from(a).forEach((link) => {
    link.style.cssText = "display: block"
  })
}
