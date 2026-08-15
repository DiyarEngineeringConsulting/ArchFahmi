/**
 * Design reminder — مسار مادة وبناء: صفحة مسار غير موجودة تحفظ الهدوء البصري وتمنح الزائر طريق عودة مباشرًا من دون فقدان التنقل الأساسي.
 */
import { Link } from "wouter";
import { ArrowUpLeft } from "lucide-react";
import { SignalMatrix } from "@/components/SignalMatrix";
import { SiteShell } from "@/components/SiteShell";

export default function NotFound() { return <SiteShell><section className="empty-section"><SignalMatrix label="404" /><h1>هذه المساحة غير موجودة.</h1><p>ربما تغيّر المسار، لكن جميع الأعمال لا تزال على مسافة خطوة واحدة.</p><Link href="/" className="button button-primary">العودة إلى الرئيسية <ArrowUpLeft /></Link></section></SiteShell>; }
