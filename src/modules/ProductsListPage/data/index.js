// ── Audio Systems ──
import polkAudio from "./audio-systems/polk-audio";
import focal from "./audio-systems/focal";
import monitorAudio from "./audio-systems/monitor-audio";
import xtz from "./audio-systems/xtz";
import jbl from "./audio-systems/jbl";
import klipsch from "./audio-systems/klipsch";

// ── AV Receivers & Amps ──
import denon from "./av-receivers-and-amps/denon";
import marantz from "./av-receivers-and-amps/maratz";
import onkyo from "./av-receivers-and-amps/onkyo";
import arcam from "./av-receivers-and-amps/arcam";
import iotavx from "./av-receivers-and-amps/iotavx";
import qsc from "./av-receivers-and-amps/qsc";

// ── Projectors ──
import jvc from "./projectors/jvc";
import sony from "./projectors/sony";
import benQ from "./projectors/benQ";
import optoma from "./projectors/optoma";

// ── Recliners ──
import lazBoy from "./recliners/la-z-boy";
import littleNap from "./recliners/little-map";

// ── Screens ──
import eliteScreens from "./screens/elite-screens";
import luminaByGalalite from "./screens/lumina-by-galalite";
import vutec from "./screens/vutec";
import liberty from "./screens/liberty";

// ─────────────────────────────────────────────
// Category definitions
// ─────────────────────────────────────────────
const categories = [
  { id: "audio", label: "Audio Systems", color: "var(--accent)" },
  { id: "av", label: "AV Receivers & Amps", color: "var(--color-blue-500)" },
  { id: "projector", label: "Projectors", color: "var(--color-violet-400)" },
  { id: "screen", label: "Screens", color: "var(--color-cyan-400)" },
  { id: "recliner", label: "Recliners", color: "var(--color-emerald-400)" },
];

// ─────────────────────────────────────────────
// All brands grouped by category
// ─────────────────────────────────────────────
const allBrands = [
  // Audio
  polkAudio,
  focal,
  monitorAudio,
  xtz,
  jbl,
  klipsch,
  // AV
  denon,
  marantz,
  onkyo,
  arcam,
  iotavx,
  qsc,
  // Projectors
  jvc,
  sony,
  benQ,
  optoma,
  // Recliners
  lazBoy,
  littleNap,
  // Screens
  eliteScreens,
  luminaByGalalite,
  vutec,
  liberty,
];

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────

/** Turn a product name into a URL-safe slug */
function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Generate an array of 4 deterministic picsum image URLs for a product.
 * Uses a seed derived from the product name so the images are stable.
 */
function generateImages(name) {
  const seed = name.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  return [
    `https://picsum.photos/seed/${seed}1/800/600`,
    `https://picsum.photos/seed/${seed}2/800/600`,
    `https://picsum.photos/seed/${seed}3/800/600`,
    `https://picsum.photos/seed/${seed}4/800/600`,
  ];
}

// ─────────────────────────────────────────────
// Flatten all brands → unified products list
// ─────────────────────────────────────────────
const products = allBrands.flatMap((brandObj) => {
  if (!brandObj || !brandObj.products) return [];
  return brandObj.products.map((p) => {
    // If the data provides specific colored images, map them
    const hasColors = Array.isArray(p.colors) && p.colors.length > 0;
    
    // Ensure the color object is well-formed if it exists
    const colors = hasColors ? p.colors.map((c, i) => ({
      name: c.name || `Color ${i + 1}`,
      hex: c.hex || "var(--color-gray-300)",
      images: Array.isArray(c.images) && c.images.length > 0 
                ? c.images 
                : generateImages(`${p.name}-${c.name || i}`)
    })) : undefined;

    return {
      ...p,
      brand: p.brand || brandObj.brand || "Unknown",
      slug: slugify(p.name),
      colors,
      image: p.image,
      // If no color variants, fallback to generic product images
      images: !hasColors ? (Array.isArray(p.image) ? p.image : (p.image ? [p.image] : (p.images || generateImages(p.name)))) : undefined,
    };
  });
});

// Compute total unique brands
const uniqueBrands = new Set(products.map((p) => p.brand));

const nmcCatalog = { categories, products, brandCount: uniqueBrands.size };
export default nmcCatalog;
