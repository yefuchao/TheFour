var request = require("request");

var options = {
    url: "https://app.thehour.cn/h24/app/v0/article/comment",
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'Cookie': 'your_cookie',
        'deviceInfo': 'your_deviceinfo',
        'User-Agent': 'ZheJiangTwentyFourHours/4.4.0 (iPhone; iOS 11.3; Scale/2.00)',
        'Accept-Language': 'zh-Hans-CN;q=1, en-CN;q=0.9, ja-JP;q=0.8',
        'Accept-Encoding': 'Accept-Encoding'
    },
    method: 'POST',
    json: {

        "content":"zszs","articleId":"138145","parentId":"600636"
    }
}

request(options, function (error, response, body) {
    console.log(body.data);
})
