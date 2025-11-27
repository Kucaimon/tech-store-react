import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './ProductCard.css'

export default function ProductCard({ product, index = 0 }) {
  return (
    <motion.article 
      className="product-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -8 }}
    >
      <div className="product-card__image">
        {product.image ? (
          <img src={product.image} alt={product.title} loading="lazy" />
        ) : (
          <div className="product-card__placeholder">
            <span className="product-card__icon">{product.icon || '📦'}</span>
          </div>
        )}
        {product.badge && (
          <span className={`product-card__badge badge--${product.badge.type}`}>
            {product.badge.text}
          </span>
        )}
      </div>
      
      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        
        {product.specs && (
          <div className="product-card__specs">
            {product.specs.map((spec, i) => (
              <div key={i} className="spec-item">
                <span className="spec-label">{spec.label}</span>
                <span className="spec-value">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
        
        {product.price && (
          <div className="product-card__price">
            {product.oldPrice && (
              <span className="price--old">{product.oldPrice} ₽</span>
            )}
            <span className="price--current">{product.price} ₽</span>
          </div>
        )}
        
        <Link to={product.link || '#'} className="product-card__button">
          Подробнее
        </Link>
      </div>
    </motion.article>
  )
}

