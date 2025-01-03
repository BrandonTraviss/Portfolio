const burgerIcon = document.getElementById('burger-icon')
const menuDiv = document.getElementById('burger-menu-div')
const navModal = document.getElementById('nav-modal')

let active = false

menuDiv.addEventListener('click',openMenu)

function openMenu(){
    if (!active) {
        console.log("Opening Menu")
        navModal.classList.add('shown')
        navModal.classList.remove('hidden')
        burgerIcon.src = "icons/x.svg"
        active = true
        return
    }
    else {
        navModal.classList.add('hidden')
        navModal.classList.remove("shown")
        burgerIcon.src = "icons/burgerMenu.svg"
        active = false
        return
    }
    console.log("Menu Open")
}