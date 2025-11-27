import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { categories, featuredProducts, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import './Products.css'

// Get all products flat
const allProducts = Object.values(products).flat()

export default function Products() {
  return (
    <div className="products-page">
      <div className="container">
        {/* Page Header */}
        <motion.div 
          className="page-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="page-title">Каталог товаров</h1>
          <p className="page-description">
            Выберите категорию или просмотрите все доступные товары
          </p>
        </motion.div>

        {/* Categories */}
        <section className="section">
          <h2 className="section-title">Категории</h2>
          <div className="categories-list">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products/${category.id}`} className="category-item">
                  <span className="category-item__icon">{category.icon}</span>
                  <div className="category-item__info">
                    <h3 className="category-item__title">{category.title}</h3>
                    <p className="category-item__desc">{category.description}</p>
                  </div>
                  <span className="category-item__count">{category.count}</span>
                  <span className="category-item__arrow">→</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* All Products */}
        <section className="section">
          <h2 className="section-title">Все товары</h2>
          <div className="products-grid">
            {allProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

