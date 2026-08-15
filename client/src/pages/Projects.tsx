/**
 * Design reminder — مسار مادة وبناء: قائمة المشاريع هي مسار تحريري غير متماثل، بصور المصدر الأصلية وحالات لمس واضحة وأرقام مسار قابلة للتتبع.
 */
import { ProjectCard } from "@/components/ProjectCard";
import { SignalMatrix } from "@/components/SignalMatrix";
import { SiteShell } from "@/components/SiteShell";
import { projects } from "@/data/portfolio";

export default function Projects() { return <SiteShell><section className="page-intro"><p className="eyebrow"><SignalMatrix label="04" /><span>SELECTED WORK</span></p><h1>مشاريعي</h1><p>بعض المشاريع التي قمت بتنفيذها</p></section><section className="section paper-section projects-section"><div className="project-stack">{projects.map((project, index) => <ProjectCard project={project} index={index} key={project.id} />)}</div></section></SiteShell>; }
