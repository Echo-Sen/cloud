// 从本地的 cookie 中获取 token
export function getTokenFromCookie(cookie_name) {
    var AllCookies = document.cookie;

    //索引长度，开始索引的位置
    var cookie_pos = AllCookies.indexOf(cookie_name);

    // 如果找到了索引，就代表cookie存在,否则不存在
    if (cookie_pos != -1) {
        // 把cookie_pos放在值的开始，只要给值加1即可
        //计算取cookie值得开始索引，加的1为“=”
        cookie_pos = cookie_pos + cookie_name.length + 1;
        //计算取cookie值得结束索引
        var cookie_end = AllCookies.indexOf(";", cookie_pos);
        if (cookie_end == -1) {
            cookie_end = AllCookies.length;
        }
        //得到想要的cookie的值
        var value = unescape(AllCookies.substring(cookie_pos, cookie_end));
    }
    return value;
}

// 获取的 cookie 中的 token 转化成 字符串数组 拿到需要部分的数据
export function ParseToken(token) {
    //通过split()方法将token转为字符串数组
    var strings = token.split(".");
    //取strings[1]数组中的第二个字符进行解析
    var userinfo = JSON.parse(decodeURIComponent(escape(window.atob(strings[1].replace(/-/g, "+").replace(/_/g, "/")))));
    //然后赋值自己需要的数据
    var userId = userinfo.userid;
    var name = userinfo.name;
    jsonString = JSON.stringify({ userid: userId, name: name });
    return jsonString;
}