"use client";

export default function Diff(
  { img1, img2, alt }: { img1: { url: string, alt: string }, img2: { url: string, alt: string }, alt: string }
) {
  return (
    <div className="w-full flex flex-col">
      <div className="diff aspect-[1.2/1] mb-5">
        <div className="diff-item-1">
          <img
            alt={img1.alt}
            src={img1.url}
          />
        </div>
        <div className="diff-item-2">
          <img
            alt={img2.alt}
            src={img2.url}
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
      <p className="mx-auto mb-10 text-sm text-muted-foreground text-slate-500">
        {alt}
      </p>
    </div>
  )
}