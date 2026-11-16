import { ShieldCheck } from "lucide-react";

const sections = [
  {
    title: "1. Information We Collect",
    text: "We may collect personal information such as your name, email address, shipping address, billing details, and order information when you use our website or make a purchase.",
  },
  {
    title: "2. How We Use Your Information",
    text: "Your information is used to process orders, provide customer support, improve our services, communicate important updates, and maintain the security of our website.",
  },
  {
    title: "3. Payment Security",
    text: "Payment information is handled through payment processing services. We do not intend to store complete payment card details on our servers.",
  },
  {
    title: "4. Sharing Your Information",
    text: "We do not sell your personal information. We may share necessary information with trusted service providers, such as payment processors and shipping companies, to complete your orders.",
  },
  {
    title: "5. Cookies",
    text: "Our website may use cookies and similar technologies to improve your browsing experience, remember preferences, and understand website usage.",
  },
  {
    title: "6. Data Security",
    text: "We take reasonable measures to protect your personal information against unauthorized access, loss, misuse, or disclosure.",
  },
  {
    title: "7. Your Privacy Rights",
    text: "Depending on your location and applicable laws, you may have the right to access, correct, or request deletion of your personal information.",
  },
  {
    title: "8. Third-Party Services",
    text: "Our website may contain links to third-party websites or services. We are not responsible for their privacy practices or content.",
  },
  {
    title: "9. Changes to This Policy",
    text: "We may update this Privacy Policy from time to time. Any changes will be published on this page with an updated revision date.",
  },
  {
    title: "10. Contact Us",
    text: "If you have any questions about this Privacy Policy or how your information is handled, please contact us at contact@nexel.com.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#1E201E]">
      <section className="border-b border-[#3C3D37] bg-[#292B27]">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col justify-center py-20">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
            <ShieldCheck size={27} strokeWidth={1.5} />
          </div>

          <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#A3AD9D]">
            Your Privacy Matters
          </p>

          <h1 className="mt-4 text-4xl font-semibold text-[#ECDFCC] sm:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-8 text-[#C2C6BC]">
            At Nexel, we respect your privacy and are committed to protecting
            your personal information. This policy explains how we collect, use,
            and protect your data.
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
