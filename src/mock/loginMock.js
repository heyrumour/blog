import apiPath from "@/http/apiPath"
const Mock = require("mockjs")

Mock.mock(apiPath.loginApi, "post", {
    "code": 200,
    "data": {
      "username": "@CNAME", // 随机生成中文人名
    },
    "msg": "success"
})