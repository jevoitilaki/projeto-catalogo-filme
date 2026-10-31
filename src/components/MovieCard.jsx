function MovieCard({ movie }) {
  return (
    <article className="group relative w-64 shrink-0 overflow-hidden rounded-2xl bg-neutral-900 shadow-md transition-transform duration-300 hover:scale-105 hover:z-10 sm:w-72">
      <a
        href={`/watch/${movie.id}`}
        className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label={`Assistir ${movie.title}${movie.ageRating ? `, classificação ${movie.ageRating}` : ""}`}
      >
        <div className="relative aspect-video">
          <img
            src={movie.image}
            alt=""
            className="h-full w-full object-cover rounded-2xl"
            loading="lazy"
          />

          {/* Título */}
          <div className="hidden inset-0 items-end justify-center p-3 pb-5">
            <h3 className="text-center text-lg font-black uppercase tracking-wide text-white drop-shadow-lg sm:text-xl">
              {movie.title}
            </h3>
          </div>

          {/* Classificação */}
          {movie.ageRating && (
            <span className="hidden right-2 top-2 rounded-full bg-black/70 px-1.5 py-0.5 text-[10px] font-semibold text-white">
              {movie.ageRating}
            </span>
          )}
        </div>

        {/* Barra de progresso */}
        {movie.progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/25 rounded-2xl">
            <div
              className="h-full bg-red-600"
              style={{ width: `${movie.progress}%` }}
              role="progressbar"
              aria-valuenow={movie.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`Progresso de ${movie.title}: ${movie.progress}%`}
            />
          </div>
        )}
      </a>
    </article>
  );
}

export default MovieCard;