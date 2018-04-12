var request = require("request");

var baseUrl = "https://app.thehour.cn";

var options = {
    url: "/h24/app/v0/article/comment",
    headers: {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'Connection': 'keep-alive',
        'Cookie': 'your_cookie',
        'deviceInfo': 'your_deviceInfo',
        'User-Agent': 'ZheJiangTwentyFourHours/4.4.0 (iPhone; iOS 11.3; Scale/2.00)',
        'Accept-Language': 'zh-Hans-CN;q=1, en-CN;q=0.9, ja-JP;q=0.8',
        'Accept-Encoding': 'Accept-Encoding'
    },
    method: 'POST',
    json: {
        "content": "1234", "articleId": "", "parentId": ""
    }
}

function UpdateClinetId() {
    options.url = baseUrl + "/h24/app/v0/user/updateClientId";
    options.json = { "clientId": "cd986f1fb7593e88f3ba93ae30e97f82" };
    request(options, function (error, response, body) {
        if (response.statusCode == 200)
            console.log("更新状态成功");
        else
            console.log(error);
        console.log("-----------------");
    });
}

function LoadHomepage() {
    options.url = baseUrl + "/h24/app/v2/homepage/news/refresh";
    options.json = { "lastRefreshTime": Date.now };
    request(options, function (error, response, body) {
        for (var i = 0; i < body.data.articleList.length; i++) {
            var articleId = body.data.articleList[i].id;
            LoadArticle(articleId);
            FinishRead(articleId);
            Share(articleId);
            Comment(articleId);
        }

    })
}

function LoadArticle(articleId) {
    options.url = baseUrl + "/h24/app/v2/article/load";
    options.json = { "articleId": articleId };
    request(options, function (error, response, body) {
        if (response.statusCode == 200)
            console.log(articleId + "正文打开成功");
        else
            console.log(error);
        console.log("-----------------");
    })
}

function FinishRead(articleId) {
    options.url = baseUrl + "/h24/app/v0/article/finishread";
    options.json = { "articleId": articleId };
    request(options, function (error, response, body) {
        if (response.statusCode == 200)
            console.log(articleId + "阅读完毕");
        else
            console.log(error);
        console.log("-----------------");
    });
}

function Share(articleId) {
    options.url = baseUrl + "/h24/app/v0/article/share";
    options.json = { "channel": "2", "articleId": articleId };
    request(options, function (error, response, body) {
        if (response.statusCode == 200)
            console.log(articleId + "分享成功");
        else
            console.log(error);
        console.log("-----------------");
    });
}

function Comment(articleId) {
    options.url = baseUrl + "/h24/app/v0/article/comment";
    options.json = { "content": "zszs", "articleId": articleId, "parentId": "" }
    request(options, function (error, response, body) {
        if (response.statusCode == 200)
            console.log(articleId + "评论成功");
        else
            console.log(error);
        console.log("-----------------");
    })
}

UpdateClinetId();
LoadHomepage();
