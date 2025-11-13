import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Aparelhos from './pages/Aparelhos';
import AparelhoDetalhes from './pages/AparelhoDetalhes';
import OticonXceed from './pages/OticonXceed';
import RextonMCoreR from './pages/RextonMCoreR';
import RextonMCoreIX from './pages/RextonMCoreIX';
import OticonReal from './pages/OticonReal';
import RextonRugged from './pages/RextonRugged';
import RextonCros from './pages/RextonCros';
import OticonZircon from './pages/OticonZircon';
import OticonOwn from './pages/OticonOwn';
import OticonIntent from './pages/OticonIntent';
import OticonCross from './pages/OticonCross';
import OticonPlayPX from './pages/OticonPlayPX';
import ArgosyVistaVUP from './pages/ArgosyVistaVUP';
import ArgosyVistaVR from './pages/ArgosyVistaVR';
import ArgosyVistaV312 from './pages/ArgosyVistaV312';
import ArgosyVistaVM from './pages/ArgosyVistaVM';
import ArgosyVistaVPR from './pages/ArgosyVistaVPR';
import ArgosyVistaBIntra from './pages/ArgosyVistaBIntra';
import RextonReachSlim from './pages/RextonReachSlim';
import RextonReachLiIx from './pages/RextonReachLiIx';
import Acessorios from './pages/Acessorios';
import Contato from './pages/Contato';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
  return (
    <Router basename="/~acustikaauditiva">
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/aparelhos" element={<Aparelhos />} />
            <Route path="/aparelho/:slug" element={<AparelhoDetalhes />} />
            <Route path="/aparelho/oticon-xceed" element={<OticonXceed />} />
            <Route path="/aparelho/rexton-m-core-r" element={<RextonMCoreR />} />
            <Route path="/aparelho/rexton-m-core-ix" element={<RextonMCoreIX />} />
            <Route path="/aparelho/oticon-real" element={<OticonReal />} />
            <Route path="/aparelho/rexton-rugged" element={<RextonRugged />} />
            <Route path="/aparelho/rexton-cros" element={<RextonCros />} />
            <Route path="/aparelho/oticon-zircon" element={<OticonZircon />} />
            <Route path="/aparelho/oticon-own" element={<OticonOwn />} />
            <Route path="/aparelho/oticon-intent" element={<OticonIntent />} />
            <Route path="/aparelho/oticon-cross" element={<OticonCross />} />
            <Route path="/aparelho/oticon-play-px" element={<OticonPlayPX />} />
            <Route path="/aparelho/argosy-vista-v-up" element={<ArgosyVistaVUP />} />
            <Route path="/aparelho/argosy-vista-v-r" element={<ArgosyVistaVR />} />
            <Route path="/aparelho/argosy-vista-v-312" element={<ArgosyVistaV312 />} />
            <Route path="/aparelho/argosy-vista-v-m" element={<ArgosyVistaVM />} />
            <Route path="/aparelho/argosy-vista-v-pr" element={<ArgosyVistaVPR />} />
            <Route path="/aparelho/argosy-vista-b-intra" element={<ArgosyVistaBIntra />} />
            <Route path="/aparelho/rexton-reach-slim" element={<RextonReachSlim />} />
            <Route path="/aparelho/rexton-reach-li-ix" element={<RextonReachLiIx />} />
          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
