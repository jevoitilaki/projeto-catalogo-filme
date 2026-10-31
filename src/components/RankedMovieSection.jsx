import { useRef } from "react";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import RankedMovieCard from "./RankedMovieCard";

function RankedMovieSection({ title, movies }) {
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

  const sectionId = `section-${title.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section className="pt-15 pb-8 ml-8" aria-labelledby={sectionId}>
      <div className="mb-4 flex items-center justify-between px-4 sm:px-6">
        <h2
          id={sectionId}
          className="text-lg font-semibold text-white sm:text-2xl tracking-wide"
        >
          {title}
        </h2>

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

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto px-4 pb-4 pt-4 sm:gap-8 sm:px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar:none]"
      >
        {movies.map((movie, index) => (
          <RankedMovieCard
            key={movie.id}
            movie={movie}
            rank={index + 1}
          />
        ))}
      </div>
    </section>
  );
}

export default RankedMovieSection;