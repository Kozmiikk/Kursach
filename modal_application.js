"use strict"

const applicationWindow = document.querySelector('.application-window')
const openAppicationWindows = document.querySelectorAll('.application__modal')
const closeAppicationWindows = document.querySelectorAll('.application-modal-close')
const submitWindow = document.querySelector('.application-submit-window')

closeAppicationWindows.forEach((closeAppicationWindow) => {
    closeAppicationWindow.addEventListener('click', (e) => {
        e.preventDefault()
        document.body.classList.remove('body--no-scroll')
        
        submitWindow.classList.remove('modal-window--visible')
        applicationWindow.classList.remove('modal-window--visible')
    })
})


openAppicationWindows.forEach(openAppicationWindow => {
    openAppicationWindow.addEventListener('click', (e) => {
        e.preventDefault()

        document.body.classList.add('body--no-scroll')
        applicationWindow.classList.toggle('modal-window--visible')
    })
})

const submitApplication = document.querySelector('.m-form__button')

submitApplication.addEventListener('click', (e) => {
    let flag = true;

    const appicationsInputs = document.querySelectorAll('.m-form__input')
    const appicationsInfo = document.querySelectorAll('.m-form__info')

    appicationsInputs.forEach((input, index) => {
        if (input.value.trim() <= 0) {
            appicationsInfo[index].style.display = 'inline-block';
            flag = false;
        }
        else {
            appicationsInfo[index].style.display = 'none';
        }

    })

    if (flag) {
        applicationWindow.classList.toggle('modal-window--visible')
        submitWindow.classList.toggle('modal-window--visible')
    }
})

