import HeroLayout from './HeroLayout'
import IntroPage from '../pages/IntroPage';
import VisionPage from '../pages/VisionPage';
import NeedsAndAssetsPage from '../pages/NeedsAndAssetsPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HeroLayout />} />
                <Route path="intro" element={<IntroPage />} />
                <Route path="vision" element={<VisionPage />} />
                <Route path="needsandassets" element={<NeedsAndAssetsPage />} />
            </Routes>
      </BrowserRouter>
    )
}