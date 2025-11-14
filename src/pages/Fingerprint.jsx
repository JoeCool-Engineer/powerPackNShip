import { Helmet } from "react-helmet";
import services from "../config/services.json"; // adjust path as needed

export default function FingerprintingPricingPage() {
  const { primaryServices, additionalServices } = services;

  return (
    <>
      <Helmet>
        <title>Arizona LiveScan Fingerprinting | Power Pack and Ship</title>
        <meta
          name="description"
          content="LiveScan & ink card fingerprinting at Power Pack and Ship in San Tan Valley, AZ. Serving Queen Creek and Florence with fast, walk-in fingerprinting services."
        />
        <link rel="canonical" href="https://powerpackandship.com/fingerprinting" />
      </Helmet>

      <div className="min-h-screen text-slate-800">
        {/* Hero / Intro (space reduced by 50%) */}
        <section className="mx-auto max-w-6xl px-4 py-5 text-center">
          <h1 className="text-3xl font-bold md:text-4xl text-green-700 leading-tight">
            Arizona LiveScan & Ink Card Fingerprinting
            <br className="hidden md:block" />
            <span className="text-slate-800 block md:inline"> No Appointment Needed</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Walk in for fast, professional fingerprinting services for licensing, employment, DPS
            fingerprint clearance cards, and more.
          </p>
        </section>

        {/* City Coverage */}
        <section className="mx-auto max-w-6xl px-4 pb-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            Serving Queen Creek, San Tan Valley & Florence
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Power Pack and Ship provides LiveScan and ink card fingerprinting for individuals and
            businesses across the East Valley. We’re conveniently located on Hunt Highway in San Tan Valley.
          </p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Queen Creek */}
            <div className="rounded-xl border bg-white p-5 md:p-6 text-center">
              <h3 className="text-lg font-semibold">Near Queen Creek, AZ</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                A quick drive from Queen Creek, ideal for DPS checks, licensing, and employment fingerprinting.
              </p>
            </div>

            {/* San Tan Valley */}
            <div className="rounded-xl border bg-white p-5 md:p-6 text-center">
              <h3 className="text-lg font-semibold">San Tan Valley, AZ</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Located at <strong>270 E Hunt Hwy Ste 16, San Tan Valley, AZ 85143</strong>.
              </p>
            </div>

            {/* Florence */}
            <div className="rounded-xl border bg-white p-5 md:p-6 text-center">
              <h3 className="text-lg font-semibold">Near Florence, AZ</h3>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Florence residents rely on Power Pack and Ship for state, federal,
                and employment-related fingerprinting without long waits.
              </p>
            </div>
          </div>
        </section>

        {/* PRIMARY SERVICES TABLE */}
        <section className="mx-auto max-w-6xl px-4 py-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            Arizona DPS & Licensing Fingerprinting
          </h3>

          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Common Arizona fingerprinting services. Prices shown are per person.
          </p>

          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="w-full min-w-[320px] md:min-w-[720px] text-sm md:text-base">
              <thead className="bg-[#4CAF50] text-black font-semibold text-sm md:text-lg">
                <tr>
                  <th className="px-4 py-3 text-left">Service Type</th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">Custody</th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">Cards</th>
                  <th className="px-4 py-3 text-center">Price</th>
                </tr>
              </thead>

              <tbody>
                {primaryServices.map((item) => (
                  <tr
                    key={item.service}
                    className="border-t transition-all hover:bg-green-100 hover:font-semibold hover:text-black"
                  >
                    <td className="px-4 py-3 text-left">{item.service}</td>
                    <td className="px-4 py-3 text-center hidden md:table-cell">{item.custody}</td>
                    <td className="px-4 py-3 text-center hidden md:table-cell">{item.cards}</td>
                    <td className="px-4 py-3 text-center">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ADDITIONAL SERVICES TABLE */}
        <section className="mx-auto max-w-6xl px-4 py-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Ink Card & General Fingerprinting</h3>

          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Additional fingerprint card services for out-of-state or non-standard requests.
          </p>

          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="w-full min-w-[320px] md:min-w-[720px] text-sm md:text-base">
              <thead className="bg-[#4CAF50] text-black font-semibold text-sm md:text-lg">
                <tr>
                  <th className="px-4 py-3 text-left">Service Type</th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">Cards</th>
                  <th className="px-4 py-3 text-center">Price</th>
                  <th className="px-4 py-3 text-center hidden md:table-cell">Custody</th>
                </tr>
              </thead>

              <tbody>
                {additionalServices.map((item) => (
                  <tr
                    key={item.service}
                    className="border-t transition-all hover:bg-green-100 hover:font-semibold hover:text-black"
                  >
                    <td className="px-4 py-3 text-left">{item.service}</td>
                    <td className="px-4 py-3 text-center hidden md:table-cell">{item.cards}</td>
                    <td className="px-4 py-3 text-center">{item.price}</td>
                    <td className="px-4 py-3 text-center hidden md:table-cell">{item.custody}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Frequently Asked Questions</h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "Do I need an appointment?", a: "Walk-ins are welcome during all business hours." },
              { q: "What should I bring?", a: "A government-issued ID and any fingerprint paperwork." },
              { q: "Do you offer LiveScan?", a: "Yes—availability varies by agency requirements." },
              { q: "What if prints are rejected?", a: "We reprint at no charge for 30 days." }
            ].map((item) => (
              <div key={item.q} className="rounded-xl border bg-white p-5 md:p-6">
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
