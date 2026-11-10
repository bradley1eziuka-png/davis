// ───────────────────────────────────────────────────────────────────────────
// Authentic project photos supplied by Davis Building Services. Optimized
// WebP derivatives live in /public/images/projects; originals stay untouched in
// the client's Images folder. Captions describe only what is visible in each
// photo. None of these are labelled before/after, because no photo pair has a
// clearly established chronology.
// ───────────────────────────────────────────────────────────────────────────

export type PhotoCategory = "decks" | "exterior" | "interior";

export const PHOTO_CATEGORIES: { key: PhotoCategory; label: string }[] = [
  { key: "decks", label: "Decks, Stairs & Staining" },
  { key: "exterior", label: "Siding & Exterior" },
  { key: "interior", label: "Interior" },
];

export type Photo = {
  id: string;
  src: string;
  /** Smaller derivative for responsive srcset (only for large originals). */
  smSrc?: string;
  width: number;
  height: number;
  alt: string;
  label: string;
  category: PhotoCategory;
};

const base = "/images/projects/";
function p(
  id: string,
  width: number,
  height: number,
  category: PhotoCategory,
  label: string,
  alt: string,
  hasSm = false,
): Photo {
  return {
    id,
    src: `${base}${id}.webp`,
    ...(hasSm ? { smSrc: `${base}${id}-sm.webp` } : {}),
    width,
    height,
    alt,
    label,
    category,
  };
}

export const PHOTOS = {
  paintedSteps: p(
    "painted-entry-steps",
    348,
    348,
    "decks",
    "Painted Entry Steps",
    "Back entry steps and railings painted dark charcoal beside a white door and siding",
  ),
  newDeckRailing: p(
    "new-deck-railing",
    348,
    348,
    "decks",
    "New Deck & Railing",
    "New pressure-treated wood deck with a stained railing in a backyard",
  ),
  newDeckStairs: p(
    "new-deck-stairs",
    348,
    348,
    "decks",
    "Deck Stairs & Railings",
    "New wood stair treads between stained railings leading up to a raised deck",
  ),
  newDeckSlider: p(
    "new-deck-sliding-door",
    348,
    348,
    "decks",
    "New Deck Boards",
    "New wood deck boards running up to a sliding glass door on a home with vinyl siding",
  ),
  stainedDeckBrown: p(
    "stained-deck-brown",
    348,
    348,
    "decks",
    "Stained Deck",
    "Wood deck and railing finished in a rich brown stain with built-in bench seating",
  ),
  stainedDeckBench: p(
    "stained-deck-bench",
    348,
    348,
    "decks",
    "Stained Deck & Bench",
    "Wood deck, railing, and built-in bench finished in a warm red-brown stain",
  ),
  stainedRailing: p(
    "stained-railing-closeup",
    750,
    1000,
    "decks",
    "Stained Railing Detail",
    "Close-up of a freshly stained wood deck railing and steps glistening with a dark red-brown finish",
    true,
  ),
  sidingCream: p(
    "siding-cleaning-cream",
    348,
    348,
    "exterior",
    "Siding Cleaning",
    "Cream vinyl siding with a cleaned section on the right next to an uncleaned, discolored section on the left",
  ),
  sidingGreen: p(
    "siding-cleaning-green",
    348,
    348,
    "exterior",
    "Siding Cleaning",
    "Green vinyl siding with a ladder, showing a cleaned area beside streaked, uncleaned siding",
  ),
  garageDoor: p(
    "garage-door-siding",
    348,
    348,
    "exterior",
    "Garage Exterior",
    "Garage door and surrounding siding and trim on the exterior of a home",
  ),
  garageFraming: p(
    "garage-framing",
    1000,
    750,
    "exterior",
    "Outbuilding Exterior Project",
    "Detached garage addition wrapped in house wrap beside a leaning tree, with a new shingled roof",
    true,
  ),
  garageSiding: p(
    "garage-siding-progress",
    1000,
    750,
    "exterior",
    "New Siding in Progress",
    "Side of a detached garage with new green vertical siding installed on one half and house wrap still exposed on the other",
    true,
  ),
  garageRoof: p(
    "garage-exterior-roof",
    1000,
    750,
    "exterior",
    "Garage Roof & Exterior",
    "Detached garage with a new shingled roof, white trim, and exterior wall work underway beside a lakeside yard",
    true,
  ),
  interiorFloor: p(
    "interior-flooring",
    348,
    348,
    "interior",
    "Interior Flooring & Walls",
    "Finished interior room with new gray plank flooring, freshly painted walls, and a wood-framed door",
  ),
} satisfies Record<string, Photo>;

// Order shown in the homepage gallery.
export const GALLERY_PHOTOS: Photo[] = [
  PHOTOS.stainedRailing,
  PHOTOS.garageRoof,
  PHOTOS.newDeckStairs,
  PHOTOS.sidingCream,
  PHOTOS.stainedDeckBench,
  PHOTOS.garageSiding,
  PHOTOS.paintedSteps,
  PHOTOS.sidingGreen,
  PHOTOS.stainedDeckBrown,
  PHOTOS.interiorFloor,
  PHOTOS.newDeckRailing,
  PHOTOS.garageDoor,
  PHOTOS.newDeckSlider,
  PHOTOS.garageFraming,
];
