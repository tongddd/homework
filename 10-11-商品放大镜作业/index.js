let topBoxLi = document.querySelectorAll(".top li")
let box1 = document.querySelector(".show .box1");
let box2 = document.querySelector(".show .box2");
let mask = document.querySelector(".show .mask");
let bigImg = box2.querySelector("img")
let bottomImg = document.querySelectorAll(".bottom img")


box1.addEventListener("mouseenter", () => {
    box2.style.display = "block"
    mask.style.display = "block"
})
box1.addEventListener("mouseleave", () => {
    box2.style.display = "none"
    mask.style.display = "none"
})
box1.addEventListener("mousemove", function (e) {
    // console.log("e.pageX",e.pageX)
    // console.log("this.offsetLeft",this.offsetLeft)
    // console.log("mask.offsetWidth / 2",mask.offsetWidth / 2)
    // console.log(this.offsetParent.offsetLeft-this.offsetParent.offsetParent.offsetLeft);
    mask.style.left = e.pageX - this.offsetParent.offsetLeft - this.offsetParent.offsetParent.offsetLeft - mask.offsetWidth / 2 + "px";
    mask.style.top = e.pageY - this.offsetTop - mask.offsetHeight / 2 + "px";
    if (e.pageX - this.offsetParent.offsetLeft - this.offsetParent.offsetParent.offsetLeft - mask.offsetWidth / 2 <= 0) {
        mask.style.left = 0;
    }
    if (e.pageY - this.offsetTop - mask.offsetHeight / 2 <= 0) {
        mask.style.top = 0;
    }
    if (mask.offsetLeft >= this.offsetWidth - mask.clientWidth) {
        mask.style.left = this.offsetWidth - mask.clientWidth + "px";
    }
    if (mask.offsetTop >= this.offsetHeight - mask.offsetHeight) {
        mask.style.top = this.offsetHeight - mask.offsetHeight + "px";
    }
    bigImg.style.transform = `translate(-${mask.style.left.slice(0, -2) * (bigImg.scrollWidth / box1.scrollWidth)}px,-${mask.style.top.slice(0, -2) * (bigImg.scrollWidth / box1.scrollWidth)}px)`;

})

for (let i = 0; i < bottomImg.length; i++) {
    bottomImg[i].addEventListener("mouseenter", function () {
        document.querySelector(".show").classList.remove("show")
        topBoxLi[i].classList.add("show")
        box1 = document.querySelector(".show .box1");
        box2 = document.querySelector(".show .box2");
        mask = document.querySelector(".show .mask");
        bigImg = box2.querySelector("img")
        box1.addEventListener("mouseenter", () => {
            box2.style.display = "block"
            mask.style.display = "block"
        })
        box1.addEventListener("mouseleave", () => {
            box2.style.display = "none"
            mask.style.display = "none"
        })
        box1.addEventListener("mousemove", function (e) {
            // console.log("e.pageX",e.pageX)
            // console.log("this.offsetLeft",this.offsetLeft)
            // console.log("mask.offsetWidth / 2",mask.offsetWidth / 2)
            // console.log(this.offsetParent.offsetLeft-this.offsetParent.offsetParent.offsetLeft);
            mask.style.left = e.pageX - this.offsetParent.offsetLeft - this.offsetParent.offsetParent.offsetLeft - mask.offsetWidth / 2 + "px";
            mask.style.top = e.pageY - this.offsetTop - mask.offsetHeight / 2 + "px";
            if (e.pageX - this.offsetParent.offsetLeft - this.offsetParent.offsetParent.offsetLeft - mask.offsetWidth / 2 <= 0) {
                mask.style.left = 0;
            }
            if (e.pageY - this.offsetTop - mask.offsetHeight / 2 <= 0) {
                mask.style.top = 0;
            }
            if (mask.offsetLeft >= this.offsetWidth - mask.clientWidth) {
                mask.style.left = this.offsetWidth - mask.clientWidth + "px";
            }
            if (mask.offsetTop >= this.offsetHeight - mask.offsetHeight) {
                mask.style.top = this.offsetHeight - mask.offsetHeight + "px";
            }
            bigImg.style.transform = `translate(-${mask.style.left.slice(0, -2) * (bigImg.scrollWidth / box1.scrollWidth)}px,-${mask.style.top.slice(0, -2) * (bigImg.scrollWidth / box1.scrollWidth)}px)`;

        })
    })
}