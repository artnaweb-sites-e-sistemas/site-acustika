import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Aparelhos from './pages/Aparelhos';
import Acessorios from './pages/Acessorios';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/aparelhos" element={<Aparelhos />} />
          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
