import { statusLabels } from '../data/products.js';
import PhotoSlot from './PhotoSlot.jsx';
import '../styles/product-card.css';

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
      <PhotoSlot
        label={`${product.name} screenshot`}
        hint="1200 × 675px recommended"
        ratio="16 / 9"
        className="product-card__shot"
      />

      <div className="product-card__head">
        <span className="product-card__category">{product.category}</span>
        <span className={`status-pill`}>
          <span className={`status-dot status-dot--${product.status}`} />
          {statusLabels[product.status]}
        </span>
      </div>

      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__tagline">{product.tagline}</p>
      <p className="product-card__desc">{product.description}</p>

      <div className="product-card__stack">
        {product.stack.map((tech) => (
          <span key={tech}>{tech}</span>
        ))}
      </div>
    </article>
  );
}
