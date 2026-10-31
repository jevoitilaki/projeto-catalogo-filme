import bannerCasaAoLado from "../assets/banners/banner-casa-ao-lado.jpg";
import RankedMovieSection from '../components/RankedMovieSection'
import StaticBanner from "../components/StaticBanner";
import MovieSection from '../components/MovieSection';

import {  
  novidades, 
    filmesEmAlta, 
    seriesViciantes,
    filmesClassicos, 
    top10Series,  

} from '../data/moviesData';

function SeriesPage() {
  return (
    <div>
      <StaticBanner
        tag="SÉRIE EM DESTAQUE"
        title="A Casa ao Lado"
        year="2025"
        type="Suspense / Drama"
        ageRating="16"
        duration="8 episódios"
        synopsis="Uma mulher se muda para uma cidade pequena e começa a notar comportamentos estranhos na casa vizinha. À medida que investiga, descobre que os moradores anteriores desapareceram sem deixar rastros."
        image={bannerCasaAoLado}
      />

     <RankedMovieSection
        title="Brasil: top 10 séries hoje"
        movies={top10Series}
      />

      <MovieSection
          title="Séries clássicas"
          movies={filmesClassicos}
      />

        <MovieSection
          title="Novidades fresquinhas na Lumina"
          movies={filmesEmAlta}
      />

      <MovieSection
          title="Séries viciantes"
          movies={novidades}
      />

      <MovieSection
          title="Para toda a família"
          movies={filmesClassicos}
      />

      <MovieSection
          title="Séries mais assistidos"
          movies={novidades}
      />

      <MovieSection
          title="Séries diversos e emocionantes"
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
  );
}

export default SeriesPage;