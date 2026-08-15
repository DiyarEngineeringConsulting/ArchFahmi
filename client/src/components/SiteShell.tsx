/**
 * Design reminder — مسار مادة وبناء: غلاف عربي أولًا بهيدر عائم ومؤشرات إشارة، ينتقل بصريًا بين سطح قاتم وورق دافئ مع تنقل واضح على جميع الشاشات.
 */
import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Download, ExternalLink, Instagram, Linkedin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { SignalMatrix } from "@/components/SignalMatrix";
import { contact } from "@/data/portfolio";

const nav = [
  ["الرئيسية", "/"], ["عني", "/about"], ["المشاريع", "/projects"], ["الخدمات", "/services"], ["المدونة", "/blogs"], ["الشهادات", "/certificates"], ["الخبرات", "/experiences"], ["المناقشة", "/decssion"],
];
const rightsOwner = "Fahmi Ali";

export function SiteShell({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 20); onScroll(); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { setOpen(false); }, [location]);
  useEffect(() => { if (!open) return; const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); }; window.addEventListener("keydown", onKeyDown); return () => window.removeEventListener("keydown", onKeyDown); }, [open]);
  return <div className="site-shell">
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="header-bar">
        <Link href="/" className="brand" aria-label="العودة إلى الرئيسية"><BrandMark /><span><strong>Fahmi Ali</strong><small>ARCHITECTURE</small></span></Link>
        <nav id="main-navigation" className={`main-nav ${open ? "is-open" : ""}`} aria-label="التنقل الرئيسي">
          {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className={location === href ? "active" : ""}>{label}</Link>)}
          <Link href="/contact" className="nav-contact" onClick={() => setOpen(false)}>اتصل بي <SignalMatrix /></Link>
        </nav>
        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label={open ? "إغلاق القائمة" : "فتح القائمة"} aria-expanded={open} aria-controls="main-navigation">{open ? <X /> : <Menu />}</button>
      </div>
    </header>
    <main className="site-main">{children}</main>
    <footer className="site-footer">
      <div className="footer-grid">
        <section><div className="footer-brand"><BrandMark /><span><strong>Fahmi Ali</strong><small>ARCHITECTURE / TAIZ</small></span></div><p>{"مهندس معماري لتقديم الخدمات الهندسية المعتمدة لجميع متطلبات البناء والإنشاء المعماري بكل التفاصيل الملحقة مكتملة المخططات التنفيذية إلى الرفع والمحاكاة الواقعية لنمذجة فيديو يوافق واقع المبنى بنسب متوافقة ومعيارية."}</p><div className="socials"><a href={contact.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><ExternalLink /></a><a href={contact.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a><a href={contact.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram /></a><a href={contact.social.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle /></a></div></section>
        <section><p className="footer-label">EXPLORE <SignalMatrix /></p><div className="footer-links">{nav.slice(0, 6).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div></section>
        <section><p className="footer-label">CONTACT <SignalMatrix /></p><a className="footer-contact" href={`tel:${contact.phone}`}><Phone /> {contact.phone}</a><a className="footer-contact" href={`mailto:${contact.email}`}>{contact.email}</a><a className="footer-contact" href={contact.cv} target="_blank" rel="noreferrer"><Download /> السيرة الذاتية</a></section>
      </div>
      <div className="footer-bottom"><span>© جميع الحقوق محفوظة لـ {rightsOwner}</span><span>TAIZ / YEMEN</span></div>
    </footer>
  </div>;
}
