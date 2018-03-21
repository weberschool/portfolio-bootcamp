// https://www.w3schools.com/jsref/event_onload.asp
window.onload = function() {
  // https://www.w3schools.com/Jsref/met_document_getelementsbyclassname.asp
  let navList = document.getElementsByClassName('nav-item');
  // https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array/from
  Array.from(navList).forEach((li) => {
    // https://www.w3schools.com/jsref/met_element_addeventlistener.asp
    li.addEventListener('click', () => {
      let order = getPosition(li, navList),
      boxList = document.getElementsByClassName('box-content'),
      // https://developer.mozilla.org/pt-BR/docs/Web/API/Element/getBoundingClientRect
      posTop = boxList[order].getBoundingClientRect().top + window.scrollY,
      // https://developer.mozilla.org/pt-BR/docs/Web/API/Node/parentNode
      element = document.body.parentNode
      return scrollTo(element, posTop, 200)
    });
  });
}

function getPosition(element, list) {
  for(let i = 0; i < list.length; i++) {
    if(list[i] === element) return i
  }
}

function scrollTo(element, to, duration) {
  if (duration < 0) return
  let difference = to - element.scrollTop,
  perTick = difference / duration * 10

  // https://www.w3schools.com/jsref/met_win_settimeout.asp
  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}
