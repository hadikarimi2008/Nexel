import Image from "next/image";
import "../css/MarqueeCss.css";

export type Review = {
  id: number;
  name: string;
  rating: number;
  text: string;
  avatar?: string;
};

function Stars({ rating }: { rating: number }) {
  const full = Math.max(0, Math.min(5, Math.round(rating)));

  return (
    <span
      aria-label={`${full} out of 5 stars`}
      className="text-sm tracking-widest text-amber-400"
    >
      {"★".repeat(full)}
      <span className="text-nexel-gray">{"★".repeat(5 - full)}</span>
    </span>
  );
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <article className="flex h-44 w-80 shrink-0 flex-col gap-3 rounded-xl border border-nexel-gray bg-nexel-dark p-5">
      <div className="flex items-center gap-3">
        {review.avatar ? (
          <Image
            src={review.avatar}
            alt={review.name}
            width={40}
            height={40}
            draggable={false}
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-nexel-gray text-sm text-nexel-cream">
            {initials}
          </div>
        )}

        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-nexel-cream">
            {review.name}
          </p>
          <Stars rating={review.rating} />
        </div>
      </div>

      <p className="line-clamp-4 text-sm leading-6 text-nexel-cream/70">
        {review.text}
      </p>
    </article>
  );
}

export default function ReviewsMarqueeComponent({
  reviews = [],
  speed = 60,
}: {
  reviews?: Review[];
  speed?: number;
}) {
  if (reviews.length === 0) return null;

  const repeat = Math.max(1, Math.ceil(8 / reviews.length));
  const group = Array.from({ length: repeat }, () => reviews).flat();

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
            className="flex shrink-0 gap-4 pr-4"
          >
            {group.map((review, i) => (
              <ReviewCard key={`${n}-${review.id}-${i}`} review={review} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
