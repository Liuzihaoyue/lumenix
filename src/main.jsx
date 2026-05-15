import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BadgeDollarSign,
  Mail,
  MapPin,
  Menu,
  Phone,
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

function Header({ light = false }) {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "/#about"],
    ["Solutions", "/#solutions"],
    ["Projects", "/projects"],
    ["Testimonials", "/#testimonials"],
  ];
  return (
    <header className={`header ${light ? "light" : ""}`}>
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
        <p className="eyebrow"><span>#1</span> AI TECHNOLOGY FOR SMART LIVING.</p>
        <h1>Technology For Smart<br />Living.</h1>
      </div>
      <p className="hero-desc">Lumenix creates AI-powered lifestyle devices for a smarter,<br />more connected everyday world.</p>
      <div className="hero-card">
        <div className="stars">★ ★ ★ ★ ★</div>
        <p>“Lumenix makes daily information, calls, capture, and AI assistance feel natural, lightweight, and always within reach.”</p>
        <strong>- Daniel K., San Francisco</strong>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="about section">
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
        <p>We work with retailers, distributors, e-commerce teams, and strategic partners to bring intuitive AI living products into more daily scenarios.</p>
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
  ["AI Eyewear", "Everyday Assistant Glasses", "Hands-free AI companion", "proj1.png"],
  ["Smart Retail", "In-store Product Demo Kit", "Partner launch display", "proj2.webp"],
  ["Connected Life", "Voice-first Daily Control", "Wearable command flow", "proj3.webp"],
  ["AI Capture", "Creator Recording Workflow", "Lightweight visual memory", "proj4.jpg"],
  ["Partner Enablement", "Distributor Launch Program", "Sales-ready product system", "proj5.jpg"],
  ["Smart Lifestyle", "Multi-device AI Experience", "Seamless daily intelligence", "proj6.jpg"],
];

function ProjectCard({ p }) {
  return (
    <article className="project-card">
      <img src={`${A}${p[3]}`} alt={p[1]} />
      <span>{p[0]}</span>
      <div>
        <h3>{p[1]}</h3>
        <p><MapPin size={16} /> {p[2]}</p>
      </div>
    </article>
  );
}

function Projects({ page = false }) {
  return (
    <section id="solutions" className={`projects section ${page ? "projects-page" : ""}`}>
      <p className="pill"><Sparkles size={14} /> LUMENIX SOLUTIONS</p>
      <h2>AI Living <span>Use Cases</span></h2>
      <div className="grid">
        {projects.map((p) => <ProjectCard key={p[1]} p={p} />)}
      </div>
    </section>
  );
}

const testimonials = [
  ["“We tested Meta smart glasses before, but LUMENIX gave us more flexibility on pricing,customization, and launch speed.”", "Jason P.", "Los Angeles"],
  ["“We started with a smaller order because the category was still new for us. Sell-through ended up better than expected.”", "Priya R.", "Sacramento"],
  ["“One thing we liked was that their product and operations people actually understood retail feedback instead of only pushing inventory.”", "Greg T.", "Pasadena"],
];

function Testimonials() {
  return (
    <section id="testimonials" className="testimonials section">
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
        <figcaption>- “MOQ was easier to work with compared to other suppliers.”</figcaption>
      </figure>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="contact-left">
        <p className="pill"><BadgeDollarSign size={14} /> REQUEST A QUOTE</p>
        <h2>Let’s Talk <span>AI Living</span></h2>
        <p>Planning a product launch, distribution partnership, or AI lifestyle retail program? Send us a note and the Lumenix team will follow up within 24 hours.</p>
        <img src={`${A}factory.jpg`} alt="Lumenix product and operations workspace" />
        <div className="contact-links">
          <a href="tel:+19512390523"><Phone /> <span><strong>Call Us Now</strong>+1 (951) 239-0523</span></a>
          <a href="mailto:hello@lumenix.ai"><Mail /> <span><strong>Email Us</strong>hello@lumenix.ai</span></a>
        </div>
      </div>
      <form className="quote-form" onSubmit={(e) => e.preventDefault()}>
        <label>Full Name <b>*</b><input placeholder="Jane Smith" /></label>
        <div className="two">
          <label>Email Address <b>*</b><input type="email" placeholder="jane@company.com" /></label>
          <label>Phone Number (optional)<input placeholder="+1 (951) 239-0523" /></label>
        </div>
        <div className="two">
          <label>Market / Region <b>*</b><input placeholder="North America" /></label>
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
          <h2>Your trusted partner for<br />AI-powered smart living.</h2>
          <Cta href="#contact">Start a Partnership</Cta>
        </div>
        <div>
          <h3>Quick Links</h3>
          {[
            ["About", "/#about"],
            ["Solutions", "/#solutions"],
            ["Projects", "/projects"],
            ["Testimonials", "/#testimonials"],
            ["Contact Us", "/#contact"],
          ].map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </div>
        <div>
          <h3>Contact Us</h3>
          <p><MapPin size={16} /> California, United States</p>
          <p><Phone size={16} /> (617) 555-0192</p>
          <p><Mail size={16} /> contact@lumenix.ai</p>
          <div className="social"><i>f</i><i>◎</i><i>𝕏</i></div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Lumenix ✦ AI Smart Living Brand</p>
        <p>Built for partners, retailers, and connected-life teams</p>
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
