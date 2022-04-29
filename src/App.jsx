import QRCode from 'qrcode'
import { useState } from 'react'
import logo from './logo.svg';

function App() {
	const [url, setUrl] = useState('')
	const [qr, setQr] = useState('')

	const GenerateQRCode = () => {
		QRCode.toDataURL(url, {
			width: 800,
			margin: 2,
			color: {
				dark: '#0a192f',
				light: '#EEEEEEFF'
			}
		}, (err, url) => {
			if (err) return console.error(err)

			console.log(url)
			setQr(url)
		})
	}

	return (
		<div className="app">
			<img src={logo} className="App-logo" alt="QR CODE"/>
			<h1>QR Code Generator</h1>
			<input 
				type="text"
				placeholder="e.g. https://khushnooasif.com"
				value={url}
				onChange={e => setUrl(e.target.value)} />
			<button onClick={GenerateQRCode}>Generate</button>
			{qr && <>
				<img src={qr} />
				<a href={qr} download="qrcode.png">Download Now!</a>
			</>}
		</div>
	)
}

export default App
