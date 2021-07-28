const express = require('express')
const app = express()
const port = 3000

const fs = require('fs');

app.use(express.json());



app.get('/fecha', (req, res) => {
    res.send(`La fecha de hoy es ${new Date().toLocaleDateString()}`)
  })

app.get('/texto',(req,res) => {
    fs.readFile('texto.txt','utf-8',(err,data)=>{
        if(err) res.send(err)
        res.send(data)
    })
})


// app.get('/:name', (req, res) => {
//   res.send(`Buenos dias ${req.params.name}`)
// })

//Probado usando Postman
app.post('/saludo',(req,res) =>{
    console.log(req.body)
    res.send(`Buenos dias ${req.body.nombre}`)
})


app.listen(port, () => {
  console.log(`app listening at http://localhost:${port}`)
})
