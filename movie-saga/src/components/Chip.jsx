import React from 'react'

export default function Chip(genres) {
  return (
    <>
    <div className="chips">
    {
      genres.map((movie)=>{
        return(
          <>
          <button className='btn btn--outlined '>{movie.name}</button>
          </>
        )
      })
    
    }
    
    </div>
    
    </>
    
  )
}
