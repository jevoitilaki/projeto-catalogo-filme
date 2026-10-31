import { useState, useEffect } from "react";
import { BsStars, BsPauseFill, BsPlayFill } from "react-icons/bs";
import bannerLast from "../assets/banners/BannerLast.jpg";
import bannerNeon from "../assets/banners/BannerNeon.png";
import bannerVale from "../assets/banners/BannerValeSombras.png";
import bannerReinos from "../assets/banners/BannerReinos.png";
import PlayButton from "./PlayButton";
import MoreInfosButton from "./MoreInfosButton";
import AddToListButton from "./AddToListButton";

const MOVIES_DATA = [
  {
    id: 1,
    tag: "DESTAQUE DA SEMANA",
    title: "The Last Signal",
    year: "2025",
    type: "Ficção Científica",
    ageRating: "16",
    duration: "2h 08min",
    synopsis: "Em um deserto onde o céu parece estar se partindo, um sinal aparece para quem ainda está disposto a escutar.",
    image: bannerLast,
  },
  {
    id: 2,
    tag: "LANÇAMENTO",
    title: "Neon Echoes",
    year: "2026",
    type: "Ação / Cyberpunk",
    ageRating: "18",
    duration: "1h 55min",
    synopsis: "Em uma metrópole dominada por corporações, um detetive renegado descobre uma conspiração que pode alterar a própria essência da humanidade.",
    image: bannerNeon,
  },
  {
    id: 3,
    tag: "MAIS ASSISTIDOS",
    title: "O Vale das Sombras",
    year: "2024",
    type: "Suspense",
    ageRating: "14",
    duration: "2h 12min",
    synopsis: "Uma família se muda para uma casa isolada no campo, mas logo percebe que a floresta ao redor esconde segredos seculares e perturbadores.",
    image: bannerVale,
  },
  {
    id: 4,
    tag: "EM ALTA",
    title: "Reinos de Éter",
    year: "2025",
    type: "Fantasia",
    ageRating: "Livre",
    duration: "1h 48min",
    synopsis: "Dois irmãos encontram um portal no sótão de seu avô que os leva a um mundo mágico prestes a entrar em colapso, onde eles são a única esperança.",
    image: bannerReinos,
  },
];

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (MOVIES_DATA.length === 0 || isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % MOVIES_DATA.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentMovie = MOVIES_DATA[currentIndex];

  if (!currentMovie) return null;

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsPaused(true);
  };

  return (
    <section
      className="relative w-full"
      aria-roledescription="carrossel"
      aria-label="Destaques da semana"
    >
      {/* Imagem — agora ocupa o topo inteiro */}
      <div className="relative h-[70vh] sm:h-[80vh] md:h-[85vh] lg:h-[90vh] xl:h-[92vh] overflow-hidden">
        <img
          src={currentMovie.image}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Gradiente lateral */}
        <div className="absolute inset-y-0 left-0 w-3/4 sm:w-2/3 md:w-1/2 lg:w-[45%] bg-linear-to-r from-black/90 via-black/70 to-transparent pointer-events-none" />

        {/* Gradiente superior (para o header ficar legível) */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-linear-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />

        {/* Conteúdo — com padding-top extra para não ficar colado no header */}
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-5 pb-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 sm:pt-28 md:pt-32">
          <div className="max-w-xl lg:max-w-2xl space-y-3 md:space-y-4">

            {/* Tag */}
            <span className="inline-flex items-center text-xs sm:text-sm tracking-widest text-accent font-medium">
              <BsStars className="mr-1.5 text-base" aria-hidden="true" />
              {currentMovie.tag}
            </span>

            {/* Título */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
              {currentMovie.title}
            </h2>

            {/* Metadados */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/90">
              <span>{currentMovie.year}</span>
              <span className="text-white/40" aria-hidden="true">|</span>
              <span>{currentMovie.type}</span>
              <span className="text-white/40" aria-hidden="true">|</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[11px] sm:text-xs ${
                  currentMovie.ageRating !== "Livre"
                    ? "border border-white/40"
                    : "font-medium"
                }`}
              >
                {currentMovie.ageRating}
              </span>
              <span className="text-white/40" aria-hidden="true">|</span>
              <span>{currentMovie.duration}</span>
            </div>

            {/* Sinopse */}
            <p className="text-base sm:text-base md:text-lg text-white/90 leading-relaxed max-w-md lg:max-w-lg">
              {currentMovie.synopsis}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <PlayButton />
            <MoreInfosButton />
            <AddToListButton />
          </div>
        </div>
      </div>

      {/* Controles */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex items-center gap-3 z-10">
        {/* Indicadores */}
        <div className="flex gap-1.5" role="tablist" aria-label="Slides do carrossel">
          {MOVIES_DATA.map((movie, index) => (
            <button
              key={movie.id}
              onClick={() => goToSlide(index)}
              role="tab"
              aria-selected={index === currentIndex}
              aria-label={`Ir para ${movie.title}`}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white scale-125"
                  : "bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Botão Pausar/Reproduzir */}
        <button
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={isPaused ? "Reproduzir carrossel" : "Pausar carrossel"}
          className="p-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors backdrop-blur-sm"
        >
          {isPaused ? (
            <BsPlayFill className="w-4 h-4 sm:w-5 sm:h-5" />
          ) : (
            <BsPauseFill className="w-4 h-4 sm:w-5 sm:h-5" />
          )}
        </button>
      </div>
    </section>
  );
}

export default Banner;