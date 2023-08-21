import React from 'react'
import { useName } from './ useName'

function App() {
	const { name, setName } = useName()

	return (
		<div>
			<h3>htmllessons.ru (JS Version)</h3>
			<input
				value={name}
				placeholder="Enter name"
				onChange={e => setName(e.target.value)} />


		</div>
	)
}

export default App
