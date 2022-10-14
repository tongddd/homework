


// ajax请求图片地址

Ajax("GET", "http://studentback.dfbuff.top/getMethod?type=图片")
    .then(val => {
        let ul = document.querySelector("ul");
        let dot_box = document.querySelector(".dot_box");
        ul.innerHTML = ``;
        dot_box.innerHTML = ``;
        imgSrc = val.result
        imgSrc.forEach((ele, index) => {
            let li = document.createElement("li");
            dot_box.innerHTML += `<span class="dot" data-index=${index + 1}></span>`
            li.innerHTML = `<a href="javascript:void(0)"><img src="${ele.content}"></a>`
            ul.appendChild(li);
        })
        
        // 前后添加图片
        dot_box.firstElementChild.classList.add("dotActive")
        ul.insertBefore(ul.lastElementChild.cloneNode(true), ul.firstElementChild)
        ul.appendChild(ul.children[1].cloneNode(true))


        // 获取相关dom元素
        let left_btn = document.querySelector(".arrow_left")
        let right_btn = document.querySelector(".arrow_right")


        // 记录轮播图,小圆点下标
        let index = 1;
        let dot_index = 0;
        // 简易节流(动画过程中为true)
        let flag = true;
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


        // 过渡动画结束函数
        function end_transform() {
            if (index >= ul.children.length - 1) {
                index = 1;
                end_move()
            }
            else if (index <= 0) {
                index = ul.children.length - 2
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
            if (dot_index >= dot_box.children.length) dot_index = 0;
            else if (dot_index <= -1) dot_index = dot_box.children.length - 1;
            ul.style.transform = `translateX(${index * -500}px)`;
            document.querySelector(".dotActive").classList.remove('dotActive');
            dot_box.children[dot_index].classList.add('dotActive');
        }
        
    })
.catch(err => console.log(err))




