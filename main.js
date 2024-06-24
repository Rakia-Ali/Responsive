const menu = document.querySelector("#icon")
const list = document.querySelector("#list")
const close = document.querySelector("#cancel")

menu.addEventListener("click" , function(){
    list.style.display = "flex"
    menu.style.display = "none"
    close.style.display = "block"
})
close.addEventListener("click" , function(){
    list.style.display  = "none"
    close.style.display = "none"
    menu.style.display  = "block"
})