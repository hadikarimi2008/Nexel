import Link from "next/link";

export default function FooterComponent() {
  async function CurrentYear() {
    "use cache";
    return <>{new Date().getFullYear()}</>;
  }
  return (
    <footer className="mt-20 border-t border-neutral-800 bg-neutral-950 text-neutral-300">
      <div className="mx-auto w-[90%] max-w-7xl py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-white"
            >
              Nexel<span className="text-neutral-500">.</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-neutral-400">
              Discover technology that fits your lifestyle. Quality products,
              simple shopping, and a better experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Explore</h3>

              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/store" className="hover:text-white">
                    Store
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-white">Support</h3>

              <ul className="space-y-3 text-sm text-neutral-400">
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <CurrentYear /> Nexel. All rights reserved.
          </p>

          <p>Built for a better digital experience.</p>
        </div>
      </div>
    </footer>
  );
}
