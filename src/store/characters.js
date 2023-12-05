import { makeAutoObservable } from 'mobx'

class Characters
{
	charactersInfo	= {}
	characters		= []
	pagesCount		= null
	currentPage		= null

	constructor(){
		makeAutoObservable( this )
	}

	loadCharacters( page = 1 ){
		fetch( `https://rickandmortyapi.com/api/character?page=${ page }` )
			.then( data => data.json() )
			.then( json => {
				this.charactersInfo	= json.info
				this.characters		= json.results
				this.pagesCount		= this.charactersInfo.pages
				this.currentPage	= page
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
