import { useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import MovieCard from "./MovieCard";

function MovieSection({ title, movies }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;

    const amount = scrollRef.current.clientWidth * 0.75;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  if (!movies || movies.length === 0) return null;

  return (
    <section
      className="py-5 ml-8"
      aria-labelledby={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="mb-4 flex items-center justify-between px-4 sm:px-6">

        {/* Título da seção */}
        <h2
          id={`section-${title.replace(/\s+/g, "-").toLowerCase()}`}
          className="text-lg font-semibold text-white sm:text-2xl tracking-wide"
        >
          {title}
        </h2>

        {/* Botões de rolagem */}
        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            aria-label="Rolar para a esquerda"
            className="text-2xl text-white/80 transition hover:text-accent-soft/70"
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Rolar para a direita"
            className="text-2xl text-white/80 transition hover:text-accent-soft/70"
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>

      {/* Cartões dos filmes */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto px-4 sm:gap-4 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar:none]"
      >
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;