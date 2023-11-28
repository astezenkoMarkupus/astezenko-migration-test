import s from './Character.module.scss'

const Character = ( { char } ) => {
	const { name, image } = char

	return (
		<div className={ s.char }>
			<img src={ image } alt={ name }/>
			{ name }
		</div>
	)
}

export default Character