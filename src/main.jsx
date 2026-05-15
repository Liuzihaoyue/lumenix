import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeDollarSign,
  Mail,
  MapPin,
  Menu,
  Quote,
  Sparkles,
  X,
} from "lucide-react";
import "./styles.css";

const A = "/assets/";

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
  const links = [
    ["Global Partners", "/#global-partners"],
    ["Product", "/#product"],
    ["Supply", "/#supply"],
  ];

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
        {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <div className="desktop-cta"><Cta dark={light} /></div>
      <button className="menu-btn" onClick={() => setOpen(true)} aria-label="Open menu">
        <Menu size={22} />
      </button>
      <div className={`mobile-panel ${open ? "open" : ""}`}>
        <button className="close-btn" onClick={() => setOpen(false)} aria-label="Close menu">
          <X size={24} />
        </button>
        {links.map(([label, href]) => <a onClick={() => setOpen(false)} key={label} href={href}>{label}</a>)}
        <Cta href="/#contact" />
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <Header />
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

const projects = [
  ["HOT", "Multifunctional AI Glasses", "products/multifunction-ai-glasses/main.png"],
  ["NEW", "Gimbal Smart Conference Camera", "products/real-time-translation-earbuds/main.png"],
  ["HOT", "AI Voice Recorder", "products/hd-desktop-webcam-mic/main.png"],
  ["NEW", "AI Bluetooth Translation Earbuds", "products/drone-gimbal-ai-camera/main.png"],
  ["NEW", "Self-Service Rental Guide Device", "products/portable-ai-voice-recorder/main.png"],
  ["NEW", "AI Smart Voice Translator", "products/solar-aroma-diffuser/main.png"],
];

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <img src={`${A}${p[2]}`} alt={p[1]} />
      <span className={`product-badge ${p[0].toLowerCase()}`}>{p[0]}</span>
      <div>
        <h3>{p[1]}</h3>
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
        {projects.map((p) => <ProjectCard key={p[1]} p={p} />)}
      </div>
    </section>
  );
}

const testimonials = [
  ["“We tested Meta smart glasses before, but LUMENIX gave us more flexibility on pricing, customization, and launch speed.”", "Minh T.", "Ho Chi Minh City"],
  ["“We started with a smaller order because the category was still new for us. Sell-through ended up better than expected.”", "Ayu R.", "Jakarta"],
  ["“Their product and operations people understood retail feedback instead of only pushing inventory.”", "Narin S.", "Bangkok"],
];

function Testimonials() {
  return (
    <section id="supply" className="testimonials section">
      <div className="testi-copy">
        <h2>Reliable supply, fast response,<br />and <span>long-term collaboration support.</span></h2>
        <p>From sourcing and product selection to launch support and retail strategy, LUMENIX works closely with partners to move products into market faster.</p>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <article key={t[1]} className="testi-card">
              <p>{t[0]}</p>
              <div><img src={`${A}${["contact.jpeg", "contact2.jpeg", "contact3.jpg"][i]}`} alt="" /><span><strong>{t[1]}</strong>{t[2]}</span><Quote /></div>
            </article>
          ))}
        </div>
      </div>
      <figure className="factory">
        <img src={`${A}avatar1.png`} alt="Robotic arm in production facility" />
        <figcaption>- “Lumenix helps partners launch AI hardware with clearer product direction and market-ready support.”</figcaption>
      </figure>
    </section>
  );
}

function Contact() {
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
      <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
        <label>Full Name <b>*</b><input placeholder="Jane Smith" /></label>
        <div className="two">
          <label>Email Address <b>*</b><input type="email" placeholder="jane@company.com" /></label>
          <label>Messaging Contact (optional)<input placeholder="WeChat, WhatsApp, or Telegram" /></label>
        </div>
        <div className="two">
          <label>Market / Region <b>*</b><input placeholder="e.g. Vietnam, Indonesia, Thailand..." /></label>
          <label>Partnership Type <b>*</b><select defaultValue=""><option value="" disabled>Select...</option><option>Retail Distribution</option><option>E-commerce Launch</option><option>Brand Partnership</option><option>Other</option></select></label>
        </div>
        <label>Message / Partnership Brief<textarea placeholder="Tell us about your launch goals, channels, and target market..." /></label>
        <button><span>Request Partnership Info</span><i><ArrowRight size={20} /></i></button>
      </form>
    </section>
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
            ["Global Partners", "/#global-partners"],
            ["Product", "/#product"],
            ["Supply", "/#supply"],
            ["Contact Us", "/#contact"],
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
        <About />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

function ProjectsPage() {
  return (
    <>
      <Header light />
      <main className="project-main"><Projects page /></main>
      <Footer />
    </>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);
  return location.pathname.startsWith("/projects") ? <ProjectsPage /> : <Home />;
}

createRoot(document.getElementById("root")).render(<App />);
