import { useState } from 'react'

function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput('')
    }

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSubmit(e)
        }
    }

    return (
        <form data-testid='todoform-1' onSubmit={handleSubmit}>
            <input
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Введіть значення'
            />
            <button>Зберегти</button>
        </form>
    )
}

export default ToDoForm