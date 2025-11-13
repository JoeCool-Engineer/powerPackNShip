import { Helmet } from "react-helmet";

export default function FingerprintingPricingPage() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Power Pack and Ship",
    image: "https://powerpackandship.com/images/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "270 E Hunt Hwy Ste 16",
      addressLocality: "San Tan Valley",
      addressRegion: "AZ",
      postalCode: "85143",
      addressCountry: "US",
    },
    telephone: "+1-480-987-8517",
    url: "https://powerpackandship.com/fingerprinting",
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-18:00",
    sameAs: ["https://www.facebook.com/powerpackandship"],
  };

  return (
    <>
      <Helmet>
        <title>Arizona LiveScan Fingerprinting | Power Pack and Ship</title>
        <meta
          name="description"
          content="Fast, certified Arizona LiveScan fingerprinting at Power Pack and Ship in San Tan Valley, AZ. Walk-ins welcome — no appointment needed."
        />
      </Helmet>

      <div className="min-h-screen text-slate-800">

        {/* =========================== */}
        {/* MOBILE-FRIENDLY HEADER */}
        {/* =========================== */}
        <section className="mx-auto max-w-6xl px-4 py-10 text-center">
          <h1 className="text-3xl font-bold md:text-4xl text-green-700 leading-tight">
            Arizona LiveScan Fingerprinting Services <br className="hidden md:block" />
            <span className="text-slate-800">No Appointment Needed</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Quick, professional fingerprinting services for licensing,
            employment, background checks, and more — walk in anytime.
          </p>
        </section>

        {/* =========================== */}
        {/* CITY SECTIONS – MOBILE STACK */}
        {/* =========================== */}
        <section className="mx-auto max-w-6xl px-4 pb-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Serving Queen Creek, San Tan Valley, Mesa & Florence
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600">
            Power Pack and Ship provides fast, walk-in fingerprinting to residents
            across the East Valley. No appointment required.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Queen Creek */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold">Near Queen Creek, AZ</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Just minutes from Queen Creek — ideal for DPS checks, security
                licensing, and employment fingerprinting.
              </p>
            </div>

            {/* San Tan Valley */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold">San Tan Valley, AZ</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Located at <strong>270 E Hunt Hwy Ste 16</strong>. Your closest
                walk-in option for fingerprint clearance cards, background checks,
                and LiveScan.
              </p>
            </div>

            {/* Mesa */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold">Mesa, AZ</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Mesa residents visit us for quick, accurate fingerprinting for
                licensing, employment, and MVD services.
              </p>
            </div>

            {/* Florence */}
            <div className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
              <h3 className="text-lg font-semibold">Florence, AZ</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Convenient option for Florence residents needing state or federal
                fingerprinting without long waits.
              </p>
            </div>

          </div>
        </section>

        {/* =========================== */}
        {/* MOBILE SCROLLABLE TABLE */}
        {/* =========================== */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl md:text-2xl font-semibold">
            Pricing Overview
          </h3>

          <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
            <table className="w-full min-w-[650px] text-sm md:text-base">
              <thead className="bg-green-600 text-white font-semibold text-base md:text-lg">
                <tr>
                  <th className="px-4 py-3 text-left">Service Type</th>
                  <th className="px-4 py-3 text-center">Cards</th>
                  <th className="px-4 py-3 text-center">Price</th>
                  <th className="px-4 py-3 text-center">Custody</th>
                </tr>
              </thead>

              <tbody>
                {[
                  { service: "AZ Concealed Carry Weapon", cards: "2", price: "$44", custody: "" },
                  { service: "AZ Insurance - Paper Prints Only", cards: "1", price: "$34", custody: "Required" },
                  { service: "AZ Liquor", cards: "1", price: "$34", custody: "Required" },
                  { service: "AZ Marijuana / Dispensary Agent", cards: "2", price: "$49", custody: "Required" },
                  { service: "AZ Motor Vehicle", cards: "1", price: "$34", custody: "Required" },
                  { service: "AZ Nursing", cards: "1", price: "$29", custody: "" },
                  { service: "AZ Pest Control", cards: "1", price: "$34", custody: "Required" },
                  { service: "AZ Security Guard Card", cards: "1", price: "$29", custody: "" },
                  { service: "AZ DPS Fingerprint Check", cards: "1", price: "$34", custody: "Required" },
                  { service: "IVP Clearance Card", cards: "1", price: "$34", custody: "Required" },
                  { service: "Level One Clearance Card", cards: "1", price: "$29", custody: "" },
                ].map((item) => (
                  <tr
                    key={item.service}
                    className="border-t transition-all hover:bg-green-100 hover:font-semibold hover:text-black"
                  >
                    <td className="px-4 py-3">{item.service}</td>
                    <td className="px-4 py-3 text-center">{item.cards}</td>
                    <td className="px-4 py-3 text-center">{item.price}</td>
                    <td className="px-4 py-3 text-center">{item.custody}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* =========================== */}
        {/* FAQ */}
        {/* =========================== */}
        <section className="mx-auto max-w-6xl px-4 py-12">
          <h3 className="text-xl md:text-2xl font-semibold text-center">
            Frequently Asked Questions
          </h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Do I need an appointment?",
                a: "Walk-ins are always welcome during business hours.",
              },
              {
                q: "What should I bring?",
                a: "Bring a valid ID and any agency paperwork or ORI numbers.",
              },
              {
                q: "Do you offer LiveScan?",
                a: "Yes. Electronic LiveScan capture is available where state regulations allow.",
              },
              {
                q: "What if my prints are rejected?",
                a: "If rejected due to image quality, we reprint for free within 30 days.",
              },
            ].map((item) => (
              <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-5 md:p-6">
                <h4 className="font-medium">{item.q}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
