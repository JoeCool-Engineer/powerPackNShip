import { Helmet } from "react-helmet";

// Reusable banner component – can be reused on other pages too
function Banner({ children }) {
  return (
    <section className="bg-[var(--color-theme-green)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 text-center text-sm md:text-base font-semibold">
        {children}
      </div>
    </section>
  );
}

export default function GetIt() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What documentation do I need to provide to open a mailbox?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "USPS requires two forms of identification — one proving identity and one proving address. They cannot be the same document. Examples include a driver’s license or passport for identity, and a lease, mortgage statement, voter registration, or vehicle registration for address."
        }
      },
      {
        "@type": "Question",
        "name": "Can I open a mailbox for my TikTok handle or Etsy shop?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "You can rent a mailbox for any purpose, but mail must be addressed under your legal name or a registered business name. Social media handles and unregistered shop names generally cannot receive mail unless they appear on your official documentation."
        }
      },
      {
        "@type": "Question",
        "name": "Is this a real street address or a PO Box?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "You receive a real street address, not a PO Box. Your mailbox address looks like: 270 E Hunt Hwy Ste 16-XXX, San Tan Valley, AZ 85143."
        }
      },
      {
        "@type": "Question",
        "name": "Can I receive UPS, FedEx, DHL, and USPS packages?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. Unlike a USPS PO Box, a private mailbox at Power Pack and Ship can receive packages from UPS, FedEx, DHL, USPS, Amazon, and other carriers."
        }
      },
      {
        "@type": "Question",
        "name": "How close are you to Queen Creek and Florence?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Power Pack and Ship is located at the corner of Hunt Highway and Bella Vista, behind Circle K and Biscuits Café in San Tan Valley. It is a short drive from both Queen Creek and Florence."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>
          Mailbox Rental & PO Box Alternative – San Tan Valley AZ | Power Pack and Ship
        </title>

        <meta
          name="description"
          content="Private mailboxes with a real street address in San Tan Valley, AZ. Secure package receiving for residents and small businesses in San Tan Valley, Queen Creek & Florence."
        />

        <meta
          name="keywords"
          content="PO box near me, mailbox rental San Tan Valley, private mailbox Queen Creek, mailboxes Florence AZ, PO box alternative, package receiving service"
        />

        <link rel="canonical" href="https://powerpackandship.com/mailbox-rental" />

        {/* FAQ Schema for SEO */}
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen text-slate-800">
        {/* HERO */}
        <section className="mx-auto max-w-6xl px-4 py-5 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-theme-dark">
            Private Mailbox Rental in San Tan Valley, AZ
          </h1>

          <p className="mt-4 text-base md:text-lg text-slate-700 max-w-2xl mx-auto leading-relaxed">
            A secure and convenient <strong>PO Box alternative</strong> for residents and small
            businesses in <strong>San Tan Valley, Queen Creek, and Florence</strong>. Get a real
            street address, professional package receiving, and reliable mailbox services.
          </p>
        </section>

        {/* OPTIONAL PROMO BANNER */}
        <Banner>
          Mailbox rentals available now – ask about discounts on 12-month plans.
        </Banner>

        {/* BENEFITS SECTION */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-t-4 border-theme-green">
            <h2 className="text-2xl font-semibold text-theme-dark mb-6 text-center">
              Benefits of Renting a Private Mailbox
            </h2>

            <img
              src="/Mailboxes.png"
              alt="Private Mailboxes at Power Pack and Ship"
              className="w-full h-48 sm:h-64 object-cover rounded-lg mb-6"
            />

            <p className="text-slate-700 text-base leading-relaxed mb-6 max-w-3xl mx-auto text-center">
              Renting a private mailbox offers convenience, security, and privacy—making it a strong
              option for anyone searching for <strong>“PO box near me”</strong> or a safer way to
              receive packages in San Tan Valley.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-3xl mx-auto">
              {[
                "Accepts packages from UPS, FedEx, DHL, Amazon, USPS, and more.",
                "Provides a real street address ideal for business licensing and online listings.",
                "Perfect for residents and small-business owners in San Tan Valley, Queen Creek, and Florence.",
                "Email or text alerts when packages arrive."
              ].map((text, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-theme-green mr-3 mt-1 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    />
                  </svg>
                  <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING SECTION */}
        <section className="mx-auto max-w-6xl px-4 py-8 text-center">
          <h2 className="text-2xl font-semibold text-theme-dark">Mailbox Rates</h2>
          <p className="mt-2 text-base text-slate-700 max-w-3xl mx-auto">
            Choose the mailbox size and term that fits your needs — ideal for individuals and small
            businesses.
          </p>

          <div className="mt-8 space-y-10">
            {/* Small Mailbox */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-t-4 border-theme-green">
              <h3 className="text-xl font-semibold text-theme-dark mb-4">Small Mailbox</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { price: "$45", note: "$15/mo", term: "3 months" },
                  { price: "$78", note: "$13/mo", term: "6 months" },
                  { price: "$144", note: "$12/mo", term: "1 year" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-lg font-semibold text-theme-dark">
                      {item.price}{" "}
                      <span className="text-sm text-slate-700">({item.note})</span>
                    </p>
                    <p className="text-sm text-slate-700">{item.term}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Medium Mailbox */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-t-4 border-theme-green">
              <h3 className="text-xl font-semibold text-theme-dark mb-4">Medium Mailbox</h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { price: "$57", note: "$19/mo", term: "3 months" },
                  { price: "$102", note: "$17/mo", term: "6 months" },
                  { price: "$192", note: "$16/mo", term: "1 year" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-gray-50 rounded-lg">
                    <p className="text-lg font-semibold text-theme-dark">
                      {item.price}{" "}
                      <span className="text-sm text-slate-700">({item.note})</span>
                    </p>
                    <p className="text-sm text-slate-700">{item.term}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION – full-width first FAQ + mapped centered boxes */}
        <section className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold text-theme-dark">
            Frequently Asked Questions
          </h3>

          {/* FIRST FAQ – full width, detailed */}
          <div className="mt-8 text-left bg-white rounded-xl border shadow-md p-6 md:p-8 max-w-4xl mx-auto">
            <h4 className="text-xl font-semibold text-theme-dark mb-3">
              What documentation do I need to provide to open a mailbox?
            </h4>

            <p className="text-slate-700 leading-relaxed mb-4">
              USPS requires two forms of identification — one proving identity and one proving
              address. They cannot be the same document.
            </p>

            <h5 className="font-semibold mt-4 mb-2">Proof of Identity (unexpired):</h5>
            <ul className="list-disc list-outside pl-6 text-slate-700 space-y-1">
              <li>Driver’s license or Non-driver ID card</li>
              <li>Passport</li>
              <li>Uniformed Service ID</li>
              <li>U.S. Access Card</li>
              <li>U.S. University ID Card</li>
              <li>Matricula Consular</li>
              <li>NEXUS Card</li>
              <li>Certificate of Naturalization</li>
              <li>U.S. Permanent Resident Card</li>
            </ul>

            <h5 className="font-semibold mt-6 mb-2">Proof of Arizona Address:</h5>
            <ul className="list-disc list-outside pl-6 text-slate-700 space-y-1">
              <li>Driver’s license (if not used for identity)</li>
              <li>Vehicle registration</li>
              <li>Lease agreement</li>
              <li>Mortgage statement or deed</li>
              <li>Home or vehicle insurance policy</li>
              <li>Voter registration card</li>
            </ul>

            <h5 className="font-semibold mt-6 mb-2">If adding a business name:</h5>
            <ul className="list-disc list-outside pl-6 text-slate-700 space-y-1">
              <li>TIN/EIN letter from the IRS showing the business name</li>
            </ul>

            <h5 className="font-semibold mt-6 mb-2 text-red-700">
              Not accepted by USPS:
            </h5>
            <ul className="list-disc list-outside pl-6 text-slate-700 space-y-1">
              <li>Social Security Card</li>
              <li>Birth Certificate</li>
              <li>Credit Cards</li>
              <li>Utility Bills</li>
            </ul>
          </div>

          {/* Remaining FAQs – mapped, centered boxes */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "Can I open a mailbox for my TikTok handle or Etsy shop?",
                a: "You may open a mailbox for any purpose, but mail must be addressed under your legal name or a registered business name. Social media handles alone generally cannot receive mail."
              },
              {
                q: "Is this a real street address or a PO Box?",
                a: "Yes, you receive a real street address, not a PO Box. Your address will look like: 270 E Hunt Hwy Ste 16-XXX, San Tan Valley, AZ 85143."
              },
              {
                q: "Can I receive UPS, FedEx, DHL, and USPS packages?",
                a: "Yes. Unlike USPS PO Boxes, private mailboxes at Power Pack and Ship can receive packages from all major carriers."
              },
              {
                q: "How close are you to Queen Creek / Florence?",
                a: "We are located at the corner of Hunt Highway and Bella Vista behind Circle K and Biscuits Café in San Tan Valley, just a short drive from both Queen Creek and Florence."
              }
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border bg-white p-5 md:p-6 text-center shadow-md"
              >
                <h4 className="font-medium text-lg text-theme-dark">{item.q}</h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Queen Creek Location Reinforcement */}
        <section className="mx-auto max-w-6xl px-4 pb-6 text-center">
          <div className="mt-6 grid grid-cols-1">
            <div className="rounded-xl border bg-white p-5 md:p-6 text-center shadow-md max-w-3xl mx-auto">
              <h2 className="text-lg md:text-xl font-semibold text-theme-dark">
                Private Mailbox Rental Near Queen Creek, AZ
              </h2>

              <p className="mt-2 text-sm md:text-base text-slate-600 leading-relaxed">
                If you’re searching for a <strong>PO Box near Queen Creek</strong>, our private
                mailboxes in San Tan Valley offer a secure, convenient alternative with a
                <strong> real street address</strong>. You can receive mail and packages from
                all major carriers — ideal for residents, commuters, and small businesses.
              </p>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
