import React, { FC, useRef } from 'react'
import { useAuth } from './AuthContext'
import { useLocalStorage } from './hooks/local-storage/useLocalStorage'
import { initialState } from './reducer'

const AppTs: FC = () => {
	const { isAuth } = useAuth()
	const [todos, setTodos] = useLocalStorage('todos', initialState)

	const inputRef = useRef<HTMLInputElement>(null)
	inputRef.current?.value

	return (
		<div style={{ marginTop: 100 }}>
			TypeScript Version {isAuth && 'Авторизован'}
			<button
				onClick={() =>
					setTodos(
						todos.map((t: any, i: number) => {
							if (i === 1) t.isCompleted = true

							return t
						})
					)
				}
			>
				Change second todo
			</button>
		</div>
	)
}

export default AppTs
