var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // 修改值为'zhangsan,lisi,wangermazi'
  //res.send('respond with a resource');
  res.send(' lisi, wangermazi');
});

module.exports = router;
