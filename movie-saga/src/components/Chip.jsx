

export default function Chip({genres , getMovieByGenres}) {

  return (
    <>
    <div className="chips">
    {
      genres.map((movie)=>{
        return(
          <>
          <button onClick={()=> getMovieByGenres(movie.name)} className='btn btn--outlined '>{movie.name}</button>
         
          </>
        )
      })
    
    }
    
    </div>
    
    </>
    
  )
}
