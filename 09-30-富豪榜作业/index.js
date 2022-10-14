let body = document.body;
let main = document.getElementById("main")
// 临时数据数组:格式{name:str,money:num}
let tempData = []
// 添加模块计数器
let data_index = 0;
// 总金额是否开启
let sum_flag = false
function $(id) {
    return document.querySelector(id);
}
//函数-判断总金额模块是否存在,存在即删除tempData列表最后一项,因为是aide捕获所以需要判断e.target是不是button才行
function sumBtn(e) {
    if (e.target["localName"] == "button") {
        if (sum_flag) {
            tempData.pop();
            sum_flag = false;
        }
    }
}
//函数-遍历tempData渲染页面函数,用于冒泡
function render_main() {
    main.innerHTML = `            
    <h2>
    <strong>Person</strong>
    <span>Wealth</span>
    </h2>`
    tempData.forEach((item, index) => {
        let new_h2 = document.createElement("h2")
        new_h2.innerHTML = `
        <strong>${item["name"]}</strong>
        <span>$${item["money"].toLocaleString()}.00</span>`
        main.appendChild(new_h2);
    })
}
// 判断总金额模块是否存在以及渲染页面这里用到了捕获和冒泡事件原理
$("aside").addEventListener("click", sumBtn, true);
$("aside").addEventListener("click", render_main, false);
// 导航栏点击按钮事件,切换给Body.show_nav标签
$("#toggle").addEventListener('click', () => body.classList.toggle("show_nav"))
// 添加账户模块,计数器data_index,数据添加进tempData并渲染
$("#add-user").addEventListener("click", () => {
    if (data_index == dataInfo.length) return;
    tempData.push(dataInfo[data_index++]);
})
//资金翻倍,点击一次翻倍money,更新tempData并渲染
$("#double").addEventListener("click", () => tempData.forEach(item => item["money"] = 2 * item["money"]))
//查询百万富翁,过滤条件并更新tempData并渲染
$("#show-millionaire").addEventListener("click", () => tempData = tempData.filter(item => item["money"] >= 1000000))
//财富榜,给原数组排个序,更新tempData并渲染
$("#sort").addEventListener("click", () => tempData.sort((a, b) => b["money"] - a["money"]))
//总金额,sum_flag布尔值,记录模块是否存在.如存在则不进入if,不存在则遍历tempData,push总金额并渲染
$("#calculate").addEventListener("click", () => {
    if (!sum_flag) {
        let res = tempData.reduce((prev, item) => prev + item["money"], 0)
        tempData.push({ name: "总额", money: res })
        sum_flag = true;
    }
})

