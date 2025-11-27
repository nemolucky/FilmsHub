import { type Film } from '../types/film.interface'

// const config = {
// 	api: {
// 		url: import.meta.env.VITE_API_URL,
// 		key: import.meta.env.VITE_API_KEY,
// 	},
// }

interface FilmsResponse {
	total: number
	totalPages: number
	items: Film[]
	page?: number
}

export const fetchFilms = async (): Promise<Film[]> => {
	const response = await fetch(
		'https://kinopoiskapiunofficial.tech/api/v2.2/films',
		{
			method: 'GET',
			headers: {
				'X-API-KEY': 'f81df68a-0761-4e3c-9439-cee0d471506a',
				'Content-Type': 'application/json',
			},
		}
	)

	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`)
	}

	const data: FilmsResponse = await response.json()

	console.log(data.items)
	return data.items
}
