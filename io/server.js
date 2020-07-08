const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io').listen(server).sockets;

app.get('/', (req, res) => {
    res.sendFile(__dirname, '/index.html')
})


io.on("connection", socket => {
    console.log('a cuseReduceronnected')
    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

 
})

const port = process.env.PORT || 5000;


server.listen(port, () => {
    console.log(`${port}`)
})