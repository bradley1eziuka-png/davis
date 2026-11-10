import { cn } from "@/lib/utils";
import { BUSINESS_NAME, LOGO } from "@/lib/site-config";

// Supplied Davis Building Services logo (transparent WebP, proportions
// preserved via intrinsic size + h-auto/w-auto). `onDark` swaps in the
// light-text variant so the charcoal wordmark stays legible on dark sections.
const LOGO_RATIO = 1371 / 409;

export function Logo({
  className,
  onDark = false,
  priority = false,
}: {
  className?: string;
  onDark?: boolean;
  priority?: boolean;
}) {
  const src = onDark && LOGO.lightSrc ? LOGO.lightSrc : LOGO.src;
  const height = 48;
  return (
    <img
      src={src}
      alt={LOGO.alt || `${BUSINESS_NAME} logo`}
      width={Math.round(height * LOGO_RATIO)}
      height={height}
      decoding="async"
      loading={priority ? "eager" : "lazy"}
      className={cn("h-11 w-auto shrink-0 object-contain sm:h-12", className)}
    />
  );
}
