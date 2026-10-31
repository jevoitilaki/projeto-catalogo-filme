import Banner from '../components/Banner'
import GenreChip from '../components/GenreChip'
import MovieSection from '../components/MovieSection'
import RankedMovieSection from '../components/RankedMovieSection'

import { 
    continueWatching, 
    novidades, 
    filmesEmAlta, 
    seriesViciantes,
    filmesClassicos, 
    top10Series,
} from '../data/moviesData';

export default function Home() {
  return (
    <div>

      <Banner />
      <GenreChip />

        <MovieSection
            title="Continuar assistindo como Jéssica"
            movies={continueWatching}
        />

        <MovieSection
            title="Filmes clássicos"
            movies={filmesClassicos}
        />

        <MovieSection
            title="Novidades na Lumina"
            movies={novidades}
        />

        <RankedMovieSection
        title="Brasil: top 10 em séries hoje"
        movies={top10Series}
      />

        <MovieSection
            title="Filmes em alta"
            movies={filmesEmAlta}
        />

        <MovieSection
            title="Séries viciantes"
            movies={seriesViciantes}
        />

        <MovieSection
            title="Para um fim de semana divertido"
            movies={filmesClassicos}
        />

    </div>
  )
}