import { Helmet } from "react-helmet";
import services from "../config/services.json"; // adjust path as needed

export default function FingerprintingPricingPage() {
  const { primaryServices, additionalServices } = services;

  return (
    <>
      <Helmet>
        <title>LiveScan Fingerprinting Near Florence & Queen Creek | Power Pack and Ship</title>
        <meta
          name="description"
          content="LiveScan fingerprinting at Power Pack and Ship in San Tan Valley, AZ. Serving Queen Creek and Florence with fast, walk-in fingerprinting services."
        />
        <link rel="canonical" href="https://powerpackandship.com/fingerprinting" />
      </Helmet>

      <div className="min-h-screen text-slate-800">
        {/* Hero / Intro (space reduced by 50%) */}
        <section className="mx-auto max-w-6xl px-4 py-5 text-center">
          <h1 className="text-3xl font-bold md:text-4xl text-green-700 leading-tight">
            Fingerprint Cards through Arizona LiveScan
            <br className="hidden md:block" />
            <span className="text-slate-800 block md:inline"> No Appointment Needed</span>
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto">
            Walk in for fast, professional fingerprinting services for licensing, employment, clearance cards, and more.
          </p>
        </section>

        {/* City Coverage */}
        <section className="mx-auto max-w-6xl px-4 pb-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold">
            Serving San Tan Valley, Queen Creek, & Florence
          </h2>

          <p className="mt-3 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Power Pack and Ship provides fingerprint cards through Arizona LiveScan for individuals and
            businesses across the East Valley. We are conveniently located on Hunt Highway in San Tan Valley. We can also take care of 
            shipping your fingerprint cards for you!
          </p>
        </section>

        {/* PRIMARY SERVICES TABLE */}
        <section className="mx-auto max-w-6xl px-4 py-8 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">
            FD-258, Arizona DPS & Licensing Fingerprinting
          </h3>

          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Common Arizona fingerprinting services for employment, licensing and volunteering. Prices shown are per person.
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
          <h3 className="text-xl md:text-2xl font-semibold">Other Fingerprinting Options</h3>

          <p className="mt-2 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
            Additional fingerprint card services for out-of-state or non-standard requests.
          </p>

          <div className="mt-4 overflow-x-auto rounded-xl border bg-white">
            <table className="w-full min-w-[320px] md:min-w-[720px] text-sm md:text-base">
              <thead className="bg-[#4CAF50] text-black font-semibold text-sm md:text-lg">
                <tr>
                  <th className="px-4 py-3 text-left">Service Type</th>
                  <th className="px-4 py-3 text-center">Price</th>
                </tr>
              </thead>

              <tbody>
                {additionalServices.map((item) => (
                  <tr
                    key={item.service}
                    className="border-t transition-all hover:bg-green-100 hover:font-semibold hover:text-black"
                  >
                    <td className="px-4 py-3 text-left">{item.service}</td>
                    <td className="px-4 py-3 text-center">{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

      {/* Florence + Queen Creek Location Reinforcement */}
        <section className="mx-auto max-w-6xl px-4 pb-6 text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl border bg-white p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">
                Fingerprinting Near Florence, AZ
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                Need fingerprinting near Florence for employment, licensing, or clearance cards?
                We offer fast, walk-in Arizona LiveScan services in nearby San Tan Valley with
                clear pricing and support for common Arizona requirements.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-5 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold">
                Fingerprinting Near Queen Creek, AZ
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                Convenient for Queen Creek residents needing FD-258 or Arizona DPS-related
                fingerprint cards. Walk in during business hours — no appointment needed.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Frequently Asked Questions</h3>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "Can you print multiple fingerprint cards per one visit?", a: "Yes, we can print additional fingerprint cards upon request. Many customers request this option to have an extra card for their records. Each additional card is at a discounted rate of $15 per card." },
              { q: "What should I bring?", a: "Bring your government-issued ID  and the paperwork that tells you what type of fingerprints are required. Power Pack and Ship cannot determin what type of fingerprints you need as each organization has different requirements." },
              { q: "Can you electronically send in my fingerprints to the organization?", a: "No, we cannot. We print the fingerprint cards and depending on what is required, we can mail them in for you or you can hand them in." },
              { q: "Do I need an appointment?", a: "Walk-ins are welcome during all business hours, no need to make an appointment." },
              { q: "What if prints are rejected?", a: "Bring in the rejection letter and we will reprint at no charge." },
              { q: "Do you fingerprint for Hazmat?", a: "No, at  this time we do not have that capability." },
              { q: "Do you do ink fingerprints?", a: "No, we do not offer ink fingerprints." },
              { q: "Do you serve customers from Florence and Queen Creek?", a: "Yes. Many of our walk-in fingerprinting customers travel from Florence and Queen Creek for fast Arizona LiveScan fingerprint cards and clearance-related services."},
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
