const express = require("express");

const app = express()

app.use(express.json())
app.get("/", (req, res) =>{

res.status(201).json("HelloWorld");

})


app.listen(3000,() => {

  console.log('Conectado na porta 3000')

})


app.post("/",(req,res) => {

res.status(200)

console.log(req.body)


})

