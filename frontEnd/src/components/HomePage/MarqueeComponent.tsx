import Image from "next/image";
import "../css/MarqueeCss.css";

export default function MarqueeComponent({
  images,
  speed = 40,
}: {
  images: string[];
  speed?: number;
}) {
  if (images.length === 0) return null;

  const repeat = Math.ceil(10 / images.length);
  const group = Array.from({ length: repeat }, () => images).flat();

  return (
    <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div
        className="marquee-track flex w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        {[0, 1].map((n) => (
          <div
            key={n}
            aria-hidden={n === 1}
            className="flex shrink-0 gap-6 pr-6"
          >
            {group.map((src, i) => (
              <div
                key={i}
                className="flex h-28 w-48 shrink-0 items-center justify-center rounded-xl border border-neutral-700 bg-neutral-950 p-4"
              >
                <Image
                  src={src}
                  alt=""
                  width={160}
                  height={80}
                  draggable={false}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
