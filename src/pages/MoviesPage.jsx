import StaticBanner from '../components/StaticBanner'
import MovieSection from '../components/MovieSection'
import RankedMovieSection from '../components/RankedMovieSection'
import bannerEstrada from '../assets/banners/banner-estrada-sombria.jpg';

import {  
    novidades, 
    filmesEmAlta, 
    seriesViciantes,
    filmesClassicos, 
    top10Series,
} from '../data/moviesData';

function MoviesPage() {
  return (
    <div>

      <StaticBanner
        tag="EM DESTAQUE"
        title="A Estrada Sombria"
        year="2025"
        type="Suspense / Terror"
        ageRating="16"
        duration="1h 52min"
        synopsis="Um homem retorna à cidade natal após anos de ausência e se depara com uma estrada isolada onde um carro antigo aparece todas as noites. Quanto mais ele se aproxima, mais percebe que algo o está esperando do outro lado da névoa."
        image={bannerEstrada}
      />

      <RankedMovieSection
        title="Brasil: top 10 filmes hoje"
        movies={top10Series}
      />

      <MovieSection
          title="Filmes clássicos"
          movies={filmesClassicos}
      />

        <MovieSection
          title="Novidades fresquinhas na Lumina"
          movies={filmesEmAlta}
      />

      <MovieSection
          title="Filmes viciantes"
          movies={novidades}
      />

      <MovieSection
          title="Para toda a família"
          movies={filmesClassicos}
      />

      <MovieSection
          title="filmes mais assistidos"
          movies={novidades}
      />

      <MovieSection
          title="filmes emocionantes"
          movies={filmesEmAlta}
      />

      <MovieSection
          title="Pra se divertir e relaxar"
          movies={seriesViciantes}
      />

      <MovieSection
          title="Filmes de suspense"
          movies={filmesClassicos}
      />
    </div>
  )
}

  export default MoviesPage