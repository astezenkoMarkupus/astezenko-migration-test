import { useEffect, useState } from 'react'
import characters from '../store/characters'
import { observer } from 'mobx-react-lite'

const Characters = observer( () => {
	useEffect( () => {
		characters.loadCharacters()
	}, [] )

	return (
		<div className="chars">
			Page Characters
			{
				characters.characters.length
					? characters.characters.map( char => <div key={ char.id }>{ char.name }</div> )
					: null
			}
		</div>
	)
} )

export default Characters
