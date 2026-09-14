/** Контакты и реквизиты компании — единая точка правки.
 *  Раньше телефоны и адрес были раскиданы по компонентам; при смене номера
 *  приходилось искать их по всему проекту. */
export const COMPANY = {
  legalName: 'ООО «Арт-Медиа Трейд»',
  shortName: 'М-ЗВУК',
  site: 'mzvuk.by',
  unp: '590830372',
  okpo: '295801714000',
  address: {
    full: '230023, г. Гродно, ул. 17 Сентября, 49-11',
    city: 'Гродно',
    street: 'ул. 17 Сентября, 49-11',
  },
  phones: [
    { label: '+375 (152) 62-33-33', href: 'tel:+375152623333', note: 'городской' },
    { label: '+375 (33) 377-28-73', href: 'tel:+375333772873', note: 'мобильный' },
  ],
  fax: '+375 (152) 62-32-32',
  email: 'sales@mzvuk.by',
  schedule: [
    { days: 'Понедельник — пятница', hours: '10:00 — 19:00' },
    { days: 'Суббота', hours: '10:00 — 16:00' },
    { days: 'Воскресенье', hours: 'выходной' },
  ],
  /** Ссылки на профили: заказчик присылает адреса, до этого кнопки скрыты. */
  socials: [
    { id: 'telegram', label: 'Telegram', url: '' },
    { id: 'instagram', label: 'Instagram', url: '' },
    { id: 'youtube', label: 'YouTube', url: '' },
    { id: 'viber', label: 'Viber', url: '' },
  ],
  /** Виджет Яндекс.Карт по адресу магазина. Для боевого домена код удобнее
   *  собрать в конструкторе (yandex.by/map-constructor) и подставить сюда. */
  mapEmbedUrl:
    'https://yandex.by/map-widget/v1/?text=' +
    encodeURIComponent('Гродно, улица 17 Сентября, 49') +
    '&z=17',
} as const;

export const activeSocials = () => COMPANY.socials.filter(s => s.url.trim().length > 0);
