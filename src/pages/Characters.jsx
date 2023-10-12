import { useEffect } from 'react'
import characters from '../store/characters'
import { observer } from 'mobx-react-lite'

const Characters = observer( () => {
	useEffect( () => {
		characters.loadCharacters()
	}, [] )

	const getCharactersCount = () => {
		return Object.keys( characters.allCharactersInfo ).length ? `(${ characters.allCharactersInfo.count })` : ''
	}

	return (
		<div className="chars">
			Page Characters { getCharactersCount() }
			{
				characters.allCharacters.length
					? characters.allCharacters.map( char => <div key={ char.id }>{ char.name }</div> )
					: null
			}
		</div>
	)
} )

export default Characters
