import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import Icon from "@/components/Icons";
import WorkGrid from "@/components/WorkGrid";
import ContactForm from "@/components/ContactForm";
import {
  NAV_LINKS,
  profile,
  stats,
  services,
  skillMeters,
  work,
  serviceOptions,
} from "@/data/profile";

const initials = profile.name
  .split(" ")
  .map((w) => w[0])
  .join("")
  .slice(0, 3);

const socials = [
  { icon: "linkedin", label: "LinkedIn", href: profile.links.linkedin },
  { icon: "github", label: "GitHub", href: profile.links.github },
  { icon: "upwork", label: "Upwork", href: profile.links.upwork },
  { icon: "mail", label: "Email", href: `mailto:${profile.email}` },
].filter((s) => s.href);

const cvHref = profile.cv || profile.links.linkedin;

function Socials() {
  return (
    <ul className="socials">
      {socials.map((s) => (
        <li key={s.label}>
          <a href={s.href} aria-label={s.label} target={s.icon === "mail" ? undefined : "_blank"} rel="noreferrer">
            <Icon name={s.icon} size={16} />
          </a>
        </li>
      ))}
    </ul>
  );
}

function Portrait({ className }) {
  return profile.photo ? (
    <div className={`portrait portrait__frame ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={profile.photo} alt={profile.name} />
    </div>
  ) : (
    <div className={`portrait portrait__initials ${className}`} aria-label={profile.name}>
      {initials}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <Reveal className="section__head">
      <h2>{title}</h2>
      {subtitle && <p>{subtitle}</p>}
    </Reveal>
  );
}

function Meter({ label, value, short }) {
  const r = 42;
  const c = 2 * Math.PI * r;
  return (
    <div className="meter">
      <svg viewBox="0 0 100 100" className="meter__ring" aria-hidden="true">
        <circle cx="50" cy="50" r={r} className="meter__track" />
        <circle
          cx="50"
          cy="50"
          r={r}
          className="meter__value"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <span className="meter__badge">{short}</span>
      <strong>{value}%</strong>
      <span className="meter__label">{label}</span>
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav logo={profile.logo} />

      <main>
        {/* ---------- Hero ---------- */}
        <section id="home" className="hero">
          <div className="container hero__inner">
            <div className="hero__text">
              <Reveal>
                <p className="hero__hi">Hi I am</p>
                <p className="hero__name">{profile.name}</p>
                <h1 className="hero__title">{profile.title}</h1>
              </Reveal>
              <Reveal delay={80}>
                <Socials />
              </Reveal>
              <Reveal delay={160} className="hero__cta">
                <a className="btn btn--primary" href="#contact">
                  Hire Me
                </a>
                <a className="btn btn--outline" href={cvHref} target="_blank" rel="noreferrer">
                  {profile.cv ? "Download CV" : "View LinkedIn"}
                </a>
              </Reveal>
              <Reveal delay={240} className="stats">
                {stats.map((s) => (
                  <div key={s.label} className="stat">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </Reveal>
            </div>

            <Reveal delay={120} className="hero__visual">
              <div className="hero__circle" />
              <Portrait className="hero__portrait" />
            </Reveal>
          </div>
        </section>

        {/* ---------- Services ---------- */}
        <section id="services" className="section">
          <div className="container">
            <SectionTitle
              title="Services"
              subtitle="End-to-end ERP work — from the first requirements workshop to the server it runs on."
            />
            <div className="services">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 80} className="service">
                  <Icon name={s.icon} size={34} className="service__icon" />
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- About ---------- */}
        <section id="about" className="section">
          <div className="container">
            <SectionTitle title="About Me" subtitle={profile.aboutSubtitle} />
            <div className="about">
              <Reveal className="about__visual">
                <div className="about__arch" />
                <Portrait className="about__portrait" />
              </Reveal>
              <Reveal delay={100} className="about__text">
                {profile.about.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
                <a className="btn btn--primary" href={cvHref} target="_blank" rel="noreferrer">
                  <Icon name={profile.cv ? "download" : "linkedin"} size={16} />
                  {profile.cv ? "Download CV" : "Full profile"}
                </a>
              </Reveal>
            </div>

            <div className="meters">
              {skillMeters.map((m, i) => (
                <Reveal key={m.label} delay={i * 70}>
                  <Meter {...m} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- Experience ---------- */}
        <section id="experience" className="section">
          <div className="container">
            <SectionTitle title="Experience" subtitle="Six years of shipping business systems across Myanmar and Thailand." />
            <Reveal>
              <WorkGrid items={work} />
            </Reveal>
          </div>
        </section>

        {/* ---------- Contact ---------- */}
        <section id="contact" className="section">
          <div className="container container--narrow">
            <SectionTitle title="Contact me" subtitle="Have an Odoo project in mind? Reach out and let's talk it through." />
            <Reveal>
              <ContactForm email={profile.email} services={serviceOptions} />
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer__inner">
          <a href="#home" className="logo">
            {profile.logo}
          </a>
          <nav className="footer__links">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`}>
                {l.label}
              </a>
            ))}
          </nav>
          <Socials />
          <div className="footer__contact">
            <a href={`mailto:${profile.email}`}>
              <Icon name="mail" size={16} /> {profile.email}
            </a>
            {profile.phone && (
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>
                <Icon name="phone" size={16} /> {profile.phone}
              </a>
            )}
            <span>
              <Icon name="pin" size={16} /> {profile.location}
            </span>
          </div>
        </div>
        <div className="footer__bottom">
          © {year} {profile.name} · Built with Next.js
        </div>
      </footer>
    </>
  );
}
