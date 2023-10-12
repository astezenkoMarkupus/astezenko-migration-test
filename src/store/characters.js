import { makeAutoObservable, runInAction } from 'mobx'

class Characters
{
	characters = []

	constructor(){
		makeAutoObservable( this )
	}

	loadCharacters(){
		fetch( 'https://rickandmortyapi.com/api/character' )
			.then( data => data.json() )
			.then( json => {
				this.characters = json.results
				console.log(json.results)
			} )
	}
}

export default new Characters()
