import SortBy from "./SortBy"


export default function Chip({genres , getMovieByGenres , lowestRating,highestRating , descOrderTitle, ascOrderTitle}) {

  return (
    <>
    <div className="chips">
    {
      genres.map((movie)=>{
        return(
          <>
          <button onClick={()=> getMovieByGenres(movie.id)} className='btn btn--outlined '>{movie.name}</button>
          </>
        )
      })
    
    }
    </div>
    <SortBy lowestRating={lowestRating} highestRating={highestRating} descOrderTitle={descOrderTitle} ascOrderTitle={ascOrderTitle} />
    
    </>
    
  )
}
