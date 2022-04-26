const express = require("express");
const http = require("http");
const socketIo = require('socket.io');
const port = process.env.PORT || 4001;
const index = require('./index');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(index);

const server = http.createServer(app);

const io = require('socket.io')(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
	},
});

let interval;

io.on('connection', (socket) => {
	console.log('New client connected');
	if (interval) {
		clearInterval(interval);
	}
	interval = setInterval(() => getApiAndEmit(socket), 5000);
	socket.on('disconnect', () => {
		console.log('Client disconnected');
		clearInterval(interval);
	});
});

const getApiAndEmit = (socket) => {
	const response = new Date();
	console.log(socket);
	socket.emit('FromAPI', response);
};

server.listen(port, () => console.log(`Listening on port ${port}`));