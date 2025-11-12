// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import ShipIt from './pages/ShipIt';
import PrintIt from './pages/PrintIt';
import GetIt from './pages/GetIt';
import PackIt from './pages/PackIt';
import Merchandise from './pages/Merchandise';
import Fingerprint from './pages/Fingerprint';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/pack-it" element={<PackIt />} />
                    <Route path="/ship-it" element={<ShipIt />} />
                    <Route path="/print-it" element={<PrintIt />} />
                    <Route path="/get-it" element={<GetIt />} />
                    <Route path="/merchandise" element={<Merchandise />} />
                    <Route path="/fingerprint" element={<Fingerprint />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;