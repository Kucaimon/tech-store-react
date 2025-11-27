import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { getProductsByCategory, getCategoryById, categories } from '../data/products'
import './ProductCategory.css'

export default function ProductCategory() {
  const { category } = useParams()
  const categoryData = getCategoryById(category)
  const categoryProducts = getProductsByCategory(category)

  if (!categoryData) {
    return (
      <div className="not-found">
        <div className="container">
          <h1>Категория не найдена</h1>
          <p>К сожалению, такой категории не существует.</p>
          <Link to="/products" className="btn btn-primary">
            Вернуться в каталог
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="category-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="breadcrumbs">
          <Link to="/">Главная</Link>
          <span className="breadcrumbs__sep">/</span>
          <Link to="/products">Каталог</Link>
          <span className="breadcrumbs__sep">/</span>
          <span className="breadcrumbs__current">{categoryData.title}</span>
        </nav>

        {/* Category Header */}
        <motion.div 
          className="category-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="category-header__icon">{categoryData.icon}</span>
          <div className="category-header__info">
            <h1 className="category-header__title">{categoryData.title}</h1>
            <p className="category-header__description">{categoryData.description}</p>
            <span className="category-header__count">
              {categoryProducts.length} товаров в категории
            </span>
          </div>
        </motion.div>

        {/* Products Grid */}
        <section className="section">
          <div className="products-grid">
            {categoryProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </section>

        {/* Other Categories */}
        <section className="section other-categories">
          <h2 className="section-title">Другие категории</h2>
          <div className="other-categories-grid">
            {categories
              .filter(cat => cat.id !== category)
              .slice(0, 4)
              .map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link to={`/products/${cat.id}`} className="mini-category">
                    <span className="mini-category__icon">{cat.icon}</span>
                    <span className="mini-category__title">{cat.title}</span>
                  </Link>
                </motion.div>
              ))}
          </div>
        </section>
      </div>
    </div>
  )
}

