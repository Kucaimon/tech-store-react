// Демонстрационные данные товаров
// Все цены, названия и характеристики вымышлены

export const categories = [
  {
    id: 'smartphones',
    title: 'Смартфоны',
    icon: '📱',
    description: 'Современные смартфоны с передовыми технологиями',
    count: 24
  },
  {
    id: 'laptops',
    title: 'Ноутбуки',
    icon: '💻',
    description: 'Мощные ноутбуки для работы и развлечений',
    count: 18
  },
  {
    id: 'audio',
    title: 'Аудио',
    icon: '🎧',
    description: 'Наушники, колонки и аудиосистемы',
    count: 32
  },
  {
    id: 'gaming',
    title: 'Игровые консоли',
    icon: '🎮',
    description: 'Консоли и аксессуары для геймеров',
    count: 15
  },
  {
    id: 'accessories',
    title: 'Аксессуары',
    icon: '⌚',
    description: 'Умные часы, чехлы и другие аксессуары',
    count: 45
  },
  {
    id: 'smart-home',
    title: 'Умный дом',
    icon: '🏠',
    description: 'Устройства для умного дома',
    count: 28
  }
]

export const products = {
  smartphones: [
    {
      id: 'phone-1',
      title: 'NovaPro X1 Ultra',
      category: 'Смартфоны',
      description: 'Флагманский смартфон с AMOLED дисплеем 6.7" и камерой 200 МП',
      icon: '📱',
      price: '89 990',
      oldPrice: '109 990',
      badge: { type: 'sale', text: '-18%' },
      specs: [
        { label: 'Экран', value: '6.7" AMOLED' },
        { label: 'Камера', value: '200 МП' },
        { label: 'Память', value: '512 ГБ' },
      ],
      link: '/products/smartphones'
    },
    {
      id: 'phone-2',
      title: 'NovaLite Z5',
      category: 'Смартфоны',
      description: 'Доступный смартфон с отличной автономностью и IPS экраном',
      icon: '📱',
      price: '24 990',
      specs: [
        { label: 'Экран', value: '6.5" IPS' },
        { label: 'Батарея', value: '5000 мАч' },
        { label: 'Память', value: '128 ГБ' },
      ],
      link: '/products/smartphones'
    },
    {
      id: 'phone-3',
      title: 'NovaFold Pro',
      category: 'Смартфоны',
      description: 'Складной смартфон нового поколения с двумя экранами',
      icon: '📱',
      price: '149 990',
      badge: { type: 'new', text: 'Новинка' },
      specs: [
        { label: 'Внешний', value: '6.2"' },
        { label: 'Внутренний', value: '7.6"' },
        { label: 'Память', value: '1 ТБ' },
      ],
      link: '/products/smartphones'
    }
  ],
  laptops: [
    {
      id: 'laptop-1',
      title: 'NovaBook Pro 16',
      category: 'Ноутбуки',
      description: 'Профессиональный ноутбук для работы и создания контента',
      icon: '💻',
      price: '179 990',
      badge: { type: 'popular', text: 'Хит' },
      specs: [
        { label: 'Процессор', value: 'M-Series Pro' },
        { label: 'ОЗУ', value: '32 ГБ' },
        { label: 'SSD', value: '1 ТБ' },
      ],
      link: '/products/laptops'
    },
    {
      id: 'laptop-2',
      title: 'NovaBook Air 14',
      category: 'Ноутбуки',
      description: 'Ультратонкий ноутбук весом всего 1.2 кг для мобильной работы',
      icon: '💻',
      price: '99 990',
      specs: [
        { label: 'Вес', value: '1.2 кг' },
        { label: 'Экран', value: '14" 2K' },
        { label: 'Батарея', value: '18 часов' },
      ],
      link: '/products/laptops'
    },
    {
      id: 'laptop-3',
      title: 'NovaGaming X17',
      category: 'Ноутбуки',
      description: 'Игровой ноутбук с RTX 4080 и экраном 240 Гц',
      icon: '💻',
      price: '249 990',
      badge: { type: 'new', text: 'Новинка' },
      specs: [
        { label: 'GPU', value: 'RTX 4080' },
        { label: 'Экран', value: '17" 240Hz' },
        { label: 'ОЗУ', value: '64 ГБ' },
      ],
      link: '/products/laptops'
    }
  ],
  audio: [
    {
      id: 'audio-1',
      title: 'NovaPods Pro Max',
      category: 'Аудио',
      description: 'Беспроводные наушники с активным шумоподавлением',
      icon: '🎧',
      price: '29 990',
      badge: { type: 'popular', text: 'Хит' },
      specs: [
        { label: 'ANC', value: 'Есть' },
        { label: 'Автономность', value: '30 часов' },
        { label: 'Драйверы', value: '50 мм' },
      ],
      link: '/products/audio'
    },
    {
      id: 'audio-2',
      title: 'NovaSound Bar 500',
      category: 'Аудио',
      description: 'Саундбар с сабвуфером и поддержкой Dolby Atmos',
      icon: '🔊',
      price: '49 990',
      specs: [
        { label: 'Мощность', value: '500 Вт' },
        { label: 'Каналы', value: '5.1.2' },
        { label: 'HDMI', value: 'eARC' },
      ],
      link: '/products/audio'
    },
    {
      id: 'audio-3',
      title: 'NovaBuds Mini',
      category: 'Аудио',
      description: 'Компактные TWS наушники с защитой IP55',
      icon: '🎧',
      price: '7 990',
      oldPrice: '9 990',
      badge: { type: 'sale', text: '-20%' },
      specs: [
        { label: 'Вес', value: '5 г' },
        { label: 'Автономность', value: '8 часов' },
        { label: 'Защита', value: 'IP55' },
      ],
      link: '/products/audio'
    }
  ],
  gaming: [
    {
      id: 'gaming-1',
      title: 'NovaPlay 5 Pro',
      category: 'Игровые консоли',
      description: 'Консоль нового поколения с поддержкой 8K и Ray Tracing',
      icon: '🎮',
      price: '69 990',
      badge: { type: 'popular', text: 'Хит' },
      specs: [
        { label: 'Разрешение', value: '8K' },
        { label: 'SSD', value: '2 ТБ' },
        { label: 'Ray Tracing', value: 'Есть' },
      ],
      link: '/products/gaming'
    },
    {
      id: 'gaming-2',
      title: 'NovaSwitch Lite',
      category: 'Игровые консоли',
      description: 'Портативная консоль с OLED экраном',
      icon: '🎮',
      price: '34 990',
      specs: [
        { label: 'Экран', value: '7" OLED' },
        { label: 'Батарея', value: '9 часов' },
        { label: 'Вес', value: '398 г' },
      ],
      link: '/products/gaming'
    },
    {
      id: 'gaming-3',
      title: 'NovaController Elite',
      category: 'Игровые консоли',
      description: 'Профессиональный геймпад с кастомизацией',
      icon: '🕹️',
      price: '14 990',
      badge: { type: 'new', text: 'Новинка' },
      specs: [
        { label: 'Триггеры', value: 'Настраиваемые' },
        { label: 'Батарея', value: '40 часов' },
        { label: 'Подсветка', value: 'RGB' },
      ],
      link: '/products/gaming'
    }
  ],
  accessories: [
    {
      id: 'acc-1',
      title: 'NovaWatch Ultra',
      category: 'Аксессуары',
      description: 'Премиальные смарт-часы с титановым корпусом',
      icon: '⌚',
      price: '79 990',
      badge: { type: 'new', text: 'Новинка' },
      specs: [
        { label: 'Материал', value: 'Титан' },
        { label: 'Батарея', value: '7 дней' },
        { label: 'Защита', value: '100м' },
      ],
      link: '/products/accessories'
    },
    {
      id: 'acc-2',
      title: 'NovaCharger 100W',
      category: 'Аксессуары',
      description: 'Компактное зарядное устройство GaN на 100 Вт',
      icon: '🔌',
      price: '4 990',
      specs: [
        { label: 'Мощность', value: '100 Вт' },
        { label: 'Порты', value: '3 USB-C' },
        { label: 'Технология', value: 'GaN' },
      ],
      link: '/products/accessories'
    },
    {
      id: 'acc-3',
      title: 'NovaBand Fit',
      category: 'Аксессуары',
      description: 'Фитнес-браслет с мониторингом здоровья',
      icon: '⌚',
      price: '3 990',
      oldPrice: '5 990',
      badge: { type: 'sale', text: '-33%' },
      specs: [
        { label: 'Экран', value: 'AMOLED' },
        { label: 'Батарея', value: '14 дней' },
        { label: 'Защита', value: '5 ATM' },
      ],
      link: '/products/accessories'
    }
  ],
  'smart-home': [
    {
      id: 'home-1',
      title: 'NovaHub Pro',
      category: 'Умный дом',
      description: 'Центр управления умным домом с голосовым ассистентом',
      icon: '🏠',
      price: '12 990',
      badge: { type: 'popular', text: 'Хит' },
      specs: [
        { label: 'Протоколы', value: 'Wi-Fi/Zigbee/Thread' },
        { label: 'Экран', value: '7"' },
        { label: 'Динамики', value: 'Стерео' },
      ],
      link: '/products/smart-home'
    },
    {
      id: 'home-2',
      title: 'NovaLight RGB',
      category: 'Умный дом',
      description: 'Умная лампа с 16 миллионами цветов',
      icon: '💡',
      price: '2 490',
      specs: [
        { label: 'Цветов', value: '16 млн' },
        { label: 'Мощность', value: '9 Вт' },
        { label: 'Цоколь', value: 'E27' },
      ],
      link: '/products/smart-home'
    },
    {
      id: 'home-3',
      title: 'NovaCam 360',
      category: 'Умный дом',
      description: 'Поворотная камера видеонаблюдения с ИИ',
      icon: '📹',
      price: '6 990',
      badge: { type: 'new', text: 'Новинка' },
      specs: [
        { label: 'Разрешение', value: '4K' },
        { label: 'Обзор', value: '360°' },
        { label: 'ИК подсветка', value: '15м' },
      ],
      link: '/products/smart-home'
    }
  ]
}

// Все товары для главной страницы
export const featuredProducts = [
  products.smartphones[0],
  products.laptops[0],
  products.audio[0],
  products.gaming[0],
  products.accessories[0],
  products['smart-home'][0],
]

// Получить товары по категории
export function getProductsByCategory(categoryId) {
  return products[categoryId] || []
}

// Получить категорию по ID
export function getCategoryById(categoryId) {
  return categories.find(cat => cat.id === categoryId)
}

