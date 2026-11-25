// src/App.jsx
import { BrowserRouter, Navigate, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import PrintIt from './pages/PrintIt';
import GetIt from './pages/GetIt';
import PackIt from './pages/PackIt';
import Fingerprint from './pages/Fingerprint';
import NotFound from './pages/NotFound';

const legacyPaths = {
    '/pack-it': '/pack-ship',
    '/ship-it': '/pack-ship',
    '/print-it': '/document-services',
    '/get-it': '/mailbox-rental',
    '/fingerprint': '/fingerprinting',
};

function ServiceRedirect({ pathname }) {
    const { search, hash } = useLocation();
    return <Navigate to={{ pathname, search, hash }} replace />;
}

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/pack-ship" element={<PackIt />} />
                    <Route path="/document-services" element={<PrintIt />} />
                    <Route path="/mailbox-rental" element={<GetIt />} />
                    <Route path="/fingerprinting" element={<Fingerprint />} />
                    {Object.entries(legacyPaths).map(([path, destination]) => (
                        <Route key={path} path={path} element={<ServiceRedirect pathname={destination} />} />
                    ))}
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
