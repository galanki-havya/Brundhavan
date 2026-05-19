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

// ── FIXED: replaced all `var(--e-global-color-10113fb)` with `var(--ps-bg)`
//    and declared it in :root so it works in plain React/Vite apps ──
const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

:root { --ps-bg: #FFFFFF; }
* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; background-color: var(--ps-bg) !important; }
body { background: var(--ps-bg) !important; font-family: 'DM Sans', sans-serif; color: #071A2F; -webkit-font-smoothing: antialiased; }

.ps-display { font-family: 'Playfair Display', serif; }
.ps-body    { font-family: 'DM Sans', sans-serif; background: var(--ps-bg); }

.ps-btn { border: none; outline: none; cursor: pointer; transition: all 0.2s ease-in-out; font-family: 'DM Sans', sans-serif; display: inline-flex; align-items: center; justify-content: center; }
.ps-btn-primary { background: #C9922A; color: #fff; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase; }
.ps-btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }
.ps-btn-ghost { background: #fff; color: #071A2F; padding: 12px 26px; border-radius: 50px; font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; border: 1px solid #071A2F; }
.ps-btn-ghost:hover { background: #F8FAFC; }
.ps-btn-back { background: #fff; color: #071A2F; padding: 10px 20px; border-radius: 50px; font-size: 13px; font-weight: 600; border: 1px solid #E2E8F0; }
.ps-btn-back:hover { background: #F8FAFC; }

.ps-hero { width: 100%; padding: 5rem 3rem 3rem; background: var(--ps-bg) !important; border-bottom: 1px solid #E2E8F0; }
.ps-hero-content { max-width: 680px; }
.ps-hero-eyebrow { display: inline-flex; align-items: center; gap: 8px; margin-bottom: 16px; color: #C9922A; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }

.ps-cards-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 2rem; background: var(--ps-bg); }

.ps-card { background: var(--ps-bg) !important; border-radius: 20px; overflow: hidden; cursor: pointer; display: flex; flex-direction: column; position: relative; border: 1px solid transparent; outline: 4px solid var(--card-accent-dark); box-shadow: 0 12px 24px rgba(7,26,47,0.06); transition: transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.4s cubic-bezier(0.16,1,0.3,1); }
.ps-card:hover { transform: translateY(-8px); box-shadow: 0 20px 32px rgba(7,26,47,0.12); }

.ps-card-img-wrap { position: relative; width: 100%; padding-top: 65%; overflow: hidden; background-color: #F1F5F9; }
.ps-card-img-wrap img { position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s cubic-bezier(0.16,1,0.3,1); }
.ps-card:hover .ps-card-img-wrap img { transform: scale(1.04); }

.ps-badge-pill { position: absolute; top: 14px; left: 14px; background: rgba(255,255,255,0.92); backdrop-filter: blur(4px); padding: 6px 14px; border-radius: 40px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; box-shadow: 0 2px 8px rgba(0,0,0,0.05); z-index: 2; }

.ps-card-footer { padding: 26px 24px; display: flex; flex-direction: column; flex-grow: 1; background-color: var(--card-bg-down) !important; position: relative; }

.ps-accent-line { width: 40px; height: 3px; border-radius: 4px; background-color: var(--card-accent-dark); margin-top: auto; margin-bottom: 16px; transition: width 0.3s ease; }
.ps-card:hover .ps-accent-line { width: 60px; }

.ps-card-arrow { display: inline-flex; align-items: center; gap: 6px; font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--card-accent-dark); transition: gap 0.2s ease; }
.ps-card:hover .ps-card-arrow { gap: 10px; }

.ps-masonry { columns: 3 300px; column-gap: 1.5rem; }
.ps-masonry-item { break-inside: avoid; margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden; background: #F8FAFC; border: 1px solid #E2E8F0; cursor: pointer; transition: transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s cubic-bezier(0.16,1,0.3,1); }
.ps-masonry-item:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(7,26,47,0.08); }
.ps-masonry-item img { width: 100%; display: block; }

.ps-lightbox { position: fixed; inset: 0; background: rgba(7,26,47,0.96); display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 2rem; }
.ps-lightbox img { max-width: 90vw; max-height: 85vh; border-radius: 8px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
.ps-lightbox-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: #fff; font-size: 36px; cursor: pointer; line-height: 1; }

.ps-section-eyebrow { color: #C9922A; text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; font-weight: 700; margin-bottom: 8px; }
.ps-gallery-header { background: var(--ps-bg) !important; padding: 4rem 3rem 2rem; border-bottom: 1px solid #E2E8F0; }

@media (max-width: 768px) {
  .ps-hero, .ps-gallery-header { padding: 4rem 1.5rem 2rem; }
  .ps-cards-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
  .ps-masonry { columns: 2; }
}
@media (max-width: 480px) { .ps-masonry { columns: 1; } }
`;

const COMMUNICATION = [
  {
    id: "assembly",
    title: "Assembly",
    subtitle: "Morning Assembly",
    image: "/src/assets/ASSEMBLY/AS1.png",
    accentDark: "#1E40AF",
    bgDown: "#EFF6FF",
    description: "Daily morning assemblies cultivating discipline, national pride, thought of the day, and confident public expression before peers.",
    gallery: [
      "/src/assets/ASSEMBLY/AS1.png",
      "/src/assets/ASSEMBLY/AS2.png",
      "/src/assets/ASSEMBLY/AS3.png",
      "/src/assets/ASSEMBLY/AS4.png",
      "/src/assets/ASSEMBLY/AS5.png",
      "/src/assets/ASSEMBLY/AS6.png",
      "/src/assets/ASSEMBLY/AS7.png",
    ]
  },
  {
    id: "seminor",
    title: "Senior Programmes",
    subtitle: "Senior Leadership",
    image: "/src/assets/SEMINOR/S1.png",
    accentDark: "#065F46",
    bgDown: "#E6F4EA",
    description: "Advanced public speaking, debate, elocution, and leadership forums designed for senior students to master articulate communication.",
    gallery: [
      "/src/assets/SEMINOR/S1.png",
      "/src/assets/SEMINOR/S2.png",
      "/src/assets/SEMINOR/S3.png",
      "/src/assets/SEMINOR/S4.png",
      "/src/assets/SEMINOR/S5.png",
      "/src/assets/SEMINOR/S6.png",
      "/src/assets/SEMINOR/S7.png",
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
    <div className="ps-lightbox" onClick={onClose} role="dialog" aria-modal="true">
      <button className="ps-lightbox-close" onClick={onClose} aria-label="Close lightbox">×</button>
      <img src={image} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function CommunicationCard({ item, onClick }) {
  return (
    <article
      className="ps-card"
      onClick={onClick}
      style={{ "--card-accent-dark": item.accentDark, "--card-bg-down": item.bgDown }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") onClick(); }}
    >
      <div className="ps-card-img-wrap">
        <span className="ps-badge-pill" style={{ color: item.accentDark }}>{item.subtitle}</span>
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
      <div className="ps-card-footer">
        <h3
          className="ps-display"
          style={{ color: THEME.colors.navy, fontSize: 21, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}
        >
          {item.title}
        </h3>
        <p style={{ color: THEME.colors.textMuted, lineHeight: 1.6, fontSize: 13.5, marginBottom: 24, fontWeight: 500 }}>
          {item.description}
        </p>
        <div className="ps-accent-line" />
        <div className="ps-card-arrow">
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
    <div style={{ background: "var(--ps-bg)" }}>
      <div className="ps-gallery-header">
        <button className="ps-btn ps-btn-back" onClick={onBack} style={{ marginBottom: "1.5rem" }}>
          ← Back to Programmes
        </button>
        <div>
          <div className="ps-section-eyebrow" style={{ color: item.accentDark }}>{item.subtitle}</div>
          <h1
            className="ps-display"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: THEME.colors.navy, fontWeight: 700 }}
          >
            {item.title} Gallery
          </h1>
          <p style={{ color: THEME.colors.textMuted, fontSize: 14, marginTop: 4 }}>
            Showing {item.gallery.length} collection image{item.gallery.length !== 1 ? "s" : ""}
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1350, margin: "0 auto", padding: "3rem 2rem 6rem", background: "var(--ps-bg)" }}>
        {item.gallery.length > 0 ? (
          <div className="ps-masonry">
            {item.gallery.map((src, i) => (
              <div
                className="ps-masonry-item"
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

export default function CommunicationPublicSpeaking() {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <style>{GLOBAL_CSS}</style>
      <div className="ps-body" style={{ background: "var(--ps-bg)" }}>
        {selected ? (
          <GalleryView item={selected} onBack={() => setSelected(null)} onLightbox={setLightbox} />
        ) : (
          <div style={{ background: "var(--ps-bg)" }}>
            <section className="ps-hero">
              <div className="ps-hero-content">
                <div className="ps-hero-eyebrow">
                  <span>Brindavan School</span>
                </div>
                <h1
                  className="ps-display"
                  style={{ fontSize: "clamp(34px, 5vw, 54px)", color: THEME.colors.navy, fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}
                >
                  Communication & Public Speaking
                </h1>
                <p style={{ color: THEME.colors.textMuted, fontSize: 15, lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
                  Empowering every student with the voice, confidence, and clarity to lead, inspire, and articulate ideas that matter.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    className="ps-btn ps-btn-primary"
                    onClick={() => window.scrollTo({ top: window.innerHeight * 0.4, behavior: "smooth" })}
                  >
                    Explore All
                  </button>
                  <button className="ps-btn ps-btn-ghost">Learn More</button>
                </div>
              </div>
            </section>

            <div style={{ maxWidth: 1350, margin: "0 auto", padding: "4rem 2rem 7rem", background: "var(--ps-bg)" }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="ps-section-eyebrow">Voice & Expression</p>
                <h2
                  className="ps-display"
                  style={{ fontSize: "clamp(26px, 3.5vw, 34px)", color: THEME.colors.navy, fontWeight: 700 }}
                >
                  Communication Programmes
                </h2>
              </div>
              <div className="ps-cards-grid">
                {COMMUNICATION.map((item) => (
                  <CommunicationCard key={item.id} item={item} onClick={() => setSelected(item)} />
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