/**
 * Design reminder — مسار مادة وبناء: علامة هندسية مساعدة مرسومة بالواجهة بسبب تعذر توليد الأصل البصري؛ تتبع محورًا وقوسًا ونبضة زرقاء من ألوان الموقع الحالية.
 */
export function BrandMark({ className = "" }: { className?: string }) {
  return <span className={`brand-mark ${className}`} aria-hidden="true"><i /><b /><em /><u /></span>;
}
