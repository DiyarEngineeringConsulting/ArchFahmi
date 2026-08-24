/**
 * Design reminder — مسار مادة وبناء: تعريف المسارات المحلية لنسخة معاينة تحافظ على أقسام الموقع الأصلي وتجمعها في غلاف معماري موحد.
 */
import { Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/sonner";
import ErrorBoundary from "@/components/ErrorBoundary";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import NotFound from "@/pages/NotFound";
import { AboutPage, BlogDetailPage, BlogsPage, CertificatesPage, ContactPage, DiscussionPage, ExperiencesPage, ServicesPage } from "@/pages/ContentPages";

function ScrollToTop() { const [location] = useLocation(); useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); }, [location]); return null; }
function App() { return <ErrorBoundary><ScrollToTop /><Toaster position="top-center" richColors /><Switch><Route path="/" component={Home} /><Route path="/about" component={AboutPage} /><Route path="/projects" component={Projects} /><Route path="/projects/:id" component={ProjectDetail} /><Route path="/services" component={ServicesPage} /><Route path="/blogs" component={BlogsPage} /><Route path="/blogs/:id" component={BlogDetailPage} /><Route path="/blog" component={BlogsPage} /><Route path="/blog/:id" component={BlogDetailPage} /><Route path="/certificates" component={CertificatesPage} /><Route path="/experiences" component={ExperiencesPage} /><Route path="/decssion" component={DiscussionPage} /><Route path="/contact" component={ContactPage} /><Route component={NotFound} /></Switch></ErrorBoundary>; }
export default App;
