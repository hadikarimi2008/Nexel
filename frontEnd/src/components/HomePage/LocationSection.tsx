import { MapPin, Mail, Clock, ArrowUpRight } from "lucide-react";

export default function LocationSection() {
  return (
    <section className="mx-auto w-[90%] max-w-7xl py-16">
      <div className="mb-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#A3AD9D]">
          Find Us
        </p>

        <h2 className="mt-3 text-3xl font-semibold text-[#ECDFCC] sm:text-4xl">
          Visit Nexel
        </h2>

        <p className="mt-3 max-w-xl text-sm leading-7 text-[#C2C6BC]">
          Find our location and get in touch with us for more information.
        </p>
      </div>

      <div className="grid overflow-hidden rounded-2xl border border-[#3C3D37] bg-[#292B27] lg:grid-cols-2">
        <div className="min-h-[320px] bg-[#343730] sm:min-h-[420px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.6127899305793!2d-73.9857634!3d40.748545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9aeb1c6b5%3A0x35b1cfbc89a6097f!2sEmpire%20State%20Building%2C%20350%205th%20Ave%2C%20New%20York%2C%20NY%2010118%2C%20USA!5e0!3m2!1sen!2s!4v1793293333571!5m2!1sen!2s"
            title="Nexel location on Google Maps"
            className="block h-[320px] w-full border-0 sm:h-[420px] lg:h-full lg:min-h-[480px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="flex flex-col justify-center p-6 sm:p-10 lg:p-12">
          <p className="text-sm font-medium text-[#A3AD9D]">Our Location</p>

          <h3 className="mt-3 text-2xl font-semibold text-[#ECDFCC]">
            Nexel — New York
          </h3>

          <div className="mt-8 space-y-6">
            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
                <MapPin size={20} strokeWidth={1.5} />
              </div>

              <div>
                <h4 className="font-medium text-[#ECDFCC]">Address</h4>
                <p className="mt-2 text-sm leading-7 text-[#C2C6BC]">
                  350 Fifth Avenue, New York, NY 10118, United States
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
                <Mail size={20} strokeWidth={1.5} />
              </div>

              <div>
                <h4 className="font-medium text-[#ECDFCC]">Email</h4>
                <p className="mt-2 text-sm text-[#C2C6BC]">contact@nexel.com</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
                <Clock size={20} strokeWidth={1.5} />
              </div>

              <div>
                <h4 className="font-medium text-[#ECDFCC]">Business Hours</h4>
                <p className="mt-2 text-sm leading-7 text-[#C2C6BC]">
                  Monday – Friday
                  <br />
                  9:00 AM – 6:00 PM
                </p>
              </div>
            </div>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=350+Fifth+Avenue+New+York+NY+10118"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-[#697565] bg-[#697565] px-6 py-3 text-sm font-medium text-[#ECDFCC]"
          >
            Get Directions
            <ArrowUpRight size={16} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}
