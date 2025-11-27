import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './Header.css'

const navItems = [
  { path: '/', label: 'Главная' },
  { 
    path: '/products', 
    label: 'Каталог',
    submenu: [
      { path: '/products/smartphones', label: '📱 Смартфоны' },
      { path: '/products/laptops', label: '💻 Ноутбуки' },
      { path: '/products/audio', label: '🎧 Аудио' },
      { path: '/products/gaming', label: '🎮 Игровые консоли' },
      { path: '/products/accessories', label: '⌚ Аксессуары' },
      { path: '/products/smart-home', label: '🏠 Умный дом' },
    ]
  },
  { path: '/catalog', label: 'Техподдержка' },
  { path: '/about', label: 'О нас' },
  { path: '/contact', label: 'Контакты' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="header__top">
        <div className="container header__top-inner">
          <div className="header__contact">
            <a href="tel:+78001234567" className="contact-link">
              <span className="contact-icon">📞</span>
              +7 (800) 123-45-67
            </a>
            <a href="mailto:demo@technova.store" className="contact-link">
              <span className="contact-icon">✉️</span>
              demo@technova.store
            </a>
          </div>
          <div className="header__badge">
            <span className="badge">🚀 Демо-версия магазина</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header__main">
        <div className="container header__main-inner">
          <Link to="/" className="logo">
            <div className="logo__icon">
              <svg viewBox="0 0 40 40" fill="none">
                <rect width="40" height="40" rx="10" fill="url(#logo-gradient)"/>
                <text x="20" y="27" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">TN</text>
                <defs>
                  <linearGradient id="logo-gradient" x1="0" y1="0" x2="40" y2="40">
                    <stop stopColor="#7c3aed"/>
                    <stop offset="1" stopColor="#06b6d4"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="logo__text">
              <span className="logo__name">TechNova</span>
              <span className="logo__tagline">Электроника будущего</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav nav--desktop">
            <ul className="nav__list">
              {navItems.map((item) => (
                <li 
                  key={item.path} 
                  className="nav__item"
                  onMouseEnter={() => item.submenu && setActiveDropdown(item.path)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NavLink 
                    to={item.path} 
                    className={({ isActive }) => 
                      `nav__link ${isActive ? 'nav__link--active' : ''}`
                    }
                  >
                    {item.label}
                    {item.submenu && <span className="nav__arrow">▼</span>}
                  </NavLink>
                  
                  {item.submenu && (
                    <AnimatePresence>
                      {activeDropdown === item.path && (
                        <motion.ul 
                          className="nav__dropdown"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subItem) => (
                            <li key={subItem.path}>
                              <NavLink to={subItem.path} className="nav__dropdown-link">
                                {subItem.label}
                              </NavLink>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className={`mobile-menu-btn ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Меню"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            className="nav nav--mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            <ul className="nav__list--mobile">
              {navItems.map((item) => (
                <li key={item.path}>
                  <NavLink 
                    to={item.path} 
                    className="nav__link--mobile"
                    onClick={() => !item.submenu && setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                  {item.submenu && (
                    <ul className="nav__submenu--mobile">
                      {item.submenu.map((subItem) => (
                        <li key={subItem.path}>
                          <NavLink 
                            to={subItem.path} 
                            className="nav__sublink--mobile"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subItem.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

