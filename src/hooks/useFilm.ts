import { useEffect, useState } from 'react'
import { fetchFilms } from '../service/filmService'
import { type Film } from '../types/film.interface'

export const useFilms = (page: number = 1) => {
	const [films, setFilms] = useState<Film[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [error, setError] = useState<string | null>(null)

	useEffect(() => {
		const loadFilms = async () => {
			try {
				setLoading(true)
				setError(null)
				const response = await fetchFilms()
				setFilms(response)
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Unknown error occurred')
				console.error('Error fetching films:', err)
			} finally {
				setLoading(false)
			}
		}

		loadFilms()
	}, [page])

	return {
		films,
		loading,
		error,
		isEmpty: films?.length === 0 && !loading,
	}
}
