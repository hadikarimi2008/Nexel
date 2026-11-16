import Link from "next/link";

const faqCategories = [
  {
    title: "Orders & Shopping",
    description: "Everything about placing and managing your orders.",
    questions: [
      {
        question: "How can I place an order?",
        answer:
          "Browse our store, select the product you want, choose any available options, and add it to your cart. Proceed to checkout, enter your delivery details, select a payment method, and confirm your order.",
      },
      {
        question: "Do I need an account to place an order?",
        answer:
          "Account requirements depend on the checkout options available on our website. If guest checkout is enabled, you can place an order without creating an account. Creating an account makes it easier to track orders and manage your information.",
      },
      {
        question: "Can I modify or cancel my order?",
        answer:
          "You can contact our support team as soon as possible if you need to modify or cancel an order. Changes may not be possible once the order has been processed or shipped.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order has been shipped, tracking information will be provided when available. You can use the tracking details to follow your package through the delivery process.",
      },
      {
        question: "What should I do if I receive the wrong product?",
        answer:
          "Please contact our support team and provide your order number, a description of the issue, and photos of the received product if possible. We will review the situation and help resolve it.",
      },
      {
        question: "Can I order multiple products at once?",
        answer:
          "Yes. You can add multiple products to your shopping cart and complete your purchase in a single checkout, subject to product availability.",
      },
    ],
  },
  {
    title: "Shipping & Delivery",
    description: "Learn about shipping methods, delivery times, and tracking.",
    questions: [
      {
        question: "Which countries do you ship to?",
        answer:
          "Available shipping destinations are displayed during checkout. Delivery availability may vary depending on your location and the products in your order.",
      },
      {
        question: "How long does delivery take?",
        answer:
          "Delivery times depend on your location, shipping method, product availability, and carrier processing times. An estimated delivery timeframe will be provided when available.",
      },
      {
        question: "How much does shipping cost?",
        answer:
          "Shipping costs are calculated based on your delivery address, order details, and available shipping methods. The applicable shipping fee will be displayed before you complete your purchase.",
      },
      {
        question: "Can I change my shipping address?",
        answer:
          "Please contact our support team immediately if you need to update your shipping address. Address changes may not be possible after your order has been dispatched.",
      },
      {
        question: "What happens if my package is delayed?",
        answer:
          "Unexpected delays can occur due to carrier operations, weather conditions, or other circumstances. Check your tracking information first, then contact our support team if you need further assistance.",
      },
      {
        question: "What should I do if my package arrives damaged?",
        answer:
          "If your package arrives damaged, take photos of the packaging and the product before discarding anything. Contact our support team as soon as possible so we can review the issue.",
      },
    ],
  },
  {
    title: "Payments & Pricing",
    description:
      "Information about payment methods, transactions, and refunds.",
    questions: [
      {
        question: "Which payment methods do you accept?",
        answer:
          "Available payment methods are displayed at checkout. Depending on your region and our payment provider, these may include credit cards, debit cards, digital wallets, or other supported payment options.",
      },
      {
        question: "Is online payment secure?",
        answer:
          "We use supported payment processing services to handle transactions. Payment information should be submitted only through the secure checkout process and is handled according to the applicable payment provider's security practices.",
      },
      {
        question: "When will my payment be charged?",
        answer:
          "Payment processing depends on the selected payment method and payment provider. Your order confirmation will indicate whether your payment has been successfully processed.",
      },
      {
        question: "What should I do if my payment fails?",
        answer:
          "Check your payment details, available balance, and bank restrictions. You can also try another supported payment method. If the issue continues, contact your bank or our support team.",
      },
      {
        question: "Are product prices inclusive of taxes?",
        answer:
          "Applicable taxes and additional charges depend on your location and local regulations. Any calculated taxes or additional fees will be displayed during checkout when applicable.",
      },
      {
        question: "How long do refunds take?",
        answer:
          "Once a refund is approved and processed, the time it takes to appear in your account depends on your payment provider or bank. Processing times may vary by payment method.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    description: "Understand our return process and refund requirements.",
    questions: [
      {
        question: "Can I return a product?",
        answer:
          "Products may be eligible for return depending on their condition, purchase date, product category, and applicable consumer protection laws. Please review the return policy or contact our support team before sending anything back.",
      },
      {
        question: "How long do I have to return an item?",
        answer:
          "The return period depends on the applicable return policy and consumer protection requirements in your region. Please check the return terms provided at the time of purchase.",
      },
      {
        question: "What condition must a returned product be in?",
        answer:
          "Unless the return concerns a defective, damaged, or incorrect product, items should generally be returned with their original packaging, accessories, manuals, and included components. Additional conditions may apply depending on the product.",
      },
      {
        question: "Are opened electronics eligible for return?",
        answer:
          "Return eligibility for opened products depends on the product category, applicable law, and reason for return. Certain products may have additional restrictions, particularly where hygiene, software activation, or digital licensing is involved.",
      },
      {
        question: "How do I request a return?",
        answer:
          "Contact our support team with your order number, product details, and reason for the return. Our team will provide the applicable instructions and return process.",
      },
      {
        question: "When will I receive my refund?",
        answer:
          "Refunds are processed after the returned product has been received and inspected, when inspection is required. The time needed for the refunded amount to appear depends on your payment provider.",
      },
    ],
  },
  {
    title: "Warranty & Product Authenticity",
    description: "Important information about product quality and protection.",
    questions: [
      {
        question: "Do your products come with a warranty?",
        answer:
          "Warranty coverage depends on the product, manufacturer, seller, and country of purchase. Applicable warranty information should be provided on the product page or with the product documentation.",
      },
      {
        question: "What does the warranty cover?",
        answer:
          "Warranty coverage generally concerns qualifying manufacturing defects under the applicable warranty terms. Accidental damage, unauthorized repairs, misuse, and normal wear may be excluded.",
      },
      {
        question: "How can I make a warranty claim?",
        answer:
          "Contact our support team with your order number, product details, and a description of the issue. You may be asked to provide proof of purchase, photos, or other information needed to assess your claim.",
      },
      {
        question: "Are your products genuine?",
        answer:
          "Product authenticity and sourcing information should be specified in the relevant product listing. We encourage customers to review product descriptions and contact our support team if they need additional verification.",
      },
      {
        question: "What if my product stops working?",
        answer:
          "If your product develops a fault, stop using it if continued use could cause damage or create a safety risk. Contact our support team with your order details so we can help determine the appropriate next steps.",
      },
      {
        question: "Are accessories included with electronic devices?",
        answer:
          "Included accessories vary by product and manufacturer. Please check the product description and package contents section before purchasing to see exactly what is included.",
      },
    ],
  },
  {
    title: "Products & Technical Support",
    description:
      "Find answers about specifications, compatibility, and devices.",
    questions: [
      {
        question: "How can I check product specifications?",
        answer:
          "Each product page should include its available specifications, features, compatibility information, and package contents. If you need clarification about a particular product, contact our support team before purchasing.",
      },
      {
        question: "Are product images accurate?",
        answer:
          "Product images are provided to illustrate the listed items. Actual colors and appearance may vary slightly due to lighting, display settings, or manufacturer updates. Always refer to the written product specifications for important details.",
      },
      {
        question: "How can I check device compatibility?",
        answer:
          "Review the compatibility information and technical specifications on the product page. For accessories, check supported device models, connectors, operating systems, and other relevant requirements.",
      },
      {
        question: "Do you sell refurbished or used products?",
        answer:
          "Product condition should be clearly identified on the relevant product page. Please review the listing carefully to distinguish new, refurbished, open-box, or used products where these categories are available.",
      },
      {
        question: "Can I get help choosing a product?",
        answer:
          "Yes. Contact our support team with your budget, intended use, and preferred features. We can help you understand the available options and compare relevant specifications.",
      },
      {
        question: "Where can I find product manuals?",
        answer:
          "Product manuals may be included in the original packaging or available through the manufacturer's official website. You can also contact our support team for assistance locating documentation.",
      },
    ],
  },
  {
    title: "Account & Privacy",
    description:
      "Manage your account and understand how your information is handled.",
    questions: [
      {
        question: "How can I create an account?",
        answer:
          "Select the registration option on our website and provide the requested information. Follow the verification instructions if required to complete your registration.",
      },
      {
        question: "What should I do if I forget my password?",
        answer:
          "Use the password recovery option on the sign-in page. Follow the instructions sent to your registered email address to reset your password.",
      },
      {
        question: "How can I update my personal information?",
        answer:
          "If account management is available, sign in and update your details through your account settings. For information that cannot be changed directly, contact our support team.",
      },
      {
        question: "How is my personal information protected?",
        answer:
          "We handle personal information according to our Privacy Policy and applicable data protection laws. Please review the policy to understand what information is collected, how it is used, and how it is protected.",
      },
      {
        question: "Can I delete my account?",
        answer:
          "You can contact our support team to request account deletion. Certain transaction records may need to be retained where required by applicable laws and regulations.",
      },
    ],
  },
];

export default function FAQPage() {
  const totalQuestions = faqCategories.reduce(
    (total, category) => total + category.questions.length,
    0,
  );

  return (
    <main className="min-h-screen bg-nexel-dark text-nexel-cream">
      <section className="mx-auto w-[90%] max-w-7xl pt-20 pb-16">
        <div className="mb-16 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-nexel-sage">
            Help Center
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="max-w-2xl text-base leading-8 text-nexel-cream/65 sm:text-lg">
            Find answers to common questions about shopping at Nexel, including
            orders, shipping, payments, returns, warranties, and product
            support.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-nexel-gray px-4 py-2 text-sm text-nexel-cream/70">
              {faqCategories.length} Categories
            </span>
            <span className="rounded-full border border-nexel-gray px-4 py-2 text-sm text-nexel-cream/70">
              {totalQuestions} Questions
            </span>
          </div>
        </div>

        <div className="grid gap-12 lg:grid-cols-[260px_1fr] lg:gap-16">
          <aside className="h-fit lg:sticky lg:top-24">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-nexel-sage">
              Browse Topics
            </p>

            <nav className="flex flex-col gap-1">
              {faqCategories.map((category, index) => (
                <a
                  key={category.title}
                  href={`#category-${index}`}
                  className="rounded-lg px-4 py-3 text-sm text-nexel-cream/65 transition-none hover:bg-nexel-gray/40 hover:text-nexel-cream"
                >
                  {category.title}
                </a>
              ))}
            </nav>
          </aside>

          <div className="min-w-0 space-y-14">
            {faqCategories.map((category, index) => (
              <section
                key={category.title}
                id={`category-${index}`}
                className="scroll-mt-24"
              >
                <div className="mb-6 border-b border-nexel-gray pb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-nexel-sage">
                      0{index + 1}
                    </span>
                    <h2 className="text-xl font-semibold sm:text-2xl">
                      {category.title}
                    </h2>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-nexel-cream/50">
                    {category.description}
                  </p>
                </div>

                <div className="divide-y divide-nexel-gray">
                  {category.questions.map((item, questionIndex) => (
                    <details key={item.question} className="group py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-left">
                        <span className="text-sm font-medium leading-7 text-nexel-cream sm:text-base">
                          {item.question}
                        </span>

                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-nexel-gray text-lg text-nexel-sage group-open:rotate-45">
                          +
                        </span>
                      </summary>

                      <p className="max-w-3xl pt-4 pr-1 text-sm leading-8 text-nexel-cream/60">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-nexel-gray bg-nexel-gray/20">
        <div className="mx-auto flex w-[90%] max-w-7xl flex-col gap-6 py-16 sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-nexel-sage">
              Need More Help?
            </p>

            <h2 className="mb-3 text-2xl font-semibold sm:text-3xl">
              Still have questions?
            </h2>

            <p className="text-sm leading-7 text-nexel-cream/60">
              Our support team is here to help you with your orders, products,
              and shopping experience.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center justify-center rounded-lg border border-nexel-sage bg-nexel-sage px-7 py-3 text-sm font-medium text-nexel-cream"
          >
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  );
}
