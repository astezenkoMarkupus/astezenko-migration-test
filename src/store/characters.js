import { makeAutoObservable } from 'mobx'

class Characters
{
	charactersInfo	= {}
	characters		= []

	constructor(){
		makeAutoObservable( this )
	}

	loadCharacters(){
		fetch( 'https://rickandmortyapi.com/api/character' )
			.then( data => data.json() )
			.then( json => {
				this.charactersInfo	= json.info
				this.characters		= json.results
			} )
	}

	get allCharacters(){
		return this.characters
	}

	get allCharactersInfo(){
		return this.charactersInfo
	}
}

const characters = new Characters()

export default characters
