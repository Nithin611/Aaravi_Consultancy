import React, { useState, useRef, useEffect } from "react";

const HEADER_HEIGHT = 72;

const ContactUs = () => {
  const [status, setStatus] = useState(null); 
  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const [service, setService] = useState("");
  const [subServiceList, setSubServiceList] = useState([]);

  const subServiceOptions = {
    "Startup Advisory": [
      "Business Incorporation",
      "Regulatory Registrations",
      "ESOP Structuring",
      "Risk Advisory",
      "Virtual CFO Services"
    ],
    "Taxation & Compliance": [
      "GST Filing",
      "Income Tax Planning",
      "TDS Return"
    ],
    "Financial Services": [
      "Bookkeeping",
      "Revenue Leakage Assessments",
      "Accounts Integrity",
      "Internal Control Assessments",
      "Inventory Accuracy & Aging Report"
    ],
    "Growth Advisory": [
      "PMF Consulting (Product Market Fit)",
      "Cost Reduction Advisory",
      "Growth Strategy",
      "Competitive Analysis"
    ],
    "HR Consulting": [
      "Talent Acquisition Consulting",
      "Recruitment Process Outsourcing",
      "Role Architecture & Designing Services"
    ]
  };

  const updateSubServices = (value) => {
    setService(value);
    setSubServiceList(subServiceOptions[value] || []);
  };

  const handleInputChange = () => {
    if (status) setStatus(null);
  };

  useEffect(() => {
    if (!status) return;
    const timer = setTimeout(() => setStatus(null), 10000);
    return () => clearTimeout(timer);
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const fullName = e.target.fullName.value;
    const companyName = e.target.companyName.value;
    const phoneNumber = e.target.phoneNumber.value;
    const email = e.target.email.value;
    const service = e.target.service.value;
    const subService = e.target.subService.value;
    const message = e.target.message.value;

    try {
      const response = await fetch("https://aaravibackend-production.up.railway.app/api/mail/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          companyName,
          phoneNumber,
          email,
          service,
          subService,
          message
        }),
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      formRef.current.reset();
      setSubServiceList([]);
      setLoading(false);
    }
  };

  return (
    <>
      <style>
        {`
          @media (max-width: 768px) {
            .contact-card { flex-direction: column; }
            .contact-image, .contact-form { width: 100% !important; }
          }

          .status-msg {
            margin-top: 16px;
            padding: 14px;
            border-radius: 10px;
            font-weight: 500;
            animation: fadeSlide 0.4s ease forwards;
          }
          .success { background: rgba(34,197,94,0.15); color: #22c55e; }
          .error { background: rgba(239,68,68,0.15); color: #ef4444; }

          @keyframes fadeSlide {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      <section
        style={{
          ...styles.page,
          backgroundImage: "url('/images/image1.jpeg')",
        }}
      >
        <div
          className="contact-card"
          style={{
            ...styles.card,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
          }}
        >
          {/* IMAGE */}
          <div className="contact-image" style={styles.imageSection} />

          {/* UPDATED RESPONSIVE FORM */}
          <form
            ref={formRef}
            className="contact-form"
            style={styles.formSection}
            onSubmit={handleSubmit}
          >
            <h2
              style={{
                ...styles.heading,
                color: "#b11226",
              }}
            >
              Connect With Our Experts
            </h2>

            <label style={labelStyle()}>Full Name:</label>
            <input
              name="fullName"
              type="text"
              placeholder="Type your full name here"
              required
              style={inputStyle()}
              onChange={handleInputChange}
            />

            <label style={labelStyle()}>Company Name:</label>
            <input
              name="companyName"
              type="text"
              placeholder="Enter your company name"
              required
              style={inputStyle()}
              onChange={handleInputChange}
            />

            <label style={labelStyle()}>Phone Number (Optional):</label>
            <input
              name="phoneNumber"
              type="text"
              placeholder="Enter your phone number"
              style={inputStyle()}
              onChange={handleInputChange}
            />

            <label style={labelStyle()}>Email:</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
              style={inputStyle()}
              onChange={handleInputChange}
            />

            <label style={labelStyle()}>Service Interested In:</label>
            <select
              name="service"
              required
              style={inputStyle()}
              onChange={(e) => {
                updateSubServices(e.target.value);
                handleInputChange();
              }}
            >
              <option value="">-- Select a Service --</option>
              {Object.keys(subServiceOptions).map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>

            <label style={labelStyle()}>Sub-Service:</label>
            <select
              name="subService"
              required
              disabled={subServiceList.length === 0}
              style={{
                ...inputStyle(),
                opacity: subServiceList.length === 0 ? 0.6 : 1,
              }}
            >
              <option value="">-- Select Sub-Service --</option>
              {subServiceList.map((sub) => (
                <option key={sub} value={sub}>{sub}</option>
              ))}
            </select>

            <label style={labelStyle()}>Tell Us About Your Needs:</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us about your requirements here..."
              required
              style={textareaStyle()}
              onChange={handleInputChange}
            ></textarea>

            <button
              type="submit"
              disabled={loading}
              style={{
                ...styles.button,
                backgroundColor: "#b11226",
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
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

/* ---------- STYLES ---------- */

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
    backgroundImage: "url('https://images.unsplash.com/photo-1556761175-4b46a572b786')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  formSection: {
    width: "50%",
    padding: "36px",
    display: "flex",
    flexDirection: "column",
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

const labelStyle = () => ({
  fontSize: "14px",
  fontWeight: "600",
  color: "#111",
  marginBottom: "5px",
  marginTop: "5px",
});

const inputStyle = () => ({
  padding: "12px 14px",
  marginBottom: "14px",
  borderRadius: "10px",
  fontSize: "14px",
  backgroundColor: "#fff",
  color: "#111",
  border: "1px solid #ccc",
});

const textareaStyle = () => ({
  ...inputStyle(),
  height: "120px",
  resize: "none",
});

export default ContactUs;