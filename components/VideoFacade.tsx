"use client";

import { Play } from "lucide-react";
import { useState } from "react";

/** Shows a still until tapped, so YouTube loads nothing until the visitor asks for the video. */
export function VideoFacade({ id, title, playLabel }: { id: string; title: string; playLabel: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-ink">
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`}
          title={title}
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="group absolute inset-0 size-full" aria-label={`${playLabel}: ${title}`}>
          <img
            src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-80 transition-opacity group-hover:opacity-95"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" aria-hidden="true" />
          <span className="absolute start-1/2 top-1/2 grid size-[72px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-blue text-white shadow-xl transition-transform group-hover:scale-105 rtl:translate-x-1/2">
            <Play className="ms-1 size-8 fill-current" aria-hidden="true" />
          </span>
        </button>
      )}
    </div>
  );
}
