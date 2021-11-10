const modalImage = document.querySelector('.modal-image')
const image = document.querySelector('.image')
const puppiesImage = document.querySelector('.puppies-image')
const imageLink = document.querySelector('.image-link')

modalImage.addEventListener('click', toggleShow)
// puppiesImage.addEventListener('click', onClickImage)
imageLink.addEventListener('click', onClickLink)

function toggleShow() {
  const show = modalImage.dataset.show

  if (show === 'false') {
    modalImage.classList.add('show')
    modalImage.classList.remove('hide')
    modalImage.dataset.show = 'true'
  } else {
    modalImage.classList.add('hide')
    modalImage.classList.remove('show')
    modalImage.dataset.show = 'false'
  }
}

function onClickImage(event) {
  const src = event.target.src
  image.src = src

  toggleShow()
}

function onClickLink(event) {
  event.preventDefault()
  const href = imageLink.dataset.href
  image.src = href

  toggleShow()
}
