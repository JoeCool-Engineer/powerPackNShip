import { Helmet } from "react-helmet";

// Reusable banner component – you can move this to its own file later if you like
function Banner({ children }) {
  return (
    <section className="bg-[var(--color-theme-green)] text-white">
      <div className="mx-auto max-w-6xl px-4 py-3 text-center text-sm md:text-base font-semibold">
        {children}
      </div>
    </section>
  );
}

export default function PrintIt() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What do I need to bring in order to get a document notarized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Bring your unsigned document and a government-issued photo ID such as a state driver’s license or passport."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need an appointment for a notary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No appointment is required. Walk-in notary public service is available after 1pm in San Tan Valley, AZ, and is convenient for customers from Queen Creek and Florence."
        }
      },
      {
        "@type": "Question",
        "name": "Do I need to provide witnesses for my notary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Yes. If your document requires a witness, you must provide the witness. The witness must be a mentally competent adult, present when the signer signs, and have no financial stake in the document. For a will, the witness cannot be a beneficiary or related by blood, marriage, or adoption."
        }
      },
      {
        "@type": "Question",
        "name": "What documents need a notary?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "Common documents include deeds, affidavits, school forms, court papers, loan documents, and many others. As of September 24, 2022, ADOT eliminated the mandatory notarization requirement for the seller’s signature on Arizona titles and expanded eTitle transfers, but notarization is still optional for extra protection."
        }
      },
      {
        "@type": "Question",
        "name": "Should I sign the document before I come in?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. Do not sign the document before you come in. The notary must witness the signature and verify the identity of the signer, so it must be signed in front of the notary."
        }
      },
      {
        "@type": "Question",
        "name": "I have questions about my document before I sign. Can you help?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. The notary public only verifies the identity of the person signing and confirms the name matches the document. They cannot provide legal advice or explain the contents of the document."
        }
      },
      {
        "@type": "Question",
        "name": "Does the county of the notary matter?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "No. An Arizona notary’s authority is statewide and not limited to the county of commission. Power Pack and Ship is in Pinal County, but we can notarize documents anywhere within Arizona, and the signer may live in another county or state."
        }
      },
      {
        "@type": "Question",
        "name": "What if two people are required to sign the document to be notarized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text":
            "The notary must witness both signatures and verify the identity of both parties. One spouse cannot sign at home while only the other spouse appears in store to notarize the other signature."
        }
      }
    ]
  };

  return (
    <>
      <Helmet>
        <title>Document Services & Notary – San Tan Valley | Power Pack and Ship</title>
        <meta
          name="description"
          content="Notary services, document printing, copies, faxing, and scanning in San Tan Valley, AZ. Walk-in notary available after 1pm. Serving Queen Creek and Florence."
        />
        <link rel="canonical" href="https://powerpackandship.com/document-services" />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen text-slate-800">
        {/* Hero – spacing matches Fingerprinting */}
        <section className="mx-auto max-w-6xl px-4 py-5 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-theme-dark">
            Document Services & Notary
          </h1>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Professional in-store document services including notary public, copying, printing,
            faxing, scanning to email, and computer usage.
          </p>
        </section>

        {/* Reusable Banner – Notary message */}
        <Banner>Notary available after 1pm – walk-ins welcome in San Tan Valley, AZ.</Banner>

        {/* Service Grid – spacing aligned with Fingerprinting sections */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {/* Notary Services */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-theme-green">
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img
                    src="/Notary.png"
                    alt="Notary Services"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-theme-dark text-center">
                  Notary Services
                </h2>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>1–5 Notary Signatures</span>
                  <span className="font-semibold">$10 ea</span>
                </li>
                <li className="flex justify-between">
                  <span>6+ Notary Signatures</span>
                  <span className="font-semibold">$8 ea</span>
                </li>
                <li className="flex justify-between">
                  <span>Additional Witness Signature</span>
                  <span className="font-semibold">$3 ea</span>
                </li>
              </ul>
            </div>

            {/* Printing & Copies */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-theme-green">
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img
                    src="/brandedPrinter.png"
                    alt="Printing Services"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-theme-dark text-center">
                  Printing & Copies
                </h2>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>Base price</span>
                  <span className="font-semibold">$0.75</span>
                </li>
                <li className="flex justify-between">
                  <span>Black &amp; White (per page)</span>
                  <span className="font-semibold">$0.30</span>
                </li>
                <li className="flex justify-between">
                  <span>Color (per page)</span>
                  <span className="font-semibold">$0.50</span>
                </li>
              </ul>
            </div>

            {/* Faxing */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-theme-green">
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img
                    src="/brandedFax.png"
                    alt="Fax Services"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-theme-dark text-center">
                  Domestic Faxing
                </h2>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>Up to 10 pages (per page)</span>
                  <span className="font-semibold">$1.25</span>
                </li>
                <li className="flex justify-between">
                  <span>11+ pages (per page)</span>
                  <span className="font-semibold">$1.00</span>
                </li>
                <li className="flex justify-between">
                  <span>Incoming fax (per page)</span>
                  <span className="font-semibold">$0.75</span>
                </li>
              </ul>
            </div>

            {/* Scan to Email */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-theme-green">
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img
                    src="/brandedScan.png"
                    alt="Scan to Email"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-theme-dark text-center">
                  Scan to Email
                </h2>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>Base price</span>
                  <span className="font-semibold">$1.50</span>
                </li>
                <li className="flex justify-between">
                  <span>Per page</span>
                  <span className="font-semibold">+$0.30</span>
                </li>
              </ul>
            </div>

            {/* Computer Usage */}
            <div className="bg-white rounded-xl shadow-md p-8 border-t-4 border-theme-green">
              <div className="mb-6">
                <div className="w-16 h-16 mb-4 mx-auto">
                  <img
                    src="/internetUsage.png"
                    alt="Computer Usage"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h2 className="text-xl font-semibold text-theme-dark text-center">
                  Computer Usage
                </h2>
              </div>
              <ul className="space-y-3 text-slate-700">
                <li className="flex justify-between">
                  <span>Up to 15 minutes</span>
                  <span className="font-semibold">$1.50</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ – same map structure as Fingerprinting, but centered cards */}
        <section className="mx-auto max-w-6xl px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-theme-dark">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                q: "What do I need to bring in order to get a document notarized?",
                a: "Bring your unsigned document and a government-issued photo ID such as a state driver’s license or passport."
              },
              {
                q: "Do I need an appointment for a notary?",
                a: "No appointment is required. Walk-in notary public service is available after 1pm in San Tan Valley, AZ, and is convenient for Queen Creek and Florence."
              },
              {
                q: "Do I need to provide witnesses for my notary?",
                a: "Yes. If your document requires a witness, you must provide the witness. They must be a mentally competent adult, present when the signer signs, and have no financial stake in the document. For wills, the witness cannot be a beneficiary or related by blood, marriage, or adoption."
              },
              {
                q: "What documents need a notary?",
                a: "Common documents include deeds, affidavits, school forms, court papers, loan documents and many others. As of September 24, 2022, ADOT removed the mandatory notarization for seller’s signatures on Arizona titles, but notarization is still optional for extra protection."
              },
              {
                q: "Should I sign the document before I come in?",
                a: "No. Do not sign the document before you come in. The notary must witness your signature and verify your identity, so it must be signed in front of the notary."
              },
              {
                q: "I have questions about my document before I sign. Can you help?",
                a: "No. The notary public only verifies the identity of the person signing and that the name matches what is on the document. We cannot provide legal advice or explain the contents of the document."
              },
              {
                q: "Does the county of the notary matter?",
                a: "No. An Arizona notary’s authority is statewide, not limited to the county of commission. Power Pack and Ship is in Pinal County, but we can notarize documents anywhere within Arizona, and the signer may live in another county or state."
              },
              {
                q: "What if two people are required to sign the document to be notarized?",
                a: "The notary must witness both signatures and verify the identity of both parties. One spouse cannot sign at home while only the other spouse comes in to notarize the document."
              }
            ].map((item) => (
              <div
                key={item.q}
                className="rounded-xl border bg-white p-5 md:p-6 text-center"
              >
                <h3 className="font-medium text-lg">{item.q}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
