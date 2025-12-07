import { Helmet } from "react-helmet";
import ShippingPartners from "../components/ShippingPartners.jsx";

export default function PackIt() {
  const supplies = [
    { title: "Boxes of all sizes", desc: "Small to oversized options for everyday shipping." },
    { title: "Bubble wrap & cushioning", desc: "Great for fragile items and electronics." },
    { title: "Packing peanuts", desc: "Lightweight void fill for safer transit." },
    { title: "Mailing tubes", desc: "Perfect for posters, blueprints, and documents." },
    { title: "Art boxes", desc: "Designed for prints, frames, and delicate media." },
    { title: "Custom box making", desc: "We can size a box to fit your item." },
    { title: "Tape", desc: "$0.50 per box when purchased with packaging." },
  ];

  return (
    <>
      <Helmet>
        <title>Packing & Shipping Services – San Tan Valley | Power Pack and Ship</title>
        <meta
          name="description"
          content="Professional packing supplies and shipping support in San Tan Valley, AZ. Boxes, bubble wrap, custom packing, and carrier options serving Queen Creek and Florence."
        />
        <link rel="canonical" href="https://powerpackandship.com/pack-ship" />
      </Helmet>

      <div className="min-h-screen text-slate-800">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-4 py-5 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-theme-dark">
            Pack &amp; Ship Services
          </h1>
          <p className="mt-3 text-slate-700 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            All the packing supplies you need plus trusted carrier options for fast, secure shipping
            in San Tan Valley, with convenient access for Queen Creek and Florence.
          </p>
        </section>

        {/* Packaging Supplies */}
        <section className="mx-auto max-w-6xl px-4 py-8">
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border-t-4 border-theme-green">
            <h2 className="text-2xl font-semibold text-theme-dark text-center">
              Packaging Supplies
            </h2>

            <p className="mt-2 text-slate-700 text-center max-w-2xl mx-auto">
              We stock everyday and specialty packing materials for local and international shipping.
              If you’re unsure what you need, our team can help you choose the right supplies for
              fragile, oversized, or high-value items.
            </p>

            {/* Image with consistent aspect ratio to avoid awkward cropping */}
            <div className="mt-6 rounded-xl overflow-hidden bg-gray-50">
              <div className="aspect-[16/9]">
                <img
                  src="/PackIt_Image.png"
                  alt="Boxes, bubble wrap, tape, and shipping supplies"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Supplies Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {supplies.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border bg-white p-5 md:p-6 text-center shadow-md"
                >
                  <h3 className="text-lg font-semibold text-theme-dark">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Small pricing note / policy */}
            <p className="mt-6 text-sm text-slate-600 italic text-center">
              *$0.50 transaction fee for purchases under $4
            </p>

            {/* Packing help callout */}
            <div className="mt-6 rounded-xl border bg-gray-50 p-5 text-center">
              <p className="text-slate-700 font-medium">Need help packing?</p>
              <p className="text-sm text-slate-600 mt-1">
                Ask our team about fragile-item packing, custom box options, and the best materials
                for your carrier and destination.
              </p>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <ShippingPartners showDetails />
        </section>
      </div>
    </>
  );
}
