import { BsStars } from "react-icons/bs";
import PlayButton from "./PlayButton";
import MoreInfosButton from "./MoreInfosButton";
import AddToListButton from "./AddToListButton";

export default function StaticBanner({ 
  tag = "EM DESTAQUE",
  title,
  year,
  type,
  ageRating,
  duration,
  synopsis,
  image,
  isSeries = false,
}) {
  return (
    <section className="relative w-full">
      
      {/* Imagem */}
      <div className="relative h-[65vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh] overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />

        {/* Gradiente lateral */}
        <div className="absolute inset-y-0 left-0 w-3/4 sm:w-2/3 md:w-1/2 lg:w-[48%] bg-linear-to-r from-black/90 via-black/70 to-transparent pointer-events-none" />

        {/* Gradiente superior */}
        <div className="absolute inset-x-0 top-0 h-32 sm:h-40 bg-linear-to-b from-black/70 via-black/40 to-transparent pointer-events-none" />

        {/* Conteúdo */}
        <div className="absolute inset-0 flex flex-col justify-end md:justify-center px-5 pb-8 sm:px-8 md:px-12 lg:px-16 xl:px-20 pt-24 sm:pt-28 md:pt-32">
          <div className="max-w-xl lg:max-w-2xl space-y-3 md:space-y-4">

            {/* Tag */}
            <span className="inline-flex items-center text-xs sm:text-sm tracking-widest text-accent font-medium">
              <BsStars className="mr-1.5 text-base" aria-hidden="true" />
              {tag}
            </span>

            {/* Título */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white drop-shadow-lg">
              {title}
            </h2>

            {/* Metadados */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-white/90">
              <span>{year}</span>
              <span className="text-white/40" aria-hidden="true">|</span>
              <span>{type}</span>
              <span className="text-white/40" aria-hidden="true">|</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[11px] sm:text-xs ${
                  ageRating !== "Livre"
                    ? "border border-white/40"
                    : "font-medium"
                }`}
              >
                {ageRating}
              </span>
              <span className="text-white/40" aria-hidden="true">|</span>
              <span>{duration}</span>

              {/* Tag de Série */}
              {isSeries && (
                <>
                  <span className="text-white/40" aria-hidden="true">|</span>
                  <span className="px-2 py-0.5 text-[11px] sm:text-xs font-medium bg-white/10 border border-white/20 rounded">
                    Série
                  </span>
                </>
              )}
            </div>

            {/* Sinopse — some no mobile */}
            <p className="hidden md:block text-base md:text-lg text-white/90 leading-relaxed max-w-md lg:max-w-lg">
              {synopsis}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 mt-5 sm:mt-6">
            <PlayButton />
            <MoreInfosButton />
            <AddToListButton />
          </div>
        </div>
      </div>
    </section>
  );
}