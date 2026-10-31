function RankedMovieCard({ movie, rank }) {
  return (
    <article className="relative w-40 shrink-0 sm:w-48 md:w-52">

      {/* Badge do ranking */}
      <div
        className="absolute -top-3 left-1/2 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-accent-soft text-base font-bold text-black shadow-md"
        aria-hidden="true"
      >
        {rank}
      </div>

      {/* Card  */}
      <div className="overflow-hidden rounded-2xl border-t-4 border-t-accent-soft transition-transform duration-300 hover:scale-105 hover:z-10">
        <img
          src={movie.image || movie.poster}
          alt={`Poster de ${movie.title}`}
          className="aspect-2/3 w-full object-cover"
        />
      </div>
    </article>
  );
}

export default RankedMovieCard;