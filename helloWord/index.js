const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' , (req , res)=>{
     res.send("hello bhushan")
}) 

app.get("/Ragister" , (req , res)=>{
     res.send("<h1> Ragister for this app </h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})