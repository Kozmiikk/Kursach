"use strict"

const formInput = document.querySelector('.form__input')
const modalText = document.querySelector('.modal__text-subscribe')
const formButton = document.querySelector('.form__button')
// modal-window--visible
const modalWindow = document.querySelector('#open-modal-subscribe')
const modalClose = document.querySelector('.modal-close-subscribe').addEventListener('click', (e) => {
    e.preventDefault()
    modalWindow.classList.toggle('modal-window--visible')
})

if (formButton) {
    formButton.addEventListener('click', (e) => {
        e.preventDefault()

        if (formInput.value.trim().length <= 0) {
            modalText.textContent = 'Заполните все поля!'
            modalWindow.classList.toggle('modal-window--visible')
        } else {
            formInput.value = ''
            modalText.textContent = 'Вы успешно подписались на обновления!'
            modalWindow.classList.toggle('modal-window--visible')
        }
    })
}
