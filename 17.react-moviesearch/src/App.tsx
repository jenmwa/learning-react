
import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Router'
import { useEffect, useReducer } from 'react'
import { getMovies } from './services/MovieService'
import { MoviesReducer } from './reducers/MoviesReducer'
import { MoviesContext } from './contexts/MoviesContext'
import { MoviesDispatchContext } from './contexts/MoviesDispatchContext'

function App() {
  const [movies, dispatch] = useReducer(MoviesReducer, [])

  useEffect(() => {
    if (movies.length > 0) {
      return;
    }

    const getData = async () => {
      const movies = await getMovies();
      dispatch({ type: 'GOTMOVIES', payload: JSON.stringify(movies) })
    }
    if (movies.length === 0) {
      getData();
    }
  })

  return (
    <>
      <MoviesContext.Provider value={movies}>
        <MoviesDispatchContext.Provider value={dispatch}>
          <RouterProvider router={router}></RouterProvider>
        </MoviesDispatchContext.Provider>
      </MoviesContext.Provider>
    </>
  )
}

export default App
