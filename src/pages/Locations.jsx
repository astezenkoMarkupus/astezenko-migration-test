import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import locations from '../store/locations'
import { getCount } from '../helpers/helpers'

const Locations = observer( () => {
	useEffect( () => {
		locations.loadLocations()
	}, [] )

	return (
		<div className="locations">
			<div className="w-full font-bold mb-5">Locations { getCount( locations.allLocationsInfo ) }</div>

			<div className="locations-inner grid grid-cols-4 gap-6 justify-between">
				{
					locations.allLocations.length
						? locations.allLocations.map( location => <div key={ location.id }>{ location.name }</div> )
						: null
				}
			</div>
		</div>
	)
} )

export default Locations
