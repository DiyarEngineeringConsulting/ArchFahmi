/**
 * Design reminder — مسار مادة وبناء: بطاقة مشروع أفقية قابلة للّمس، تعرض الوسيط الأصلي مع رقم مسار ونبضة حالة وفتح تفصيلي لا يعتمد على التحويم.
 */
import { useState } from "react";
import { ArrowUpLeft, Plus, X } from "lucide-react";
import { Link } from "wouter";
import type { Project } from "@/data/portfolio";
import { SignalMatrix } from "@/components/SignalMatrix";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false);
  return <article className={`project-card ${index % 2 ? "offset" : ""} ${expanded ? "is-expanded" : ""}`}>
    <div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><span className="project-index">P/{project.id}</span></div>
    <div className="project-copy"><div className="eyebrow"><SignalMatrix label={String(index + 1).padStart(2, "0")} /><span>ARCHITECTURAL WORK</span></div><h3>{project.title}</h3><p>{project.description}</p>{expanded && <div className="project-meta"><span>العميل: {project.client}</span><span>{project.start} — {project.end}</span></div>}<div className="project-actions"><Link href={`/projects/${project.id}`}>عرض التفاصيل <ArrowUpLeft /></Link><button type="button" onClick={() => setExpanded(!expanded)} aria-pressed={expanded} aria-label={expanded ? "إخفاء ملخص المشروع" : "فتح ملخص المشروع"}>{expanded ? <X /> : <Plus />}</button></div></div>
  </article>;
}
