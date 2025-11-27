import { motion } from 'framer-motion'
import './About.css'

const team = [
  { name: 'Алекс К.', role: 'Frontend Developer', emoji: '👨‍💻' },
  { name: 'Мария С.', role: 'UI/UX Designer', emoji: '👩‍🎨' },
  { name: 'Дмитрий П.', role: 'Backend Developer', emoji: '👨‍💼' },
  { name: 'Анна В.', role: 'Project Manager', emoji: '👩‍💼' },
]

const techStack = [
  { name: 'React 18', icon: '⚛️', description: 'Современная библиотека для UI' },
  { name: 'Vite', icon: '⚡', description: 'Быстрый сборщик нового поколения' },
  { name: 'React Router', icon: '🔀', description: 'Маршрутизация SPA' },
  { name: 'Framer Motion', icon: '🎬', description: 'Плавные анимации' },
  { name: 'CSS Variables', icon: '🎨', description: 'Современная стилизация' },
  { name: 'ESLint', icon: '🔍', description: 'Качество кода' },
]

export default function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="about-hero"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="about-hero__badge">📦 Демо-проект</span>
          <h1 className="about-hero__title">
            О проекте <span className="text-gradient">TechNova</span>
          </h1>
          <p className="about-hero__description">
            Это демонстрационный проект интернет-магазина электроники, созданный для 
            портфолио. Проект показывает навыки работы с React, современными подходами 
            к разработке и дизайну веб-приложений.
          </p>
        </motion.section>

        {/* Info Cards */}
        <section className="about-info">
          <motion.div 
            className="info-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="info-card__icon">⚠️</span>
            <h3 className="info-card__title">Важное уведомление</h3>
            <p className="info-card__text">
              Этот сайт является демонстрационным проектом и не осуществляет 
              реальных продаж. Все товары, цены, контактные данные и любая другая 
              информация являются вымышленными и используются исключительно в 
              демонстрационных целях.
            </p>
          </motion.div>

          <motion.div 
            className="info-card info-card--highlight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <span className="info-card__icon">🎯</span>
            <h3 className="info-card__title">Цель проекта</h3>
            <p className="info-card__text">
              Демонстрация навыков создания современных веб-приложений с 
              использованием React и связанных технологий. Проект включает 
              адаптивный дизайн, анимации, роутинг и компонентную архитектуру.
            </p>
          </motion.div>
        </section>

        {/* Tech Stack */}
        <section className="section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Технологии</h2>
            <p className="section-subtitle">
              Современный стек технологий для создания быстрых и отзывчивых веб-приложений
            </p>
          </motion.div>

          <div className="tech-grid">
            {techStack.map((tech, index) => (
              <motion.div 
                key={tech.name}
                className="tech-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="tech-card__icon">{tech.icon}</span>
                <h4 className="tech-card__name">{tech.name}</h4>
                <p className="tech-card__desc">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Команда (вымышленная)</h2>
            <p className="section-subtitle">
              Демонстрационная секция с вымышленными членами команды
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div 
                key={member.name}
                className="team-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="team-card__avatar">{member.emoji}</span>
                <h4 className="team-card__name">{member.name}</h4>
                <p className="team-card__role">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Особенности проекта</h2>
          </motion.div>

          <div className="features-list">
            {[
              '✅ Полностью адаптивный дизайн для всех устройств',
              '✅ Современный dark-theme интерфейс',
              '✅ Плавные анимации с Framer Motion',
              '✅ Компонентная архитектура React',
              '✅ Маршрутизация с React Router',
              '✅ CSS переменные для темизации',
              '✅ Семантическая HTML разметка',
              '✅ Оптимизация производительности',
            ].map((feature, index) => (
              <motion.div 
                key={index}
                className="feature-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                {feature}
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

