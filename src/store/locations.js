import { makeAutoObservable } from 'mobx'

class Locations
{
	locationsInfo	= {}
	locations		= []

	constructor(){
		makeAutoObservable( this )
	}

	loadLocations(){
		fetch( 'https://rickandmortyapi.com/api/location' )
			.then( data => data.json() )
			.then( json => {
				this.locationsInfo	= json.info
				this.locations		= json.results
			} )
	}

	get allLocations(){
		return this.locations
	}

	get allLocationsInfo(){
		return this.locationsInfo
	}
}

const locations = new Locations()

export default locations
