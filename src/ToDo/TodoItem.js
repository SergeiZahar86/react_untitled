import React from 'react'



export default function TodoItem(oness1, index2){
	return (
		<li>
			<strong>{index2.index + 1}</strong>
			{oness1.oness.title}
		</li>)
}


