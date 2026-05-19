import { useState, useEffect } from "react";

const THEME = {
  colors: {
    navy: "#071A2F",
    gold: "#C9922A",
    white: "#FFFFFF",
    textMuted: "#334155",
    borderLight: "#E2E8F0"
  },
  fonts: {
    display: "'Playfair Display', serif",
    body: "'DM Sans', sans-serif",
  }
};

// ── FIXED: replaced all `var(--e-global-color-10113fb)` with `var(--ff-bg)`
//    and declared it in :root so it works in plain React/Vite apps ──
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

:root { --ff-bg: #FFFFFF; }
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; background-color: var(--ff-bg) !important; }
body { background: var(--ff-bg) !important; font-family: 'DM Sans', sans-serif; color: #071A2F; -webkit-font-smoothing: antialiased; }

.ff-display { font-family: 'Playfair Display', serif; }
.ff-body    { font-family: 'DM Sans', sans-serif; background: var(--ff-bg); }

.ff-btn { border: none; outline: none; cursor: pointer; transition: all 0.2s ease-in-out; font-family: 'DM Sans', sans-serif; display: inline-flex; align-items: center; justify-content: center; }
.ff-btn-primary { background: #C9922A; color: #fff; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
.ff-btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
.ff-btn-ghost { background: transparent; color: #fff; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #fff; }
.ff-btn-ghost:hover { background: rgba(255, 255, 255, 0.1); }
.ff-btn-back { background: #fff; color: #071A2F; padding: 10px 20px; border-radius: 50px; font-size: 13px; font-weight: 600; border: 1px solid #E2E8F0; }
.ff-btn-back:hover { background: #F8FAFC; }

.ff-hero { width: 100%; padding: 8rem 3rem 8rem; background: url('/src/assets/heroforschoollife/feasthero.png') no-repeat center center / cover !important; border-bottom: 1px solid #E2E8F0; }
.ff-hero-content { max-width: 680px; }
.ff-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px; color: #C9922A; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }

.ff-cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; background: var(--ff-bg); }

.ff-card { background: var(--ff-bg) !important; border-radius: 20px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; position: relative; border: 1px solid transparent; outline: 4px solid var(--card-accent-dark); box-shadow: 0 12px 24px rgba(7,26,47,0.06); transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1); }
.ff-card:hover { transform: translateY(-8px); box-shadow: 0 20px 32px rgba(7,26,47,0.12); }

.ff-card-img-wrap { position: relative; width: 100%; padding-top: 65%; overflow: hidden; background-color: #F1F5F9; }
.ff-card-img-wrap img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
.ff-card:hover .ff-card-img-wrap img { transform: scale(1.04); }

.ff-badge-pill { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,0.92); backdrop-filter: blur(4px); padding: 6px 14px; border-radius: 40px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; box-shadow: 0 2px 8px rgba(0,0,0,0.05); z-index: 2; }

.ff-card-footer { padding: 26px 24px; display: flex; flex-direction: column; flex-grow: 1; background-color: var(--card-bg-down) !important; position: relative; }

.ff-accent-line { width: 40px; height: 3px; border-radius: 4px; background-color: var(--card-accent-dark); margin-top: auto; margin-bottom: 16px; transition: width 0.3s ease; }
.ff-card:hover .ff-accent-line { width: 60px; }

.ff-card-arrow { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--card-accent-dark); transition: gap 0.2s ease; }
.ff-card:hover .ff-card-arrow { gap: 10px; }

.ff-masonry { columns: 3 300px; column-gap: 1.5rem; }
.ff-masonry-item { break-inside: avoid; margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; background: #F8FAFC; border: 1px solid #E2E8F0; cursor: pointer; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1); }
.ff-masonry-item:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(7,26,47,0.08); }
.ff-masonry-item img { width: 100%; display: block; }

.ff-lightbox { position: fixed; inset: 0; background: rgba(7,26,47,0.96); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 2rem; }
.ff-lightbox img { max-width: 90vw; max-height: 85vh; border-radius: 8px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
.ff-lightbox-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: #fff; font-size: 36px; cursor: pointer; line-height: 1; }

.ff-section-eyebrow { color: #C9922A; text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; font-weight: 700; margin-bottom: 8px; }
.ff-gallery-header { background: var(--ff-bg) !important; padding: 4rem 3rem 2rem; border-bottom: 1px solid #E2E8F0; }

@media (max-width: 768px) {
  .ff-hero, .ff-gallery-header { padding: 4rem 1.5rem 2rem; }
  .ff-cards-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
  .ff-masonry { columns: 2; }
}
@media (max-width: 480px) { .ff-masonry { columns: 1; } }
`;

const FESTIVALS = [
  {
    id: "krishnastami",
    title: "Krishnashtami",
    subtitle: "Joyful Celebration",
    image: "/src/assets/krishnaastami/k1.png",
    accentDark: "#1E40AF",
    bgDown: "#EFF6FF",
    description: "Celebrating the birth of Lord Krishna with devotion, dance, dahi-handi, and joyful festivities that unite the school community.",
    gallery: [
      "/src/assets/krishnaastami/k1.png",
      "/src/assets/krishnaastami/k2.png",
      "/src/assets/krishnaastami/k3.png",
      "/src/assets/krishnaastami/k4.png",
      "/src/assets/krishnaastami/k5.png",
    ]
  },
  {
    id: "ayudhapuja",
    title: "Ayudha Puja",
    subtitle: "Festive Worship",
    image: "/src/assets/Ayudhapuja/a1.png",
    accentDark: "#B45309",
    bgDown: "#FEF3C7",
    description: "Honouring tools, books, and instruments with reverence during Ayudha Puja — a celebration of knowledge, skill, and gratitude.",
    gallery: [
      "/src/assets/Ayudhapuja/a1.png",
      "/src/assets/Ayudhapuja/a2.png",
      "/src/assets/Ayudhapuja/a3.png",
      "/src/assets/Ayudhapuja/a4.png",
    ]
  },
  {
    id: "diwali",
    title: "Diwali",
    subtitle: "Festival of Lights",
    image: "/src/assets/Diwali/d1.png",
    accentDark: "#C2410C",
    bgDown: "#FFEDD5",
    description: "The festival of lights celebrated with diyas, rangoli, sweets, and cultural performances that radiate warmth and togetherness.",
    gallery: [
      "/src/assets/Diwali/d1.png",
      "/src/assets/Diwali/d2.png",
      "/src/assets/Diwali/d3.png",
      "/src/assets/Diwali/d4.png",
    ]
  },
  {
    id: "christmas",
    title: "Christmas",
    subtitle: "Season of Joy",
    image: "/src/assets/Christmas/c1.png",
    accentDark: "#065F46",
    bgDown: "#E6F4EA",
    description: "Spreading the spirit of Christmas with carol singing, Secret Santa, star-making, and heartfelt celebrations of love and giving.",
    gallery: [
      "/src/assets/Christmas/c1.png",
      "/src/assets/Christmas/c2.png",
    ]
  },
  {
    id: "vasanthapanchami",
    title: "Vasantha Panchami",
    subtitle: "Spring Festival",
    image: "/src/assets/Vasanthapanchami/v1.png",
    accentDark: "#065F46",
    bgDown: "#F0FDF4",
    description: "Welcoming spring and honouring Goddess Saraswati — the deity of learning — with prayers, yellow attire, and cultural programmes.",
    gallery: [
      "/src/assets/Vasanthapanchami/v1.png",
      "/src/assets/Vasanthapanchami/v2.png",
      "/src/assets/Vasanthapanchami/v3.png",
      "/src/assets/Vasanthapanchami/v4.png",
    ]
  },
  {
    id: "ugadi",
    title: "Ugadi",
    subtitle: "Telugu New Year",
    image: "/src/assets/Ugadi/u1.png",
    accentDark: "#065F46",
    bgDown: "#ECFDF5",
    description: "Ringing in the Telugu New Year with traditional Ugadi pachadi, cultural performances, and colourful decorations full of hope.",
    gallery: [
      "/src/assets/Ugadi/u1.png",
      "/src/assets/Ugadi/u2.png",
      "/src/assets/Ugadi/u3.png",
      "/src/assets/Ugadi/u4.png",
    ]
  },
  {
    id: "ramzan",
    title: "Ramzan",
    subtitle: "Month of Blessings",
    image: "/src/assets/Ramzan/r1.png",
    accentDark: "#5B21B6",
    bgDown: "#F3E8FF",
    description: "Celebrating the spirit of Ramzan with shared iftars, prayers, and inclusive activities that foster respect and unity among students.",
    gallery: [
      "/src/assets/Ramzan/r1.png",
      "/src/assets/Ramzan/r2.png",
      "/src/assets/Ramzan/r3.png",
    ]
  },
  {
    id: "milad-un-nabi",
    title: "Milad Un Nabi",
    subtitle: "Prophet's Birthday",
    image: "/src/assets/Milad un nabi/m1.png",
    accentDark: "#0E7490",
    bgDown: "#E0F2FE",
    description: "Commemorating the birthday of Prophet Muhammad with prayers, poetry, and programmes that spread messages of peace and compassion.",
    gallery: [
      "/src/assets/Milad un nabi/m1.png",
      "/src/assets/Milad un nabi/m2.png",
      "/src/assets/Milad un nabi/m3.png",
      "/src/assets/Milad un nabi/m4.png",
      "/src/assets/Milad un nabi/m5.png",
      "/src/assets/Milad un nabi/m6.png",
    ]
  },
];

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [image, onClose]);

  if (!image) return null;
  return (
    <div className="ff-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="ff-lightbox-close" onClick={onClose} aria-label="Close lightbox">×</button>
      <img src={image} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function FestivalCard({ item, onClick }) {
  return (
    <article
      className="ff-card"
      onClick={onClick}
      style={{ "--card-accent-dark": item.accentDark, "--card-bg-down": item.bgDown }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <div className="ff-card-img-wrap">
        <span className="ff-badge-pill" style={{ color: item.accentDark }}>{item.subtitle}</span>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.background = "#e2e8f0";
          }}
        />
      </div>
      <div className="ff-card-footer">
        <h3
          className="ff-display"
          style={{ color: THEME.colors.navy, fontSize: 21, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}
        >
          {item.title}
        </h3>
        <p style={{ color: THEME.colors.textMuted, lineHeight: 1.6, fontSize: 13.5, marginBottom: 24, fontWeight: 500 }}>
          {item.description}
        </p>
        <div className="ff-accent-line" />
        <div className="ff-card-arrow">
          <span>View Gallery</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </article>
  );
}

function GalleryView({ item, onBack, onLightbox }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);
  return (
    <div style={{ background: "var(--ff-bg)" }}>
      <div className="ff-gallery-header">
        <button className="ff-btn ff-btn-back" onClick={onBack} style={{ marginBottom: "1.5rem" }}>
          ← Back to Festivals
        </button>
        <div>
          <div className="ff-section-eyebrow" style={{ color: item.accentDark }}>{item.subtitle}</div>
          <h1
            className="ff-display"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: THEME.colors.navy, fontWeight: 700 }}
          >
            {item.title} Gallery
          </h1>
          <p style={{ color: THEME.colors.textMuted, fontSize: 14, marginTop: 4 }}>
            Showing {item.gallery.length} collection image{item.gallery.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1350, margin: "0 auto", padding: "3rem 2rem 6rem", background: "var(--ff-bg)" }}>
        {item.gallery.length > 0 ? (
          <div className="ff-masonry">
            {item.gallery.map((src, i) => (
              <div
                className="ff-masonry-item"
                key={i}
                onClick={() => onLightbox(src)}
                style={{ border: `2px solid ${item.bgDown}` }}
                role="button"
                tabIndex={0}
                aria-label={`Open ${item.title} image ${i + 1}`}
                onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onLightbox(src); }}
              >
                <img
                  src={src}
                  alt={`${item.title} ${i + 1}`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.style.minHeight = "120px";
                    e.target.parentNode.style.background = "#e2e8f0";
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "5rem 0", color: THEME.colors.textMuted }}>
            <p style={{ fontSize: 15 }}>Gallery images are currently being compiled.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FestivalFun() {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="ff-body" style={{ background: "var(--ff-bg)" }}>
        {selected ? (
          <GalleryView item={selected} onBack={() => setSelected(null)} onLightbox={setLightbox} />
        ) : (
          <div style={{ background: "var(--ff-bg)" }}>
            <section className="ff-hero">
              <div className="ff-hero-content">
                <div className="ff-hero-eyebrow">
                  <span>Brindavan School</span>
                </div>
                <h1
                  className="ff-display"
                  style={{ fontSize: "clamp(34px, 5vw, 54px)", color: "#FFFFFF", fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}
                >
                  Festival Fun
                </h1>
                <p style={{ color: "#E2E8F0", fontSize: 15, lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
                  Celebrating every festival with colour, culture, and community — because every tradition deserves to be honoured and shared.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    className="ff-btn ff-btn-primary"
                    onClick={() => window.scrollTo({ top: window.innerHeight * 0.4, behavior: "smooth" })}
                  >
                    Explore All
                  </button>
                  <button className="ff-btn ff-btn-ghost">Learn More</button>
                </div>
              </div>
            </section>

            <div style={{ maxWidth: 1350, margin: "0 auto", padding: "4rem 2rem 7rem", background: "var(--ff-bg)" }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="ff-section-eyebrow">Celebrating Together</p>
                <h2
                  className="ff-display"
                  style={{ fontSize: "clamp(26px, 3.5vw, 34px)", color: THEME.colors.navy, fontWeight: 700 }}
                >
                  Our Festival Celebrations
                </h2>
              </div>
              <div className="ff-cards-grid">
                {FESTIVALS.map((item) => (
                  <FestivalCard key={item.id} item={item} onClick={() => setSelected(item)} />
                ))}
              </div>
            </div>
          </div>
        )}
        <Lightbox image={lightbox} onClose={() => setLightbox(null)} />
      </div>
    </>
  );
}