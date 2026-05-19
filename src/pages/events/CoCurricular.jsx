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

// ── FIXED: replaced all `var(--e-global-color-10113fb)` with `var(--cc-bg)`
//    and declared it in :root so it works in plain React/Vite apps ──
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

:root { --cc-bg: #FFFFFF; }
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; background-color: var(--cc-bg) !important; }
body { background: var(--cc-bg) !important; font-family: 'DM Sans', sans-serif; color: #071A2F; -webkit-font-smoothing: antialiased; }

.cc-display { font-family: 'Playfair Display', serif; }
.cc-body    { font-family: 'DM Sans', sans-serif; background: var(--cc-bg); }

.cc-btn { border: none; outline: none; cursor: pointer; transition: all 0.2s ease-in-out; font-family: 'DM Sans', sans-serif; display: inline-flex; align-items: center; justify-content: center; }
.cc-btn-primary { background: #C9922A; color: #fff; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
.cc-btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
.cc-btn-ghost { background: transparent; color: #fff; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #fff; }
.cc-btn-ghost:hover { background: rgba(255, 255, 255, 0.1); }
.cc-btn-back { background: #fff; color: #071A2F; padding: 10px 20px; border-radius: 50px; font-size: 13px; font-weight: 600; border: 1px solid #E2E8F0; }
.cc-btn-back:hover { background: #F8FAFC; }

.cc-hero { width: 100%; padding: 8rem 3rem 8rem; background: url('/src/assets/heroforschoollife/Co-cirrcular.png') no-repeat center center / cover !important; border-bottom: 1px solid #E2E8F0; }
.cc-hero-content { max-width: 680px; }
.cc-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px; color: #C9922A; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }

.cc-cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; background: var(--cc-bg); }

.cc-card { background: var(--cc-bg) !important; border-radius: 20px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; position: relative; border: 1px solid transparent; outline: 4px solid var(--card-accent-dark); box-shadow: 0 12px 24px rgba(7,26,47,0.06); transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1); }
.cc-card:hover { transform: translateY(-8px); box-shadow: 0 20px 32px rgba(7,26,47,0.12); }

.cc-card-img-wrap { position: relative; width: 100%; padding-top: 65%; overflow: hidden; background-color: #F1F5F9; }
.cc-card-img-wrap img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
.cc-card:hover .cc-card-img-wrap img { transform: scale(1.04); }

.cc-badge-pill { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,0.92); backdrop-filter: blur(4px); padding: 6px 14px; border-radius: 40px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; box-shadow: 0 2px 8px rgba(0,0,0,0.05); z-index: 2; }

.cc-card-footer { padding: 26px 24px; display: flex; flex-direction: column; flex-grow: 1; background-color: var(--card-bg-down) !important; position: relative; }

.cc-accent-line { width: 40px; height: 3px; border-radius: 4px; background-color: var(--card-accent-dark); margin-top: auto; margin-bottom: 16px; transition: width 0.3s ease; }
.cc-card:hover .cc-accent-line { width: 60px; }

.cc-card-arrow { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--card-accent-dark); transition: gap 0.2s ease; }
.cc-card:hover .cc-card-arrow { gap: 10px; }

.cc-masonry { columns: 3 300px; column-gap: 1.5rem; }
.cc-masonry-item { break-inside: avoid; margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; background: #F8FAFC; border: 1px solid #E2E8F0; cursor: pointer; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1); }
.cc-masonry-item:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(7,26,47,0.08); }
.cc-masonry-item img { width: 100%; display: block; }

.cc-lightbox { position: fixed; inset: 0; background: rgba(7,26,47,0.96); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 2rem; }
.cc-lightbox img { max-width: 90vw; max-height: 85vh; border-radius: 8px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
.cc-lightbox-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: #fff; font-size: 36px; cursor: pointer; line-height: 1; }

.cc-section-eyebrow { color: #C9922A; text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; font-weight: 700; margin-bottom: 8px; }
.cc-gallery-header { background: var(--cc-bg) !important; padding: 4rem 3rem 2rem; border-bottom: 1px solid #E2E8F0; }

@media (max-width: 768px) {
  .cc-hero, .cc-gallery-header { padding: 4rem 1.5rem 2rem; }
  .cc-cards-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
  .cc-masonry { columns: 2; }
}
@media (max-width: 480px) { .cc-masonry { columns: 1; } }
`;

const CO_CURRICULAR = [
  {
    id: "indoor",
    title: "Indoor Activities",
    subtitle: "Indoor Games",
    image: "/src/assets/indoor/i1.png",
    accentDark: "#1E40AF",
    bgDown: "#EFF6FF",
    description: "Chess, carrom, table tennis, and brain-stimulating games that sharpen focus, strategic thinking, and healthy competition indoors.",
    gallery: [
      "/src/assets/indoor/i1.png",
      "/src/assets/indoor/i2.png",
      "/src/assets/indoor/i3.png",
      "/src/assets/indoor/i4.png",
      "/src/assets/indoor/i5.png",

    ]
  },
  {
    id: "outdoor",
    title: "Outdoor Activities",
    subtitle: "Outdoor Sports",
    image: "/src/assets/Outdoor/o1.png",
    accentDark: "#065F46",
    bgDown: "#E6F4EA",
    description: "Cricket, football, athletics, and team sports that build stamina, sportsmanship, and collaborative spirit on the open field.",
    gallery: [
      "/src/assets/Outdoor/o1.png",
      "/src/assets/Outdoor/o2.png",
      "/src/assets/Outdoor/o3.png",
      "/src/assets/Outdoor/o4.png",
      "/src/assets/Outdoor/o5.png",
      "/src/assets/Outdoor/o6.png",

    ]
  },
  {
    id: "clay",
    title: "Clay Activities",
    subtitle: "Creative Sculpting",
    image: "/src/assets/Clayactivities/Cl1.png",
    accentDark: "#92400E",
    bgDown: "#FEF3C7",
    description: "Hand-crafted clay modelling sessions that nurture fine motor skills, patience, spatial reasoning, and artistic expression.",
    gallery: [
      "/src/assets/Clayactivities/Cl1.png",
      "/src/assets/Clayactivities/Cl2.png",
      "/src/assets/Clayactivities/Cl3.png",
      "/src/assets/Clayactivities/CL4.png",
      "/src/assets/Clayactivities/Cl5.png",
      "/src/assets/Clayactivities/Cl6.png",
    ]
  },
  {
    id: "notice-board",
    title: "Notice Board",
    subtitle: "Student Displays",
    image: "/src/assets/NoticeBoard/n1.png",
    accentDark: "#5B21B6",
    bgDown: "#F3E8FF",
    description: "Vibrant student-curated notice boards showcasing achievements, announcements, artwork, and peer recognition highlights.",
    gallery: [
      "/src/assets/NoticeBoard/n1.png",
      "/src/assets/NoticeBoard/n2.png",
      "/src/assets/NoticeBoard/n3.png",
      "/src/assets/NoticeBoard/n4.png",
      "/src/assets/NoticeBoard/n5.png",
    ]
  },
  {
    id: "diya-making",
    title: "Diya Making",
    subtitle: "Festive Craft",
    image: "/src/assets/Diyamaking/D1.png",
    accentDark: "#C2410C",
    bgDown: "#FFEDD5",
    description: "Traditional lamp-making and decoration activities that connect students with cultural heritage, creativity, and celebration.",
    gallery: [
      "/src/assets/Diyamaking/D1.png",
      "/src/assets/Diyamaking/D2.png",
      "/src/assets/Diyamaking/D3.png",
      "/src/assets/Diyamaking/D4.png",
    ]
  },
  {
    id: "art-craft",
    title: "Art and Craft",
    subtitle: "Visual Arts",
    image: "/src/assets/ARTS/A1.png",
    accentDark: "#9D174D",
    bgDown: "#FCE7F3",
    description: "Drawing, painting, collage, and origami sessions that develop aesthetic sensibility, imagination, and artistic confidence.",
    gallery: [
      "/src/assets/ARTS/A1.png",
      "/src/assets/ARTS/A2.png",
      "/src/assets/ARTS/A3.png",
      "/src/assets/ARTS/A4.png",
      "/src/assets/ARTS/A5.png",
      "/src/assets/ARTS/A6.png",
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
    <div className="cc-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="cc-lightbox-close" onClick={onClose} aria-label="Close lightbox">×</button>
      <img src={image} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function CoCurricularCard({ item, onClick }) {
  return (
    <article
      className="cc-card"
      onClick={onClick}
      style={{ "--card-accent-dark": item.accentDark, "--card-bg-down": item.bgDown }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <div className="cc-card-img-wrap">
        <span className="cc-badge-pill" style={{ color: item.accentDark }}>{item.subtitle}</span>
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
      <div className="cc-card-footer">
        <h3
          className="cc-display"
          style={{ color: THEME.colors.navy, fontSize: 21, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}
        >
          {item.title}
        </h3>
        <p style={{ color: THEME.colors.textMuted, lineHeight: 1.6, fontSize: 13.5, marginBottom: 24, fontWeight: 500 }}>
          {item.description}
        </p>
        <div className="cc-accent-line" />
        <div className="cc-card-arrow">
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
    <div style={{ background: "var(--cc-bg)" }}>
      <div className="cc-gallery-header">
        <button className="cc-btn cc-btn-back" onClick={onBack} style={{ marginBottom: "1.5rem" }}>
          ← Back to Activities
        </button>
        <div>
          <div className="cc-section-eyebrow" style={{ color: item.accentDark }}>{item.subtitle}</div>
          <h1
            className="cc-display"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: THEME.colors.navy, fontWeight: 700 }}
          >
            {item.title} Gallery
          </h1>
          <p style={{ color: THEME.colors.textMuted, fontSize: 14, marginTop: 4 }}>
            Showing {item.gallery.length} collection image{item.gallery.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1350, margin: "0 auto", padding: "3rem 2rem 6rem", background: "var(--cc-bg)" }}>
        {item.gallery.length > 0 ? (
          <div className="cc-masonry">
            {item.gallery.map((src, i) => (
              <div
                className="cc-masonry-item"
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

export default function CoCurricular() {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="cc-body" style={{ background: "var(--cc-bg)" }}>
        {selected ? (
          <GalleryView item={selected} onBack={() => setSelected(null)} onLightbox={setLightbox} />
        ) : (
          <div style={{ background: "var(--cc-bg)" }}>
            <section className="cc-hero">
              <div className="cc-hero-content">
                <div className="cc-hero-eyebrow">
                  <span>Brindavan School</span>
                </div>
                <h1
                  className="cc-display"
                  style={{ fontSize: "clamp(34px, 5vw, 54px)", color: "#FFFFFF", fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}
                >
                  Co-Curricular Activities
                </h1>
                <p style={{ color: "#E2E8F0", fontSize: 15, lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
                  Beyond the classroom — discover sports, arts, crafts, and creative endeavours that shape well-rounded individuals.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    className="cc-btn cc-btn-primary"
                    onClick={() => window.scrollTo({ top: window.innerHeight * 0.4, behavior: "smooth" })}
                  >
                    Explore All
                  </button>
                  <button className="cc-btn cc-btn-ghost">Learn More</button>
                </div>
              </div>
            </section>

            <div style={{ maxWidth: 1350, margin: "0 auto", padding: "4rem 2rem 7rem", background: "var(--cc-bg)" }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="cc-section-eyebrow">Beyond Academics</p>
                <h2
                  className="cc-display"
                  style={{ fontSize: "clamp(26px, 3.5vw, 34px)", color: THEME.colors.navy, fontWeight: 700 }}
                >
                  Co-Curricular Programmes
                </h2>
              </div>
              <div className="cc-cards-grid">
                {CO_CURRICULAR.map((item) => (
                  <CoCurricularCard key={item.id} item={item} onClick={() => setSelected(item)} />
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