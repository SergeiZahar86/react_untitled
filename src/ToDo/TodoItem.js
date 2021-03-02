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
		border: '1px solid #ccc',
		borderRadius: '4px',
		marginBottom: '.5rem'
	},
	input:{
		marginRight: '1rem'
	}
}

function TodoItem({tod, ind, changeCC}){
	//console.log('todo_CHECK', tod)
	const classes = []

	if(tod.completed){
		classes.push('done')
	}


	return (
		<li style={styles1.li}>
            <span className={classes.join(' ')}>
                <input
	                type="checkbox"
	                style={styles1.input}
	                onChange={() => changeCC(tod.id)}
	                checked={tod.completed}
                />
                <strong style={styles.stron}>{ind + 1}</strong>
	            &nbsp;
	            {tod.title}
            </span>
			{/*{tod.id}*/}
			<button className='rm'>&times;</button>
		</li>)
}

// Типизация входных данных для функции TodoItem
TodoItem.propTypes = {
	tod:PropTypes.object.isRequired,
	ind:PropTypes.number,
	changeCC: PropTypes.func.isRequired
}

export default TodoItem

