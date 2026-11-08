
export default function IntroComponent() {
  return (
    <section className="w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid w-full max-w-screen-2xl grid-cols-1 gap-10 border-y border-nexel-sage/30 py-10 md:grid-cols-2 md:items-center md:gap-16 md:py-16">
        <div className="flex flex-col gap-5">
          <span className="text-sm font-medium uppercase tracking-[0.25em] text-nexel-sage">
            Welcome to Nexel
          </span>

          <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-nexel-cream sm:text-5xl lg:text-6xl">
            Technology That
            <span className="block text-nexel-sage">
              Moves You Forward.
            </span>
          </h2>
        </div>

        <div className="flex flex-col gap-6 md:border-l md:border-nexel-sage/30 md:pl-8 lg:pl-12">
          <p className="text-base leading-8 text-nexel-cream/80 sm:text-lg">
            Discover a smarter way to shop for technology. Nexel brings
            together smartphones, laptops, and essential tech accessories
            in one place, helping you find the right devices for your
            everyday life.
          </p>

          <p className="text-base leading-8 text-nexel-cream/60">
            From everyday essentials to powerful devices, we focus on
            quality, thoughtful selection, and a smooth shopping
            experience that puts your needs first.
          </p>

          <div className="grid grid-cols-3 gap-4 border-t border-nexel-sage/30 pt-6">
            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-nexel-cream sm:text-2xl">
                Quality
              </span>
              <span className="text-xs leading-5 text-nexel-sage sm:text-sm">
                Carefully selected products
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-nexel-cream sm:text-2xl">
                Variety
              </span>
              <span className="text-xs leading-5 text-nexel-sage sm:text-sm">
                Devices for every need
              </span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="text-xl font-semibold text-nexel-cream sm:text-2xl">
                Simplicity
              </span>
              <span className="text-xs leading-5 text-nexel-sage sm:text-sm">
                A smooth shopping journey
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
