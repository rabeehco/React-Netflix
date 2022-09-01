
export const baseUrl = 'https://api.themoviedb.org/3'
export const API_KEY = '382ed2b378c7475a00eabb7906d18e69'
export const imageUrl = 'https://image.tmdb.org/t/p/original'

export const array = [`${baseUrl}/trending/all/week?api_key=${API_KEY}&language=en-US`,
                      `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,
                      `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=35`,
                      `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=27`,
                      `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=28`,                      
                      `${baseUrl}/discover/movie?api_key=${API_KEY}&with_genres=878` ]

export const genre = ['Trending', 'Action', 'Comedy Movies', 'Horror Movies', 'Action Movies', 'Science Fiction']