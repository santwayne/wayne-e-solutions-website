import { ImagePlus } from 'lucide-react';
import '../styles/photo-slot.css';

/**
 * A clearly-labeled placeholder for a real photo. Drop an <img> in place of
 * this component once you have the actual photo — the aspect ratio and
 * label tell you (or whoever's handling images) exactly what's needed here.
 *
 * Usage: <PhotoSlot label="Team photo" ratio="4 / 3" />
 */
export default function PhotoSlot({ label, hint, ratio = '4 / 3', className = '' }) {
  return (
    <div className={`photo-slot ${className}`} style={{ aspectRatio: ratio }}>
      <ImagePlus size={22} strokeWidth={1.5} />
      <span className="photo-slot__label">{label}</span>
      {hint && <span className="photo-slot__hint">{hint}</span>}
    </div>
  );
}
