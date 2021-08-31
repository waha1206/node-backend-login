const express = require('express')
const router = express.Router()

router.get('/user', (req, res) => {
  res.json('msg:login works')
})

router.get('/test2', (req, res) => {
  res.json('msg:test2 works')
})

module.exports = router

// 但若是使用RESTful的風格，就會變成：

// 功能：取得全部會員資料。Method: GET。URL: /api/customer
// 功能：取得單筆會員資料。Method: GET。URL: /api/customer/:id
// 功能：新增會員。Method: POST。URL: /api/customer
// 功能：修改會員。Method: PUT。URL: /api/customer/:id
// 功能：刪除會員。Method: DELETE。URL: /api/customer/:id
