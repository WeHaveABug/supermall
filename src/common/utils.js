// 防抖函数
export function debounce(func, delay) {
    let timer = null
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay);
    }
}

// 格式化函数，专门给日期时间戳进行格式化
export function formatDate(date, fmt) {
    // 获取年份
    if (/(y+)/.test(fmt)) {
        let dateY = date.getFullYear() + "";
        // 以下RegExp.$1 就是 "yyyy"
        fmt = fmt.replace(RegExp.$1, dateY.substr(4 - RegExp.$1.length))
    }

    // 获取其他
    let o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds()
    };
    for (const k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + "";
            fmt = fmt.replace(
                RegExp.$1,
                (RegExp.$1.length === 1) ? str : padLeftZero(str)
            );
        }
    }
    return fmt;
}
function padLeftZero(str) {
    return ("00" + str).substr(str.length)
}