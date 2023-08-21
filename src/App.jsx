import React, { useState, useMemo } from 'react'

function App() {
	const [name, setName] = useState('')
	const age = 22
	const getName = useCallback(() => ({
		console.log(name)
	}), [name])


	return (
		<div>
			<h3>htmllessons.ru (JS Version)</h3>
			<input
				placeholder="Enter name"
				defaultValue="Liza" />

		</div>
	)
}

export default App
