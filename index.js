const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.use(express.json());
//var cookieParser = require('cookie-parser')
/////////////////////////////////////////////

let comentarios = []

app.get('/comentar', (req, res) => {
    console.log('GET /comentar');
    res.sendFile(path.join(__dirname, '/index.html'));
})
/////////////////////////////////////////////////////////////
app.get('/leercomentarios', (req, res) => {
    console.log('GET /leercomentarios')
    res.send(comentarios)
})

app.post('/comentario', (req, res) => {
    console.log('POST /comentario')
    console.log('El nuevo comentario es:', req.body);

    comentarios.push(req.body);
    console.log('Lista de comentarios:',comentarios)
    res.send({message: 'Comentario creado'})
})


app.delete('/comentario', (req, res) => {
    console.log('DELETE /comentario')
    // { "id": 0 }

    let idComentario = req.body.id;
    comentarios.splice( idComentario ,1);
    
    console.log('Lista de comentarios:',comentarios)
    res.send('Comentario eliminado')
})

/////////////////////////////////////////////
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})