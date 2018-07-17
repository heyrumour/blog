import apiPath from "@/http/apiPath"
const Mock = require("mockjs")

Mock.mock(apiPath.blogListApi, "get", {
  "code": 200,
  "data": {
    list: [
      {
        "title": "Vuex学习总结",
        "date": "2018-06-12T15:59:15.000Z",
        "path": "2018/06/12/Vuex学习总结/",
        "tags": []
      }, {
        "title": "React处理事件响应",
        "date": "2018-05-15T14:05:45.000Z",
        "path": "2018/05/15/React处理事件响应/",
        "tags": []
      }, {
        "title": "回调函数介绍",
        "date": "2018-04-09T13:46:32.000Z",
        "path": "2018/04/09/callback介绍/",
        "tags": []
      }, {
        "title": "移动端适配",
        "date": "2018-03-04T05:45:09.000Z",
        "path": "2018/03/04/移动端适配/",
        "tags": []
      }, {
        "title": "谈谈函数参数传递",
        "date": "2018-01-12T14:01:38.000Z",
        "path": "2018/01/12/谈谈函数参数传递/",
        "tags": []
      }, {
        "title": "Web存储",
        "date": "2017-12-09T14:51:42.000Z",
        "path": "2017/12/09/Web存储/",
        "tags": []
      }, {
        "title": "浅谈Web Worker",
        "date": "2017-11-05T14:43:33.000Z",
        "path": "2017/11/05/浅谈Web Worker/",
        "tags": []
      }
    ]
  },
  "msg": "success"
})