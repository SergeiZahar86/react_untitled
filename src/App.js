import React, {useEffect} from 'react'
import TodoList from "./ToDo/TodoList";
import Context from "./context";
import Loader from "./Loader";
import Modal from "./Modal/Modal";
//import AddTodo from "./ToDo/AddTodo";


// useEffect - новый хук в реакт

// ленивая загрузка
const AddTodo = React.lazy(() => import('./ToDo/AddTodo'))



function App()
{
	const [todos, setTodos] = React.useState([
		/*{id: 1, completed: false, title: 'Купить хлеб'},
		{id: 2, completed: true, title: 'Купить масло'},
		{id: 3, completed: false, title: 'Купить молоко'}*/
	]);
	const [loading, setLoading] = React.useState(true)

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=5').then(respons => respons.json()).
		then(todos => {
			setTimeout(() => {
				setTodos(todos)
				setLoading(false)
			}, 2000)

		})
	}, [])

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
				<Modal/>

				// ленивая загрузка
				<React.Suspense fallback={<p>Loading....</p>}>
					<AddTodo onCreate={addTodo}/>
				</React.Suspense>

				{/*<AddTodo onCreate={addTodo}/>*/}
				{loading && <Loader/>}
				{todos.length ? <TodoList todosss={todos} onToggle={toggleTodo}/> : (loading ? null : <p>No todos!</p>)}
			</div>
		</Context.Provider>)
}

export default App;
