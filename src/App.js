import React from 'react'
import TodoList from "./ToDo/TodoList";

function App()
{
	const [todos, setTodos] = React.useState([
		{id: 1, completed: false, title: 'Купить хлеб'},
		{id: 2, completed: true, title: 'Купить масло'},
		{id: 3, completed: false, title: 'Купить молоко'}
	]);



	function toggleTodo(id)
	{
		setTodos(
		todos.map(todofff => {
			if(todofff.id === id){
				todofff.completed = !todofff.completed
			}
			return todofff
		})
		)
	}

	return (
		<div className={'wrapper'}>
			<h1>React tutorial</h1>

			<TodoList todosss={todos} onToggle={toggleTodo}/>
		</div>);
}

export default App;
