import { useMemo, useState } from 'react';
import products from '../data/products.js';
import ProductCard from '../components/ProductCard.jsx';
import Reveal from '../components/Reveal.jsx';
import ProductsBoardIllustration from '../components/illustrations/ProductsBoardIllustration.jsx';
import '../styles/products.css';

export default function Products() {
  const categories = useMemo(
    () => ['All', ...new Set(products.map((p) => p.category))],
    []
  );
  const [active, setActive] = useState('All');

  const visible =
    active === 'All' ? products : products.filter((p) => p.category === active);

  return (
    <section className="section section--soft products-page">
      <div className="container products-page__head">
        <div>
          <span className="eyebrow">Product status board</span>
          <h1>Everything we've built, in one place</h1>
          <p className="products-page__sub">
            Live products, betas and things still in development — status badges
            tell you exactly where each one stands today.
          </p>
        </div>
        <ProductsBoardIllustration />
      </div>

      <div className="container">

        <div className="products-filter">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`products-filter__btn ${active === cat ? 'products-filter__btn--active' : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="product-grid product-grid--full">
          {visible.map((p, i) => (
            <Reveal as="div" delay={i % 6} key={`${active}-${p.slug}`}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
