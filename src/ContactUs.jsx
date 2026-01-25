import React, { useState, useRef, useEffect } from "react";

const HEADER_HEIGHT = 72;

const ContactUs = ({ darkMode }) => {
  const [status, setStatus] = useState(null); // "success" | "error"
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  // Clear status when user types again
  const handleInputChange = () => {
    if (status) setStatus(null);
  };

  // Auto-clear status message after 10 seconds
  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 10000); // 10 sec
    return () => clearTimeout(timer);
  }, [status]);

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: e.target[0].value,
          phoneNumber: e.target[1].value,
          email: e.target[2].value,
          message: e.target[3].value,
        }),
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      formRef.current.reset(); // ✅ always clear form
      setLoading(false);
    }
  };

  return (
    <>
      {/* MOBILE + STATUS ANIMATION */}
      <style>
        {`
          @media (max-width: 768px) {
            .contact-card {
              flex-direction: column;
            }
            .contact-image,
            .contact-form {
              width: 100% !important;
            }
          }

          .status-msg {
            margin-top: 16px;
            padding: 14px;
            border-radius: 10px;
            font-weight: 500;
            animation: fadeSlide 0.4s ease forwards;
          }

          .success {
            background: rgba(34,197,94,0.15);
            color: #22c55e;
          }

          .error {
            background: rgba(239,68,68,0.15);
            color: #ef4444;
          }

          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section
        style={{
          ...styles.page,
          backgroundImage: darkMode
            ? "url('/images/dark_background_img.png')"
            : "url('/images/image1.jpeg')",
        }}
      >
        <div
          className="contact-card"
          style={{
            ...styles.card,
            backgroundColor: darkMode
              ? "rgba(15, 23, 42, 0.92)"
              : "rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* IMAGE */}
          <div className="contact-image" style={styles.imageSection} />

          {/* FORM */}
          <form
            ref={formRef}
            className="contact-form"
            style={styles.formSection}
            onSubmit={handleSubmit}
          >
            <h2
              style={{
                ...styles.heading,
                color: darkMode ? "#fecaca" : "#b11226",
              }}
            >
              Get in Touch
            </h2>

            <input
              type="text"
              placeholder="Full Name"
              required
              style={inputStyle(darkMode)}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              style={inputStyle(darkMode)}
              onChange={handleInputChange}
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              style={inputStyle(darkMode)}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Your Message"
              required
              style={textareaStyle(darkMode)}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.button,
                backgroundColor: darkMode ? "#dc2626" : "#b11226",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>

            {status === "success" && (
              <div className="status-msg success">
                ✅ Thanks for reaching out to <b>Aaravi Consultancy</b>
              </div>
            )}
            {status === "error" && (
              <div className="status-msg error">
                ❌ Failed to submit. Please try again.
              </div>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

/* ---------------- STYLES ---------------- */
const styles = {
  page: {
    minHeight: `calc(100vh - ${HEADER_HEIGHT}px)`,
    marginTop: `${HEADER_HEIGHT}px`,
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  card: {
    width: "100%",
    maxWidth: "900px",
    display: "flex",
    borderRadius: "22px",
    overflow: "hidden",
    backdropFilter: "blur(14px)",
    boxShadow: "0 25px 50px rgba(0,0,0,0.35)",
  },
  imageSection: {
    width: "50%",
    minHeight: "320px",
    backgroundImage: "url('/images/contactus.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formSection: {
    width: "50%",
    padding: "36px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  heading: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "22px",
  },
  button: {
    marginTop: "8px",
    padding: "14px",
    borderRadius: "10px",
    border: "none",
    color: "#ffffff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },
};

/* ---------------- INPUT STYLES ---------------- */
const inputStyle = (darkMode) => ({
  padding: "12px 14px",
  marginBottom: "14px",
  borderRadius: "10px",
  fontSize: "14px",
  backgroundColor: darkMode ? "#020617" : "#ffffff",
  color: darkMode ? "#f8fafc" : "#000",
  border: darkMode ? "1px solid #334155" : "1px solid #ccc",
});

const textareaStyle = (darkMode) => ({
  ...inputStyle(darkMode),
  height: "120px",
  resize: "none",
});

export default ContactUs;
