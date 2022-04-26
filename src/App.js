// import './App.css';
import React, { useEffect, useState } from 'react';
import ClientComponent from './components/ClientComponent';
import ChatForm from './components/ChatForm';

function App() {
	const [loadClient, setLoadClient] = useState(true);

	return (
		<>
			<ChatForm />
			<button onClick={() => setLoadClient((prevState) => !prevState)}>STOP CLIENT</button>
			{/* SOCKET IO CLIENT*/}
			{loadClient ? <ClientComponent /> : null}
		</>
	);
}

export default App;
