import { useState } from 'react';
import './App.css';
import { QrReader } from 'react-qr-reader'


function App() {
  const [data, setData] = useState('No result');
  return (
    <>
      <div>
        <h1>QR Code Reader</h1>    
        <div style={{border: '1px solid red'}}>
        <QrReader
        onResult={(result, error) => {
          if (result) {
            setData(result?.text);
          }
          
          if (error) {
            console.info(error);
          }
        }}
        style={{ width: '100%'}}
        />
      </div>        
      <p>{data}</p>     
      </div>
    </>
  )
}

export default App
