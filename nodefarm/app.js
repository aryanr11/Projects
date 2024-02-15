const express = require('express')
const fs = require('fs')

const app = express()
app.set('view engine', 'ejs');
app.get('/', (req,res) => {
    let dataAll = fs.readFileSync('./json/data.json','utf-8')
    let data = JSON.parse(dataAll)
    res.render('index',{data : data})
})
app.get('/product', (req,res) => {
    let dataAll = fs.readFileSync('./json/data.json','utf-8')
    let data = JSON.parse(dataAll)
    let Id = req.query.Id
    console.log(Id);
    res.render('product',{Id : Id,data : data})
})
app.listen(3000)