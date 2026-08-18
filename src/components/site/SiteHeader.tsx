import { useState } from "react";
import { Mail, Phone, ChevronDown, Menu, X } from "lucide-react";

const BASE = "https://www.mhssce.ac.in/";

const topLinks = [
  { label: "Mandatory Disclosure", href: BASE + "pdf/MandatoryDisclosure.pdf" },
  { label: "NIRF", href: BASE + "pdf/nirf2026.pdf" },
  { label: "R&D", href: BASE + "RandD.php" },
  { label: "IEEE", href: BASE + "IEEE.php" },
  { label: "Library", href: "https://mhsscelibrary.remotexs.in/" },
  { label: "Gallery", href: BASE + "Gallery.php" },
  { label: "Important Links", href: BASE + "Important Links.php" },
  { label: "Contact Us", href: BASE + "Contact Us.php" },
];

const navItems: { label: string; href?: string; children?: { label: string; href: string }[] }[] = [
  { label: "Home", href: BASE + "index.php" },
  {
    label: "Institution",
    children: [
      { label: "Anjuman-I-Islam", href: BASE + "Anjuman-I-Islam.php" },
      { label: "Administrative Committees", href: BASE + "Administrative Committees.php" },
      { label: "From Chairman's Desk", href: BASE + "From Chairmans Desk.php" },
      { label: "From Director's Desk", href: BASE + "From Directors Desk.php" },
      { label: "From Principal's Desk", href: BASE + "From Principals Desk.php" },
      { label: "AICTE Approval", href: BASE + "AICTE Approval.php" },
      { label: "NBA Accreditation", href: BASE + "NBA Accreditation.php" },
      { label: "Infrastructure and Facilities", href: BASE + "Infrastructure and Facilities.php" },
      { label: "Staff Working Committees", href: BASE + "Staff Working Committees.php" },
      { label: "Media", href: BASE + "Media.php" },
    ],
  },
  {
    label: "Admissions",
    children: [
      { label: "Prospectus", href: BASE + "Prospectus.php" },
      { label: "Intake Capacity", href: BASE + "Intake Capacity.php" },
      { label: "Admission Notices", href: BASE + "Admission Notices.php" },
      { label: "Contact Us", href: BASE + "Admissions Contact.php" },
    ],
  },
  {
    label: "Examinations",
    children: [{ label: "Contact Us", href: BASE + "Examinations Contact.php" }],
  },
  { label: "Department", children: [{ label: "Departments", href: BASE + "index.php" }] },
  {
    label: "Training & Placement",
    children: [
      { label: "Contact Details", href: BASE + "Placement Contact.php" },
      { label: "Psychological Counsellor", href: BASE + "Psychological Counsellor Contact.php" },
    ],
  },
  { label: "NAAC", children: [{ label: "NAAC SSR", href: BASE + "index.php" }] },
  { label: "EDC", children: [{ label: "Contact Us", href: BASE + "EDC Contact.php" }] },
  { label: "Fee Payment", children: [{ label: "Fee Payment", href: BASE + "index.php" }] },
  { label: "Life @MHSS", children: [{ label: "Life @MHSS", href: BASE + "index.php" }] },
  { label: "Alumni", children: [{ label: "Alumni", href: BASE + "index.php" }] },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="mhs-container">
          <ul className="header-top-list">
            {topLinks.map((l, i) => (
              <li key={l.label}>
                {i > 0 && <span className="sep">|</span>}
                <a href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="header-middle">
        <div className="mhs-container header-middle-inner">
          <a href={BASE + "index.php"} className="brand">
            <img src={BASE + "images/logo.png"} alt="Anjuman-I-Islam's M. H. Saboo Siddik College of Engineering logo" />
          </a>
          <div className="header-contact">
            <div className="hc-item">
              <Mail aria-hidden className="hc-icon" />
              <div>
                <span className="hc-title">MAIL US</span>
                <span className="hc-sub">aimhssce@mhssce.ac.in</span>
                <span className="hc-sub">mhssce@yahoo.in</span>
              </div>
            </div>
            <div className="hc-item">
              <Phone aria-hidden className="hc-icon" />
              <div>
                <span className="hc-title">CALL US</span>
                <span className="hc-sub">+91 22 23012922</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="quote-bar">
        <div className="mhs-container">
          <span>Rabbi Zidni &apos;Ilma. : ربِّ زِدْنِي عِلْماً - &quot;My lord, increase me in knowledge&quot; [20:119].</span>
        </div>
      </div>

      <nav className="header-nav" aria-label="Main navigation">
        <div className="mhs-container nav-inner">
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={mobileOpen}
            aria-controls="primary-menu"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X aria-hidden /> : <Menu aria-hidden />}
            <span className="sr-only">Toggle navigation</span>
          </button>
          <ul id="primary-menu" className={mobileOpen ? "nav-menu open" : "nav-menu"}>
            {navItems.map((item, idx) => (
              <li key={item.label} className={item.children ? "has-children" : undefined}>
                {item.children ? (
                  <>
                    <button
                      type="button"
                      aria-expanded={openIdx === idx}
                      onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                    >
                      {item.label}
                      <ChevronDown aria-hidden className="caret" />
                    </button>
                    <ul className={openIdx === idx ? "dropdown open" : "dropdown"}>
                      {item.children.map((c) => (
                        <li key={c.label}>
                          <a href={c.href}>{c.label}</a>
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <a href={item.href}>{item.label}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
