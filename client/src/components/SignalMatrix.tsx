/**
 * Design reminder — مسار مادة وبناء: مصفوفة إشارة متكررة، صغيرة ووظيفية، تؤطر المسارات والأقسام من دون أن تصبح زخرفة كثيفة.
 */
export function SignalMatrix({ label }: { label?: string }) {
  return <span className="signal-matrix" aria-label={label}><i /><i /><i /><i /><b>{label ?? "FM"}</b></span>;
}
