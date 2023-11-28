import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import episodes from '../store/episodes'
import { getCount } from '../helpers/helpers'

const Episodes = observer( () => {
	useEffect( () => {
		episodes.loadEpisodes()
	}, [] )

	return (
		<div className="episodes">
			<div className="w-full font-bold mb-5">Episodes { getCount( episodes.allEpisodesInfo ) }</div>

			<div className="episodes-inner grid grid-cols-4 gap-6 justify-between">
				{
					episodes.allEpisodes.length
						? episodes.allEpisodes.map( episode => <div key={ episode.id }>{ episode.name }</div> )
						: null
				}
			</div>
		</div>
	)
} )

export default Episodes
