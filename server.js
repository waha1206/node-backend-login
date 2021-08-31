const express = require('express')
const mongoose = require('mongoose')
const users = require('./routes/api/users')
const member = require('./routes/api/member')
const db = require('./config/keys').mongoURI

const moment = require('moment')
moment.locale('zh-TW')

const app = express()

mongoose
  .connect(db)
  .then(() => {
    console.log('mongoDB Connented')
  })
  .catch((err) => {
    console.log(err)
  })

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use(express.json())
app.use(express.urlencoded({ extended: true })) // you are running a version of Express that is 4.16+ then type just 沒這樣設定會出現 [Object: null prototype]
app.use('/api/', users)
app.use('/', member)

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
