import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MdOutlineSearch } from "react-icons/md";
import { AiOutlineBell } from "react-icons/ai";
import { FiMenu, FiX } from "react-icons/fi";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const handleLogoClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  // Verifica se o link está ativo
  const isActive = (path) => location.pathname === path;

  const linkClass = (path) =>
    `transition-colors ${
      isActive(path)
        ? "text-accent font-medium"
        : "text-text-light hover:text-accent-soft"
    }`;

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-black/30 backdrop-blur-md rounded-full shadow-md border border-white/10">
      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-4">
        
        {/* Logo */}
        <Link 
          to="/" 
          onClick={handleLogoClick}
          className="text-xl font-bold tracking-wider text-accent drop-shadow-[0_2px_4px_black] hover:text-accent-soft transition-colors"
        >
          LUMINA
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex" aria-label="Navegação principal">
          <ul className="flex gap-6">
            <li>
              <Link to="/" className={linkClass("/")}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/filmes" className={linkClass("/filmes")}>
                Filmes
              </Link>
            </li>
            <li>
              <Link to="/series" className={linkClass("/series")}>
                Séries
              </Link>
            </li>
            <li>
              <Link to="/minha-lista" className={linkClass("/minha-lista")}>
                Minha Lista
              </Link>
            </li>
          </ul>
        </nav>

        {/* Ações da direita + Hambúrguer */}
        <div className="flex items-center gap-3 md:gap-5 text-text-light">
          
          {/* Busca (desktop) */}
          <div className="hidden md:flex items-center gap-2 border-b border-amber-50/40 pb-1">
            <MdOutlineSearch className="h-5 w-5 text-amber-50/60" aria-hidden="true" />
            <input
              type="search"
              placeholder="Buscar títulos..."
              aria-label="Buscar títulos"
              className="bg-transparent text-sm text-text-light focus:outline-none w-40 placeholder:text-amber-50/50"
            />
          </div>

          {/* Notificação */}
          <button 
            className="hover:text-accent-soft transition-colors"
            aria-label="Notificações"
          >
            <AiOutlineBell className="h-5 w-5" />
          </button>

          {/* Entrar */}
          <Link 
            to="/login" 
            className="hidden sm:block text-sm font-medium hover:text-accent-soft transition-colors"
          >
            Entrar
          </Link>

          {/* Hambúrguer (mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-1 hover:text-accent-soft transition-colors"
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {isMenuOpen && (
        <nav 
          id="mobile-menu"
          className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 rounded-b-3xl"
          aria-label="Menu mobile"
        >
          <ul className="flex flex-col px-6 py-4 gap-1 text-base">
            {/* Busca mobile */}
            <li className="pb-3 mb-2 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MdOutlineSearch className="h-5 w-5 text-amber-50/60" aria-hidden="true" />
                <input
                  type="search"
                  placeholder="Buscar títulos..."
                  aria-label="Buscar títulos"
                  className="bg-transparent text-sm text-text-light focus:outline-none w-full placeholder:text-amber-50/50"
                />
              </div>
            </li>

            <li>
              <Link to="/" onClick={closeMenu} className={`block py-3 ${linkClass("/")}`}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/filmes" onClick={closeMenu} className={`block py-3 ${linkClass("/filmes")}`}>
                Filmes
              </Link>
            </li>
            <li>
              <Link to="/series" onClick={closeMenu} className={`block py-3 ${linkClass("/series")}`}>
                Séries
              </Link>
            </li>
            <li>
              <Link to="/minha-lista" onClick={closeMenu} className={`block py-3 ${linkClass("/minha-lista")}`}>
                Minha Lista
              </Link>
            </li>
            <li className="pt-2 mt-2 border-t border-white/10">
              <Link to="/login" onClick={closeMenu} className="block py-3 font-medium hover:text-accent-soft transition-colors">
                Entrar
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;