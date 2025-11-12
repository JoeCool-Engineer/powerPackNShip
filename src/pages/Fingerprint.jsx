export default function FingerprintingPricingPage() {
  return (
    <div className="min-h-screen text-slate-800">
      {/* Header Section */}
        <section className="mx-auto max-w-6xl px-4 py-12 text-center">
            <h1 className="text-3xl font-bold md:text-4xl text-green-700">Arizona LiveScan Fingerprinting Services</h1>
            <h2 className="mt-4 text-xl font-bold md:text-2xl text-slate-700">No Appointment Needed</h2>
            <p className="mt-4 text-lg text-slate-700">Looking for fast, reliable fingerprinting in Arizona? Our store partners with Arizona Livescan to provide professional, inkless fingerprinting cards for background checks. Whether you need fingerprint cards for licensing, employment, or certifications, we make it quick and convenient — no appointment required!</p>
        </section>        
      {/* Comparison table */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Pricing Overview</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[#4CAF50] text-white font-semibold text-lg">
              <tr>
                <th className="px-4 py-3 text-left">Service Type</th>
                <th className="px-4 py-3 text-center">Chain of Custody</th>
                <th className="px-4 py-3 text-center">Number of Cards</th>
                <th className="px-4 py-3 text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                { service: 'AZ Concealed Carry Weapon', custody: '', cards: '2', price: '$44' },
                { service: 'AZ Insurance - Paper Prints Only', custody: 'Required', cards: '1', price: '$34' },
                { service: 'AZ Liquor', custody: 'Required', cards: '1', price: '$34' },
                { service: 'AZ Marijuana/Dispensary Agent/Facility Agent, etc.', custody: 'Required', cards: '2', price: '$49' },
                { service: 'AZ Motor Vehicle', custody: 'Required', cards: '1', price: '$34' },
                { service: 'AZ Nursing - Paper Prints Only', custody: '', cards: '1', price: '$29' },
                { service: 'AZ Pest Control', custody: 'Required', cards: '1', price: '$34' },
                { service: 'AZ Security Card', custody: '', cards: '1', price: '$29' },
                { service: 'AZ DPS 2000 - DPS Fingerprint Check', custody: 'Required', cards: '1', price: '$34' },
                { service: 'Fingerprint Clearance Card - Identity Verified (IVP)', custody: 'Required', cards: '1', price: '$34' },
                { service: 'Fingerprint Clearance Card - Level One', custody: '', cards: '1', price: '$29' },
              ].map((item) => (
                <tr
                  key={item.service}
                  className="border-t cursor-pointer transition-colors hover:bg-green-100 hover:text-black hover:font-semibold"
                >
                  <td className="px-4 py-3">{item.service}</td>
                  <td className="px-4 py-3 text-center">{item.custody}</td>
                  <td className="px-4 py-3 text-center">{item.cards}</td>
                  <td className="px-4 py-3 text-center">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Other Fingerprinting Options</h3>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white">
          <table className="w-full min-w-[720px] text-sm">
            <thead className="bg-[#4CAF50] text-white font-semibold text-lg">
              <tr>
                <th className="px-4 py-3 text-left">Options</th>
                <th className="px-4 py-3 text-center">Price</th>
              </tr>
            </thead>
            <tbody>
              {[
                { option: 'Out-of-State or Not Listed Fingerprinting - First Card', price: '$29' },
                { option: 'Each Additional Card', price: '$15' },
                { option: 'Chain of Custody Process', price: '$5' },
                { option: 'Notary Services (available after 1:00pm)', price: '$10' },
              ].map((item) => (
                <tr
                  key={item.option}
                  className="border-t cursor-pointer transition-colors hover:bg-green-100 hover:text-black hover:font-semibold"
                >
                  <td className="px-4 py-3">{item.option}</td>
                  <td className="px-4 py-3 text-center">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-xl font-semibold tracking-tight md:text-2xl">Frequently Asked Questions</h3>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {[
            {
              q: 'Do I need an appointment?',
              a: 'Walk-ins are welcome when capacity allows, but appointments guarantee service at your preferred time.'
            },
            {
              q: 'What should I bring?',
              a: 'Bring a valid government ID and any agency forms or ORI numbers required for your submission.'
            },
            {
              q: 'Do you offer Live Scan?',
              a: 'Where permitted, we provide electronic Live Scan capture and can transmit to authorized recipients. Availability varies by state.'
            },
            {
              q: 'What if my prints are rejected?',
              a: 'If an image quality or capture error is the cause, we reprint at no charge within 30 days. Agency rejections for reasons unrelated to capture are billed at normal rates.'
            },
          ].map((item) => (
            <div key={item.q} className="rounded-3xl border border-slate-200 p-6 bg-white">
              <h4 className="font-medium">{item.q}</h4>
              <p className="mt-2 text-sm text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
