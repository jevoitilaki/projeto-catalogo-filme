import { BsFillPlayFill } from "react-icons/bs";


function PlayButton() {
  return (

    <button 
        className="inline-flex items-center justify-center gap-2 bg-white text-black font-medium px-5 py-2.5 sm:px-5 sm:py-2.5 rounded-full text-sm sm:text-base hover:bg-white/80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 min-h-10 sm:min-h-11"
    >
        <BsFillPlayFill className="h-5 w-5 " aria-hidden="true"/>
        Assistir
    </button>

  );
}

export default PlayButton;
