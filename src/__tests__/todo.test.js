import { render, screen, cleanup } from '@testing-library/react'
import renderer from 'react-test-renderer'
import App from '../App'
import ToDo from '../ToDo'
import ToDoForm from '../ToDoForm'

afterEach(() => {
    cleanup()
})

test('should render todo form component', () => {
    render(<ToDoForm />)
    const todoFormElement = screen.getByTestId('todoform-1')
    expect(todoFormElement).toBeInTheDocument();
})

test('should render app component', () => {
    render(<App />)
    const appElement = screen.getByTestId('app-1')
    expect(appElement).toBeInTheDocument();
    expect(appElement).toHaveTextContent('Список завдань:');
})

test('should render todo component', () => {
    const todo = { id: 1, task: 'text', complete: true }
    render(<ToDo todo={todo}/>)
    const todoElement = screen.getByTestId('todo-1')
    expect(todoElement).toBeInTheDocument()
})

test('matches snapshot', () => {
    const todo = { id: 1, task: 'text', complete: true }
    const tree = renderer.create(<ToDo todo={todo}/>).toJSON()
    expect(tree).toMatchSnapshot()
})