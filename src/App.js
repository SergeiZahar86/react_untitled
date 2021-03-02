import React from 'react'
import TodoList from "./ToDo/TodoList";
import Context from "./context";
import AddTodo from "./ToDo/AddTodo";

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
			todos.map(todofff =>
			{
				if (todofff.id === id)
				{
					todofff.completed = !todofff.completed
				}
				return todofff
			})
		)
	}

	function removeTodo(id)
	{
		setTodos(todos.filter(todo => todo.id !== id))
	}


	function addTodo(title)
	{
		setTodos(
			todos.concat([
				{
					title,
					id: Date.now(),
					completed: false
				}
			])
		)
	}

	return (
		<Context.Provider value={{removeTodo}}>
			<div className={'wrapper'}>
				<h1>React tutorial</h1>
				<AddTodo onCreate={addTodo}/>
				{todos.length ? <TodoList todosss={todos} onToggle={toggleTodo}/> : <p>No todos!</p>}
			</div>
		</Context.Provider>)
}

export default App;
