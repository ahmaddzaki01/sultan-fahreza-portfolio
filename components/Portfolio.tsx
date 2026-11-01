
"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  MapPin,
  Mail,
  Linkedin,
  Download,
  Layers3,
  Pickaxe,
  Compass,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

const skills = [
  {
    n: "01",
    icon: Layers3,
    title: "Petrophysical Analysis",
    text: "Well log interpretation, multimineral petrophysical analysis, and reservoir quality evaluation.",
    tags: ["Clay volume", "Porosity", "Water saturation", "Permeability"]
  },
  {
    n: "02",
    icon: Pickaxe,
    title: "Geological Interpretation",
    text: "Facies analysis, sequence stratigraphy, core data interpretation, and lithology description.",
    tags: ["Facies", "Core data", "Outcrop", "Lithology"]
  },
  {
    n: "03",
    icon: Compass,
    title: "Geological Mapping",
    text: "Geological mapping, structural measurements, geomorphology, and drainage pattern mapping.",
    tags: ["Field mapping", "Structural data", "Stratigraphy"]
  }
];

const software = [
  "Interactive Petrophysics",
  "Petrel",
  "ArcGIS",
  "Global Mapper",
  "Dips",
  "Leapfrog",
  "Microsoft Office"
];

export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    ["Profile", "#profile"],
    ["Expertise", "#expertise"],
    ["Experience", "#experience"],
    ["Research", "#research"],
    ["Contact", "#contact"]
  ];

  return (
    <main>
      {/* NAVIGATION */}
      <nav className="nav">
        <a className="brand" href="#top">
          <span className="brand-symbol">SF</span>
          <span>
            SUBSURFACE
            <br />
            <b>PORTFOLIO / 2026</b>
          </span>
        </a>

        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <div className={`nav-links ${menuOpen ? "show" : ""}`}>
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}

          <a
            className="nav-cta"
            href="mailto:muhammadsultanfahreza@gmail.com"
          >
            LET'S TALK <ArrowUpRight size={14} />
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-copy">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="eyebrow"
          >
            <span className="pulse" />
            GEOLOGICAL ENGINEERING · SUBSURFACE
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hero-index"
          >
            INDEPENDENT PROFILE / 001
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            Muhammad Sultan <em>Fahreza</em>
            <i>.</i>
          </motion.h1>

          <p className="hero-lead">
            Reading geological signals. Evaluating reservoir potential.
            Connecting field observations with subsurface data.
          </p>

          <div className="hero-buttons">
            <a className="btn-primary" href="#research">
              EXPLORE MY WORK <ArrowUpRight size={16} />
            </a>

            <a
              className="btn-quiet"
              href="/CV-Muhammad-Sultan-Fahreza.pdf"
              download
            >
              <Download size={15} /> DOWNLOAD CV
            </a>
          </div>

          <div className="hero-meta">
            <div>
              <small>BASED IN</small>
              <b>
                <MapPin size={12} /> Pekanbaru, Indonesia
              </b>
            </div>

            <div>
              <small>DEGREE</small>
              <b>B.Eng. Geological Engineering</b>
            </div>

            <div>
              <small>GPA</small>
              <b>3.59 / 4.00</b>
            </div>
          </div>
        </div>

        {/* PROFILE PHOTO */}
        <motion.div
          className="hero-photo"
          initial={{ opacity: 0, x: 35 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
        >
          <div className="photo-label">
            <span>PROFILE / SULTAN FAHREZA</span>
          </div>

          <img
            src="/profile-sultan.jpeg"
            alt="Muhammad Sultan Fahreza"
          />

          <div className="photo-caption">
            GEOLOGICAL ENGINEER
            <span>·</span>
            PEKANBARU, INDONESIA
          </div>
        </motion.div>

        <div className="hero-side-note">
          GEOLOGY / PETROPHYSICS / ENERGY
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee">
        <div>
          WELL LOG INTERPRETATION <span>✳</span>
          RESERVOIR EVALUATION <span>✳</span>
          FACIES ANALYSIS <span>✳</span>
          GEOLOGICAL MAPPING <span>✳</span>
          SUBSURFACE STUDIES <span>✳</span>
        </div>
      </div>

      {/* PROFILE */}
      <section className="section profile" id="profile">
        <div className="section-top">
          <span>01 — PROFILE</span>
          <span>THE GEOLOGIST</span>
        </div>

        <div className="two-col">
          <h2>
            Curiosity
            <br />
            beneath the
            <br />
            <em>surface.</em>
          </h2>

          <div className="body-copy">
            <p className="lead-copy">
              Geological Engineering graduate from Universitas Pembangunan
              Nasional “Veteran” Yogyakarta, with an academic focus on
              reservoir characterization and subsurface evaluation.
            </p>

            <p>
              During my internship at Pusat Survei Geologi, Ministry of Energy
              and Mineral Resources, I evaluated the Lakat Formation across
              three wells. The work combined multimineral analysis in
              Interactive Petrophysics with lithology and facies interpretation
              in Petrel.
            </p>

            <p>
              I am looking for an entry-level opportunity in the oil and gas
              industry, particularly in geology, geoscience, petrophysics, or
              subsurface evaluation.
            </p>

            <div className="stat-row">
              <div>
                <b>03</b>
                <small>WELLS EVALUATED</small>
              </div>

              <div>
                <b>116</b>
                <small>FIELD OBSERVATIONS</small>
              </div>

              <div>
                <b>5×5 KM</b>
                <small>MAPPING AREA</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise section-dark" id="expertise">
        <div className="section-top light">
          <span>02 — EXPERTISE</span>
          <span>METHODS & SOFTWARE</span>
        </div>

        <div className="section-heading">
          <h2>
            Technical
            <br />
            <em>toolkit.</em>
          </h2>

          <p>
            Skills developed through academic research, field mapping, and
            practical subsurface evaluation.
          </p>
        </div>

        <div className="skill-grid">
          {skills.map((s) => {
            const Icon = s.icon;

            return (
              <article className="skill-card" key={s.n}>
                <div className="skill-card-top">
                  <span>{s.n} / 03</span>
                  <Icon size={22} />
                </div>

                <h3>{s.title}</h3>
                <p>{s.text}</p>

                <div className="tags">
                  {s.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="software">
          <span>SOFTWARE</span>

          <div>
            {software.map((s) => (
              <b key={s}>{s}</b>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="section experience" id="experience">
        <div className="section-top">
          <span>03 — EXPERIENCE</span>
          <span>PROFESSIONAL & FIELD PRACTICE</span>
        </div>

        <div className="section-heading">
          <h2>
            Applied
            <br />
            <em>geoscience.</em>
          </h2>

          <p>
            Turning classroom knowledge into technical work, interpretation,
            and field observations.
          </p>
        </div>

        <article className="experience-item">
          <div className="date">
            JAN 2026 — MAR 2026
            <br />
            <small>BANDUNG, INDONESIA</small>
          </div>

          <div>
            <span className="org">
              MINISTRY OF ENERGY AND MINERAL RESOURCES (ESDM)
            </span>

            <h3>Pusat Survei Geologi</h3>

            <p className="role">
              Intern — Petrophysical & Subsurface Evaluation
            </p>

            <ul>
              <li>
                Evaluated reservoir quality of the Lakat Formation in three
                wells using multimineral analysis in Interactive Petrophysics.
              </li>
              <li>
                Calculated clay volume, porosity, water saturation, and
                permeability; applied cut-offs to identify net reservoir and
                prospective hydrocarbon intervals.
              </li>
              <li>
                Interpreted lithology and facies in Petrel using electrofacies
                and core data, linking results to petrophysical analysis.
              </li>
            </ul>
          </div>

          <b className="item-no">01</b>
        </article>

        <article className="experience-item">
          <div className="date">
            JAN 2025 — JUN 2025
            <br />
            <small>NGLANGGERAN, YOGYAKARTA</small>
          </div>

          <div>
            <span className="org">UPN “VETERAN” YOGYAKARTA</span>

            <h3>Geological Mapping Project</h3>

            <p className="role">Academic Field Project</p>

            <ul>
              <li>
                Mapped a 5 × 5 km area at 1:25,000 scale and recorded 116
                observation points with lithology descriptions and structural
                measurements.
              </li>
              <li>
                Produced geological, geomorphological, and drainage pattern
                maps, and measured stratigraphic sections.
              </li>
              <li>
                Identified Semilir, Nglanggeran, and Sambipitu formations; used
                petrographic and microfossil results to interpret age and
                depositional environment.
              </li>
            </ul>
          </div>

          <b className="item-no">02</b>
        </article>
      </section>

      {/* FEATURED RESEARCH */}
      <section className="research" id="research">
        <div className="section-top light">
          <span>04 — FEATURED RESEARCH</span>
          <span>UNDERGRADUATE THESIS</span>
        </div>

        <div className="research-content">

          {/* THESIS IMAGE - REAL PHOTO */}
          <motion.div
            className="research-art"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="/thesis-welllog.jpeg"
              alt="Thesis research - Well Log Analysis"
              className="thesis-image"
            />

            <div className="thesis-image-label">
              <span>FIG. 02</span>
              <span>THESIS / WELL LOG ANALYSIS</span>
            </div>

            <div className="thesis-image-caption">
              PETROPHYSICAL ANALYSIS / LAKAT FORMATION
            </div>
          </motion.div>

          {/* THESIS DESCRIPTION */}
          <div className="research-copy">
            <span className="org">
              BACHELOR'S THESIS · LAKAT FORMATION
            </span>

            <h2>
              Reservoir characteristics & hydrocarbon prospect zones.
            </h2>

            <p>
              Study of Reservoir Characteristics and Identification of
              Hydrocarbon Prospect Zones Based on Petrophysical Analysis in
              the “SF” Field, Lakat Formation, Central Sumatra Basin.
            </p>

            <div className="method-list">
              <div>
                <b>01</b> Multimineral petrophysical analysis
              </div>

              <div>
                <b>02</b> Reservoir parameter calculation
              </div>

              <div>
                <b>03</b> Net reservoir and prospect cut-offs
              </div>

              <div>
                <b>04</b> Lithology and facies interpretation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREDENTIALS */}
      <section className="section credentials">
        <div className="section-top">
          <span>05 — BEYOND THE FIELD</span>
          <span>LEARNING & COLLABORATION</span>
        </div>

        <div className="two-col">
          <h2>
            Building a wider
            <br />
            <em>perspective.</em>
          </h2>

          <div className="credential-list">
            <article>
              <small>CERTIFICATION / AUG 2024</small>
              <h3>Fundamentals of Oil and Gas Exploration</h3>
              <p>PT. Alpha Petroleum Indonesia</p>
            </article>

            <article>
              <small>ORGANIZATION / AUG 2024 & AUG 2023</small>
              <h3>
                Geological Engineering Orientation Program (PKKBN)
              </h3>
              <p>Equipment Staff · Public Relation Staff</p>
            </article>

            <article>
              <small>FIELD EVENT / DEC 2023</small>
              <h3>Sedimentology Field Excursion</h3>
              <p>Event Staff</p>
            </article>

            <article>
              <small>LANGUAGES</small>
              <h3>Indonesian — Native · English — Intermediate</h3>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <footer className="footer" id="contact">
        <div className="section-top light">
          <span>06 — CONTACT</span>
          <span>OPEN TO OPPORTUNITIES</span>
        </div>

        <div className="footer-main">
          <span className="org">LET'S CONNECT</span>

          <h2>
            Let's map the
            <br />
            <em>next opportunity.</em>
          </h2>

          <p>
            Open to entry-level roles in subsurface evaluation, geology,
            geoscience, and petrophysics.
          </p>

          <a
            className="btn-primary"
            href="mailto:muhammadsultanfahreza@gmail.com"
          >
            CONTACT ME <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="footer-links">
          <a href="mailto:muhammadsultanfahreza@gmail.com">
            <Mail size={14} />
            muhammadsultanfahreza@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/sultanfahreza/"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={14} />
            LinkedIn profile
          </a>

          <span>
            <MapPin size={14} />
            Pekanbaru, Riau, Indonesia
          </span>
        </div>

        <div className="copyright">
          © 2026 MUHAMMAD SULTAN FAHREZA
          <a href="#top">BACK TO TOP ↑</a>
        </div>
      </footer>
    </main>
  );
}
