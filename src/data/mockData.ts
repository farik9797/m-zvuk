import guitarElectricImg from '../assets/products/guitar-electric.jpg';
import guitarElectric2Img from '../assets/products/guitar-electric-2.jpg';
import guitarAcousticImg from '../assets/products/guitar-acoustic.jpg';
import guitarAmpImg from '../assets/products/guitar-amp.jpg';
import synthImg from '../assets/products/synth.jpg';
import pianoDigitalImg from '../assets/products/piano-digital.jpg';
import drumsImg from '../assets/products/drums.jpg';
import micStandImg from '../assets/products/mic-stand.jpg';
import audioInterfaceImg from '../assets/products/audio-interface.jpg';
import headphonesImg from '../assets/products/headphones.jpg';
import paSpeakerImg from '../assets/products/pa-speaker.jpg';
import micDynamicImg from '../assets/products/mic-dynamic.jpg';

import { Product, Category, ServiceItem, NewsItem, ArticleItem, CertificateItem, FAQItem, PartnerBrand } from '../types';

export const MOCK_CATEGORIES: Category[] = [
  {
    id: 'guitars',
    name: 'Гитары и басы',
    slug: 'guitars',
    iconName: 'Guitar',
    description: 'Электрогитары, акустика, бас-гитары, укулеле и комбоусилители для дома, репетиций и сцены.',
    productCount: 48,
    image: guitarElectricImg
  },
  {
    id: 'keys',
    name: 'Клавишные и синтезаторы',
    slug: 'keys',
    iconName: 'Piano',
    description: 'Цифровые пианино, синтезаторы, рабочие станции и MIDI-клавиатуры для сцены и студии.',
    productCount: 26,
    image: pianoDigitalImg
  },
  {
    id: 'drums',
    name: 'Ударные и перкуссия',
    slug: 'drums',
    iconName: 'Drum',
    description: 'Акустические и электронные установки, тарелки, кахоны и перкуссия для школ и групп.',
    productCount: 19,
    image: drumsImg
  },
  {
    id: 'studio-monitors',
    name: 'Студийные мониторы',
    slug: 'studio-monitors',
    iconName: 'Speaker',
    description: 'Профессиональная студийная акустика ближнего, среднего и дальнего поля для сведение и мастеринга.',
    productCount: 24,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'microphones',
    name: 'Микрофоны и радиосистемы',
    slug: 'microphones',
    iconName: 'Mic',
    description: 'Студийные конденсаторные, динамические, инструментальные и вокальные радиосистемы.',
    productCount: 42,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mixers',
    name: 'Микшерные пульты',
    slug: 'mixers',
    iconName: 'Sliders',
    description: 'Аналоговые и цифровые микшеры для концертных площадок, студий и вещания.',
    productCount: 18,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pa-systems',
    name: 'Акустические системы',
    slug: 'pa-systems',
    iconName: 'Radio',
    description: 'Активная и пассивная концертная акустика, сабвуферы и линейные массивы.',
    productCount: 35,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'headphones',
    name: 'Студийные наушники',
    slug: 'headphones',
    iconName: 'Headphones',
    description: 'Мониторные наушники открытого и закрытого типа для звукорежиссеров и музыкантов.',
    productCount: 29,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'commercial-audio',
    name: 'Системы оповещения 100 В',
    slug: 'commercial-audio',
    iconName: 'Volume2',
    description: 'Трансляционные усилители, потолочные и настенные громкоговорители для ТРЦ, офисов и ресторанов.',
    productCount: 31,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'racks-stands',
    name: 'Стойки, коммутация и аксессуары',
    slug: 'racks-stands',
    iconName: 'Cable',
    description: 'Профессиональные микрофонные и акустические стойки, рэковые шкафы и мультикоры.',
    productCount: 56,
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80'
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-201',
    sku: 'YAM-HS5-BLK',
    name: 'Yamaha HS5 — Активный студийный монитор (5")',
    category: 'studio-monitors',
    brand: 'Yamaha',
    priceBYN: 1090,
    rating: 4.8,
    reviewsCount: 19,
    inStock: true,
    stockCount: 7,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Младшая модель легендарной серии HS — для небольших комнат, где восьмидюймовый монитор перегружает бас.',
    fullDesc: 'HS5 повторяет философию серии: честная передача без приукрашивания, чтобы ошибки в миксе были слышны сразу. Пятидюймовый динамик уместнее в комнатах до 12 м², где старший HS8 перегружает низ. Регуляторы ROOM CONTROL и HIGH TRIM подстраивают монитор под акустику помещения.',
    specs: [
      { name: 'Динамик НЧ', value: '5 дюймов' },
      { name: 'Динамик ВЧ', value: '1 дюйм, купол' },
      { name: 'Мощность', value: '70 Вт (45 НЧ + 25 ВЧ)' },
      { name: 'Диапазон', value: '54 Гц – 30 кГц' },
      { name: 'Входы', value: 'XLR, TRS (балансные)' },
      { name: 'Вес', value: '5,3 кг' },
    ],
    tags: ['Yamaha', 'студийный монитор', '5 дюймов', 'для домашней студии'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-202',
    sku: 'KRK-RP5G4-BLK',
    name: 'KRK Rokit 5 G4 — Активный студийный монитор (5")',
    category: 'studio-monitors',
    brand: 'KRK',
    priceBYN: 1190,
    oldPriceBYN: 1390,
    badge: 'DISCOUNT',
    discountPercent: 14,
    rating: 4.6,
    reviewsCount: 14,
    inStock: true,
    stockCount: 5,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Монитор с фирменным жёлтым динамиком и встроенным DSP-эквалайзером на 25 предустановок под комнату.',
    fullDesc: 'Rokit 5 G4 отличается от классических мониторов встроенной подстройкой: на задней панели ЖК-экран и 25 вариантов коррекции под положение в комнате — у стены, в углу, на столе. Для домашних студий без акустической обработки это заметно упрощает жизнь.',
    specs: [
      { name: 'Динамик НЧ', value: '5 дюймов, кевлар' },
      { name: 'Динамик ВЧ', value: '1 дюйм, кевлар' },
      { name: 'Мощность', value: '55 Вт' },
      { name: 'Диапазон', value: '43 Гц – 40 кГц' },
      { name: 'DSP', value: '25 предустановок коррекции' },
      { name: 'Входы', value: 'XLR, TRS' },
    ],
    tags: ['KRK', 'студийный монитор', 'DSP', 'домашняя студия'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-203',
    sku: 'ADM-T5V-BLK',
    name: 'ADAM Audio T5V — Активный студийный монитор (5")',
    category: 'studio-monitors',
    brand: 'ADAM Audio',
    priceBYN: 1050,
    rating: 4.7,
    reviewsCount: 11,
    inStock: false,
    stockCount: 0,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Ленточный твитер U-ART даёт детальный верх — заметное преимущество при работе с вокалом и акустикой.',
    fullDesc: 'T5V построен вокруг ленточного твитера, характерного для дорогих мониторов ADAM: верхние частоты читаются подробнее, чем у купольных аналогов в этой цене. Полезно при сведении вокала, струнных и живых барабанов.',
    specs: [
      { name: 'Динамик НЧ', value: '5 дюймов, полипропилен' },
      { name: 'Твитер', value: 'U-ART, ленточный' },
      { name: 'Мощность', value: '70 Вт' },
      { name: 'Диапазон', value: '45 Гц – 25 кГц' },
      { name: 'Входы', value: 'XLR, RCA' },
      { name: 'Вес', value: '5,6 кг' },
    ],
    tags: ['ADAM Audio', 'студийный монитор', 'ленточный твитер', 'сведение'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-204',
    sku: 'SHU-SM58-LCE',
    name: 'Shure SM58-LCE — Динамический вокальный микрофон',
    category: 'microphones',
    brand: 'Shure',
    priceBYN: 449,
    rating: 5.0,
    reviewsCount: 57,
    inStock: true,
    stockCount: 18,
    image: micDynamicImg,
    additionalImages: [micDynamicImg],
    shortDesc: 'Мировой стандарт сценического вокала: выдерживает падения, не боится обратной связи, звучит предсказуемо.',
    fullDesc: 'SM58 стоит почти на каждой сцене мира. Кардиоидная диаграмма подавляет звук из мониторов, встроенный поп-фильтр гасит взрывные согласные, а стальная сетка переживает то, что не переживает большинство микрофонов. Берут для концертов, речи и репетиционных точек.',
    specs: [
      { name: 'Тип', value: 'динамический' },
      { name: 'Диаграмма', value: 'кардиоида' },
      { name: 'Диапазон', value: '50 Гц – 15 кГц' },
      { name: 'Разъём', value: 'XLR' },
      { name: 'Корпус', value: 'металл, стальная сетка' },
      { name: 'Вес', value: '298 г' },
    ],
    tags: ['Shure', 'микрофон', 'вокал', 'сцена', 'динамический'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-205',
    sku: 'ROD-NT1-5G',
    name: 'Rode NT1 5th Generation — Студийный конденсаторный микрофон',
    category: 'microphones',
    brand: 'Rode',
    priceBYN: 1290,
    rating: 4.9,
    reviewsCount: 16,
    inStock: true,
    stockCount: 4,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Один из самых тихих микрофонов в классе: собственный шум 4 дБА, плюс цифровой выход по USB.',
    fullDesc: 'Пятое поколение NT1 объединяет аналоговый XLR и 32-битный USB-выход: можно писать в интерфейс или напрямую в компьютер без предусилителя. Крайне низкий собственный шум делает его удачным выбором для вокала, акустической гитары и озвучки.',
    specs: [
      { name: 'Тип', value: 'конденсаторный, большая диафрагма' },
      { name: 'Диаграмма', value: 'кардиоида' },
      { name: 'Собственный шум', value: '4 дБА' },
      { name: 'Выходы', value: 'XLR + USB-C (32 бит)' },
      { name: 'Диапазон', value: '20 Гц – 20 кГц' },
      { name: 'В комплекте', value: 'паук, поп-фильтр, кабель' },
    ],
    tags: ['Rode', 'микрофон', 'студия', 'USB', 'вокал'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-206',
    sku: 'YAM-MG10XU',
    name: 'Yamaha MG10XU — Аналоговый микшер 10 каналов',
    category: 'mixers',
    brand: 'Yamaha',
    priceBYN: 690,
    rating: 4.8,
    reviewsCount: 23,
    inStock: true,
    stockCount: 6,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Компактный микшер с предусилителями D-PRE, встроенными эффектами SPX и USB-интерфейсом.',
    fullDesc: 'MG10XU закрывает потребности репетиционной точки, небольшого зала и стрима: четыре микрофонных входа с качественными предусилителями, 24 эффекта SPX и передача звука в компьютер по USB без отдельной звуковой карты.',
    specs: [
      { name: 'Каналы', value: '10 (4 микрофонных)' },
      { name: 'Предусилители', value: 'Yamaha D-PRE' },
      { name: 'Эффекты', value: '24 программы SPX' },
      { name: 'USB', value: 'стерео, 24 бит / 192 кГц' },
      { name: 'Эквалайзер', value: '3-полосный на канал' },
      { name: 'Питание', value: 'внешний адаптер' },
    ],
    tags: ['Yamaha', 'микшер', 'USB-интерфейс', 'репетиционная точка'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-207',
    sku: 'SND-SIG12MTK',
    name: 'Soundcraft Signature 12 MTK — Аналоговый микшер с многоканальной записью',
    category: 'mixers',
    brand: 'Soundcraft',
    priceBYN: 1990,
    oldPriceBYN: 2290,
    badge: 'DISCOUNT',
    discountPercent: 13,
    rating: 4.7,
    reviewsCount: 8,
    inStock: true,
    stockCount: 2,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Двенадцать каналов с предусилителями Ghost и одновременная запись 14 дорожек в компьютер.',
    fullDesc: 'Signature 12 MTK берут те, кому нужен живой микшер и многодорожечная запись одновременно: концерт можно свести на месте и параллельно записать каждый канал отдельно для последующей работы в студии. Предусилители Ghost — те же, что в больших консолях Soundcraft.',
    specs: [
      { name: 'Каналы', value: '12' },
      { name: 'Предусилители', value: 'Ghost' },
      { name: 'Запись', value: '14 дорожек по USB' },
      { name: 'Эффекты', value: 'Lexicon' },
      { name: 'Эквалайзер', value: '4-полосный, полупараметрический' },
      { name: 'Разъёмы', value: 'XLR, TRS, RCA' },
    ],
    tags: ['Soundcraft', 'микшер', 'многоканальная запись', 'концерт'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-208',
    sku: 'BEH-B112D',
    name: 'Behringer Eurolive B112D — Активная акустическая система 1000 Вт',
    category: 'pa-systems',
    brand: 'Behringer',
    priceBYN: 890,
    rating: 4.5,
    reviewsCount: 27,
    inStock: true,
    stockCount: 8,
    image: paSpeakerImg,
    additionalImages: [paSpeakerImg],
    shortDesc: 'Рабочая лошадка небольших площадок: лёгкий корпус, встроенный усилитель и микрофонный вход.',
    fullDesc: 'B112D ставят на школьные мероприятия, презентации и небольшие концерты: одна колонка закрывает зал на сотню человек. Есть вход для микрофона с отдельным регулятором — можно провести мероприятие без микшера вообще.',
    specs: [
      { name: 'Тип', value: 'активная, 2-полосная' },
      { name: 'Мощность', value: '1000 Вт (пик)' },
      { name: 'Динамик', value: '12 дюймов + драйвер' },
      { name: 'Входы', value: 'XLR/TRS, микрофонный, RCA' },
      { name: 'Крепление', value: 'стойка 35 мм, монитор' },
      { name: 'Вес', value: '12,7 кг' },
    ],
    tags: ['Behringer', 'акустика', 'активная колонка', 'мероприятия'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-209',
    sku: 'JBL-EON718S',
    name: 'JBL EON718S — Активный сабвуфер 18"',
    category: 'pa-systems',
    brand: 'JBL',
    priceBYN: 2790,
    rating: 4.9,
    reviewsCount: 6,
    inStock: false,
    stockCount: 0,
    image: paSpeakerImg,
    additionalImages: [paSpeakerImg],
    shortDesc: 'Восемнадцатидюймовый сабвуфер с DSP и управлением по Bluetooth — низ для танцевальных мероприятий.',
    fullDesc: 'EON718S добавляет комплекту то, чего не может дать портальная колонка: нижние частоты для танцевальной программы и живых барабанов. Управление с телефона через приложение JBL Pro Connect, встроенные пресеты под тип мероприятия.',
    specs: [
      { name: 'Тип', value: 'активный сабвуфер' },
      { name: 'Динамик', value: '18 дюймов' },
      { name: 'Мощность', value: '1500 Вт' },
      { name: 'Нижняя граница', value: 'от 31 Гц' },
      { name: 'DSP', value: 'пресеты, Bluetooth-управление' },
      { name: 'Вес', value: '31 кг' },
    ],
    tags: ['JBL', 'сабвуфер', 'концерт', 'танцевальная программа'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-210',
    sku: 'ATH-M50X-BK',
    name: 'Audio-Technica ATH-M50x — Студийные наушники закрытого типа',
    category: 'headphones',
    brand: 'Audio-Technica',
    priceBYN: 629,
    rating: 4.9,
    reviewsCount: 44,
    inStock: true,
    stockCount: 9,
    image: headphonesImg,
    additionalImages: [headphonesImg],
    shortDesc: 'Стандарт для сведения и записи: закрытая конструкция, три съёмных кабеля, складная чаша.',
    fullDesc: 'ATH-M50x давно стали отраслевым стандартом среди недорогих мониторных наушников. Закрытая конструкция изолирует от внешнего шума и не даёт звуку просачиваться в микрофон при записи. Кабели съёмные — самая частая поломка наушников перестаёт быть проблемой.',
    specs: [
      { name: 'Тип', value: 'закрытые, мониторные' },
      { name: 'Динамики', value: '45 мм' },
      { name: 'Диапазон', value: '15 Гц – 28 кГц' },
      { name: 'Импеданс', value: '38 Ом' },
      { name: 'Кабели', value: '3 съёмных в комплекте' },
      { name: 'Вес', value: '285 г' },
    ],
    tags: ['Audio-Technica', 'наушники', 'студия', 'сведение', 'запись'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-211',
    sku: 'AKG-K240-MK2',
    name: 'AKG K240 MKII — Студийные наушники полуоткрытого типа',
    category: 'headphones',
    brand: 'AKG',
    priceBYN: 389,
    oldPriceBYN: 449,
    badge: 'DISCOUNT',
    discountPercent: 13,
    rating: 4.6,
    reviewsCount: 31,
    inStock: true,
    stockCount: 12,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Полуоткрытая конструкция для долгой работы: уши меньше устают, сцена шире, чем у закрытых.',
    fullDesc: 'K240 MKII выбирают за комфорт при многочасовой работе: полуоткрытые чаши не создают эффекта «головы в бочке», а самоустанавливающееся оголовье снимает давление. Для записи вокала под метроном не подходят — звук подтекает в микрофон.',
    specs: [
      { name: 'Тип', value: 'полуоткрытые' },
      { name: 'Динамики', value: '30 мм, Varimotion' },
      { name: 'Диапазон', value: '15 Гц – 25 кГц' },
      { name: 'Импеданс', value: '55 Ом' },
      { name: 'В комплекте', value: '2 кабеля, запасные амбушюры' },
      { name: 'Вес', value: '240 г' },
    ],
    tags: ['AKG', 'наушники', 'полуоткрытые', 'студия'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-212',
    sku: 'BEY-DT770-80',
    name: 'beyerdynamic DT 770 PRO 80 Ом — Студийные наушники',
    category: 'headphones',
    brand: 'beyerdynamic',
    priceBYN: 549,
    rating: 4.8,
    reviewsCount: 26,
    inStock: true,
    stockCount: 6,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Немецкая классика с велюровыми амбушюрами и ремонтопригодной конструкцией — служат годами.',
    fullDesc: 'DT 770 PRO ценят за долговечность: почти все детали, включая амбушюры, оголовье и кабель, меняются отдельно, поэтому наушники живут дольше, чем большинство конкурентов. Версия на 80 Ом — компромисс между работой от интерфейса и от портативной техники.',
    specs: [
      { name: 'Тип', value: 'закрытые' },
      { name: 'Импеданс', value: '80 Ом' },
      { name: 'Диапазон', value: '5 Гц – 35 кГц' },
      { name: 'Амбушюры', value: 'велюр, сменные' },
      { name: 'Кабель', value: '3 м, витой' },
      { name: 'Вес', value: '270 г' },
    ],
    tags: ['beyerdynamic', 'наушники', 'закрытые', 'студия', 'ремонтопригодные'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-213',
    sku: 'PAS-CS20T-WH',
    name: 'Pasystems CS-20T — Потолочный громкоговоритель 20 Вт (100 В)',
    category: 'commercial-audio',
    brand: 'Pasystems',
    priceBYN: 79,
    rating: 4.5,
    reviewsCount: 12,
    inStock: true,
    stockCount: 40,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Фоновое озвучивание и речевое оповещение в офисах, магазинах и коридорах учебных заведений.',
    fullDesc: 'Потолочные громкоговорители 100 В подключаются десятками к одному трансляционному усилителю — это и есть главное преимущество трансляционных линий. Переключаемая мощность позволяет выровнять громкость по зонам: у входа тише, в глубине зала громче.',
    specs: [
      { name: 'Тип', value: 'потолочный, трансляционный' },
      { name: 'Линия', value: '100 В / 70 В' },
      { name: 'Мощность', value: '20 / 10 / 5 Вт (переключаемая)' },
      { name: 'Диапазон', value: '80 Гц – 18 кГц' },
      { name: 'Монтаж', value: 'врезной, под подвесной потолок' },
      { name: 'Диаметр выреза', value: '200 мм' },
    ],
    tags: ['Pasystems', '100 В', 'оповещение', 'потолочный', 'офис'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-214',
    sku: 'PAS-WS10T-WH',
    name: 'Pasystems WS-10T — Настенный громкоговоритель 10 Вт (100 В)',
    category: 'commercial-audio',
    brand: 'Pasystems',
    priceBYN: 69,
    rating: 4.4,
    reviewsCount: 9,
    inStock: true,
    stockCount: 35,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    additionalImages: ['https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'],
    shortDesc: 'Настенный вариант для помещений без подвесного потолка: склады, лестничные клетки, производственные цеха.',
    fullDesc: 'Настенные трансляционные громкоговорители ставят там, где врезать потолочные некуда. Корпус из ABS-пластика с креплением под углом позволяет направить звук в нужную зону, а переключатель мощности — согласовать нагрузку на линии.',
    specs: [
      { name: 'Тип', value: 'настенный, трансляционный' },
      { name: 'Линия', value: '100 В' },
      { name: 'Мощность', value: '10 / 5 / 2,5 Вт' },
      { name: 'Диапазон', value: '100 Гц – 16 кГц' },
      { name: 'Корпус', value: 'ABS-пластик' },
      { name: 'Крепление', value: 'поворотный кронштейн' },
    ],
    tags: ['Pasystems', '100 В', 'оповещение', 'настенный', 'склад'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-215',
    sku: 'KM-21435-BK',
    name: 'K&M 21435 — Стойка для акустической системы',
    category: 'racks-stands',
    brand: 'K&M',
    priceBYN: 189,
    rating: 4.7,
    reviewsCount: 14,
    inStock: true,
    stockCount: 10,
    image: micStandImg,
    additionalImages: [micStandImg],
    shortDesc: 'Выдерживает 50 кг: подходит под порталы и активные колонки на мероприятиях любой сложности.',
    fullDesc: 'Стойка со стальной колонной и газовой амортизацией: колонка поднимается без рывков и не падает на руки при опускании. Треножное основание складывается для перевозки, высота регулируется под высоту зала и рост слушателей.',
    specs: [
      { name: 'Максимальная нагрузка', value: '50 кг' },
      { name: 'Высота', value: '1370–2000 мм' },
      { name: 'Штырь', value: '35 мм' },
      { name: 'Материал', value: 'сталь' },
      { name: 'Особенности', value: 'газовая амортизация' },
      { name: 'Вес', value: '5,4 кг' },
    ],
    tags: ['K&M', 'стойка', 'акустика', 'сцена', 'мероприятия'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-216',
    sku: 'RCK-12U-600',
    name: 'Рэковый шкаф 12U, глубина 600 мм',
    category: 'racks-stands',
    brand: 'Rackmount',
    priceBYN: 449,
    rating: 4.5,
    reviewsCount: 7,
    inStock: true,
    stockCount: 4,
    image: micStandImg,
    additionalImages: [micStandImg],
    shortDesc: 'Для усилителей, процессоров и коммутации: съёмные боковые панели, вентиляция, замок.',
    fullDesc: 'Шкаф на 12 юнитов закрывает потребности небольшой инсталляции: трансляционный усилитель, источник фоновой музыки, процессор и патч-панель. Съёмные боковины упрощают монтаж кабельных трасс, замок защищает от посторонних рук в общедоступных помещениях.',
    specs: [
      { name: 'Высота', value: '12U' },
      { name: 'Глубина', value: '600 мм' },
      { name: 'Нагрузка', value: 'до 60 кг' },
      { name: 'Двери', value: 'стеклянная передняя, замок' },
      { name: 'Вентиляция', value: 'перфорация, место под вентиляторы' },
      { name: 'Цвет', value: 'чёрный' },
    ],
    tags: ['рэк', 'шкаф', 'инсталляция', '19 дюймов'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-116',
    sku: 'KM-210-9-BK',
    name: 'K&M 210/9 — Микрофонная стойка «журавль»',
    category: 'racks-stands',
    brand: 'K&M',
    priceBYN: 129,
    oldPriceBYN: 169,
    badge: 'DISCOUNT',
    discountPercent: 24,
    rating: 4.8,
    reviewsCount: 18,
    inStock: true,
    stockCount: 14,
    image: micStandImg,
    additionalImages: [micStandImg],
    shortDesc: 'Немецкий стандарт для сцены и студии: стальная конструкция, регулируемая стрела, надёжные фиксаторы.',
    fullDesc: 'Модель 210/9 — рабочая лошадка концертных площадок и студий: выдерживает тяжёлые микрофоны, не съезжает под нагрузкой, складывается для перевозки. Треножное основание устойчиво даже на неровной сцене.',
    specs: [
      { name: 'Тип', value: 'напольная стойка с журавлём' },
      { name: 'Высота', value: '890–1600 мм' },
      { name: 'Длина стрелы', value: '425–775 мм' },
      { name: 'Материал', value: 'сталь, чёрное покрытие' },
      { name: 'Вес', value: '2,3 кг' },
      { name: 'Резьба', value: '3/8" с переходником 5/8"' }
    ],
    tags: ['K&M', 'микрофонная стойка', 'сцена', 'студия', 'аксессуары'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: []
  },
  {
    id: 'prod-108',
    sku: 'YAM-TRBX174-BL',
    name: 'Yamaha TRBX174 — Бас-гитара 4 струны',
    category: 'guitars',
    brand: 'Yamaha',
    priceBYN: 990,
    rating: 4.7,
    reviewsCount: 9,
    inStock: true,
    stockCount: 4,
    image: guitarElectric2Img,
    additionalImages: [guitarElectric2Img],
    shortDesc: 'Классическая связка P/J-звукоснимателей, лёгкий корпус из тополя — универсальный бас для репетиций и сцены.',
    fullDesc: 'TRBX174 закрывает почти любой стиль: сплит-звукосниматель даёт плотный низ для рока и поп-музыки, джазовый сингл у бриджа добавляет характерную середину для фанка. Гриф удобного профиля и небольшой вес делают инструмент подходящим для первого баса.',
    specs: [
      { name: 'Тип', value: 'бас-гитара, 4 струны' },
      { name: 'Корпус', value: 'тополь' },
      { name: 'Гриф / накладка', value: 'клён / палисандр' },
      { name: 'Звукосниматели', value: 'split (P) + single (J)' },
      { name: 'Мензура', value: '864 мм (34")' },
      { name: 'Регуляторы', value: '2 громкости, тембр' }
    ],
    tags: ['Yamaha', 'бас-гитара', 'для начинающих', 'репетиции'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-109',
    sku: 'VAL-VC204-NAT',
    name: 'Valencia VC204 — Классическая гитара 4/4',
    category: 'guitars',
    brand: 'Valencia',
    priceBYN: 269,
    rating: 4.5,
    reviewsCount: 34,
    inStock: true,
    stockCount: 11,
    image: guitarAcousticImg,
    additionalImages: [guitarAcousticImg],
    shortDesc: 'Нейлоновые струны, полноразмерный корпус 4/4 — стандартный выбор для музыкальной школы.',
    fullDesc: 'Классическая гитара для учеников школ искусств и тех, кто начинает с нейлона. Нейлоновые струны мягче для пальцев, чем металл, поэтому такой инструмент часто рекомендуют детям на первый год занятий. Доступны размеры 1/2 и 3/4 — подбираем по росту ребёнка.',
    specs: [
      { name: 'Тип', value: 'классическая гитара' },
      { name: 'Размер', value: '4/4 (есть 1/2 и 3/4)' },
      { name: 'Верхняя дека', value: 'ель' },
      { name: 'Корпус', value: 'линден' },
      { name: 'Струны', value: 'нейлон' },
      { name: 'Количество ладов', value: '19' }
    ],
    tags: ['Valencia', 'классическая гитара', 'нейлон', 'музыкальная школа', 'для детей'],
    warrantyMonths: 12,
    isPopular: true,
    reviews: [
      {
        id: 'rev-109-1',
        author: 'Ирина В.',
        rating: 5,
        date: '28.08.2026',
        text: 'Брали дочке в первый класс музыкальной школы размер 3/4. Помогли подобрать по росту прямо в магазине, струны мягкие — пальцы не режет.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-110',
    sku: 'CORT-UKE-SOP',
    name: 'Cort Soprano — Укулеле сопрано',
    category: 'guitars',
    brand: 'Cort',
    priceBYN: 149,
    rating: 4.6,
    reviewsCount: 17,
    inStock: true,
    stockCount: 15,
    image: guitarAcousticImg,
    additionalImages: [guitarAcousticImg],
    shortDesc: 'Компактный инструмент для начинающих: четыре нейлоновые струны, лёгкий корпус, быстрый старт.',
    fullDesc: 'Укулеле сопрано — самый простой способ начать играть: три аккорда осваиваются за вечер, инструмент помещается в рюкзак. Часто берут как второй инструмент гитаристы и как первый — дети от шести лет.',
    specs: [
      { name: 'Тип', value: 'укулеле, сопрано' },
      { name: 'Корпус', value: 'махагони' },
      { name: 'Струны', value: 'нейлон, 4' },
      { name: 'Количество ладов', value: '12' },
      { name: 'Длина', value: '53 см' }
    ],
    tags: ['Cort', 'укулеле', 'для детей', 'подарок'],
    warrantyMonths: 12,
    reviews: []
  },
  {
    id: 'prod-111',
    sku: 'CAS-CDPS110-BK',
    name: 'Casio CDP-S110 — Цифровое пианино 88 клавиш',
    category: 'keys',
    brand: 'Casio',
    priceBYN: 1290,
    oldPriceBYN: 1490,
    badge: 'DISCOUNT',
    discountPercent: 13,
    rating: 4.6,
    reviewsCount: 24,
    inStock: true,
    stockCount: 6,
    image: pianoDigitalImg,
    additionalImages: [pianoDigitalImg],
    shortDesc: 'Одно из самых компактных пианино с молоточковой механикой — глубина корпуса всего 23 см.',
    fullDesc: 'CDP-S110 подойдёт там, где мало места: корпус тоньше большинства конкурентов, при этом клавиатура полноразмерная, со взвешенной молоточковой механикой. Работает от батареек — удобно, если инструмент возят на занятия или выступления.',
    specs: [
      { name: 'Тип', value: 'цифровое пианино' },
      { name: 'Клавиатура', value: '88 клавиш, Scaled Hammer Action' },
      { name: 'Полифония', value: '64 голоса' },
      { name: 'Тембры', value: '10' },
      { name: 'Питание', value: 'адаптер или 6 батареек AA' },
      { name: 'Глубина корпуса', value: '232 мм' }
    ],
    tags: ['Casio', 'цифровое пианино', '88 клавиш', 'компактное', 'для дома'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-112',
    sku: 'KRG-MINILOGUE-XD',
    name: 'Korg minilogue xd — Аналоговый синтезатор',
    category: 'keys',
    brand: 'Korg',
    priceBYN: 2190,
    badge: 'NEW',
    rating: 4.8,
    reviewsCount: 7,
    inStock: true,
    stockCount: 2,
    image: synthImg,
    additionalImages: [synthImg],
    shortDesc: 'Четырёхголосный аналоговый синтезатор с цифровым мультидвижком и встроенными эффектами.',
    fullDesc: 'minilogue xd соединяет аналоговый тракт с цифровым осциллятором: можно получить классический тёплый бас и тут же — современные цифровые текстуры. Секвенсор на 16 шагов с motion-записью и встроенные ревербератор, дилей и модуляция позволяют работать без внешней обработки.',
    specs: [
      { name: 'Тип', value: 'аналоговый синтезатор' },
      { name: 'Клавиатура', value: '37 клавиш' },
      { name: 'Полифония', value: '4 голоса' },
      { name: 'Осцилляторы', value: '2 аналоговых + цифровой мультидвижок' },
      { name: 'Секвенсор', value: '16 шагов, motion-запись' },
      { name: 'Эффекты', value: 'reverb, delay, modulation' }
    ],
    tags: ['Korg', 'синтезатор', 'аналоговый', 'студия', 'электронная музыка'],
    warrantyMonths: 24,
    isNew: true,
    reviews: []
  },
  {
    id: 'prod-113',
    sku: 'YAM-PSRE383',
    name: 'Yamaha PSR-E383 — Синтезатор 61 клавиша',
    category: 'keys',
    brand: 'Yamaha',
    priceBYN: 749,
    rating: 4.7,
    reviewsCount: 31,
    inStock: true,
    stockCount: 9,
    image: synthImg,
    additionalImages: [synthImg],
    shortDesc: 'Обучающий синтезатор с чувствительной к касанию клавиатурой, 650 тембрами и уроками.',
    fullDesc: 'PSR-E383 — частый первый синтезатор для дома: клавиатура реагирует на силу нажатия, что сразу приучает к динамике, а встроенные уроки и аккомпанементы помогают заниматься без преподавателя между уроками. Подключается к компьютеру и планшету по USB.',
    specs: [
      { name: 'Тип', value: 'синтезатор, обучающий' },
      { name: 'Клавиатура', value: '61 клавиша, чувствительная к касанию' },
      { name: 'Полифония', value: '48 голосов' },
      { name: 'Тембры', value: '650' },
      { name: 'Стили аккомпанемента', value: '260' },
      { name: 'Разъёмы', value: 'наушники, USB to Host, педаль' }
    ],
    tags: ['Yamaha', 'синтезатор', 'для обучения', 'для дома', 'детям'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: []
  },
  {
    id: 'prod-114',
    sku: 'ROL-TD02K',
    name: 'Roland TD-02K — Электронная барабанная установка',
    category: 'drums',
    brand: 'Roland',
    priceBYN: 1690,
    rating: 4.8,
    reviewsCount: 13,
    inStock: true,
    stockCount: 3,
    image: drumsImg,
    additionalImages: [drumsImg],
    shortDesc: 'Тихие занятия дома: резиновые пэды, звуковой модуль Roland и встроенные упражнения.',
    fullDesc: 'TD-02K берут, когда акустическая установка невозможна из-за соседей. Модуль содержит фирменные звуки Roland и набор упражнений с оценкой точности, а играть можно в наушниках в любое время суток. Компактная рама складывается, если комнату нужно освободить.',
    specs: [
      { name: 'Тип', value: 'электронная ударная установка' },
      { name: 'Конфигурация', value: 'малый, 3 тома, хай-хэт, крэш, райд, бочка' },
      { name: 'Модуль', value: 'TD-02, 16 наборов' },
      { name: 'Функции', value: 'упражнения с оценкой, метроном, Bluetooth-аудио' },
      { name: 'Подключение', value: 'наушники, линейный выход, USB' }
    ],
    tags: ['Roland', 'электронные барабаны', 'тихие занятия', 'для дома', 'наушники'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: [
      {
        id: 'rev-114-1',
        author: 'Павел Ж.',
        rating: 5,
        date: '01.09.2026',
        text: 'Живу в панельном доме, акустику было не поставить. Занимаюсь в наушниках вечером — соседи не слышат. Пэды отзывчивые, для обучения более чем достаточно.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-115',
    sku: 'MNL-CAJON-STD',
    name: 'Meinl Headliner — Кахон',
    category: 'drums',
    brand: 'Meinl',
    priceBYN: 329,
    rating: 4.7,
    reviewsCount: 22,
    inStock: true,
    stockCount: 7,
    image: drumsImg,
    additionalImages: [drumsImg],
    shortDesc: 'Перкуссия для акустических составов: бас и щелчок в одном корпусе, играть можно сидя сверху.',
    fullDesc: 'Кахон заменяет полноценную ударную установку в акустических составах и на репетициях без подзвучки: удар по центру даёт бас, по краю — щелчок вместо малого барабана. Берут в кавер-группы, на уличные выступления и в музыкальные школы для занятий ритмом.',
    specs: [
      { name: 'Тип', value: 'кахон' },
      { name: 'Корпус', value: 'берёза' },
      { name: 'Передняя панель', value: 'сменная, с фиксированными струнами' },
      { name: 'Габариты', value: '470 × 300 × 300 мм' }
    ],
    tags: ['Meinl', 'кахон', 'перкуссия', 'акустика', 'для репетиций'],
    warrantyMonths: 12,
    reviews: []
  },
  {
    id: 'prod-101',
    sku: 'FEN-PL2-ST-BK',
    name: 'Fender Player II Stratocaster MN — Электрогитара',
    category: 'guitars',
    brand: 'Fender',
    priceBYN: 3190,
    oldPriceBYN: 3590,
    badge: 'DISCOUNT',
    discountPercent: 11,
    rating: 5.0,
    reviewsCount: 28,
    inStock: true,
    stockCount: 3,
    image: guitarElectricImg,
    additionalImages: [guitarElectricImg],
    shortDesc: 'Обновлённая мексиканская серия Player II: ольховый корпус, кленовый гриф профиля Modern «C», три сингла Alnico V.',
    fullDesc: 'Player II Stratocaster — рабочая лошадка для дома и сцены. Корпус из ольхи даёт сбалансированный тон, кленовый гриф профиля Modern «C» с радиусом накладки 9,5" удобен и для аккордовой игры, и для соло. Три сингла Player II Alnico V сохраняют узнаваемый стратовый характер: прозрачный верх, плотная середина, чистый звук на чистом канале. Перед выдачей мастер проверяет строй, высоту струн и мензуру.',
    specs: [
      { name: 'Тип', value: 'электрогитара, Stratocaster' },
      { name: 'Корпус', value: 'ольха' },
      { name: 'Гриф / накладка', value: 'клён, профиль Modern «C» / клён, радиус 9,5"' },
      { name: 'Звукосниматели', value: '3 × сингл Player II Alnico V' },
      { name: 'Количество ладов', value: '22, medium jumbo' },
      { name: 'Мензура', value: '648 мм (25,5")' },
      { name: 'Бридж', value: '2-point tremolo со стальным блоком' },
      { name: 'Вес', value: '3,6 кг' }
    ],
    tags: ['Fender', 'электрогитара', 'Stratocaster', 'сингл', 'для сцены'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: [
      {
        id: 'rev-101-1',
        author: 'Алексей К.',
        company: 'Гродно',
        rating: 5,
        date: '02.09.2026',
        text: 'Заказал в пятницу вечером — в понедельник забрал. Перед выдачей отстроили гриф и выставили высоту струн, играть можно прямо из кофра.',
        verified: true
      },
      {
        id: 'rev-101-2',
        author: 'Дмитрий П.',
        rating: 5,
        date: '17.08.2026',
        text: 'Вторая гитара в коллекции, брал на замену бюджетной. Середина плотнее, верх чище. Консультант честно сравнил три модели и не навязывал дороже.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-102',
    sku: 'IBZ-GRG170DX-BKN',
    name: 'Ibanez GRG170DX — Электрогитара',
    category: 'guitars',
    brand: 'Ibanez',
    priceBYN: 1090,
    rating: 4.6,
    reviewsCount: 12,
    inStock: true,
    stockCount: 5,
    image: guitarElectric2Img,
    additionalImages: [guitarElectric2Img],
    shortDesc: 'Тонкий быстрый гриф GRG, конфигурация HSH и тремоло — популярный старт для рока и метала.',
    fullDesc: 'GRG170DX из серии GIO — частый выбор для первой электрогитары в тяжёлых стилях. Тонкий гриф GRG играется быстро, связка хамбакер-сингл-хамбакер закрывает и плотный рифф, и чистый арпеджио. Тремоло-система держит строй при умеренной работе рычагом.',
    specs: [
      { name: 'Тип', value: 'электрогитара, SuperStrat' },
      { name: 'Корпус', value: 'тополь' },
      { name: 'Гриф / накладка', value: 'клён, профиль GRG / пурпурное дерево' },
      { name: 'Звукосниматели', value: 'Infinity R (H-S-H)' },
      { name: 'Количество ладов', value: '24, medium' },
      { name: 'Мензура', value: '648 мм (25,5")' },
      { name: 'Бридж', value: 'FAT-6 tremolo' }
    ],
    tags: ['Ibanez', 'электрогитара', 'рок', 'метал', 'для начинающих'],
    warrantyMonths: 24,
    reviews: [
      {
        id: 'rev-102-1',
        author: 'Егор С.',
        rating: 5,
        date: '21.08.2026',
        text: 'Брал сыну в музыкальную школу для рок-ансамбля. Гриф реально тонкий, ребёнку удобно. За свои деньги отличный инструмент.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-103',
    sku: 'CORT-AD810-OP',
    name: 'Cort AD810 OP — Акустическая гитара (дредноут)',
    category: 'guitars',
    brand: 'Cort',
    priceBYN: 419,
    oldPriceBYN: 529,
    badge: 'DISCOUNT',
    discountPercent: 21,
    rating: 4.7,
    reviewsCount: 41,
    inStock: true,
    stockCount: 8,
    image: guitarAcousticImg,
    additionalImages: [guitarAcousticImg],
    shortDesc: 'Самая ходовая акустика для обучения: корпус дредноут, ель и махагони, открытая пора.',
    fullDesc: 'AD810 — первая гитара для тысяч учеников музыкальных школ. Дредноут даёт громкий, яркий звук, которого хватает и для аккомпанемента голосу, и для игры в компании. Верхняя дека из ели, корпус из махагони, отделка Open Pore — лёгкая и честная. Перед выдачей инструмент отстраивается по высоте струн.',
    specs: [
      { name: 'Тип', value: 'акустическая гитара, дредноут' },
      { name: 'Верхняя дека', value: 'ель' },
      { name: 'Корпус', value: 'махагони' },
      { name: 'Гриф / накладка', value: 'махагони / пурпурное дерево' },
      { name: 'Количество ладов', value: '20' },
      { name: 'Мензура', value: '643 мм' },
      { name: 'Отделка', value: 'Open Pore, натуральный' }
    ],
    tags: ['Cort', 'акустическая гитара', 'дредноут', 'для обучения', 'музыкальная школа'],
    warrantyMonths: 12,
    isPopular: true,
    reviews: [
      {
        id: 'rev-103-1',
        author: 'Марина Т.',
        company: 'преподаватель',
        rating: 5,
        date: '09.09.2026',
        text: 'Берём такие в класс уже третий год. Строй держат, звук ровный, ученикам хватает на несколько лет занятий.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-104',
    sku: 'BOSS-KTN50-MK2',
    name: 'Boss Katana-50 MkII — Гитарный комбоусилитель 50 Вт',
    category: 'guitars',
    brand: 'Boss',
    priceBYN: 1050,
    rating: 4.9,
    reviewsCount: 19,
    inStock: false,
    stockCount: 0,
    image: guitarAmpImg,
    additionalImages: [guitarAmpImg],
    shortDesc: 'Пять усилительных характеров, 60 эффектов BOSS и режим мощности от 0,5 Вт — для дома, репетиции и сцены.',
    fullDesc: 'Katana-50 MkII закрывает почти любой гитарный запрос: пять характеров усиления от чистого до Brown, встроенные эффекты из линейки BOSS GT, выход на наушники и запись по USB. Переключение мощности 50 / 25 / 0,5 Вт позволяет получить тот же характер звука и на сцене, и в квартире вечером.',
    specs: [
      { name: 'Тип', value: 'транзисторный комбоусилитель' },
      { name: 'Мощность', value: '50 Вт (переключение 50 / 25 / 0,5 Вт)' },
      { name: 'Динамик', value: '12 дюймов, custom' },
      { name: 'Характеры усиления', value: '5 (Clean, Crunch, Lead, Brown, Acoustic)' },
      { name: 'Эффекты', value: '60 вариаций BOSS, 15 одновременно' },
      { name: 'Выходы', value: 'наушники / запись, USB' },
      { name: 'Вес', value: '11,6 кг' }
    ],
    tags: ['Boss', 'комбоусилитель', 'гитарный усилитель', 'эффекты', 'для репетиций'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-105',
    sku: 'ROL-JUNODS61',
    name: 'Roland JUNO-DS61 — Синтезатор 61 клавиша',
    category: 'keys',
    brand: 'Roland',
    priceBYN: 2740,
    rating: 4.9,
    reviewsCount: 22,
    inStock: true,
    stockCount: 2,
    image: synthImg,
    additionalImages: [synthImg],
    shortDesc: 'Сценическая рабочая станция: более 1000 тембров, работа от батареек, вес 5,3 кг.',
    fullDesc: 'JUNO-DS61 сделан для тех, кто возит инструмент на площадки: лёгкий корпус, питание от батареек, быстрый доступ к тембрам и сет-листам. Более тысячи звуков библиотеки Roland, восьмидорожечный секвенсор, вокодер и вход для микрофона. Клавиатура velocity-sensitive с откликом, привычным для сценической игры.',
    specs: [
      { name: 'Тип', value: 'синтезатор, рабочая станция' },
      { name: 'Клавиатура', value: '61 клавиша, velocity-sensitive' },
      { name: 'Полифония', value: '128 голосов' },
      { name: 'Тембры', value: 'более 1000 + расширения' },
      { name: 'Секвенсор', value: '8 дорожек' },
      { name: 'Питание', value: 'адаптер или 8 батареек AA' },
      { name: 'Вес', value: '5,3 кг' }
    ],
    tags: ['Roland', 'синтезатор', 'JUNO', 'для сцены', 'рабочая станция'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: [
      {
        id: 'rev-105-1',
        author: 'Сергей В.',
        company: 'кавер-группа',
        rating: 5,
        date: '30.08.2026',
        text: 'Возим на площадки каждую неделю. Лёгкий, быстро разворачивается, сет-листы переключаются одной кнопкой.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-106',
    sku: 'YAM-P145-B',
    name: 'Yamaha P-145 B — Цифровое пианино 88 клавиш',
    category: 'keys',
    brand: 'Yamaha',
    priceBYN: 1890,
    badge: 'NEW',
    rating: 4.9,
    reviewsCount: 15,
    inStock: true,
    stockCount: 4,
    image: pianoDigitalImg,
    additionalImages: [pianoDigitalImg],
    shortDesc: 'Молоточковая механика GHC, тембр рояля CFX, самый компактный корпус в линейке P.',
    fullDesc: 'P-145 — цифровое пианино для дома и музыкальной школы. Клавиатура GHC с градуированным молоточковым механизмом воспроизводит ощущение акустического инструмента: в басу клавиши тяжелее, в верхнем регистре легче. Основной тембр записан с концертного рояля Yamaha CFX. Корпус компактнее предыдущих моделей серии и помещается даже в небольшой комнате.',
    specs: [
      { name: 'Тип', value: 'цифровое пианино' },
      { name: 'Клавиатура', value: '88 клавиш, GHC (градуированная молоточковая)' },
      { name: 'Полифония', value: '64 голоса' },
      { name: 'Тембры', value: '10, основной — Yamaha CFX' },
      { name: 'Разъёмы', value: 'наушники, USB to Host, педаль' },
      { name: 'Габариты', value: '1326 × 295 × 154 мм' },
      { name: 'Вес', value: '11,1 кг' }
    ],
    tags: ['Yamaha', 'цифровое пианино', '88 клавиш', 'молоточковая механика', 'для дома'],
    warrantyMonths: 24,
    isNew: true,
    isPopular: true,
    reviews: [
      {
        id: 'rev-106-1',
        author: 'Ольга Н.',
        rating: 5,
        date: '05.09.2026',
        text: 'Покупали ребёнку в музыкальную школу. Клавиши тяжёлые, как на акустическом — преподаватель одобрила. Привезли на пятый этаж без лифта.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-107',
    sku: 'MIL-FOCUS20-WR',
    name: 'Millenium Focus 20 — Барабанная установка (5 предметов)',
    category: 'drums',
    brand: 'Millenium',
    priceBYN: 1590,
    oldPriceBYN: 1990,
    badge: 'DISCOUNT',
    discountPercent: 20,
    rating: 4.4,
    reviewsCount: 11,
    inStock: true,
    stockCount: 2,
    image: drumsImg,
    additionalImages: [drumsImg],
    shortDesc: 'Полный комплект из пяти барабанов со стойками, тарелками, стулом и педалью — для старта занятий.',
    fullDesc: 'Focus 20 — готовый набор для тех, кто начинает играть на ударных: бочка 20", том-томы, напольный том, малый барабан, комплект стоек, хай-хэт, тарелка, педаль и стул. Корпуса из тополя дают достаточно плотный звук для репетиционной точки и школьного класса. Собирается за вечер, дальше можно менять пластики и тарелки по мере роста.',
    specs: [
      { name: 'Тип', value: 'акустическая ударная установка' },
      { name: 'Конфигурация', value: '5 барабанов (бочка 20", 2 тома, напольный том, малый)' },
      { name: 'Материал корпусов', value: 'тополь' },
      { name: 'В комплекте', value: 'стойки, хай-хэт, тарелка, педаль, стул' },
      { name: 'Отделка', value: 'wine red' }
    ],
    tags: ['Millenium', 'ударная установка', 'барабаны', 'для начинающих', 'комплект'],
    warrantyMonths: 12,
    reviews: [
      {
        id: 'rev-107-1',
        author: 'Дом культуры «Юность»',
        company: 'Гродненская область',
        rating: 4,
        date: '22.08.2026',
        text: 'Взяли для кружка. Для обучения более чем достаточно, собрали сами по инструкции. Тарелки со временем планируем поменять на что-то посерьёзнее.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-1',
    sku: 'YAM-HS8-BLK',
    name: 'Yamaha HS8 — Активный студийный монитор (8")',
    category: 'studio-monitors',
    brand: 'Yamaha',
    priceBYN: 1450,
    oldPriceBYN: 1680,
    badge: 'DISCOUNT',
    discountPercent: 14,
    rating: 4.9,
    reviewsCount: 28,
    inStock: true,
    stockCount: 12,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Легендарный 2-полосный студийный монитор с 8-дюймовым НЧ-динамиком и 1-дюймовым купольным ВЧ-твитером.',
    fullDesc: 'Монитор Yamaha HS8 обеспечивает честное и точное звучание без окраса, что делает его стандартом в звукозаписывающих студиях по всему миру. Оснащен мощным усилителем Bi-Amp (75 Вт НЧ + 45 Вт ВЧ), регуляторами ROOM CONTROL и HIGH TRIM для точной подстройки под акустику помещения.',
    specs: [
      { name: 'Динамик НЧ', value: '8 дюймов (коннус)' },
      { name: 'Динамик ВЧ', value: '1 дюйм (купол)' },
      { name: 'Выходная мощность', value: '120 Вт (75W LF + 45W HF)' },
      { name: 'Частотный диапазон', value: '38 Гц – 30 кГц (-10 дБ)' },
      { name: 'Входы', value: 'XLR3-31 (балансный), PHONE (балансный)' },
      { name: 'Габариты (ШхВхГ)', value: '250 x 390 x 334 мм' },
      { name: 'Вес', value: '10.2 кг' }
    ],
    tags: ['Yamaha', 'Студийный монитор', 'HS8', '8 дюймов', 'Bi-Amp'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: [
      {
        id: 'rev-1',
        author: 'Алексей Мельников',
        company: 'SoundWave Studio (Гродно)',
        rating: 5,
        date: '12.05.2026',
        text: 'Брали пару для сведения электронной и акустической музыки. Низ очень глубокий и четкий, сабвуфер даже не потребовался. Арт-Медиа Трейд доставили на следующий день!',
        verified: true
      },
      {
        id: 'rev-2',
        author: 'Дмитрий К.',
        rating: 5,
        date: '28.04.2026',
        text: 'Отличное качество сборки и легендарный звук. Официальная гарантия 2 года от производителя.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-2',
    sku: 'SHU-SM7B',
    name: 'Shure SM7B — Динамический студийный микрофон',
    category: 'microphones',
    brand: 'Shure',
    priceBYN: 1680,
    oldPriceBYN: 1850,
    badge: 'HIT',
    discountPercent: 9,
    rating: 5.0,
    reviewsCount: 41,
    inStock: true,
    stockCount: 8,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Мировой стандарт для вокала, подкастов, радиовещания и стриминга с кардиоидной диаграммой.',
    fullDesc: 'Shure SM7B — динамический микрофон с гладкой, ровной и широкой частотной характеристикой. Обладает великолепной защитой от электромагнитных помех и встроенной пневматической системой амортизации капсюля.',
    specs: [
      { name: 'Тип капсюля', value: 'Динамический' },
      { name: 'Диаграмма направленности', value: 'Кардиоида' },
      { name: 'Частотный диапазон', value: '50 Гц – 20 000 Гц' },
      { name: 'Сопротивление', value: '150 Ом' },
      { name: 'Подключение', value: '3-pin XLR' },
      { name: 'Переключатели', value: 'НЧ-фильтр (Bass Roll-off), усиление СЧ (Presence Boost)' }
    ],
    tags: ['Shure', 'SM7B', 'Микрофон', 'Вокал', 'Подкаст'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: [
      {
        id: 'rev-3',
        author: 'Павел Сергиенко',
        company: 'Подкаст "Звук и Точка"',
        rating: 5,
        date: '02.06.2026',
        text: 'Идеальный микрофон для дикторского голоса. Совершенно не ловит шумы помещения.',
        verified: true
      }
    ]
  },
  {
    id: 'prod-3',
    sku: 'JBL-EON715',
    name: 'JBL EON715 — Активная концертная акустическая система 1300 Вт',
    category: 'pa-systems',
    brand: 'JBL',
    priceBYN: 2350,
    badge: 'NEW',
    rating: 4.8,
    reviewsCount: 15,
    inStock: true,
    stockCount: 6,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: '15-дюймовый портативный концертный колонка с DSP-процессором dbx, Bluetooth и мобильным управлением.',
    fullDesc: 'JBL EON715 устанавливает новые стандарты портативных звуковых систем. Встроенный 3-канальный микшер, цветной ЖК-экран, подавитель обратной связи dbx AFS2, 8-полосный эквалайзер и задержка сигналов.',
    specs: [
      { name: 'Мощность (пиковая)', value: '1300 Вт' },
      { name: 'Максимальный SPL', value: '128 дБ' },
      { name: 'НЧ-динамик', value: '15 дюймов (неодимовый)' },
      { name: 'ВЧ-компрессионный драйвер', value: '2414H 1 дюйм' },
      { name: 'Дисперсия (ГхВ)', value: '90° x 60°' },
      { name: 'Беспроводная связь', value: 'Bluetooth 5.0 (стриминг + управление)' }
    ],
    tags: ['JBL', 'EON715', 'Концертная акустика', '1300 Вт', 'Bluetooth'],
    warrantyMonths: 12,
    isNew: true,
    isPopular: true,
    reviews: []
  },
  {
    id: 'prod-4',
    sku: 'BEH-X32-COMP',
    name: 'Behringer X32 Compact — Цифровой микшерный пульт 40 каналов',
    category: 'mixers',
    brand: 'Behringer',
    priceBYN: 7900,
    oldPriceBYN: 8400,
    badge: 'DISCOUNT',
    discountPercent: 6,
    rating: 4.9,
    reviewsCount: 19,
    inStock: true,
    stockCount: 3,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Компактная микшерная консоль с 16 предусилителями MIDAS, 17 моторизованными моторами и 7" TFT дисплеем.',
    fullDesc: 'Behringer X32 Compact объединяет передовую цифровую обработку и интуитивное управление. Полная интеграция со сценическими блоками S16/S32, запись 32 каналов через USB/FireWire и поддержка мониторных систем P16.',
    specs: [
      { name: 'Входные каналы', value: '40 каналов, 25 шин' },
      { name: 'Микрофонные входы', value: '16 XLR с предусилителями MIDAS' },
      { name: 'Фейдеры', value: '17 моторизованных 100 мм' },
      { name: 'Экран', value: '7 дюймов цветной TFT' },
      { name: 'Интерфейс', value: '32-канальный аудиоинтерфейс USB 2.0' }
    ],
    tags: ['Behringer', 'X32', 'Микшерный пульт', 'Цифровой микшер', 'MIDAS'],
    warrantyMonths: 24,
    reviews: []
  },
  {
    id: 'prod-5',
    sku: 'SENN-HD280',
    name: 'Sennheiser HD 280 PRO — Студийные мониторные наушники',
    category: 'headphones',
    brand: 'Sennheiser',
    priceBYN: 420,
    rating: 4.7,
    reviewsCount: 33,
    inStock: true,
    stockCount: 25,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Закрытые охватывающие наушники с отличной пассивной звукоизоляцией до 32 дБ.',
    fullDesc: 'Наушники Sennheiser HD 280 PRO разработаны специально для контрольного прослушивания, сведения и записи вокала. Складная конструкция, витой кабель длиной до 3 метров и заменяемые амбушюры.',
    specs: [
      { name: 'Акустическое оформление', value: 'Закрытое' },
      { name: 'Частотный диапазон', value: '8 Гц – 25 000 Гц' },
      { name: 'Импеданс', value: '64 Ом' },
      { name: 'Звуковое давление (SPL)', value: '113 дБ' },
      { name: 'Длина кабеля', value: '1.3 - 3.0 м (витой)' }
    ],
    tags: ['Sennheiser', 'HD280', 'Наушники', 'Закрытые', 'Студийные'],
    warrantyMonths: 24,
    isPopular: true,
    reviews: []
  },
  {
    id: 'prod-6',
    sku: 'NEU-U87AI-SET',
    name: 'Neumann U 87 Ai Studio Set — Студийный конденсаторный микрофон',
    category: 'microphones',
    brand: 'Neumann',
    priceBYN: 11200,
    badge: 'HIT',
    rating: 5.0,
    reviewsCount: 12,
    inStock: true,
    stockCount: 2,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Эталонный ступенчато-направленный конденсаторный микрофон с капсюлем K 67 в комплекте с подвесом EA 4.',
    fullDesc: 'Neumann U 87 Ai — признанный рекордсмен среди студийных микрофонов премиум-класса. Поставляется с оригинальным виброподвесом EA 4 в деревянном футляре. Три переключаемые диаграммы: круговая, кардиоидная и восьмерка.',
    specs: [
      { name: 'Капсюль', value: 'K 67 (большая двойная диафрагма)' },
      { name: 'Диаграммы направленности', value: 'Круг, Кардиоида, Восьмерка' },
      { name: 'Частотный диапазон', value: '20 Гц – 20 000 Гц' },
      { name: 'Эквивалентный уровень шума', value: '12 дБ-A (кардиоида)' },
      { name: 'Макс. SPL', value: '127 дБ (137 дБ с аттенюатором -10 дБ)' }
    ],
    tags: ['Neumann', 'U87', 'Премиум', 'Конденсаторный', 'Студийный'],
    warrantyMonths: 36,
    reviews: []
  },
  {
    id: 'prod-7',
    sku: 'PAS-MA120-100V',
    name: 'Pasystems MA-120 — Трансляционный усилитель 120 Вт (100 В / 70 В / 4 Ом)',
    category: 'commercial-audio',
    brand: 'Pasystems',
    priceBYN: 680,
    badge: 'NEW',
    rating: 4.6,
    reviewsCount: 8,
    inStock: true,
    stockCount: 15,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    additionalImages: [
      'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80'
    ],
    shortDesc: 'Многофункциональный микширующий усилитель с Bluetooth, MP3-плеером, FM-тюнером и 6 зонами вещания.',
    fullDesc: 'Идеальное решение для фонового озвучивания и голосовых объявлений в магазинах, офисах, ресторанах и фитнес-клубах. Оснащен микрофонным входом с приоритетом объявления и пусковым сигналом (гонг).',
    specs: [
      { name: 'Номинальная мощность', value: '120 Вт' },
      { name: 'Выходы линий', value: '70V, 100V, 4-16 Ом (6 независимых зон)' },
      { name: 'Встроенные источники', value: 'Bluetooth 5.0, USB MP3, SD Card, FM' },
      { name: 'Входы', value: '2 x MIC (XLR/6.3mm), 2 x AUX (RCA)' },
      { name: 'Питание', value: 'AC 220V 50Hz' }
    ],
    tags: ['Pasystems', '100V', 'Усилитель', 'Оповещение', 'Фоновый звук'],
    warrantyMonths: 12,
    isNew: true,
    reviews: []
  },
  {
    id: 'prod-8',
    sku: 'ATH-AT2020-XLR',
    name: 'Audio-Technica AT2020 — Кардиоидный конденсаторный микрофон',
    category: 'microphones',
    brand: 'Audio-Technica',
    priceBYN: 450,
    oldPriceBYN: 490,
    badge: 'DISCOUNT',
    discountPercent: 8,
    rating: 4.9,
    reviewsCount: 37,
    inStock: true,
    stockCount: 18,
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=800&q=80',
    additionalImages: [],
    shortDesc: 'Оптимальное соотношение цены и качества для домашней и профессиональной студии записи.',
    fullDesc: 'Audio-Technica AT2020 устанавливает стандарт по соотношению цены и производительности в классе студийных конденсаторных микрофонов. Легкая диафрагма специально спроектирована для расширенной частотной характеристики.',
    specs: [
      { name: 'Диаграмма', value: 'Кардиоида' },
      { name: 'Диапазон частот', value: '20 — 20 000 Гц' },
      { name: 'Чувствительность', value: '-37 дБ (14.1 мВ)' },
      { name: 'Сопротивление', value: '100 Ом' }
    ],
    tags: ['Audio-Technica', 'AT2020', 'Микрофон', 'Запись'],
    warrantyMonths: 24,
    reviews: []
  }
];

export const MOCK_SERVICES: ServiceItem[] = [
  {
    id: 'srv-setup',
    title: 'Отстройка и ремонт музыкальных инструментов',
    iconName: 'Guitar',
    shortDesc: 'Мастерская в Гродно: отстройка гитар, замена ладов и порожков, ремонт клавишных и усилителей.',
    fullDesc: 'Отстраиваем каждый инструмент перед выдачей бесплатно — выставляем высоту струн, мензуру, проверяем электронику. Отдельно берём в работу инструменты, купленные где угодно: полная отстройка, замена ладов и порожков, пайка разъёмов, чистка потенциометров, обслуживание механики клавишных.',
    features: [
      'Отстройка перед выдачей — бесплатно для покупок в М-ЗВУК',
      'Полная отстройка гитары с заменой струн — от 45 BYN',
      'Замена ладов, порожков, пайка звукоснимателей и разъёмов',
      'Подменный инструмент на время сложного ремонта'
    ],
    priceStartBYN: 45,
    image: guitarElectricImg
  },
  {
    id: 'srv-choice',
    title: 'Подбор инструмента и комплекта',
    iconName: 'Sparkles',
    shortDesc: 'Помогаем выбрать под возраст, стиль и бюджет: первая гитара ребёнку, пианино в музыкальную школу, комплект для группы.',
    fullDesc: 'Задаём несколько вопросов — для кого инструмент, где будет играть, какой бюджет — и предлагаем два-три варианта с честным сравнением. Для школ искусств и домов культуры считаем комплект целиком: инструменты, стойки, чехлы, расходники и запас струн.',
    features: [
      'Подбор по возрасту и росту ребёнка (размеры 1/2, 3/4, 4/4)',
      'Сравнение двух-трёх моделей в одном бюджете',
      'Комплекты для музыкальных школ и кружков',
      'Возможность поиграть на инструменте в магазине до покупки'
    ],
    priceStartBYN: 0,
    image: pianoDigitalImg
  },
  {
    id: 'srv-tradein',
    title: 'Trade-in и выкуп инструментов',
    iconName: 'Repeat',
    shortDesc: 'Меняем ваш инструмент на новый с доплатой или выкупаем. Предварительная оценка по фотографиям.',
    fullDesc: 'Пришлите фотографии инструмента — назовём предварительную сумму в тот же день. При очном осмотре проверяем состояние грифа, электроники и механики, после чего оформляем зачёт стоимости в новую покупку или выкуп.',
    features: [
      'Предварительная оценка по фото — в день обращения',
      'Зачёт стоимости в покупку нового инструмента',
      'Выкуп за наличные или переводом на карту',
      'Принимаем гитары, клавишные, духовые и звуковое оборудование'
    ],
    priceStartBYN: 0,
    image: guitarAcousticImg
  },
  {
    id: 'srv-1',
    title: 'Акустический расчет и проектирование помещений',
    iconName: 'Compass',
    shortDesc: 'Профессиональное моделирование звуковых полей в ПО EASE для концертных залов, ресторанов и конференц-комнат.',
    fullDesc: 'Разработка рабочей документации, акустический расчет коэффициентов реверберации (RT60), индекса разборчивости речи (STI) и распределения звукового давления. Выезд инженера по Беларуси.',
    features: [
      'Моделирование в программе EASE 4.4',
      'Расчет разборчивости речи (STI / RASTI)',
      'Подбор оптимального количества и углов подвеса акустики',
      'Подготовка спецификации с чертежами и кабельным журналом'
    ],
    priceStartBYN: 350,
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-2',
    title: 'Монтаж и пусконаладка звукового оборудования',
    iconName: 'Wrench',
    shortDesc: 'Полный цикл монтажных работ «под ключ»: прокладка трасс, подвес акустических систем, настройка DSP и микшеров.',
    fullDesc: 'Наша монтажная бригада имеет допуски к высотным и электромонтажным работам. Осуществляем установку трансляционных систем 100В, линейных массивов, театрального и концертного звука.',
    features: [
      'Монтаж с соблюдением требований СНиП и ГОСТ',
      'Прокладка акустических и силовых кабелей',
      'Программирование цифровых аудиоматриц и систем управления',
      'Гарантия на монтажные работы 24 месяца'
    ],
    priceStartBYN: 280,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-3',
    title: 'Сервис звукового оборудования',
    iconName: 'ShieldCheck',
    shortDesc: 'Собственный авторизованный сервисный центр в Гродно. Диагностика, замена радиокомпонентов, профилактика.',
    fullDesc: 'Ремонт профессиональных усилителей мощности, микшерных пультов, радиосистем, динамиков и активной акустики. Использование оригинальных комплектующих Yamaha, JBL, Shure, Behringer.',
    features: [
      'Бесплатная первичная диагностика при ремонте',
      'Оригинальные запчасти со склада в Гродно',
      'Срочный ремонт за 24-48 часов',
      'Официальный акт выполненных работ для юридических лиц'
    ],
    priceStartBYN: 60,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'srv-4',
    title: 'Аренда звука и света на мероприятие',
    iconName: 'Calendar',
    shortDesc: 'Комплексы звука от 1 кВт до 20 кВт для презентаций, корпоративов, фестивалей и свадеб.',
    fullDesc: 'Предоставление звуковых комплектов с техническим сопровождением звукорежиссера и техников. Доставка по Гродно и Гродненской области.',
    features: [
      'Акустика JBL, Electro-Voice, QSC',
      'Радиомикнофны Shure ULXD / QLXD / SLXD',
      'Цифровые микшеры Behringer X32, Soundcraft',
      'Доставка, сборка и звукорежиссура мероприятий'
    ],
    priceStartBYN: 180,
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80'
  }
];

export const MOCK_NEWS: NewsItem[] = [
  {
    id: 'news-guitars',
    title: 'Новая поставка гитар: Fender Player II, Ibanez GIO и акустика Cort',
    date: '08.09.2026',
    category: 'Новинки каталога',
    summary: 'На складе в Гродно — электрогитары Fender серии Player II, доступные Ibanez GRG для начинающих и акустические Cort AD810 для музыкальных школ.',
    content: 'Каждая гитара из поставки проходит предпродажную отстройку: мастер выставляет высоту струн и мензуру, проверяет электронику и колки. Инструменты можно попробовать в магазине — позвоните заранее, подготовим нужные модели для сравнения. Для музыкальных школ и кружков действуют условия на комплектные закупки с оформлением по безналу.',
    image: guitarElectricImg,
    readTime: '3 мин'
  },
  {
    id: 'news-piano',
    title: 'Цифровые пианино Yamaha P-145 — в наличии для музыкальных школ',
    date: '02.09.2026',
    category: 'Новинки каталога',
    summary: 'Компактная модель с молоточковой механикой GHC и тембром рояля CFX поступила на склад. Доступна рассрочка 0% и поставка по безналу.',
    content: 'P-145 берут для дома и для класса: клавиатура с градуированным молоточковым механизмом даёт ощущение акустического инструмента, а корпус помещается даже в небольшой комнате. Преподаватели отмечают, что для начальных классов такой клавиатуры достаточно, чтобы ставить руку. Для учреждений образования готовим коммерческое предложение с полным пакетом документов.',
    image: pianoDigitalImg,
    readTime: '2 мин'
  },
  {
    id: 'news-school',
    title: 'Оснастили кабинет ударных в детской школе искусств',
    date: '20.08.2026',
    category: 'Наши проекты',
    summary: 'Установка Millenium Focus 20, стойки, пэды для тихих занятий и комплект расходников — собрали и настроили на месте.',
    content: 'Помимо самой установки в кабинет поставили тренировочные пэды, чтобы ученики могли заниматься без шума в соседних классах, и запас пластиков на год. Наш мастер собрал комплект на месте и показал преподавателю, как регулировать стойки под рост ребёнка. Работы выполнены по договору с оплатой по безналичному расчёту.',
    image: drumsImg,
    readTime: '3 мин'
  },
  {
    id: 'news-1',
    title: 'Поступление новой серии цифровых радиосистем Shure SLX-D на склад в Гродно',
    date: '10.08.2026',
    category: 'Новинки каталога',
    summary: 'Компания «Арт-Медиа Трейд» сообщает о пополнении склада современными двухканальными радиосистемами Shure с прозрачным 24-битным звуком.',
    content: 'Радиосистемы Shure SLX-D обеспечивают стабильную передачу радиосигнала и высокий динамический диапазон. Идеальный выбор для конференц-залов, учебных заведений и живых выступлений. Для юридических лиц доступны спеццены с НДС.',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
    readTime: '3 мин'
  },
  {
    id: 'news-2',
    title: 'Завершен проект по озвучиванию нового спортивного комплекса в Гродно',
    date: '01.07.2026',
    category: 'Наши проекты',
    summary: 'Специалисты ООО «Арт-Медиа Трейд» выполнили проектирование и монтаж 100В системы оповещения и фонового озвучивания общей мощностью 3200 Вт.',
    content: 'На объекте установлены многозональные трансляционные усилители Pasystems и влагозащищенные настенные рупоры. Система полностью соответствует нормам МЧС Республики Беларусь по громкоговорящему оповещению о ЧС.',
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    readTime: '4 мин'
  }
];

export const MOCK_ARTICLES: ArticleItem[] = [
  {
    id: 'art-first-guitar',
    title: 'Как выбрать первую электрогитару: семь честных критериев',
    author: 'Мастер сервисного центра М-ЗВУК',
    date: '11.09.2026',
    summary: 'Бюджет, вес, профиль грифа, звукосниматели и предпродажная отстройка — на что смотреть новичку и за что стоит доплатить.',
    content: 'Рабочий комплект новичка — это не только гитара: нужны комбоусилитель, кабель, ремень и чехол. Экономия на усилителе обходится дороже, чем кажется: хорошая гитара через плохой комбо звучит как плохая гитара. Дальше смотрите на вес и форму корпуса — подержите инструмент стоя с ремнём, сидя ощущения обманчивы. Профиль грифа «C» подходит большинству рук, радиус накладки 9,5 дюйма — универсальный компромисс между аккордами и соло. Синглы дают прозрачный звук для блюза и фанка, хамбакеры плотнее и меньше фонят. И главное: проверьте, держит ли гитара строй после подтяжек и нет ли дребезга на ладах — это вопрос не цены, а предпродажной подготовки.',
    image: guitarElectricImg,
    readTime: '6 мин',
    tags: ['Гитары', 'Для начинающих', 'Выбор инструмента', 'Отстройка']
  },
  {
    id: 'art-piano-school',
    title: 'Цифровое пианино для музыкальной школы: что важно, а что маркетинг',
    author: 'Отдел продаж М-ЗВУК',
    date: '30.08.2026',
    summary: 'Молоточковая механика, количество клавиш, полифония и педали — разбираем, на чём нельзя экономить при покупке инструмента ребёнку.',
    content: 'Первое и единственное, на чём нельзя экономить, — клавиатура. Для занятий в музыкальной школе нужны 88 клавиш с градуированной молоточковой механикой: в басу клавиши тяжелее, в верхнем регистре легче, как на акустическом инструменте. Синтезаторная клавиатура с динамикой для этого не подходит — рука ставится неправильно, и на экзамене за роялем ребёнок теряется. Полифония от 64 голосов закрывает программу начальных классов. Количество тембров значения почти не имеет: девяносто процентов занятий проходят на основном звуке рояля. Педаль в комплекте часто идёт простая — для программы после третьего класса понадобится полноценная демпферная.',
    image: pianoDigitalImg,
    readTime: '5 мин',
    tags: ['Клавишные', 'Музыкальная школа', 'Цифровое пианино', 'Выбор инструмента']
  },
  {
    id: 'art-1',
    title: 'Руководство: Как правильно выбрать 100-вольтовую систему оповещения для магазина или ресторана',
    author: 'Игорь Васильев (Главный инженер ООО «Арт-Медиа Трейд»)',
    date: '15.06.2026',
    summary: 'Разбираем ключевые различия между низкоомным (4-8 Ом) и трансляционным (70/100 В) звуком. Формулы расчета мощности и сечения кабеля.',
    content: 'При проектировании фонового звука в больших помещениях главное преимущество 100-вольтовых систем — возможность параллельного подключения десятков динамиков к одному усилителю без сложных схем согласования импеданса...',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80',
    readTime: '7 мин',
    tags: ['100V', 'Оповещение', 'Акустика', 'Проектирование']
  },
  {
    id: 'art-2',
    title: 'Сравнительный обзор студийных мониторов: Yamaha HS7 vs JBL 307P MkII vs ADAM T7V',
    author: 'Евгений Романов',
    date: '20.05.2026',
    summary: 'Детальный разбор трех самых популярных 7-дюймовых активных мониторов для домашней и профессиональной студии записи.',
    content: 'Семидюймовые студийные мониторы считаются золотой серединой: они дают достаточный контроль низких частот без гудения в небольших необработанных комнатах...',
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&w=600&q=80',
    readTime: '10 мин',
    tags: ['Обзор', 'Yamaha', 'JBL', 'Студия']
  }
];

export const MOCK_CERTIFICATES: CertificateItem[] = [
  {
    id: 'cert-1',
    title: 'Сертификат официального дилера Yamaha Music',
    issuer: 'Yamaha Music Eurasia',
    issueDate: '01.01.2026',
    validUntil: '31.12.2027',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=600&q=80',
    category: 'Дилерство'
  },
  {
    id: 'cert-2',
    title: 'Декларация о соответствии ЕАЭС (Shure)',
    issuer: 'Евразийский Экономический Союз',
    issueDate: '15.03.2025',
    validUntil: '14.03.2030',
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=600&q=80',
    category: 'Сертификаты соответствия'
  },
  {
    id: 'cert-3',
    title: 'Сертификат соответствия системы менеджмента качества ISO 9001',
    issuer: 'Белорусский государственный институт стандартизации',
    issueDate: '10.10.2024',
    validUntil: '09.10.2027',
    image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=600&q=80',
    category: 'Качество'
  }
];

export const MOCK_FAQS: FAQItem[] = [
  {
    id: 'faq-setup',
    question: 'Вы настраиваете инструмент перед продажей?',
    answer: 'Да, и это бесплатно. Перед выдачей мастер отстраивает гитару: выставляет высоту струн и мензуру, проверяет колки, электронику и отсутствие дребезга на ладах. Клавишные и звуковое оборудование проверяем на включение и работу всех функций. Если инструмент уезжает доставкой в другой город, отстройка делается до упаковки.',
    category: 'tech'
  },
  {
    id: 'faq-try',
    question: 'Можно ли поиграть на инструменте перед покупкой?',
    answer: 'Да, в магазине в Гродно на ул. 17 Сентября, 49-11. Позвоните заранее по телефону +375 (152) 62-33-33 — подготовим нужные модели к сравнению, подключим комбоусилитель и дадим спокойно попробовать. Если выбираете между двумя-тремя инструментами, скажите какими: поставим их рядом.',
    category: 'tech'
  },
  {
    id: 'faq-child',
    question: 'Как выбрать инструмент ребёнку — какой размер нужен?',
    answer: 'Для гитары размер подбирается по росту: 1/2 — примерно до 115 см, 3/4 — до 135 см, полноразмерная 4/4 — от 140 см и выше. Для цифрового пианино в музыкальную школу нужны 88 клавиш с молоточковой механикой, иначе рука ставится неправильно. Приходите с ребёнком — подберём по факту, это занимает минут двадцать.',
    category: 'tech'
  },
  {
    id: 'faq-school',
    question: 'Работаете со школами искусств и домами культуры?',
    answer: 'Да, это заметная часть наших заказов. Считаем комплект целиком — инструменты, стойки, чехлы, расходники и запас струн или пластиков, — готовим коммерческое предложение под бюджет, участвуем в тендерах и отгружаем по безналу с полным пакетом документов. При необходимости мастер собирает и настраивает оборудование на месте.',
    category: 'b2b'
  },
  {
    id: 'faq-tradein',
    question: 'Можно ли сдать старый инструмент в счёт нового?',
    answer: 'Да, работает trade-in. Пришлите фотографии инструмента на sales@mzvuk.by — назовём предварительную сумму в тот же день. При очном осмотре проверяем состояние грифа, электроники и механики и оформляем зачёт стоимости в новую покупку либо выкупаем за наличные или переводом.',
    category: 'tech'
  },
  {
    id: 'faq-1',
    question: 'Работает ли ООО «Арт-Медиа Трейд» с юридическими лицами по безналичному расчету?',
    answer: 'Да, мы активно работаем с юридическими лицами и индивидуальными предпринимателями Республики Беларусь по безналичному расчету. Все цены в каталоге указаны с учетом НДС 20%. Предоставляем полный комплект бухгалтерских документов (счет-фактура, товарная/товарно-транспортная накладная ТТН/ТН, акт выполненных работ).',
    category: 'b2b'
  },
  {
    id: 'faq-2',
    question: 'Каковы условия и сроки доставки по Гродно и регионам Беларуси?',
    answer: 'Доставка по Гродно осуществляется курьером в день заказа или на следующий день. При заказе на сумму от 300 BYN доставка по Гродно БЕСПЛАТНАЯ. Доставка по регионам Республики Беларусь (Минск, Брест, Витебск, Могилев, Гомель и районные центры) осуществляется курьерской службой DPD/Autolight за 1-2 рабочих дня.',
    category: 'delivery'
  },
  {
    id: 'faq-3',
    question: 'Предоставляется ли официальная гарантия на оборудование?',
    answer: 'Да, на все товары действует официальная гарантия производителя — от 12 до 36 месяцев в зависимости от бренда. На музыкальные инструменты гарантия обычно 12–24 месяца и не распространяется на расходники: струны, пластики, трости и медиаторы. Ремонт выполняем в собственном сервисном центре в Гродно, на время сложных работ выдаём подменный инструмент.',
    category: 'warranty'
  },
  {
    id: 'faq-4',
    question: 'Можете ли вы подобрать комплект звука по техническому заданию (ТЗ)?',
    answer: 'Конечно! Наши квалифицированные инженеры бесплатно изучат ваше ТЗ, план помещения или чертежи, проведут акустический расчет и составят несколько вариантов коммерческих предложений под ваш бюджет.',
    category: 'tech'
  }
];

export const MOCK_PARTNERS: PartnerBrand[] = [
  {
    id: 'brand-yamaha',
    name: 'Yamaha',
    logo: 'YAMAHA',
    country: 'Япония',
    description: 'Мировой лидер в производстве профессионального аудиооборудования, микшерных пультов и музыкальных инструментов.',
    website: 'https://yamaha.com',
    featuredCategory: 'Студийные мониторы и микшеры'
  },
  {
    id: 'brand-shure',
    name: 'Shure',
    logo: 'SHURE',
    country: 'США',
    description: 'Легендарные студийные и концертные микрофоны, вокальные радиосистемы и персональный мониторинг.',
    website: 'https://shure.com',
    featuredCategory: 'Микрофоны и радиосистемы'
  },
  {
    id: 'brand-jbl',
    name: 'JBL Professional',
    logo: 'JBL PRO',
    country: 'США',
    description: 'Профессиональные концертные акустические системы, линейные массивы и сабвуферы.',
    website: 'https://jblpro.com',
    featuredCategory: 'Концертная акустика'
  },
  {
    id: 'brand-sennheiser',
    name: 'Sennheiser',
    logo: 'SENNHEISER',
    country: 'Германия',
    description: 'Немецкое качество студийных наушников, дикторских микрофонов и беспроводных систем.',
    website: 'https://sennheiser.com',
    featuredCategory: 'Наушники и радиосистемы'
  },
  {
    id: 'brand-behringer',
    name: 'Behringer',
    logo: 'BEHRINGER',
    country: 'Германия',
    description: 'Инновационные цифровые микшеры серии X32/Wing, синтезаторы и звуковые интерфейсы.',
    website: 'https://behringer.com',
    featuredCategory: 'Цифровые микшеры'
  },
  {
    id: 'brand-pasystems',
    name: 'Pasystems',
    logo: 'PASYSTEMS',
    country: 'Беларусь / РФ',
    description: 'Высоконадежное трансляционное оборудование 100В для громкоговорящего оповещения.',
    website: 'https://mzvuk.by',
    featuredCategory: 'Системы оповещения'
  }
];


/** Фактическое число товаров в категории.
 *  Поле Category.productCount остаётся для данных из 1С, но на витрине показываем реальность. */
export const getCategoryProductCount = (categoryId: string): number =>
  MOCK_PRODUCTS.filter(p => p.category === categoryId).length;
