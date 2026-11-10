import type { ImgHTMLAttributes } from "react";
import type { Photo as PhotoData } from "@/lib/projects";

// Renders a project photo with intrinsic dimensions (no layout shift) and an
// optional smaller derivative via srcset. Lazy-loaded unless `priority`.
export function Photo({
  photo,
  sizes,
  priority = false,
  className,
  ...rest
}: {
  photo: PhotoData;
  sizes?: string;
  priority?: boolean;
} & Omit<ImgHTMLAttributes<HTMLImageElement>, "src" | "alt" | "width" | "height">) {
  const small = photo.smSrc
    ? Math.round(photo.width * (photo.width > photo.height ? 0.64 : 0.64))
    : 0;
  return (
    <img
      src={photo.src}
      srcSet={photo.smSrc ? `${photo.smSrc} ${small}w, ${photo.src} ${photo.width}w` : undefined}
      sizes={photo.smSrc ? (sizes ?? "(min-width: 1024px) 380px, 90vw") : undefined}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      {...(priority ? { fetchPriority: "high" as const } : {})}
      className={className}
      {...rest}
    />
  );
}
