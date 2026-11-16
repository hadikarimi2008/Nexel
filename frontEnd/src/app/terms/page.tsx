import { FileText } from "lucide-react";

const sections = [
  {
    title: "1. Acceptance of Terms",
    text: "By accessing or using the Nexel website, you agree to these Terms of Service. If you do not agree with these terms, please do not use our website.",
  },
  {
    title: "2. Products and Pricing",
    text: "We aim to provide accurate product descriptions, images, availability, and pricing. However, errors may occasionally occur. Nexel reserves the right to correct errors and update product information or prices when necessary.",
  },
  {
    title: "3. Orders and Payments",
    text: "All orders are subject to acceptance and product availability. You agree to provide accurate billing and shipping information. Orders may be cancelled if payment cannot be verified or other issues arise.",
  },
  {
    title: "4. Shipping and Delivery",
    text: "Delivery estimates are provided for informational purposes and may vary depending on location, shipping provider, and other circumstances. Nexel is not responsible for delays caused by circumstances beyond its reasonable control.",
  },
  {
    title: "5. Returns and Refunds",
    text: "Returns, exchanges, and refunds are subject to our applicable return policy. Products must meet the relevant return conditions. Please contact our support team for assistance with a return request.",
  },
  {
    title: "6. Warranty",
    text: "Product warranties depend on the manufacturer and the specific product. Warranty coverage, duration, and conditions may vary. Please review the warranty information provided with each product.",
  },
  {
    title: "7. User Responsibilities",
    text: "You agree not to misuse our website, provide false information, interfere with website operations, attempt unauthorized access, or engage in any activity that may harm Nexel or its users.",
  },
  {
    title: "8. Intellectual Property",
    text: "All website content, including text, graphics, logos, images, and design elements, is owned by or licensed to Nexel and may not be copied, distributed, or used without prior permission.",
  },
  {
    title: "9. Limitation of Liability",
    text: "To the extent permitted by applicable law, Nexel shall not be liable for indirect or consequential damages arising from the use of our website or products purchased through it.",
  },
  {
    title: "10. Third-Party Links",
    text: "Our website may include links to third-party websites. Nexel does not control or take responsibility for their content, services, or policies.",
  },
  {
    title: "11. Changes to These Terms",
    text: "Nexel reserves the right to update these Terms of Service at any time. Updated terms will be published on this page and become effective upon publication unless otherwise stated.",
  },
  {
    title: "12. Contact Information",
    text: "If you have questions about these Terms of Service, please contact us at contact@nexel.com.",
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#1E201E]">
      <section className="border-b border-[#3C3D37] bg-[#292B27]">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col justify-center py-20">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
            <FileText size={27} strokeWidth={1.5} />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#A3AD9D]">
            Important Information
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-[#ECDFCC] sm:text-5xl">
            Terms of Service
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#C2C6BC]">
            Welcome to Nexel. These Terms of Service explain the rules and
            conditions that apply when accessing and using our website and
            purchasing our products.
          </p>

          <p className="mt-6 text-xs text-[#A3AD9D]">
            Last Updated: November 2026
          </p>
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-4xl py-16">
        <div className="space-y-8">
          {sections.map((section) => (
            <article
              key={section.title}
              className="border-b border-[#3C3D37] pb-8"
            >
              <h2 className="text-xl font-semibold text-[#ECDFCC]">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-8 text-[#C2C6BC]">
                {section.text}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
