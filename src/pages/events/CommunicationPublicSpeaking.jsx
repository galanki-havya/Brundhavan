import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";

const GLOBAL_CSS = `
.ps-display {
  font-family: 'Playfair Display', serif;
}

.ps-btn {
  border: none;
  cursor: pointer;
  transition: all 0.25s ease;
}

.ps-btn-primary {
  background: #FF6347;
  color: white;
  padding: 13px 28px;
  border-radius: 999px;
  font-weight: 700;
}

.ps-btn-primary:hover {
  transform: translateY(-2px);
  opacity: 0.95;
}

.ps-btn-ghost {
  background: transparent;
  color: #011E3A;
  border: 1.5px solid #dbe3ea;
  padding: 13px 28px;
  border-radius: 999px;
  font-weight: 600;
}

.ps-btn-ghost:hover {
  background: #f8fafc;
}

.ps-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill,minmax(280px,1fr));
  gap: 28px;
}
`;

const COMMUNICATION = [
  {
    id: "assembly",
    title: "Morning Assembly",
    subtitle: "Daily Speaking",
    image: "/src/assets/ASSEMBLY/AS1.png",
    accentDark: "#FF6347",
    bgDown: "#FFF1EE",
    description:
      "Students improve confidence and public speaking through daily assembly presentations and announcements.",
    gallery: [
      "/src/assets/ASSEMBLY/AS1.png",
      "/src/assets/ASSEMBLY/AS2.png",
      "/src/assets/ASSEMBLY/AS3.png",
    ],
  },
];

function Lightbox({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.9)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <img
        src={image}
        alt="Preview"
        style={{
          maxWidth: "90vw",
          maxHeight: "85vh",
          borderRadius: 12,
        }}
      />
    </div>
  );
}

function ProgramCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      onClick={onClick}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: 220,
          objectFit: "cover",
        }}
      />

      <div
        style={{
          padding: 24,
          background: item.bgDown,
        }}
      >
        <h3
          style={{
            fontSize: 22,
            marginBottom: 10,
            color: "#011E3A",
            fontFamily: "'Playfair Display', serif",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "#475569",
            lineHeight: 1.7,
            fontSize: 14,
          }}
        >
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function GalleryView({ item, onBack, onLightbox }) {
  return (
    <div style={{ padding: "60px 24px" }}>
      <button
        onClick={onBack}
        style={{
          marginBottom: 30,
          border: "1px solid #ddd",
          padding: "10px 20px",
          borderRadius: 999,
          background: "#fff",
          cursor: "pointer",
        }}
      >
        ← Back
      </button>

      <h1
        style={{
          fontSize: 42,
          marginBottom: 40,
          fontFamily: "'Playfair Display', serif",
        }}
      >
        {item.title}
      </h1>

      <div
        style={{
          columns: "3 280px",
          columnGap: "1.5rem",
        }}
      >
        {item.gallery.map((img, i) => (
          <div
            key={i}
            style={{
              marginBottom: "1.5rem",
              cursor: "pointer",
            }}
            onClick={() => onLightbox(img)}
          >
            <img
              src={img}
              alt=""
              style={{
                width: "100%",
                borderRadius: 18,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CommunicationPublicSpeaking() {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      style={{
        background: "#fff",
        fontFamily: "'DM Sans', sans-serif",
      }}
    >
      <style>{GLOBAL_CSS}</style>

      {selected ? (
        <GalleryView
          item={selected}
          onBack={() => setSelected(null)}
          onLightbox={setLightbox}
        />
      ) : (
        <>
          <PageHero
            title="Communication & Public Speaking"
            subtitle="Empowering every student with the voice, confidence, and clarity to lead and inspire."
            variant="pink"
            backgroundImage="/images/gallery/overview.png"
          />

          <section
            style={{
              background: "#fff",
              padding: "80px 24px",
            }}
          >
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
              }}
            >
              <div className="ps-cards-grid">
                {COMMUNICATION.map((item) => (
                  <ProgramCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelected(item)}
                  />
                ))}
              </div>
            </div>
          </section>

          <section
            style={{
              padding: "0 24px 80px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                maxWidth: 700,
                margin: "0 auto",
                border: "1.5px solid #FF6347",
                borderRadius: 24,
                padding: "60px 40px",
              }}
            >
              <h2
                style={{
                  fontSize: "2.3rem",
                  color: "#011E3A",
                  marginBottom: 20,
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Help Your Child Find Their Voice
              </h2>

              <p
                style={{
                  color: "#555",
                  lineHeight: 1.8,
                  marginBottom: 30,
                }}
              >
                Enrol at Brindavan and help your child grow into a confident
                speaker and future leader.
              </p>

              <div
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <Link
                  to="/admissions"
                  style={{
                    background: "#FF6347",
                    color: "#fff",
                    padding: "13px 30px",
                    borderRadius: 999,
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    fontWeight: 700,
                  }}
                >
                  Apply Now
                  <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  style={{
                    border: "1px solid #ddd",
                    color: "#011E3A",
                    padding: "13px 30px",
                    borderRadius: 999,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Contact Us
                </Link>
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
  );
}