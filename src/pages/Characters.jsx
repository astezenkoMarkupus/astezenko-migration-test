import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import characters from '../store/characters'
import { getCount } from '../helpers/helpers'
import Character from '../components/Character/Character'

const Characters = observer( () => {
	useEffect( () => {
		characters.loadCharacters()
	}, [] )

	return (
		<div className="chars">
			<div className="w-full font-bold mb-5">Characters { getCount( characters.allCharactersInfo ) }</div>

			<div className="chars-inner grid grid-cols-4 gap-6 justify-between">
				{
					characters.allCharacters.length
						? characters.allCharacters.map( char => <Character key={ char.id } char={ char } /> )
						: null
				}
			</div>
		</div>
	)
} )

export default Characters
