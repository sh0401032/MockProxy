var express = require('express');
var router = express.Router();
var fse = require('walk')
var fs = require('fs')
var path = require('path')
var _ = require('lodash')
var mockDir = path.join(process.cwd(), 'mock')
var options = {
  followLinks: false,
  filters: ['Temp', '_Temp']
}
var walker = fse.walk(mockDir, options)
var routers = {
  '/': {}
}
var mockFiles = []
walker.on('file', function (root, fileStats, next) {
  fs.readFile(fileStats.name, function () {
    var itemName = mockDir + '/' + fileStats.name
    if (/^.*\.js$/.test(itemName)) {
      mockFiles.push(itemName)
    }
    next()
  })
})
walker.on('end', function () {
  mockFiles.forEach(function (route) {
    try {
      // 获取mock文件夹里面的内容（对象）
      var routeObj = require(route)
      if (routeObj.$router) {
        // delete routeObj.$route;
        routers[routeObj.$router] = routeObj
      } else {
        routers['/'] = Object.assign({}, routers['/'], routeObj)
      }
    } catch (e) {
      console.log(e)
    }
  })
  server(routers)
})

function server (routers) {
  Object.keys(routers).forEach(function (key) {
    var routerConfig = routers[key]
    Object.keys(routerConfig).forEach(function (routeKey) {
      if (routeKey === '$route') return
      var routeHandle = routerConfig[routeKey]
      // 如果内容是一个函数
      if (_.isFunction(routeHandle)) {
        // router.use(routeKey, routeHandle);
        router.get(routeKey, routeHandle)
      } else if (_.isObject(routeHandle)) {
        router.get(routeKey, function (req, res) {
          res.json(routeHandle)
        })
      }
    })
  })
}
module.exports = router;










