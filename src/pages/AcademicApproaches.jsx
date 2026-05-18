import { useState, useEffect } from "react";

/* ══════════════════════════════════════════════
    THEME & DESIGN TOKENS 
══════════════════════════════════════════════ */
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

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght=600;700;800&family=DM+Sans:wght=400;500;600;700&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; background-color: ${THEME.colors.white} !important; }

body { 
  background: ${THEME.colors.white} !important; 
  font-family: ${THEME.fonts.body}; 
  color: ${THEME.colors.navy}; 
  -webkit-font-smoothing: antialiased;
}

.aa-display { font-family: ${THEME.fonts.display}; }
.aa-body    { font-family: ${THEME.fonts.body}; background: ${THEME.colors.white}; }

/* ── BUTTONS ── */
.aa-btn {
  border: none; outline: none; cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: ${THEME.fonts.body};
  display: inline-flex; align-items: center; justify-content: center;
}
.aa-btn-primary {
  background: ${THEME.colors.gold};
  color: ${THEME.colors.white};
  padding: 12px 26px; border-radius: 50px;
  font-size: 13px; font-weight: 700; letter-spacing: 0.05em; text-transform: uppercase;
}
.aa-btn-primary:hover { opacity: 0.9; transform: translateY(-1px); }

.aa-btn-ghost {
  background: ${THEME.colors.white}; color: ${THEME.colors.navy};
  padding: 12px 26px; border-radius: 50px;
  font-size: 13px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase;
  border: 1px solid ${THEME.colors.navy};
}
.aa-btn-ghost:hover { background: #F8FAFC; }

.aa-btn-back {
  background: ${THEME.colors.white}; color: ${THEME.colors.navy};
  padding: 10px 20px; border-radius: 50px;
  font-size: 13px; font-weight: 600;
  border: 1px solid ${THEME.colors.borderLight};
}
.aa-btn-back:hover { background: #F8FAFC; }

/* ── HERO SECTION ── */
.aa-hero {
  width: 100%;
  padding: 5rem 3rem 3rem;
  background: ${THEME.colors.white} !important;
  border-bottom: 1px solid ${THEME.colors.borderLight};
}
.aa-hero-content { max-width: 680px; }
.aa-hero-eyebrow {
  display: inline-flex; align-items: center; gap: 8px;
  margin-bottom: 16px;
  color: ${THEME.colors.gold}; 
  font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase;
}

/* ── COLOR DOWN CARD GRIDS ── */
.aa-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  background: ${THEME.colors.white};
}

.aa-card {
  background: ${THEME.colors.white} !important;
  border: 1px solid ${THEME.colors.borderLight};
  border-radius: 20px;
  overflow: hidden;
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1), outline 0.2s ease, border-color 0.2s ease;
  cursor: pointer;
  display: flex; 
  flex-direction: column;
  position: relative;
  box-shadow: 0 4px 14px rgba(7, 26, 47, 0.03);
  outline: 4px solid transparent;
}

.aa-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 30px rgba(7, 26, 47, 0.08);
}

/* ── ACTIVE/SELECTED STATE MATCHERS ── */
.aa-card.is-active {
  outline: 4px solid var(--card-accent-dark) !important;
  border-color: transparent !important;
  transform: translateY(-4px);
  box-shadow: 0 12px 24px rgba(7, 26, 47, 0.12);
}

/* Image framing area */
.aa-card-img-wrap {
  position: relative;
  width: 100%;
  padding-top: 65%;   
  overflow: hidden;
  background-color: #F1F5F9; 
}

.aa-card-img-wrap img {
  position: absolute; 
  top: 0; left: 0; width: 100%; height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.aa-card:hover .aa-card-img-wrap img {
  transform: scale(1.04);
}

/* Category Badge Pills Overlays */
.aa-badge-pill {
  position: absolute;
  top: 14px; left: 14px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(4px);
  padding: 6px 14px;
  border-radius: 40px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  z-index: 2;
}

/* Dynamic Solid Footer down block system */
.aa-card-footer {
  padding: 26px 24px;
  display: flex; 
  flex-direction: column; 
  flex-grow: 1;
  background-color: var(--card-bg-down) !important;
  position: relative;
  transition: background-color 0.2s ease;
}

/* Alternate highlighted card background when active */
.aa-card.is-active .aa-card-footer {
  background-color: var(--card-bg-down) !important;
}

/* Horizontal accent line separating footer sections */
.aa-accent-line {
  width: 40px;
  height: 3px;
  border-radius: 4px;
  background-color: var(--card-accent-dark);
  margin-top: auto;
  margin-bottom: 16px;
  transition: width 0.3s ease;
}
.aa-card:hover .aa-accent-line,
.aa-card.is-active .aa-accent-line {
  width: 60px;
}

.aa-card-arrow {
  display: inline-flex; 
  align-items: center; 
  gap: 6px;
  font-size: 11px; 
  font-weight: 700; 
  letter-spacing: 0.08em; 
  text-transform: uppercase;
  color: var(--card-accent-dark);
  transition: gap 0.2s ease;
}
.aa-card:hover .aa-card-arrow,
.aa-card.is-active .aa-card-arrow { gap: 10px; }

/* ── MASONRY GALLERY ── */
.aa-masonry { columns: 3 300px; column-gap: 1.5rem; }
.aa-masonry-item {
  break-inside: avoid; margin-bottom: 1.5rem; border-radius: 12px; overflow: hidden;
  background: #F8FAFC; border: 1px solid ${THEME.colors.borderLight}; cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}
.aa-masonry-item:hover { transform: translateY(-4px); box-shadow: 0 12px 24px rgba(7, 26, 47, 0.08); }
.aa-masonry-item img { width: 100%; display: block; }

/* ── LIGHTBOX ── */
.aa-lightbox {
  position: fixed; inset: 0; background: rgba(7, 26, 47, 0.96);
  display: flex; align-items: center; justify-content: center; z-index: 9999; padding: 2rem;
}
.aa-lightbox img { max-width: 90vw; max-height: 85vh; border-radius: 8px; box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
.aa-lightbox-close { position: absolute; top: 24px; right: 24px; background: none; border: none; color: white; font-size: 36px; cursor: pointer; }

.aa-section-eyebrow { color: ${THEME.colors.gold}; text-transform: uppercase; letter-spacing: 0.18em; font-size: 11px; font-weight: 700; margin-bottom: 8px; }
.aa-gallery-header { background: ${THEME.colors.white} !important; padding: 4rem 3rem 2rem; border-bottom: 1px solid ${THEME.colors.borderLight}; }

@media (max-width: 768px) {
  .aa-hero, .aa-gallery-header { padding: 4rem 1.5rem 2rem; }
  .aa-cards-grid { grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 1.5rem; }
  .aa-masonry { columns: 2; }
}
@media (max-width: 480px) { .aa-masonry { columns: 1; } }
`;

const ACADEMICS = [
  {
    id: "abacus",
    title: "Abacus",
    subtitle: "Mental Mathematics",
    image: "/src/assets/ABACUS/ABHero.png",
    accentDark: "#1E40AF", 
    bgDown: "#EFF6FF", 
    description: "Enhancing concentration, spatial memory, and lightning-fast arithmetic through structured bead-counting systems.",
    gallery: ["/src/assets/ABACUS/AB1.jpeg", "/src/assets/ABACUS/AB2.jpeg", "/src/assets/ABACUS/AB3.png", "/src/assets/ABACUS/AB4.png", "/src/assets/ABACUS/AB5.png"]
  },
  {
    id: "dpt",
    title: "DPT",
    subtitle: "Development Programme",
    image: "/src/assets/DPT.jpeg",
    accentDark: "#065F46", 
    bgDown: "#E6F4EA", 
    description: "Building cognitive abilities, logical analysis, personality development, and public confidence frameworks.",
    gallery: []
  },
  {
    id: "iit-neet",
    title: "IIT – NEET",
    subtitle: "Competitive Foundation",
    image: "/src/assets/IIT NEET/IITHERO.png",
    accentDark: "#991B1B", 
    bgDown: "#FCE8E6", 
    description: "Advanced concept frameworks targeting Olympiads, foundational engineering, and medical track preparation.",
    gallery: ["/src/assets/IIT NEET/IIT1.png", "/src/assets/IIT NEET/IIT2.png", "/src/assets/IIT NEET/IIT3.png", "/src/assets/IIT NEET/IIT4.png"]
  },
  {
    id: "science-lab",
    title: "Science Lab",
    subtitle: "Practical Experiments",
    image: "/src/assets/D) SCIENCE LAB/SLHero.png",
    accentDark: "#5B21B6", 
    bgDown: "#F3E8FF", 
    description: "Hands-on chemical, physical, and bio experiments transforming dry theory into physical realizations.",
    gallery: ["/src/assets/D) SCIENCE LAB/SL1.jpeg", "/src/assets/D) SCIENCE LAB/SL2.jpeg"]
  },
  {
    id: "omr",
    title: "OMR Evaluation",
    subtitle: "Assessment Systems",
    image: "/src/assets/E) OMR/OMRHero.png",
    accentDark: "#92400E", 
    bgDown: "#FEF3C7", 
    description: "Familiarising pupils with modern competitive testing via automated diagnostic examinations.",
    gallery: ["/src/assets/E) OMR/OMR1.jpeg", "/src/assets/E) OMR/OMR2.jpeg"]
  },
  {
    id: "language-lab",
    title: "Language Lab",
    subtitle: "Communication Skills",
    image: "/src/assets/F) LANGUAGE LAB/LLHero.png",
    accentDark: "#0369A1", 
    bgDown: "#E0F2FE", 
    description: "Digital audio-linguistic tools to perfect phonetics, conversational fluency, and speech clarity.",
    gallery: ["/src/assets/F) LANGUAGE LAB/LL1.jpeg", "/src/assets/F) LANGUAGE LAB/LL2.jpeg"]
  },
  {
    id: "computer-lab",
    title: "Computer Lab",
    subtitle: "Digital Literacy",
    image: "/src/assets/G) COMPUTR LAB/CLHero.png",
    accentDark: "#374151", 
    bgDown: "#F1F5F9", 
    description: "Programming fundamentals, AI applications, web logic, and technology-driven learning models.",
    gallery: ["/src/assets/G) COMPUTR LAB/CL1.jpeg", "/src/assets/G) COMPUTR LAB/CL2.jpeg"]
  },
  {
    id: "csp",
    title: "CSP",
    subtitle: "Community Activity",
    image: "/src/assets/I) CSP/CSPHero.png",
    accentDark: "#9D174D", 
    bgDown: "#FCE7F3", 
    description: "Community Service Projects moulding societal empathy, civic awareness, and cooperative peer responsibility.",
    gallery: ["/src/assets/I) CSP/CSP1.jpeg", "/src/assets/I) CSP/CSP2.jpeg"]
  },
  {
    id: "field-trip",
    title: "Field Trips",
    subtitle: "Experiential Outings",
    image: "/src/assets/J) FIELD TRIP/FTHero.png",
    accentDark: "#C2410C", 
    bgDown: "#FFEDD5", 
    description: "Guided environmental and factory tours bridging indoor curricula with real-world execution.",
    gallery: ["/src/assets/J) FIELD TRIP/FT1.jpeg", "/src/assets/J) FIELD TRIP/FT2.jpeg"]
  },
  {
    id: "sports-meet",
    title: "Sports Meet 2026",
    subtitle: "Sports Championship",
    image: "/src/assets/Sports/SportsHero.png",
    accentDark: "#1E3A8A", 
    bgDown: "#FFDCC3", 
    description: "Students showcased teamwork, discipline, and athletic excellence through exciting indoor and outdoor sports competitions.",
    gallery: ["/src/assets/Sports/Sports1.jpeg", "/src/assets/Sports/Sports2.jpeg", "/src/assets/Sports/Sports3.jpeg", "/src/assets/Sports/Sports4.jpeg", "/src/assets/Sports/Sports5.jpeg"]
  },
  {
    id: "doctors-day",
    title: "Doctors Day Celebration",
    subtitle: "Special Celebration",
    image: "/src/assets/ScienceDay/DoctorsHero.png",
    accentDark: "#4C1D95", 
    bgDown: "#E0E0FF", 
    description: "Students honored healthcare heroes through roleplay activities, awareness programs, and creative presentations.",
    gallery: ["/src/assets/ScienceDay/Doctors1.jpeg", "/src/assets/ScienceDay/Doctors2.jpeg", "/src/assets/ScienceDay/Doctors3.jpeg", "/src/assets/ScienceDay/Doctors4.jpeg"]
  },
  {
    id: "annual-day",
    title: "Annual Day Fest",
    subtitle: "Cultural Event",
    image: "/src/assets/Infrastructure/AnnualHero.png",
    accentDark: "#701A75", 
    bgDown: "#FFF0D4", 
    description: "A grand celebration filled with dance, music, drama, and student performances that brought the entire campus alive.",
    gallery: ["/src/assets/Infrastructure/Annual1.jpeg", "/src/assets/Infrastructure/Annual2.jpeg", "/src/assets/Infrastructure/Annual3.jpeg", "/src/assets/Infrastructure/Annual4.jpeg"]
  },
  {
    id: "childrens-day",
    title: "Children's Day Fun",
    subtitle: "Student Celebration",
    image: "/src/assets/Library/ChildrensHero.png",
    accentDark: "#065F46", 
    bgDown: "#D5F9E4", 
    description: "A joyful day of games, performances, fun activities, and memorable moments dedicated to our beloved students.",
    gallery: ["/src/assets/Library/Childrens1.jpeg", "/src/assets/Library/Childrens2.jpeg", "/src/assets/Library/Childrens3.jpeg"]
  }
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
    <div className="aa-lightbox" onClick={onClose}>
      <button className="aa-lightbox-close" onClick={onClose}>×</button>
      <img src={image} alt="Enlarged view" onClick={(e) => e.stopPropagation()} />
    </div>
  );
}

function AcademicCard({ item, isActive, onClick, onViewGallery }) {
  return (
    <article 
      className={`aa-card ${isActive ? 'is-active' : ''}`}
      onClick={onClick}
      style={{ 
        "--card-accent-dark": item.accentDark, 
        "--card-bg-down": item.bgDown
      }}
    >
      <div className="aa-card-img-wrap">
        <span className="aa-badge-pill" style={{ color: item.accentDark }}>
          {item.subtitle}
        </span>
        <img 
          src={item.image} 
          alt={item.title} 
          loading="lazy" 
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.style.background = '#e2e8f0';
          }}
        />
      </div>

      <div className="aa-card-footer">
        <h3 className="aa-display" style={{ color: THEME.colors.navy, fontSize: 21, fontWeight: 700, marginBottom: 10, letterSpacing: "-0.01em" }}>
          {item.title}
        </h3>

        <p style={{ color: THEME.colors.textMuted, lineHeight: 1.6, fontSize: 13.5, marginBottom: 24, fontWeight: 500 }}>
          {item.description}
        </p>

        <div className="aa-accent-line"></div>

        {/* Clicking this area explicitly forwards users into the full view */}
        <div 
          className="aa-card-arrow" 
          onClick={(e) => {
            e.stopPropagation(); // Prevents double click layout issues
            onViewGallery();
          }}
        >
          <span>View Gallery</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </div>
      </div>
    </article>
  );
}

function GalleryView({ item, onBack, onLightbox }) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, []);

  return (
    <div style={{ background: THEME.colors.white }}>
      <div className="aa-gallery-header">
        <button className="aa-btn aa-btn-back" onClick={onBack} style={{ marginBottom: "1.5rem", gap: 8 }}>
          ← Back to Frameworks
        </button>

        <div>
          <div className="aa-section-eyebrow" style={{ color: item.accentDark }}>{item.subtitle}</div>
          <h1 className="aa-display" style={{ fontSize: "clamp(28px, 4vw, 40px)", color: THEME.colors.navy, fontWeight: 700 }}>
            {item.title} Gallery
          </h1>
          <p style={{ color: THEME.colors.textMuted, fontSize: 14, marginTop: 4 }}>
            Showing {item.gallery.length} collection images
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1350, margin: "0 auto", padding: "3rem 2rem 6rem", background: THEME.colors.white }}>
        {item.gallery.length > 0 ? (
          <div className="aa-masonry">
            {item.gallery.map((src, i) => (
              <div className="aa-masonry-item" key={i} onClick={() => onLightbox(src)} style={{ border: `2px solid ${item.bgDown}` }}>
                <img src={src} alt={`${item.title} asset ${i + 1}`} loading="lazy" />
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

export default function AcademicApproach() {
  const [selected, setSelected] = useState(null);
  const [activeCardId, setActiveCardId] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <style>{GLOBAL_CSS}</style>

      <div className="aa-body" style={{ background: THEME.colors.white }}>
        {selected ? (
          <GalleryView
            item={selected}
            onBack={() => setSelected(null)}
            onLightbox={setLightbox}
          />
        ) : (
          <div style={{ background: THEME.colors.white }}>
            {/* ── HERO DISPLAY ── */}
            <section className="aa-hero">
              <div className="aa-hero-content">
                <div className="aa-hero-eyebrow">
                  <span>Brindavan School</span>
                </div>

                <h1 className="aa-display" style={{ fontSize: "clamp(34px, 5vw, 54px)", color: THEME.colors.navy, fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
                  Academic Frameworks
                </h1>

                <p style={{ color: THEME.colors.textMuted, fontSize: 15, lineHeight: 1.7, maxWidth: 520, marginBottom: 28 }}>
                  Explore student life tracks, practical labs, learning programmes, and structured evaluations.
                </p>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    className="aa-btn aa-btn-primary"
                    onClick={() => window.scrollTo({ top: window.innerHeight * 0.4, behavior: "smooth" })}
                  >
                    Explore All
                  </button>
                  <button className="aa-btn aa-btn-ghost">
                    Learn More
                  </button>
                </div>
              </div>
            </section>

            {/* ── CARDS GRID CONTAINER ── */}
            <div style={{ maxWidth: 1350, margin: "0 auto", padding: "4rem 2rem 7rem", background: THEME.colors.white }}>
              <div style={{ marginBottom: "2.5rem" }}>
                <p className="aa-section-eyebrow">Curricular Models</p>
                <h2 className="aa-display" style={{ fontSize: "clamp(26px, 3.5vw, 34px)", color: THEME.colors.navy, fontWeight: 700 }}>
                  Academic Framework & Curricula
                </h2>
              </div>

              <div className="aa-cards-grid">
                {ACADEMICS.map((item) => (
                  <AcademicCard
                    key={item.id}
                    item={item}
                    isActive={activeCardId === item.id}
                    onClick={() => setActiveCardId(item.id)}
                    onViewGallery={() => setSelected(item)}
                  />
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