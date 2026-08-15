/**
 * Design reminder — مسار مادة وبناء: صفحة المشروع تحفظ سياق الوسائط والبيانات الأصلية ضمن بنية هادئة تسمح للصورة والنص والمعلومات التنفيذية بالظهور كوثائق معمارية مرتبة.
 */
import { ArrowRight, CalendarDays, Clock3, MapPin, UserRound } from "lucide-react";
import { Link, useRoute } from "wouter";
import { SignalMatrix } from "@/components/SignalMatrix";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/data/portfolio";

export default function ProjectDetail() {
  const [, params] = useRoute("/projects/:id");
  const project = projects.find(item => item.id === params?.id) ?? projects[0];
  return <SiteShell>
    <section className="project-hero"><img src={project.image} alt={project.title} /><div className="project-hero-shade" /><div className="project-hero-copy"><p className="eyebrow"><SignalMatrix label={`P/${project.id}`} /><span>PROJECT DETAIL</span></p><h1>{project.title}</h1><p>{project.client}</p><div><span><CalendarDays /> {project.start}</span><span><Clock3 /> {project.end}</span><span><MapPin /> موقع المشروع</span></div></div></section>
    <section className="project-detail-grid"><aside><div><span>اسم العميل</span><strong><UserRound /> {project.client}</strong></div><div><span>فترة التنفيذ</span><strong>{project.start}<br />إلى {project.end}</strong></div><div><span>المدة</span><strong>{project.duration}</strong></div><div><span>آخر تحديث</span><strong>{project.updated}</strong></div><Link href="/projects" className="text-link">العودة إلى المشاريع <ArrowRight /></Link></aside><article><p className="eyebrow dark"><SignalMatrix label="DETAIL" /><span>PROJECT NOTES</span></p><h2>تفاصيل المشروع</h2><p className="project-description">{project.description}</p><h3>معرض الوسائط</h3>{project.media.length ? <div className="media-grid">{project.media.map((media, index) => <figure key={media}><img src={media} loading="lazy" alt={`${project.title} — وثيقة بصرية ${index + 1}`} /><figcaption>DOCUMENT / {project.id}-{String(index + 1).padStart(2, "0")}</figcaption></figure>)}</div> : <p className="media-empty">لا توجد وسائط إضافية ظاهرة لهذا المشروع في المصدر الحالي.</p>}<div className="map-placeholder"><MapPin /><div><b>موقع المشروع</b><span>جاري تحميل الخريطة في المصدر الحالي.</span></div></div></article></section>
  </SiteShell>;
}
