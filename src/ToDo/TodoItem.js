import React from 'react'
import PropTypes from 'prop-types'    // подключаем для типизации
import TodoList from "./TodoList";

const styles = {
	stron: {
		margin: 5,
		padding: 0
	}
}

const styles1 = {
	li:{
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '.5rem 1rem',
		border: '1px solid #ccc'
	}
}

function TodoItem({tod, ind}){
	return (
		<li style={styles1.li}>
            <span>
                <input type="checkbox"/>
                <strong style={styles.stron}>{ind + 1}</strong>
	            {tod.title}
            </span>
			{/*{tod.id}*/}
			<button>&times;</button>
		</li>)
}

// Типизация входных данных для функции TodoItem
TodoItem.propTypes = {
	tod:PropTypes.object.isRequired,
	ind:PropTypes.number
}

export default TodoItem

