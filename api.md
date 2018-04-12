## TheFour APP API

- 地址：**https://app.thehour.cn**

|名称|方法|地址|内容|
|---|:---:|:---|:---|
|首页|POST|/h24/app/v2/homepage/news/refresh|```{"lastRefreshTime": "timespan"} ```|
|刷新状态|POST|/h24/app/v0/user/updateClientId|``` {"clientId": "value"} ```|
|文章页面|POST|/h24/app/v2/article/load|``` {"articleId":"value"} ```|
|读完文章|POST|/h24/app/v0/article/finishread|``` {"articleId":"137887"} ```|
|未读消息|POST|/h24/app/v0/msg/unreadmsgnum||
|分享文章|POST|/h24/app/v0/article/share|` {"channel":"2","articleId":"138002"} `|
|评论|POST|/h24/app/v0/article/comment|` {"content":"测试测试","articleId":"137907","parentId":""} `|
|专栏页面|POST|/h24/app/v2/column/refresh|` {"columnId":"88","lastRefreshTime":0} `|
|订阅专栏|POST|/h24/app/v0/column/subscribe|` {"columnId":"88"} `|
|专栏列表|GET|/h24/app/v1/column/recommend|