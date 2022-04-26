// import './App.css';
import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:4001';

function App() {
	const [response, setResponse] = useState('');
	console.log(response);

	useEffect(() => {
		const socket = socketIOClient(ENDPOINT);
		socket.on('FromAPI', (data) => {
			setResponse(data);
		});
	}, []);

	return (
		<p>
			hello
			<time dateTime={response}>{response}</time>
		</p>
	);
}

export default App;
