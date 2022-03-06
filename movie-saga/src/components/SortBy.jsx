import React from 'react'

export default function SortBy({highestRating , lowestRating ,ascOrderTitle,descOrderTitle }) {
  return (
    <>
        <button onClick={highestRating} className='btn'>Highest Rating</button>
        <button onClick={lowestRating} className='btn'>Lowest Rating</button>
        <button onClick={ascOrderTitle} className='btn'>Title Order A-Z</button>
        <button onClick={descOrderTitle} className='btn'>Title Order Z-A</button>
    </>
  )
}
