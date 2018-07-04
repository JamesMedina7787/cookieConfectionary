const express = require('express')
const ejs = require('ejs')
const cookieParser=require('cookie-parser')
const bodyParser = require('body-parser')
const app = express()
const PORT = process.env.PORT || 3000

app.set('view engine', 'ejs')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static('public'))

app.use(cookieParser())

let sugar = 0
let chocolate = 0
let almond = 0


app.get('/', (req, res)=>{
  sugar = req.cookies.sugar || 0
  chocolate = req.cookies.chocolate || 0
  almond = req.cookies.almond || 0

  return res.render('cookies', {sugar,chocolate,almond})
})

app.post('/sugar', (req, res)=>{
  sugar++
  res.cookie('sugar', sugar, {maxAge: 90000})
  res.redirect('/')
})

app.post('/almond', (req, res)=>{
  almond++
  res.cookie('almond', almond, {maxAge: 90000})
  res.redirect('/')
})

app.post('/chocolate', (req, res)=>{
  chocolate++
  res.cookie('chocolate', chocolate, {maxAge: 90000})
  res.redirect('/')
})

app.post('/feel-guilty', (req, res)=>{
  sugar=0
  chocolate=0
  almond=0

  res.cookie('sugar', sugar, {maxAge: 90000})
  res.cookie('almond', almond, {maxAge: 90000})
  res.cookie('chocolate', chocolate, {maxAge: 90000})

      res.redirect('/')
})

app.listen(PORT, ()=>{
  console.log("works")
})
