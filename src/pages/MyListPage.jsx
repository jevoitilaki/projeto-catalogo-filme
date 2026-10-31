import MovieSection from "../components/MovieSection"

import {  
    novidades, 
    filmesEmAlta, 
    filmesClassicos,
    continueWatching
} from '../data/moviesData';


function MyListPage (){
    return(

        <div className="mt-26">

        <MovieSection
        title="Continue assistindo"
        movies={continueWatching}
        />

        <MovieSection
          title="Sua lista"
          movies={filmesClassicos}
        />

        <MovieSection
          title="você amou"
          movies={filmesEmAlta}
        />

      <MovieSection
          title="Assistir novamente"
          movies={novidades}
        />

        </div>
    )
}

export default MyListPage