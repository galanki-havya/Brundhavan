import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";

const THEME = {
  colors: {
    navy: "#071A2F",
    gold: "#C9922A",
    white: "#FFFFFF",
    textMuted: "#334155",
    borderLight: "#E2E8F0",
    accent: "#FF6347",
  },
  fonts: {
    display: "'Playfair Display', serif",
    body: "'DM Sans', sans-serif",
  },
};

const GLOBAL_CSS = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');

:root {
  --ff-bg: #FFFFFF;
  --ff-navy: #071A2F;
  --ff-gold: #C9922A;
  --ff-accent: #FF6347;
  --ff-muted: #64748B;
}

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{
  scroll-behavior:smooth;
  background:var(--ff-bg);
}

body{
  font-family:'DM Sans',sans-serif;
  background:var(--ff-bg);
  color:var(--ff-navy);
  -webkit-font-smoothing:antialiased;
}

.ff-display{
  font-family:'Playfair Display',serif;
}

.ff-section{
  padding:90px 24px;
}

.ff-container{
  max-width:1200px;
  margin:0 auto;
}

.ff-split{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:70px;
  align-items:center;
}

.ff-cards-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
  gap:2rem;
}

.ff-card{
  background:#fff;
  border-radius:24px;
  overflow:hidden;
  border:1px solid #EEF2F7;
  box-shadow:0 10px 30px rgba(15,23,42,0.06);
  transition:all .35s ease;
  cursor:pointer;
  position:relative;
}

.ff-card:hover{
  transform:translateY(-8px);
  box-shadow:0 18px 45px rgba(15,23,42,0.12);
}

.ff-card-image{
  position:relative;
  width:100%;
  padding-top:65%;
  overflow:hidden;
}

.ff-card-image img{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  object-fit:cover;
  transition:transform .5s ease;
}

.ff-card:hover .ff-card-image img{
  transform:scale(1.05);
}

.ff-badge{
  position:absolute;
  top:16px;
  left:16px;
  background:rgba(255,255,255,0.92);
  backdrop-filter:blur(8px);
  padding:7px 14px;
  border-radius:999px;
  font-size:10px;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
  z-index:2;
}

.ff-card-content{
  padding:26px;
}

.ff-card-title{
  font-family:'Playfair Display',serif;
  font-size:1.2rem;
  font-weight:700;
  margin-bottom:10px;
  color:#011E3A;
}

.ff-card-description{
  color:#555;
  line-height:1.75;
  font-size:.92rem;
}

.ff-card-line{
  width:42px;
  height:3px;
  border-radius:999px;
  margin:20px 0 14px;
}

.ff-card-link{
  display:flex;
  align-items:center;
  gap:8px;
  font-size:11px;
  font-weight:700;
  letter-spacing:.08em;
  text-transform:uppercase;
}

.ff-gallery{
  columns:3 280px;
  column-gap:1.5rem;
}

.ff-gallery-item{
  break-inside:avoid;
  margin-bottom:1.5rem;
  border-radius:18px;
  overflow:hidden;
  cursor:pointer;
  box-shadow:0 4px 18px rgba(0,0,0,0.06);
  transition:all .3s ease;
}

.ff-gallery-item:hover{
  transform:translateY(-4px);
}

.ff-gallery-item img{
  width:100%;
  display:block;
}

.ff-lightbox{
  position:fixed;
  inset:0;
  background:rgba(2,6,23,.92);
  display:flex;
  align-items:center;
  justify-content:center;
  z-index:9999;
  padding:2rem;
}

.ff-lightbox img{
  max-width:90vw;
  max-height:85vh;
  border-radius:20px;
}

.ff-btn{
  border:none;
  outline:none;
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px;
  transition:.25s ease;
  text-decoration:none;
}

.ff-btn-primary{
  background:var(--ff-accent);
  color:#fff;
  padding:14px 30px;
  border-radius:999px;
  font-weight:700;
}

.ff-btn-primary:hover{
  transform:translateY(-2px);
}

.ff-btn-outline{
  border:1.5px solid #DCE3EA;
  color:#071A2F;
  padding:14px 30px;
  border-radius:999px;
  background:#fff;
  font-weight:600;
}

.ff-btn-outline:hover{
  background:#F8FAFC;
}

.ff-cta{
  border:1.5px solid #FFD7CF;
  border-radius:28px;
  padding:70px 40px;
  text-align:center;
  background:linear-gradient(to bottom,#fff,#fff8f6);
}

@media(max-width:768px){

  .ff-section{
    padding:70px 20px;
  }

  .ff-split{
    grid-template-columns:1fr;
    gap:50px;
  }

  .ff-gallery{
    columns:2;
  }
}

@media(max-width:520px){

  .ff-gallery{
    columns:1;
  }

  .ff-card-content{
    padding:22px;
  }
}
`;

const FESTIVALS = [
  {
    id: "krishnastami",
    title: "Krishnashtami",
    subtitle: "Joyful Celebration",
    image: "/src/assets/krishnaastami/k1.png",
    accentDark: "#1E40AF",
    bgDown: "#EFF6FF",
    description:
      "Celebrating the birth of Lord Krishna with devotion, dance, dahi-handi, and joyful festivities.",
    gallery: [
      "/src/assets/krishnaastami/k1.png",
      "/src/assets/krishnaastami/k2.png",
      "/src/assets/krishnaastami/k3.png",
      "/src/assets/krishnaastami/k4.png",
      "/src/assets/krishnaastami/k5.png",
    ],
  },

  {
    id: "ayudhapuja",
    title: "Ayudha Puja",
    subtitle: "Festive Worship",
    image: "/src/assets/Ayudhapuja/a1.png",
    accentDark: "#B45309",
    bgDown: "#FEF3C7",
    description:
      "Honouring tools, books, and instruments with reverence during Ayudha Puja.",
    gallery: [
      "/src/assets/Ayudhapuja/a1.png",
      "/src/assets/Ayudhapuja/a2.png",
      "/src/assets/Ayudhapuja/a3.png",
      "/src/assets/Ayudhapuja/a4.png",
    ],
  },

  {
    id: "diwali",
    title: "Diwali",
    subtitle: "Festival of Lights",
    image: "/src/assets/Diwali/d1.png",
    accentDark: "#C2410C",
    bgDown: "#FFEDD5",
    description:
      "The festival of lights celebrated with diyas, rangoli, sweets, and cultural performances.",
    gallery: [
      "/src/assets/Diwali/d1.png",
      "/src/assets/Diwali/d2.png",
      "/src/assets/Diwali/d3.png",
      "/src/assets/Diwali/d4.png",
    ],
  },

  {
    id: "christmas",
    title: "Christmas",
    subtitle: "Season of Joy",
    image: "/src/assets/Christmas/c1.png",
    accentDark: "#065F46",
    bgDown: "#E6F4EA",
    description:
      "Spreading the spirit of Christmas with carol singing and joyful celebrations.",
    gallery: [
      "/src/assets/Christmas/c1.png",
      "/src/assets/Christmas/c2.png",
    ],
  },
];

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;

    document.body.style.overflow = "hidden";

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div className="ff-lightbox" onClick={onClose}>
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 40,
          cursor: "pointer",
        }}
      >
        ×
      </button>

      <img
        src={image}
        alt="Preview"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
}

function FestivalCard({ item, onClick }) {
  return (
    <motion.article
      className="ff-card"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      onClick={onClick}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 4,
          background: `linear-gradient(90deg, ${item.accentDark}, #FF6347)`,
        }}
      />

      <div
        className="ff-card-image"
        style={{ background: item.bgDown }}
      >
        <img src={item.image} alt={item.title} />

        <div
          className="ff-badge"
          style={{ color: item.accentDark }}
        >
          {item.subtitle}
        </div>
      </div>

      <div
        className="ff-card-content"
        style={{ background: item.bgDown }}
      >
        <h3 className="ff-card-title">{item.title}</h3>

        <p className="ff-card-description">
          {item.description}
        </p>

        <div
          className="ff-card-line"
          style={{ background: item.accentDark }}
        />

        <div
          className="ff-card-link"
          style={{ color: item.accentDark }}
        >
          View Gallery
          <ArrowRight size={14} />
        </div>
      </div>
    </motion.article>
  );
}

function GalleryView({ item, onBack, onLightbox }) {
  return (
    <div style={{ background: "#fff", minHeight: "100vh" }}>
      <div
        className="ff-container"
        style={{
          padding: "60px 24px 30px",
        }}
      >
        <button
          onClick={onBack}
          className="ff-btn ff-btn-outline"
          style={{ marginBottom: 30 }}
        >
          ← Back to Festivals
        </button>

        <p
          style={{
            color: item.accentDark,
            textTransform: "uppercase",
            letterSpacing: ".18em",
            fontWeight: 700,
            fontSize: 11,
            marginBottom: 10,
          }}
        >
          {item.subtitle}
        </p>

        <h1
          className="ff-display"
          style={{
            fontSize: "clamp(2rem,4vw,3rem)",
            color: "#011E3A",
            marginBottom: 8,
          }}
        >
          {item.title} Gallery
        </h1>

        <p style={{ color: "#64748B" }}>
          {item.gallery.length} images in this collection
        </p>
      </div>

      <div className="ff-container" style={{ padding: "20px 24px 80px" }}>
        <div className="ff-gallery">
          {item.gallery.map((src, i) => (
            <div
              key={i}
              className="ff-gallery-item"
              onClick={() => onLightbox(src)}
            >
              <img src={src} alt={`${item.title}-${i}`} />
            </div>
          ))}
        </div>
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

      <div style={{ background: "#fff" }}>
        {selected ? (
          <GalleryView
            item={selected}
            onBack={() => setSelected(null)}
            onLightbox={setLightbox}
          />
        ) : (
          <>
            <PageHero
              title="Festival Fun"
              subtitle="Celebrating every festival with colour, culture, and community."
              variant="pink"
              backgroundImage="/src/assets/heroforschoollife/feasthero.png"
            />

            {/* INTRO */}
            <section className="ff-section">
              <div className="ff-container ff-split">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                  style={{ position: "relative" }}
                >
                  <img
                    src="/src/assets/Diwali/d1.png"
                    alt="Festival Fun"
                    style={{
                      width: "100%",
                      height: 430,
                      objectFit: "cover",
                      borderRadius: 28,
                      boxShadow: "0 20px 50px rgba(0,0,0,0.08)",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      bottom: -20,
                      right: -20,
                      background: "#fff",
                      borderRadius: 18,
                      padding: "18px 24px",
                      boxShadow: "0 10px 35px rgba(0,0,0,0.1)",
                    }}
                  >
                    <div
                      className="ff-display"
                      style={{
                        fontSize: 32,
                        color: "#FF6347",
                        fontWeight: 700,
                      }}
                    >
                      8+
                    </div>

                    <div
                      style={{
                        color: "#64748B",
                        fontWeight: 600,
                        fontSize: 14,
                      }}
                    >
                      Festivals Celebrated
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7 }}
                  viewport={{ once: true }}
                >
                  <p
                    style={{
                      color: "#FF6347",
                      textTransform: "uppercase",
                      letterSpacing: ".18em",
                      fontWeight: 700,
                      fontSize: 11,
                      marginBottom: 16,
                    }}
                  >
                    Celebrating Together
                  </p>

                  <h1
                    className="ff-display"
                    style={{
                      fontSize: "clamp(2.4rem,5vw,4rem)",
                      lineHeight: 1.1,
                      color: "#071A2F",
                      marginBottom: 18,
                    }}
                  >
                    Festival Fun
                  </h1>

                  <p
                    style={{
                      color: "#64748B",
                      lineHeight: 1.9,
                      marginBottom: 30,
                      maxWidth: 540,
                    }}
                  >
                    Celebrating every festival with colour, culture, and
                    togetherness — creating unforgettable memories for every
                    student.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      gap: 14,
                      flexWrap: "wrap",
                    }}
                  >
                    <button
                      className="ff-btn ff-btn-primary"
                      onClick={() =>
                        window.scrollTo({
                          top: 900,
                          behavior: "smooth",
                        })
                      }
                    >
                      Explore Festivals
                    </button>

                    <Link
                      to="/contact"
                      className="ff-btn ff-btn-outline"
                    >
                      Contact Us
                    </Link>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* FESTIVAL GRID */}
            <section
              className="ff-section"
              style={{
                paddingTop: 0,
              }}
            >
              <div className="ff-container">
                <div
                  style={{
                    textAlign: "center",
                    marginBottom: 60,
                  }}
                >
                  <p
                    style={{
                      color: "#FF6347",
                      textTransform: "uppercase",
                      letterSpacing: ".18em",
                      fontWeight: 700,
                      fontSize: 11,
                      marginBottom: 14,
                    }}
                  >
                    Cultural Celebrations
                  </p>

                  <h2
                    className="ff-display"
                    style={{
                      fontSize: "clamp(2rem,4vw,3rem)",
                      color: "#071A2F",
                    }}
                  >
                    Explore Festival Galleries
                  </h2>
                </div>

                <div className="ff-cards-grid">
                  {FESTIVALS.map((item) => (
                    <FestivalCard
                      key={item.id}
                      item={item}
                      onClick={() => setSelected(item)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* CTA */}
            <section
              className="ff-section"
              style={{ paddingTop: 0 }}
            >
              <div className="ff-container">
                <div className="ff-cta">
                  <p
                    style={{
                      color: "#FF6347",
                      textTransform: "uppercase",
                      letterSpacing: ".18em",
                      fontWeight: 700,
                      fontSize: 11,
                      marginBottom: 16,
                    }}
                  >
                    Join Brindavan
                  </p>

                  <h2
                    className="ff-display"
                    style={{
                      fontSize: "clamp(2rem,4vw,3rem)",
                      color: "#071A2F",
                      marginBottom: 18,
                    }}
                  >
                    Be Part of Our Vibrant Community
                  </h2>

                  <p
                    style={{
                      color: "#64748B",
                      lineHeight: 1.9,
                      maxWidth: 700,
                      margin: "0 auto 34px",
                    }}
                  >
                    Let your child grow in an environment where every culture,
                    tradition, and celebration is respected and joyfully shared.
                  </p>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 14,
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      to="/admissions"
                      className="ff-btn ff-btn-primary"
                    >
                      Apply Now
                      <ArrowRight size={16} />
                    </Link>

                    <Link
                      to="/contact"
                      className="ff-btn ff-btn-outline"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        <Lightbox
          image={lightbox}
          onClose={() => setLightbox(null)}
        />
      </div>
    </>
  );
}