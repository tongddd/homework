let head_list = document.querySelectorAll(".tilteList h4")
let main = document.querySelectorAll(".main");
let li_list = document.querySelectorAll(".tilteList > li")
li_list.forEach((item, index) => {
    item.addEventListener("mouseenter", () => {
        main.forEach((item, index) => item.style = "height:200px;  z-index: 1;")
        main[index].style = "height:200px;  z-index: 999;"
    })
    item.addEventListener("mouseleave", () => {
        main.forEach((item, index) => item.style = "height:0px;z-index:1;")
    })
})