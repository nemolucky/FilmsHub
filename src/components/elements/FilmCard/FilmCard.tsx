import { useState, type FC } from 'react'
import { type Film } from '../../../types/film.interface'
import styles from './FilmCard.module.css'

type Props = {
	film: Film
}

const FilmCard: FC<Props> = ({ film }) => {
	const [isFavorite, setIsFavorite] = useState(false)

	const handleFavoriteClick = (e: React.MouseEvent) => {
		e.stopPropagation()
		setIsFavorite(!isFavorite)
	}

	return (
		<div className={styles.filmCard}>
			<div className={styles.poster}>
				<img
					src={film.posterUrl}
					alt={film.nameRu}
					className={styles.posterImage}
				/>
				<button
					className={`${styles.favoriteButton} ${
						isFavorite ? styles.favoriteActive : ''
					}`}
					onClick={handleFavoriteClick}
					aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
				>
					{isFavorite ? '❤️' : '🤍'}
				</button>
			</div>
			<div className={styles.info}>
				<div className={styles.title}>{film.nameRu}</div>
				<div className={styles.rating}>Rating: {film.ratingKinopoisk}</div>
			</div>
		</div>
	)
}

export default FilmCard
