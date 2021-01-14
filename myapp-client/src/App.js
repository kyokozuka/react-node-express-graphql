import { useState } from 'react';
import './App.css';
import { request } from 'graphql-request'

const url = 'http://localhost:4000/graphql'

const query = `
  query helloWorld {
    helloWorld
  }
`

function App() {
  const [hello, setHello] = useState('');

  const graphQL = async () => {
    const result = await request(url, query)
    setHello(result.helloWorld)
  }

  return (
    <div className="App">
      <button onClick={graphQL}>Click</button>
      <div>{hello}</div>
    </div>
  );
}

export default App;