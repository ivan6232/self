//[rule: ?药品查询 ] 
//查询近2万种中西药说明书、中外名称、特点、禁忌、用量、适应症、注意事项等等。

//@Date: 2022-03-26 22:52:10
// @Editors: 不吃咖喱鸡

//【1】替换自己天行数据申请的key，https://www.tianapi.com/
//【2】需申请2个api接口，https://www.tianapi.com/apiview/96 和 https://www.tianapi.com/apiview/134

var key = "xxxxxxxxxxxxxxx"//天行数据申请的key网站https://www.tianapi.com/
function main() {
    var word = param(1) //匹配规则第一个问号的值
    var content = request({ // 内置http请求函数
        "url": "http://api.tianapi.com/yaopin/index?key=" + key + "&word=" + word, //请求链接
        "method": "get", //请求方法
        "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
    })
    var data = '';
    if (content.code == 250) {
        data = "查询失败,请检查重试" //请求失败时，返回的文字
    } else if (content.code == 200) {
        var list = content.newslist[0];
        data1 = "药品名称:" + list.title + "\n"
        str = list.content
        var data2 = str.replace(/<br\s*\/?>/g, "\n");
        data = data1 + data2
    } else {
        data = "接口异常。"//接口异常，返回的文字
    }
    sendText(data)
}


function main2() {
    var content = request({ // 内置http请求函数
        "url": "http://api.tianapi.com/userinfo/index?key=" + key + "&apiid=134", //请求链接
        "method": "get", //请求方法
        "dataType": "json", //这里接口直接返回文本，所以不需要指定json类型数据
    })
    var data = '';
    if (content.code == 200) {
        var content1 = content.newslist[0];
        sendText(
            "\n药品查询功能当天剩余的免费查询次数:" +
            content1.api_give
        )
    } else {
        sendText("次数查询异常。")//接口异常，返回的文字
    }
}

main()
main2()