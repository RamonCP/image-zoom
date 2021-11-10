const modalImage = document.querySelector('.modal-image')
const image = document.querySelector('.image')
const imageLink = document.querySelector('.image-link')

modalImage.addEventListener('click', toggleShow)

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
  event.preventDefault()

  const src = event.target.src || event.target.dataset.href
  image.src = src

  toggleShow()
}
