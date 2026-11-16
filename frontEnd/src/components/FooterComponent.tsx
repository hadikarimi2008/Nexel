import Link from "next/link";
import {
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  XShareButton,
  XIcon,
} from "react-share";

export default function FooterComponent() {
  const shareUrl = "https://nexel.com";
  const shareTitle = "Discover Nexel - Technology that fits your lifestyle.";

  return (
    <footer className="mt-20 border-t border-nexel-gray bg-nexel-dark text-nexel-cream">
      <div className="mx-auto w-[90%] max-w-7xl py-12">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-start">
          <div className="max-w-sm">
            <Link
              href="/"
              className="text-2xl font-semibold tracking-tight text-nexel-cream"
            >
              Nexel<span className="text-nexel-sage">.</span>
            </Link>

            <p className="mt-4 text-sm leading-7 text-nexel-cream/65">
              Discover technology that fits your lifestyle. Quality products,
              simple shopping, and a better experience.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <WhatsappShareButton url={shareUrl} title={shareTitle}>
                <WhatsappIcon size={20} />
              </WhatsappShareButton>

              <TelegramShareButton url={shareUrl} title={shareTitle}>
                <TelegramIcon size={20} />
              </TelegramShareButton>

              <XShareButton url={shareUrl} title={shareTitle}>
                <XIcon size={20} />
              </XShareButton>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 sm:gap-20">
            <div>
              <h3 className="mb-4 text-sm font-semibold text-nexel-cream">
                Explore
              </h3>

              <ul className="space-y-3 text-sm text-nexel-cream/65">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/store">Store</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-4 text-sm font-semibold text-nexel-cream">
                Support
              </h3>

              <ul className="space-y-3 text-sm text-nexel-cream/65">
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/FAQ">FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-nexel-gray pt-6 text-xs text-nexel-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Nexel. All rights reserved.</p>
          <p>Built for a better digital experience.</p>
        </div>
      </div>
    </footer>
  );
}
