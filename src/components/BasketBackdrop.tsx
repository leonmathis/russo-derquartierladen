"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

/* The basket is the centerpiece: it sits exactly over the hero's #basket-slot,
   stays fixed, and fades to a faint watermark as you scroll. Anchoring to the
   slot keeps the basket↔title spacing identical on mobile and desktop. */
export default function BasketBackdrop() {
  const [opacity, setOpacity] = useState(1);
  const [top, setTop] = useState<number | null>(null);

  useEffect(() => {
    const measure = () => {
      const slot = document.getElementById("basket-slot");
      if (slot) setTop(slot.getBoundingClientRect().top + window.scrollY);
    };

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight || 1;
        const t = Math.min(1, window.scrollY / (vh * 0.9));
        setOpacity(1 - t * 0.94); // 1 → ~0.06
      });
    };

    measure();
    onScroll();
    const tid = window.setTimeout(measure, 200);
    if (document.fonts?.ready) document.fonts.ready.then(measure).catch(() => {});
    window.addEventListener("resize", measure, { passive: true });
    window.addEventListener("load", measure);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.clearTimeout(tid);
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-x-0 z-0 flex justify-center"
      style={{
        top: top ?? 0,
        opacity,
        visibility: top == null ? "hidden" : "visible",
        transition: "opacity 100ms linear",
        willChange: "opacity",
      }}
    >
      {/* mobile: squarer, larger variant */}
      <Image
        src="/basket-mobile.png"
        alt=""
        width={1032}
        height={1004}
        priority
        className="block h-auto w-[80vw] object-contain md:hidden"
      />
      {/* desktop: wide variant */}
      <Image
        src="/basket.png"
        alt=""
        width={1920}
        height={1004}
        priority
        className="hidden h-[44vh] w-auto object-contain md:block"
      />
    </div>
  );
}
