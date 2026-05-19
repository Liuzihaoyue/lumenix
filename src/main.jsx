import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeDollarSign,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { PRODUCT_ROWS, getProductDisplayName, getProductGroups } from "./productTable.js";
import "./styles.css";

const A = "/assets/";

const navLinks = [
  ["Product", "/#product"],
  ["Global Partners", "/#global-partners"],
  ["Booking", "/booking"],
  ["About Lumenix", "/about-lumenix"],
];

function Brand({ dark = false }) {
  return (
    <a className="brand" href="/" aria-label="Lumenix home">
      <img src={`${A}wordmark.svg`} alt="" className="brand-mark" />
      <span className={dark ? "brand-text dark" : "brand-text"}>LUMENIX</span>
    </a>
  );
}

function Cta({ children = "Partner With Us", dark = false, href = "#contact" }) {
  return (
    <a className={`cta ${dark ? "dark" : ""}`} href={href}>
      <span>{children}</span>
      <i><ArrowRight size={20} /></i>
    </a>
  );
}

const socialIcons = {
  instagram: "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5.1-3.1a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z",
  x: "M4 3h4.7l4.1 5.5L17.6 3H21l-6.6 7.5L22 21h-4.7l-4.8-6.4L6.9 21H3.5l7.4-8.4L4 3Zm2.4 1.8 11.8 14.4h1.4L7.8 4.8H6.4Z",
  tiktok: "M14 3h3a5.2 5.2 0 0 0 4 4.8v3a8 8 0 0 1-4-1.1v5.6A5.7 5.7 0 1 1 11.3 9.6c.4 0 .8 0 1.2.1v3a2.8 2.8 0 1 0 1.5 2.5V3Z",
};

function SocialIcon({ name }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d={socialIcons[name]} />
    </svg>
  );
}

function Header({ light = false }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      const movingDown = currentY > lastY && currentY > 110;
      setHidden(movingDown);
      setScrolled(currentY > 24);
      lastY = currentY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${light ? "light" : ""} ${scrolled ? "scrolled" : ""} ${hidden ? "hidden" : ""}`}>
      <Brand dark={light} />
      <nav className="desktop-nav">
        {navLinks.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <div className="desktop-cta"><Cta dark={light} /></div>
      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={22} />
      </button>
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={24} />
        </button>
        {navLinks.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href}>{label}</a>)}
        <Cta href="#contact" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Header />
      <video className="hero-video" autoPlay muted loop playsInline poster={`${A}hero.jpg`}>
        <source src={`${A}GlassesVideo.mp4`} type="video/mp4" />
      </video>
      <div className="hero-bg" />
      <div className="hero-copy reveal">
        <p className="eyebrow"><span>#1</span> AI HARDWARE FOR LIFE, WORK, AND EVERYDAY INTELLIGENCE.</p>
        <h1>Light the Way.<br />Lead the Future.</h1>
      </div>
      <p className="hero-desc">Lumenix creates AI-powered devices for smarter work, travel, and everyday connection.</p>
      <div className="hero-card">
        <div className="stars">★ ★ ★ ★ ★</div>
        <p>“Lumenix makes daily information, calls, capture, and AI assistance feel natural, lightweight, and always within reach.”</p>
        <strong>- Minh T., Ho Chi Minh City</strong>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="global-partners" className="about section">
      <div className="about-media">
        <img className="tall" src={`${A}about1.png`} alt="Lumenix AI lifestyle device" />
        <div>
          <img src={`${A}about2.png`} alt="Lumenix smart camera module" />
          <img src={`${A}about3.png`} alt="Lumenix connected control device" />
        </div>
      </div>
      <div className="about-copy">
        <p className="pill"><Sparkles size={14} /> GLOBAL PARTNERS</p>
        <h2>Let's Build the <span>AI Life Future Together.</span></h2>
        <p>We work with retailers, distributors, e-commerce teams, and strategic partners to bring intuitive AI hardware products into more daily scenarios.</p>
        <a className="learn" href="#contact">Learn more</a>
        <div className="stats">
          {[
            ["15+", "Partner Markets"],
            ["40+", "Launch Scenarios"],
            ["100%", "Collaboration Focus"],
          ].map(([n, l]) => <div key={l}><strong>{n}</strong><span>{l}</span></div>)}
        </div>
      </div>
    </section>
  );
}

const productGroups = getProductGroups();

function ProjectCard({ p }) {
  const displayName = getProductDisplayName(p);

  return (
    <article className="project-card">
      <img src={`${A}${p.image}`} alt={displayName} />
      <span className={`product-badge ${p.badge.toLowerCase()}`}>{p.badge}</span>
      <div>
        <h3>{displayName}</h3>
      </div>
    </article>
  );
}

function Projects({ page = false }) {
  return (
    <section id="product" className={`projects section ${page ? "projects-page" : ""}`}>
      <p className="pill"><Sparkles size={14} /> PRODUCT SHOWCASE</p>
      <h2>Lumenix AI <span>Hardware Lineup</span></h2>
      <div className="grid">
        {PRODUCT_ROWS.map((p) => <ProjectCard key={`${p.name}-${p.model}`} p={p} />)}
      </div>
    </section>
  );
}

function BookingCatalog() {
  return (
    <section className="catalog section">
      <p className="pill"><Sparkles size={14} /> BOOKING</p>
      <h1>Choose Lumenix <span>AI Products</span></h1>
      <p className="section-lead">Browse Lumenix product categories and choose the products you want to discuss with our partnership team.</p>
      {productGroups.map(([group, items]) => (
        <div className="catalog-group" key={group}>
          <h2>{group}</h2>
          <div className="catalog-grid">
            {items.map((item) => (
              <article className="catalog-card" key={`${item.name}-${item.model}`}>
                <div className={item.image ? "catalog-image" : "catalog-image empty"}>
                  {item.image ? <img src={`${A}${item.image}`} alt={getProductDisplayName(item)} /> : null}
                </div>
                <div className="catalog-card-label">
                  <span>{getProductDisplayName(item)}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

function PartnerWithUs() {
  const [status, setStatus] = useState("idle");
  const [notice, setNotice] = useState("");

  async function handlePartnerSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    setNotice("");

    try {
      const response = await fetch("/api/partner", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Message could not be sent. Please email contact@lumenix.live directly.");
      }

      form.reset();
      setStatus("sent");
      setNotice("Message sent. The Lumenix team will follow up at contact@lumenix.live.");
    } catch (error) {
      setStatus("error");
      setNotice(error.message || "Message could not be sent. Please email contact@lumenix.live directly.");
    }
  }

  return (
    <section id="contact" className="contact section">
      <div className="contact-left">
        <p className="pill"><BadgeDollarSign size={14} /> PARTNER WITH US</p>
        <h2>Let’s Talk <span>AI Partnership</span></h2>
        <p>Planning a product launch, distribution partnership, or AI lifestyle retail program? Send us a note and the Lumenix team will follow up within 24 hours.</p>
        <img src={`${A}contact-glasses.jpg`} alt="Lumenix AI smart glasses" />
        <div className="contact-links">
          <a href="mailto:contact@lumenix.live"><Mail /> <span><strong>Email Us</strong>contact@lumenix.live</span></a>
        </div>
      </div>
      <form className="quote-form" onSubmit={handlePartnerSubmit}>
        <label>Full Name <b>*</b><input name="fullName" placeholder="Jane Smith" required /></label>
        <div className="two">
          <label>Email Address <b>*</b><input name="email" type="email" placeholder="jane@company.com" required /></label>
          <label>Messaging Contact (optional)<input name="messagingContact" placeholder="WeChat, WhatsApp, or Telegram" /></label>
        </div>
        <div className="two">
          <label>Market / Region <b>*</b><input name="marketRegion" placeholder="e.g. Vietnam, Indonesia, Thailand..." required /></label>
          <label>Partnership Type <b>*</b><select name="partnershipType" defaultValue="" required><option value="" disabled>Select...</option><option>Retail Distribution</option><option>E-commerce Launch</option><option>Brand Partnership</option><option>Other</option></select></label>
        </div>
        <label>Message / Partnership Brief<textarea name="message" placeholder="Tell us about your launch goals, channels, and target market..." /></label>
        <button disabled={status === "sending"}><span>{status === "sending" ? "Sending..." : "Request Partnership Info"}</span><i><ArrowRight size={20} /></i></button>
        {notice ? <p className={`form-notice ${status}`}>{notice}</p> : null}
      </form>
    </section>
  );
}

function AboutLumenixContent() {
  return (
    <main className="page-main">
      <section className="brand-story section">
        <p className="pill"><Sparkles size={14} /> ABOUT LUMENIX</p>
        <h1>AI hardware for a lighter, smarter way to live and work.</h1>
        <p className="section-lead">Lumenix builds practical AI-powered devices for communication, capture, translation, mobility, and everyday assistance. We focus on products that feel natural in real routines and dependable for global partners.</p>
      </section>

      <section className="culture section">
        <img src={`${A}about1.png`} alt="Lumenix smart wearable product" />
        <div>
          <p className="pill"><Sparkles size={14} /> CULTURE</p>
          <h2>Light the Way. <span>Lead the Future.</span></h2>
          <p>We believe smart hardware should reduce friction instead of adding complexity. Our team works across product design, supply chain, and launch support to help partners bring AI devices to real customers with clarity and speed.</p>
          <blockquote>“Build products people can understand in seconds, trust in daily use, and share across markets.”</blockquote>
        </div>
      </section>

      <section className="supply-proof section">
        <div>
          <p className="pill"><BadgeDollarSign size={14} /> SUPPLY CHAIN</p>
          <h2>Market-ready products backed by <span>production support.</span></h2>
          <p>From sourcing and product selection to quality review and packaging readiness, Lumenix supports partners with flexible collaboration and efficient launch preparation.</p>
        </div>
        <div className="proof-grid">
          <img src={`${A}factory.jpg`} alt="Lumenix supply chain facility" />
          <img src={`${A}about2.png`} alt="Lumenix product detail" />
          <img src={`${A}about3.png`} alt="Lumenix connected device" />
        </div>
      </section>

      <PartnerWithUs />
    </main>
  );
}

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <h2>Your trusted partner for<br />AI-powered life and work.</h2>
          <Cta href="#contact">Start a Partnership</Cta>
        </div>
        <div>
          <h3>Quick Links</h3>
          {[
            ["Product", "/#product"],
            ["Global Partners", "/#global-partners"],
            ["Booking", "/booking"],
            ["About Lumenix", "/about-lumenix"],
            ["Contact Us", "#contact"],
          ].map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <div>
          <h3>Contact Us</h3>
          <p><MapPin size={16} /> Shenzhen, China</p>
          <p><Mail size={16} /> contact@lumenix.live</p>
          <div className="social" aria-label="Social links">
            <a href="https://www.instagram.com/lumenix.ins/" target="_blank" rel="noreferrer" aria-label="Instagram"><SocialIcon name="instagram" /></a>
            <a href="https://x.com/xiaoqizz01" target="_blank" rel="noreferrer" aria-label="Twitter"><SocialIcon name="x" /></a>
            <a href="https://www.tiktok.com/@lumenix.live" target="_blank" rel="noreferrer" aria-label="TikTok"><SocialIcon name="tiktok" /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Lumenix ✦ Designed by Liu</p>
      </div>
      <div className="footer-word" aria-hidden="true">LUMENIX</div>
    </footer>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <main>
        <Projects />
        <About />
        <PartnerWithUs />
      </main>
      <Footer />
    </>
  );
}

function BookingPage() {
  return (
    <>
      <Header light />
      <main className="page-main">
        <BookingCatalog />
        <PartnerWithUs />
      </main>
      <Footer />
    </>
  );
}

function AboutLumenixPage() {
  return (
    <>
      <Header light />
      <AboutLumenixContent />
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  if (location.pathname.startsWith("/booking")) return <BookingPage />;
  if (location.pathname.startsWith("/about-lumenix")) return <AboutLumenixPage />;
  return <Home />;
}

createRoot(document.getElementById("root")).render(<App />);
