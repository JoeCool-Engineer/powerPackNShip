import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { BUSINESS } from '../config/businessInfo';

export default function NotFound() {
    return (
        <section className="mx-auto max-w-xl px-4 py-12 text-center text-slate-800">
            <Helmet>
                <title>Page Not Found | Power Pack and Ship</title>
                <meta name="robots" content="noindex" />
            </Helmet>
            <h1 className="text-3xl font-bold">Page not found</h1>
            <p className="mt-3">The page may have moved. Use the menu to find a service or call the store for help.</p>
            <div className="mt-6 flex flex-wrap justify-center gap-4">
                <Link className="rounded-lg bg-green-800 px-4 py-2 font-semibold text-white" to="/">
                    Go to home page
                </Link>
                <a className="rounded-lg border bg-white px-4 py-2 font-semibold" href={`tel:+${BUSINESS.phoneTel}`}>
                    Call {BUSINESS.phoneDisplay}
                </a>
            </div>
        </section>
    );
}
