import { useState } from "react";

const CATEGORIES = [
  "Todos",
  "Série",
  "Filme",
  "Ação",
  "Aventura",
  "Comédia",
  "Drama",
  "Fantasia",
  "Ficção Científica",
  "Suspense",
  "Terror",
  "Documentário",
];

function GenreChip() {
  const [selected, setSelected] = useState("Todos");

  return (
    <div 
      className="flex flex-wrap items-center justify-center gap-1.5 px-4 tracking-wide py-5 sm:py-8"
      role="group"
      aria-label="Filtrar por gênero"
    >
      {CATEGORIES.map((genre) => {
        const isActive = selected === genre;

        return (
          <button
            key={genre}
            onClick={() => setSelected(genre)}
            aria-pressed={isActive}
            className={`
              text-sm font-normal px-3.5 py-1.5 rounded-full 
              transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent 
              
              ${ isActive ? "bg-white text-black" : "text-text-light/80 hover:bg-white/10 hover:text-white"
              }
            `}
          >
            {genre}
          </button>
        );
      })}
    </div>
  );
}

export default GenreChip;