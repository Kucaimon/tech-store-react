import { useState } from 'react'
import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Демо - просто показываем сообщение
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="contact-page">
      <div className="container">
        {/* Page Header */}
        <motion.div 
          className="contact-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="contact-title">Свяжитесь с нами</h1>
          <p className="contact-subtitle">
            Это демонстрационная страница контактов. Форма не отправляет реальных сообщений.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="contact-info__card">
              <span className="contact-info__icon">📍</span>
              <h3 className="contact-info__title">Адрес (демо)</h3>
              <p className="contact-info__text">
                г. Демо-город<br />
                ул. Примерная, д. 123<br />
                офис 456
              </p>
            </div>

            <div className="contact-info__card">
              <span className="contact-info__icon">📞</span>
              <h3 className="contact-info__title">Телефон (демо)</h3>
              <p className="contact-info__text">
                <a href="tel:+78001234567">+7 (800) 123-45-67</a><br />
                <span className="contact-info__note">Бесплатно по России</span>
              </p>
            </div>

            <div className="contact-info__card">
              <span className="contact-info__icon">✉️</span>
              <h3 className="contact-info__title">Email (демо)</h3>
              <p className="contact-info__text">
                <a href="mailto:demo@technova.store">demo@technova.store</a><br />
                <a href="mailto:support@technova.store">support@technova.store</a>
              </p>
            </div>

            <div className="contact-info__card">
              <span className="contact-info__icon">⏰</span>
              <h3 className="contact-info__title">Режим работы</h3>
              <p className="contact-info__text">
                Пн-Пт: 10:00 - 20:00<br />
                Сб-Вс: 11:00 - 18:00
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="contact-form-wrapper"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="contact-form-card">
              <h2 className="contact-form__title">Написать сообщение</h2>
              <p className="contact-form__notice">
                ⚠️ Это демо-форма. Сообщения не отправляются.
              </p>

              {submitted && (
                <motion.div 
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  ✅ Демо: Сообщение "отправлено"!
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Ваше имя</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Иван Иванов"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="example@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Тема</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input form-select"
                    required
                  >
                    <option value="">Выберите тему</option>
                    <option value="order">Вопрос по заказу</option>
                    <option value="product">Консультация по товару</option>
                    <option value="partnership">Сотрудничество</option>
                    <option value="other">Другое</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Сообщение</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                    placeholder="Ваше сообщение..."
                    rows="5"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary form-submit">
                  Отправить сообщение
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.section 
          className="map-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="map-placeholder">
            <span className="map-placeholder__icon">🗺️</span>
            <p className="map-placeholder__text">
              Здесь могла бы быть карта,<br />
              но это демонстрационный проект
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

