import React, { useEffect, useState } from 'react'

function App() {
	const [data, setData] = useState({})

	useEffect(() => {
		console.log('Hello')
	}, [data.name])


	return (
		<div>
			<h3>htmllessons.ru (JS Version)</h3>
			<input value={data.name} onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} placeholder="Enter name" />
			<div>
				<b>Value:</b>
				{data.name}
			</div>
		</div>
	)
}

export default App
