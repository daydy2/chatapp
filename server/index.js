const express = require('express');
const app = express();
const PORT = 4000;

const http = require('http').Server(app);
const cors = require('cors')

app.use(cors());

const socketIO = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3000'
    }
})

socketIO.on('conection', (socket) => {
    console.log(`⚡: ${socket.id} user just connected!`);
    socket.on('disconnect', () => {
      console.log('user: A user disconnected')  
    })
});

app.get('/api', (req, res) => {
    res.json({
        message: 'Hello World',
    });
})

http.listen(PORT, () => {
    console.log(`Server is running on ${PORT} 💥`)
})