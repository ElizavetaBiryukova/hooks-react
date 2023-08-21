import { useDebugValue, useState } from 'react'

export const useName = () => {
	const [name, setName] = useState('')

	useDebugValue(name ? 'Имя есть' : 'Без имени')

	return { name, setName }
}
