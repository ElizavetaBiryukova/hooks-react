import React, { useEffect, useLayoutEffect, useRef } from 'react'

function App() {
	const inputRef = useRef(null)

	useLayoutEffect(() => {
		console.log(inputRef.current.value)
	}, [])

	useEffect(() => {
		inputRef.current.value = 'Vasya'
	}, [])


	return (
		<div>
			<h3>htmllessons.ru (JS Version)</h3>
			<input
				ref={inputRef}
				placeholder="Enter name"
				defaultValue="Liza" />

		</div>
	)
}

export default App
