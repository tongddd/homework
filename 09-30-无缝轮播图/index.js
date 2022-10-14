// 获取相关dom元素
let left_btn = document.querySelector(".arrow_left")
let right_btn = document.querySelector(".arrow_right")
let li_list = document.querySelectorAll("li")
let ul = document.querySelector("ul");
let dot_box = document.querySelector(".dot_box");
// 记录轮播图,小圆点下标
let index = 1;
let dot_index = 0;
// 简易节流(动画过程中为true)
let flag = true;
ul.insertBefore(ul.lastElementChild.cloneNode(true), ul.firstElementChild)
ul.appendChild(ul.children[1].cloneNode(true))
//过渡动画结束函数
function end_transform() {
    if (index >= 5) {
        index = 1;
        end_move()
    }
    else if (index <= 0) {
        index = 4
        end_move()
    }
    flag = true;
    function end_move() {
        ul.style.transition = `none`;
        ul.style.transform = `translateX(${index * -500}px)`;
        window.getComputedStyle(ul, "style").transition;
        ul.style.transition = `0.3s ease-in-out`;
    }
}
// 轮播图和小圆点位移
function img_move() {
    flag = false
    if (dot_index >= 4) dot_index = 0;
    else if (dot_index <= -1) dot_index = 3;
    ul.style.transform = `translateX(${index * -500}px)`;
    document.querySelector(".dotActive").classList.remove('dotActive');
    dot_box.children[dot_index].classList.add('dotActive');
}
// 右箭头事件
right_btn.addEventListener("click", () => {
    if (flag) {
        index++;
        dot_index++;
        img_move()
    }
})
// 左箭头事件
left_btn.addEventListener("click", () => {
    if (flag) {
        index--;
        dot_index--;
        img_move()
    }
})
dot_box.addEventListener("click", e => {
    if (e.target.classList.contains("dot")) {
        index = e.target.dataset.index;
        dot_index = index - 1;
        img_move();
    }
}
)
// 过渡结束监听
ul.addEventListener("transitionend", end_transform);
