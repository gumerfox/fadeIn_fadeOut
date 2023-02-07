const block = document.querySelector('.block')
const btn = document.querySelector('.btn')

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0
  el.style.display = display || 'block'
  el.style.transition = `opacity ${timeout}ms`
  setTimeout(() => {
    el.style.opacity = 1
  }, 10)
}

const fadeOut = (el, timeout) => {
  el.style.opacity = 1
  el.style.transition = `opacity ${timeout}ms`
  el.style.opacity = 0

  setTimeout(() => {
    el.style.display = 'none'
  }, timeout)
}

let flag = false

btn.addEventListener('click', (e) => {
  let display = block.style.display
  if (!flag) {
    fadeIn(block, 2000, 'flex')
    flag = true
  } else {
    fadeOut(block, 2000)
    flag = false
  }
})
