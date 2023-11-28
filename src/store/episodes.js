import { makeAutoObservable } from 'mobx'

class Episodes
{
	episodesInfo	= {}
	episodes		= []

	constructor(){
		makeAutoObservable( this )
	}

	loadEpisodes(){
		fetch( 'https://rickandmortyapi.com/api/episode' )
			.then( data => data.json() )
			.then( json => {
				this.episodesInfo	= json.info
				this.episodes		= json.results
			} )
	}

	get allEpisodes(){
		return this.episodes
	}

	get allEpisodesInfo(){
		return this.episodesInfo
	}
}

const episodes = new Episodes()

export default episodes
