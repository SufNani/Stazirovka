/* Подборки для лендинга + мок текущего пользователя (заглушка авторизации) */

export const COLLECTIONS = [
  {
    id: 'creative',
    title: 'Творчество и живопись',
    text: 'Для тех, кто хочет рисовать и раскрывать свой потенциал. Мастер-классы по разным техникам для любого уровня.',
    category: 'Творчество и хобби',
    cover: ['#a98bc0', '#5c3f8a'],
  },
  {
    id: 'cooking',
    title: 'Кулинарные мастер-классы',
    text: 'Для тех, кто хочет готовить вкусно и разнообразно. Мастер-классы по кухням мира и выпечке для любого уровня.',
    category: 'Кулинария и еда',
    cover: ['#c98f7a', '#8a4e3a'],
  },
  {
    id: 'dance',
    title: 'Танцы и движение',
    text: 'Для тех, кто хочет двигаться и получать энергию через танец. Занятия по различным направлениям.',
    category: 'Движение и спорт',
    cover: ['#8a9bc0', '#3e4c8a'],
  },
]

export const INTERESTS = ['Музыка', 'Искусство', 'Технологии', 'Бизнес', 'Спорт']

// Заглушка сессии пользователя (в MVP авторизация — на фронте, без бэкенда)
export const CURRENT_USER = {
  name: 'Иван Петров',
  email: 'ivanpetrov@mail.ru',
  initials: 'ИП',
  role: 'client', // 'client' | 'organizer'
  interests: ['Музыка', 'Искусство', 'Технологии'],
  // события, на которые записан клиент
  bookedEventIds: [10, 11, 12],
}

// Организатор — для кабинета организатора
export const ORGANIZER = {
  name: 'Иван Иванов',
  email: 'ivanov@mail.ru',
  initials: 'ИИ',
  project: 'Гончарная мастерская «art day»',
  // события организатора со статусами
  events: [
    { id: 4, status: 'published' },
    { id: 6, status: 'published' },
    { id: 9, status: 'draft' },
    { id: 2, status: 'done' },
  ],
}

export const STATUS_LABEL = {
  published: 'Опубликовано',
  draft: 'Черновик',
  done: 'Завершено',
}
