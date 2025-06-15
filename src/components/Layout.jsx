// src/components/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-theme-sage/10">
            <Header />
            <main className="flex-1 pt-20 relative z-[1]">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;