function Ajax($method, $url, $data) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        if ($method.toUpperCase() === "GET") {
            let str = "?";
            if ($data) {
                for (let k in $data) {
                    str += `${k}=${$data[key]}&`
                }
            }
            xhr.open($method, $url + str.slice(0, -1))
            xhr.send()
        }
        else {
            xhr.open($method, $url)
            xhr.setRequestHeader("content-type", "application/json")
            xhr.send(JSON.stringify($data))
        }
        xhr.addEventListener("readystatechange", () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve(JSON.parse(xhr.response))
                } else {
                    reject(JSON.parse(xhr.response))
                }
            }
        })
    })
}