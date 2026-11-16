"use client";

import LocationSection from "@/components/HomePage/LocationSection";
import {
  MapPin,
  Mail,
  Clock,
  ArrowUpRight,
  Phone,
  MessageCircle,
  Send,
  Headphones,
} from "lucide-react";
import type { FormEvent } from "react";

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    const body = `
Name: ${name}
Email: ${email}

Message:
${message}
    `;

    const mailtoLink = `mailto:contact@nexel.com?subject=${encodeURIComponent(String(subject))}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  const inputClass =
    "w-full rounded-xl border border-[#3C3D37] bg-[#292B27] px-4 py-3 text-sm text-[#ECDFCC] outline-none placeholder:text-[#A3AD9D]/60 focus:border-[#697565]";

  return (
    <main className="min-h-screen bg-[#1E201E]">
      <section className="relative overflow-hidden border-b border-[#3C3D37] bg-[#292B27]">
        <div className="mx-auto flex min-h-[380px] w-[90%] max-w-7xl flex-col justify-center py-20">
          <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#A3AD9D]">
            We'd Love To Hear From You
          </p>

          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[#ECDFCC] sm:text-5xl lg:text-6xl">
            Let's Start a
            <span className="block text-[#A3AD9D]">Conversation.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-8 text-[#C2C6BC] sm:text-base">
            Have a question about a product, an order, or need help with
            something? Our team is here to help. Get in touch with us and we'll
            be happy to assist you.
          </p>
        </div>
      </section>

      <section className="mx-auto w-[90%] max-w-7xl py-16">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-[#3C3D37] bg-[#292B27] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
              <Mail size={22} strokeWidth={1.5} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#ECDFCC]">
              Email Us
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#C2C6BC]">
              Send us an email and we'll get back to you as soon as possible.
            </p>

            <a
              href="mailto:contact@nexel.com"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#A3AD9D]"
            >
              contact@nexel.com
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="rounded-2xl border border-[#3C3D37] bg-[#292B27] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
              <Headphones size={22} strokeWidth={1.5} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#ECDFCC]">
              Customer Support
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#C2C6BC]">
              Need assistance with an order or product? We're ready to help.
            </p>

            <a
              href="#contact-form"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#A3AD9D]"
            >
              Contact Support
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="rounded-2xl border border-[#3C3D37] bg-[#292B27] p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
              <Clock size={22} strokeWidth={1.5} />
            </div>

            <h3 className="mt-5 text-lg font-semibold text-[#ECDFCC]">
              Working Hours
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#C2C6BC]">
              Our support team is available Monday through Friday.
            </p>

            <p className="mt-5 text-sm font-medium text-[#A3AD9D]">
              9:00 AM – 6:00 PM
            </p>
          </div>
        </div>
      </section>

      <section id="contact-form" className="mx-auto w-[90%] max-w-7xl pb-16">
        <div className="grid overflow-hidden rounded-2xl border border-[#3C3D37] bg-[#292B27] lg:grid-cols-2">
          <div className="flex flex-col justify-center bg-[#343730] p-8 sm:p-12">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#697565] bg-[#292B27] text-[#ECDFCC]">
              <MessageCircle size={25} strokeWidth={1.5} />
            </div>

            <p className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-[#A3AD9D]">
              Get In Touch
            </p>

            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#ECDFCC] sm:text-4xl">
              How Can We Help You?
            </h2>

            <p className="mt-5 max-w-md text-sm leading-8 text-[#C2C6BC]">
              Whether you're looking for product information, need help with an
              existing order, or simply want to share your feedback, we'd love
              to hear from you.
            </p>

            <div className="mt-10 space-y-5">
              <div className="flex items-center gap-3 text-sm text-[#C2C6BC]">
                <Mail size={18} className="text-[#A3AD9D]" />
                contact@nexel.com
              </div>

              <div className="flex items-center gap-3 text-sm text-[#C2C6BC]">
                <MapPin size={18} className="text-[#A3AD9D]" />
                New York, United States
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-10 lg:p-12">
            <h3 className="text-2xl font-semibold text-[#ECDFCC]">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#C2C6BC]">
              Fill out the form below and tell us how we can help.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium text-[#ECDFCC]"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-[#ECDFCC]"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="example@email.com"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-[#ECDFCC]"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="What is your message about?"
                  className={inputClass}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-[#ECDFCC]"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Write your message here..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-[#697565] bg-[#697565] px-6 py-4 text-sm font-semibold text-[#ECDFCC]"
              >
                Send Message
                <Send size={17} strokeWidth={1.8} />
              </button>

              <p className="text-xs leading-6 text-[#A3AD9D]">
                By submitting this form, your email application will open with
                your message ready to send.
              </p>
            </form>
          </div>
        </div>
      </section>

      <LocationSection />

      <section className="mx-auto w-[90%] max-w-7xl pb-20">
        <div className="flex flex-col items-center rounded-2xl border border-[#3C3D37] bg-[#292B27] px-6 py-12 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#697565] bg-[#343730] text-[#ECDFCC]">
            <Phone size={24} strokeWidth={1.5} />
          </div>

          <h2 className="mt-6 text-2xl font-semibold text-[#ECDFCC] sm:text-3xl">
            Still Have Questions?
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-[#C2C6BC]">
            We're always happy to help. Reach out to our team and let us know
            what you need.
          </p>

          <a
            href="mailto:contact@nexel.com"
            className="mt-7 inline-flex items-center gap-2 rounded-xl border border-[#697565] bg-[#697565] px-6 py-3 text-sm font-medium text-[#ECDFCC]"
          >
            Email Our Team
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
    </main>
  );
}
