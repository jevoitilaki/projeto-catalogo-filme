import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import MoviesPage from "./pages/MoviesPage";
import SeriesPage from "./pages/SeriesPage";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import MyListPage from "./pages/MyListPage";


export default function App() {
  return (
    <BrowserRouter>

    <ScrollToTop />
    <Header />

      <main>
        
        <Routes>

          <Route path="/" element={<Home />} />

          <Route 
            path="/filmes" 
            element={<MoviesPage />} 
          />

          <Route 
            path="/series" 
            element={<SeriesPage />} 
          />

          <Route 
            path="/minha-lista" 
            element={<MyListPage />} 
          />

          <Route 
            path="/login" 
            element={<div className="min-h-screen bg-black text-white p-6"><h1 className="text-3xl">Login</h1></div>} 
          />

          <Route path="*" element={<div className="text-white p-6">Página não encontrada</div>} />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}