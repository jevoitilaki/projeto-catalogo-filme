import { VscAdd } from "react-icons/vsc";


function AddToListButton() {
  return (
    <button
      className="group relative inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-2.5 py-2.5 sm:px-3 sm:py-3 rounded-full text-sm sm:text-base hover:bg-white/20 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200 min-h-10 sm:min-h-11 backdrop-blur-sm"
      aria-label="Adicionar à minha lista"
      aria-describedby="add-to-list-tooltip"
    >
      <VscAdd className="h-5 w-5" aria-hidden="true" />

      {/* Tooltip */}
      <span
        id="add-to-list-tooltip"
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 whitespace-nowrap rounded bg-white px-3 py-2 text-sm text-black opacity-0 shadow-sm transition-opacity duration-200 group-hover:opacity-100"
      >
        Adicionar à minha lista
      </span>
    </button>
  );
}
export default AddToListButton;
