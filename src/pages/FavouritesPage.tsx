import React from 'react'
import { useAppSelector } from '../hooks/redux'
import { useActions } from '../hooks/actions'
import { IRepo } from '../models/models'

const FavouritesPage = () => {
  const { removeFavourite } = useActions()
  const {favourites} = useAppSelector(state => state.github)
  if(favourites.length === 0) return <p>No Items.</p>

  return (
    <div className='flex justify-center pt-10 mx-auto h-screen w-screen'>
      <ul className='list-none'>
        {favourites.map(i => (
          <li 
            className='flex justify-between border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition all'
            key={i}>
            <a 
              href={i}
              target='blank'
            >{i}</a>
            <button className='px-1 bg-red-400 rounded ml-2 hover:shadow-md transition-all'
              onClick={() => removeFavourite(i)}
            >Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FavouritesPage