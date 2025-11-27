import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Catalog.css'

const faqItems = [
  {
    question: 'Как оформить заказ?',
    answer: 'Это демонстрационный сайт. В реальном магазине вы бы могли добавить товары в корзину и оформить заказ через форму оплаты.'
  },
  {
    question: 'Какие способы оплаты доступны?',
    answer: 'В демо-версии оплата не предусмотрена. В реальном магазине обычно доступны: банковские карты, электронные кошельки, наличные при получении.'
  },
  {
    question: 'Сколько времени занимает доставка?',
    answer: 'Это демонстрационная информация. Обычно доставка занимает от 1 до 7 рабочих дней в зависимости от региона.'
  },
  {
    question: 'Как вернуть товар?',
    answer: 'В демо-версии возврат невозможен. В реальном магазине возврат обычно возможен в течение 14 дней при сохранении товарного вида.'
  },
  {
    question: 'Есть ли гарантия на товары?',
    answer: 'Все товары на этом сайте вымышлены. В реальности на технику обычно предоставляется официальная гарантия производителя.'
  },
]

const supportTopics = [
  { icon: '📦', title: 'Статус заказа', desc: 'Отслеживание доставки' },
  { icon: '🔄', title: 'Возврат и обмен', desc: 'Правила возврата товаров' },
  { icon: '🛠️', title: 'Гарантийный ремонт', desc: 'Сервисные центры' },
  { icon: '💳', title: 'Оплата и рассрочка', desc: 'Способы оплаты' },
  { icon: '🚚', title: 'Доставка', desc: 'Способы и сроки доставки' },
  { icon: '📞', title: 'Связаться с нами', desc: 'Контакты поддержки' },
]

export default function Catalog() {
  return (
    <div className="catalog-page">
      <div className="container">
        {/* Header */}
        <motion.div 
          className="catalog-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="catalog-title">Техподдержка</h1>
          <p className="catalog-subtitle">
            Демонстрационная страница справочной информации и поддержки
          </p>
        </motion.div>

        {/* Support Topics */}
        <section className="section">
          <h2 className="section-title">Разделы помощи</h2>
          <div className="support-grid">
            {supportTopics.map((topic, index) => (
              <motion.div
                key={topic.title}
                className="support-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="support-card__icon">{topic.icon}</span>
                <h3 className="support-card__title">{topic.title}</h3>
                <p className="support-card__desc">{topic.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <h2 className="section-title">Частые вопросы</h2>
          <div className="faq-list">
            {faqItems.map((item, index) => (
              <motion.details
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <summary className="faq-question">
                  <span>{item.question}</span>
                  <span className="faq-toggle">+</span>
                </summary>
                <p className="faq-answer">{item.answer}</p>
              </motion.details>
            ))}
          </div>
        </section>

        {/* Demo Notice */}
        <motion.section 
          className="demo-notice"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <span className="demo-notice__icon">ℹ️</span>
          <div className="demo-notice__content">
            <h3>Это демонстрационный проект</h3>
            <p>
              Данный раздел создан для демонстрации структуры страницы техподдержки. 
              Реальная функциональность поддержки отсутствует.
            </p>
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section 
          className="contact-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="contact-cta__title">Не нашли ответ?</h2>
          <p className="contact-cta__text">
            Свяжитесь с нами через форму обратной связи
          </p>
          <Link to="/contact" className="btn btn-primary">
            Написать нам
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

