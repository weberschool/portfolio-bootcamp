window.onload = function() {
  let navList = document.getElementsByClassName('nav-item');
  Array.from(navList).forEach((li) => {
    li.addEventListener('click', () => {
      let order = getPosition(li, navList),
          boxList = document.getElementsByClassName('box-content'),
          posTop = boxList[order].getBoundingClientRect().top + window.scrollY,
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

  setTimeout(() => {
    element.scrollTop = element.scrollTop + perTick
    if (element.scrollTop === to) return
    scrollTo(element, to, duration - 10)
  }, 10)
}
