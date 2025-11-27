import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProductCard from '../components/ProductCard'
import { categories, featuredProducts } from '../data/products'
import './Home.css'

const deliveryPartners = [
  { name: 'Express Delivery', icon: '🚚' },
  { name: 'Fast Post', icon: '📦' },
  { name: 'Global Ship', icon: '✈️' },
  { name: 'City Courier', icon: '🏃' },
]

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__bg">
          <div className="hero__glow hero__glow--1"></div>
          <div className="hero__glow hero__glow--2"></div>
          <div className="hero__grid"></div>
        </div>
        
        <div className="container">
          <motion.div 
            className="hero__content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="hero__badge">🚀 Демо-версия магазина</span>
            <h1 className="hero__title">
              Электроника <span className="text-gradient">будущего</span> уже сегодня
            </h1>
            <p className="hero__subtitle">
              Это демонстрационный проект магазина электроники, созданный для портфолио. 
              Все товары, цены и данные вымышлены.
            </p>
            <div className="hero__actions">
              <Link to="/products" className="btn btn-primary">
                Каталог товаров
              </Link>
              <Link to="/about" className="btn btn-secondary">
                О проекте
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero__stats"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="stat">
              <span className="stat__value">150+</span>
              <span className="stat__label">Товаров в каталоге</span>
            </div>
            <div className="stat">
              <span className="stat__value">6</span>
              <span className="stat__label">Категорий</span>
            </div>
            <div className="stat">
              <span className="stat__value">React</span>
              <span className="stat__label">+ Vite + Router</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section categories-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Категории товаров</h2>
            <p className="section-subtitle">
              Выберите интересующую вас категорию электроники
            </p>
          </motion.div>

          <div className="categories-grid">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/products/${category.id}`} className="category-card">
                  <div className="category-card__image">
                    <span className="category-card__icon">{category.icon}</span>
                  </div>
                  <div className="category-card__content">
                    <h3 className="category-card__title">{category.title}</h3>
                    <p className="category-card__count">{category.count} товаров</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section products-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Популярные товары</h2>
            <p className="section-subtitle">
              Хиты продаж и новинки нашего каталога
            </p>
          </motion.div>

          <div className="products-grid">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div 
            className="section-footer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to="/products" className="btn btn-secondary">
              Смотреть все товары →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Почему мы?</h2>
            <p className="section-subtitle">
              Преимущества работы с нашим магазином
            </p>
          </motion.div>

          <div className="features-grid">
            {[
              { icon: '🚀', title: 'Быстрая доставка', desc: 'Доставим в любую точку за 1-3 дня' },
              { icon: '🛡️', title: 'Гарантия качества', desc: 'Официальная гарантия на все товары' },
              { icon: '💳', title: 'Удобная оплата', desc: 'Картой, наличными или в рассрочку' },
              { icon: '📞', title: 'Поддержка 24/7', desc: 'Всегда на связи для ваших вопросов' },
            ].map((feature, index) => (
              <motion.div 
                key={feature.title}
                className="feature-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="feature-card__icon">{feature.icon}</span>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__desc">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section className="section delivery-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Доставка по всей стране</h2>
            <p className="section-subtitle">
              Сотрудничаем с лучшими службами доставки
            </p>
          </motion.div>

          <div className="delivery-partners">
            {deliveryPartners.map((partner, index) => (
              <motion.div 
                key={partner.name}
                className="delivery-partner"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="delivery-partner__icon">{partner.icon}</span>
                <span className="delivery-partner__name">{partner.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

