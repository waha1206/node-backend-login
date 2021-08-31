const express = require('express')
const router = express.Router()
const moment = require('moment')

router.post('/', (req, res) => {
  console.log(req.body)
  console.log(moment().format('YYYY年MM月DD日-HH：mm'))
  res.json('收到 post 資料了')
})

module.exports = router
