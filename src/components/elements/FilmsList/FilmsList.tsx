import React from 'react'
import { useFilms } from '../../../hooks/useFilm'
import FilmCard from '../FilmCard/FilmCard'
import styles from './FilmsList.module.css'

const FilmsList: React.FC = () => {
	const { films, loading, error } = useFilms()

	if (loading) return <div className={styles.loading}>Loading films...</div>
	if (error) return <div className={styles.error}>Error: {error}</div>
	if (!films?.length) return <div className={styles.empty}>No films found</div>

	return (
		<div className={styles.filmsGrid}>
			{films.map(film => (
				<FilmCard key={film.id} film={film} />
			))}
		</div>
	)
}

export default FilmsList
