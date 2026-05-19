import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageHero from "../../components/PageHero";

function Lightbox({ image, onClose }) {
  useEffect(() => {
    if (!image) return;

    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [image, onClose]);

  if (!image) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(1,30,58,0.96)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "2rem",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: 24,
          right: 24,
          background: "none",
          border: "none",
          color: "#fff",
          fontSize: 36,
          cursor: "pointer",
        }}
      >
        ×
      </button>

      <img
        src={image}
        alt="preview"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90vw",
          maxHeight: "85vh",
          borderRadius: 12,
        }}
      />
    </div>
  );
}

const CO_CURRICULAR = [
  {
    id: "indoor",
    title: "Indoor Activities",
    subtitle: "Indoor Games",
    image: "/src/assets/indoor/i1.png",
    accentDark: "#1E40AF",
    bgDown: "#EFF6FF",
    description:
      "Chess, carrom, table tennis, and brain-stimulating games.",
    gallery: [
      "/src/assets/indoor/i1.png",
      "/src/assets/indoor/i2.png",
      "/src/assets/indoor/i3.png",
      "/src/assets/indoor/i4.png",
      "/src/assets/indoor/i5.png",
    ],
  },

  {
    id: "outdoor",
    title: "Outdoor Activities",
    subtitle: "Outdoor Sports",
    image: "/src/assets/Outdoor/o1.png",
    accentDark: "#065F46",
    bgDown: "#E6F4EA",
    description:
      "Cricket, football, athletics, and team sports activities.",
    gallery: [
      "/src/assets/Outdoor/o1.png",
      "/src/assets/Outdoor/o2.png",
      "/src/assets/Outdoor/o3.png",
      "/src/assets/Outdoor/o4.png",
      "/src/assets/Outdoor/o5.png",
      "/src/assets/Outdoor/o6.png",
    ],
  },

  {
    id: "clay",
    title: "Clay Activities",
    subtitle: "Creative Sculpting",
    image: "/src/assets/Clayactivities/Cl1.png",
    accentDark: "#92400E",
    bgDown: "#FEF3C7",
    description:
      "Creative clay modelling sessions for artistic development.",
    gallery: [
      "/src/assets/Clayactivities/Cl1.png",
      "/src/assets/Clayactivities/Cl2.png",
      "/src/assets/Clayactivities/Cl3.png",
      "/src/assets/Clayactivities/CL4.png",
      "/src/assets/Clayactivities/Cl5.png",
      "/src/assets/Clayactivities/Cl6.png",
    ],
  },
];

function ActivityCard({ item, onClick }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      onClick={onClick}
      style={{
        background: "#fff",
        borderRadius: 20,
        overflow: "hidden",
        cursor: "pointer",
        border: "1px solid #f0f0f0",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "62%",
          overflow: "hidden",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          padding: "24px 22px",
          background: item.bgDown,
        }}
      >
        <h3
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem",
            marginBottom: 10,
            color: "#011E3A",
          }}
        >
          {item.title}
        </h3>

        <p
          style={{
            color: "#555",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          {item.description}
        </p>

        <div
          style={{
            marginTop: 18,
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: item.accentDark,
            fontWeight: 700,
            fontSize: 12,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          View Gallery
        </div>
      </div>
    </motion.div>
  );
}

function GalleryView({ item, onBack, onLightbox }) {
  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          padding: "56px 24px 32px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        <button
          onClick={onBack}
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            padding: "10px 20px",
            borderRadius: 50,
            cursor: "pointer",
            marginBottom: 24,
          }}
        >
          ← Back
        </button>

        <h1
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px,4vw,38px)",
            color: "#011E3A",
          }}
        >
          {item.title} Gallery
        </h1>
      </div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "20px 24px 80px",
          columns: "3 280px",
          columnGap: "1.5rem",
        }}
      >
        {item.gallery.map((src, i) => (
          <div
            key={i}
            onClick={() => onLightbox(src)}
            style={{
              breakInside: "avoid",
              marginBottom: "1.5rem",
              borderRadius: 14,
              overflow: "hidden",
              cursor: "pointer",
            }}
          >
            <img
              src={src}
              alt=""
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CoCurricular() {
  const [selected, setSelected] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  return (
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
            title="Co-Curricular Activities"
            subtitle="Beyond the classroom — discover sports, arts, crafts, and creativity."
            variant="pink"
            backgroundImage="/images/gallery/overview.png"
          />

          {/* Intro */}
          <section style={{ background: "#fff", padding: "80px 0" }}>
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0 24px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "center",
              }}
            >
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <img
                  src="/src/assets/Outdoor/o1.png"
                  alt="Co Curricular"
                  style={{
                    width: "100%",
                    height: 400,
                    objectFit: "cover",
                    borderRadius: 20,
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <span
                  style={{
                    color: "#FF6347",
                    fontWeight: 700,
                    letterSpacing: 3,
                    textTransform: "uppercase",
                    fontSize: 11,
                  }}
                >
                  Beyond Academics
                </span>

                <h1
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "clamp(34px,5vw,54px)",
                    color: "#011E3A",
                    marginTop: 16,
                    marginBottom: 18,
                  }}
                >
                  Co-Curricular Activities
                </h1>

                <p
                  style={{
                    color: "#555",
                    lineHeight: 1.8,
                    marginBottom: 30,
                  }}
                >
                  Activities that nurture creativity, confidence, teamwork,
                  leadership, and holistic student development.
                </p>

                <button
                  onClick={() =>
                    window.scrollTo({
                      top: window.innerHeight * 0.7,
                      behavior: "smooth",
                    })
                  }
                  style={{
                    background: "#FF6347",
                    color: "#fff",
                    border: "none",
                    padding: "14px 30px",
                    borderRadius: 50,
                    cursor: "pointer",
                    fontWeight: 700,
                  }}
                >
                  Explore Activities
                </button>
              </motion.div>
            </div>
          </section>

          {/* Cards */}
          <section style={{ padding: "0 24px 80px" }}>
            <div
              style={{
                maxWidth: 1200,
                margin: "0 auto",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
                gap: "2rem",
              }}
            >
              {CO_CURRICULAR.map((item) => (
                <ActivityCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelected(item)}
                />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section style={{ padding: "0 24px 80px", textAlign: "center" }}>
            <div
              style={{
                maxWidth: 680,
                margin: "0 auto",
                border: "1.5px solid #FF6347",
                padding: "60px 40px",
                borderRadius: 24,
              }}
            >
              <h2
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(1.7rem,3vw,2.2rem)",
                  color: "#011E3A",
                  marginBottom: 16,
                }}
              >
                Let Your Child Discover Their Passions
              </h2>

              <p
                style={{
                  color: "#555",
                  marginBottom: 36,
                  lineHeight: 1.7,
                }}
              >
                Give your child opportunities to explore creativity, sports,
                leadership, and personal growth.
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
                  style={{
                    background: "#FF6347",
                    color: "#fff",
                    padding: "14px 32px",
                    borderRadius: 50,
                    textDecoration: "none",
                    fontWeight: 700,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Apply Now <ArrowRight size={17} />
                </Link>

                <Link
                  to="/contact"
                  style={{
                    border: "1px solid #ddd",
                    color: "#011E3A",
                    padding: "14px 32px",
                    borderRadius: 50,
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