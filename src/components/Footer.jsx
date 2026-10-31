import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white/70 mt-12" role="contentinfo">

      <div className="max-w-7xl mx-auto px-6 md:px-10 py-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          
          {/* Logo + descrição */}
          <div>
            <Link 
              to="/" 
              className="text-xl font-bold tracking-wider text-white hover:text-accent-soft transition-colors"
              aria-label="Lumina - Página inicial"
            >
              LUMINA
            </Link>
            <p className="mt-2 text-sm text-white/50 max-w-xs">
              Seu catálogo de filmes e séries.
            </p>
          </div>

          {/* Links de navegação */}
          <nav aria-label="Links do rodapé">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/filmes" className="hover:text-white transition-colors">
                  Filmes
                </Link>
              </li>
              <li>
                <Link to="/series" className="hover:text-white transition-colors">
                  Séries
                </Link>
              </li>
              <li>
                <Link to="/minha-lista" className="hover:text-white transition-colors">
                  Minha Lista
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Linha inferior */}
        <div className="mt-8 pt-6 border-t border-white/5 text-xs text-white/40 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p>© {new Date().getFullYear()} Lumina. Todos os direitos reservados.</p>
          
          <nav aria-label="Links legais">
            <ul className="flex gap-4">
              <li>
                <a href="#" className="hover:text-white/70 transition-colors">
                  Termos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white/70 transition-colors">
                  Privacidade
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}