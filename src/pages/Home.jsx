import ShippingPartners from "../components/ShippingPartners";
import ServiceCard from "../components/ServiceCard";
import PackAndShipSection from "../components/PackAndShipSection.jsx";

function Home() {
  const services = [
    {
      title: "Pack It",
      icon:
        "https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8abce41bf31abcd7789bb_service-icon-4.svg",
      description: (
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Professional Packing</li>
          <li>Packing & Shipping supplies</li>
        </ul>
      ),
      link: "/pack-it",
    },
    {
      title: "Ship It",
      icon:
        "https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8abce41bf31abcd7789bb_service-icon-4.svg",
      description: (
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Domestic Shipping</li>
          <li>International Shipping</li>
          <li>Drop Offs</li>
        </ul>
      ),
      link: "/pack-it",
    },
    {
      title: "Print It",
      icon:
        "https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8abe6f0ea249fb16adc1d_service-icon-3.svg",
      description: (
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Self Service Copying</li>
          <li>Self Service Printing</li>
          <li>Color, and Black and White</li>
        </ul>
      ),
      link: "/print-it",
    },
    {
      title: "Get It",
      icon:
        "https://cdn.prod.website-files.com/663b35a488a291811f0a5f90/66a8ac067671fa0572e6f5cd_service-icon-2.svg",
      description: (
        <ul className="list-disc list-outside pl-5 space-y-1">
          <li>Mailbox rental</li>
          <li>Faxing</li>
          <li>Key Duplication</li>
          <li>Notary</li>
        </ul>
      ),
      link: "/get-it",
    },
  ];

  return (
    <div className="min-h-screen text-slate-800">
      {/* HERO (consistent with other pages) */}
        <section className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold text-theme-dark">
                One-stop shipping & business services
            </h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
                From carrier drop-offs and professional packing to notary, printing,
                faxing, and private mailboxes — Power Pack and Ship makes errands simple
                for San Tan Valley, Queen Creek, and Florence.
            </p>

            <ul className="mt-4 space-y-2 text-slate-700">
                <li>• UPS, FedEx, DHL, USPS shipping & drop-offs</li>
                <li>• Notary after 1pm</li>
                <li>• Color & B&W printing and copies</li>
                <li>• Packing supplies and custom boxing</li>
                <li>• Private mailbox rentals</li>
                <li>• Faxing + computer/internet use</li>
            </ul>
            </div>
<div className="rounded-xl overflow-hidden bg-gray-50 border shadow-md p-2">
  <div className="aspect-[3/4] md:aspect-[3/2]">
    <img
      src="/PowerPackandShip_Store.png"
      alt="Power Pack and Ship storefront"
      className="w-full h-full object-contain"
    />
  </div>
</div>

        </div>
        </section>


      {/* SHIPPING PARTNERS */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <ShippingPartners />
      </section>

      {/* PACK & SHIP FEATURE SECTION (kept) */}
      <section className="mx-auto max-w-6xl px-4 py-8">
        <PackAndShipSection />
      </section>

    </div>
  );
}

export default Home;
