# Работа с приложением m-zvuk

Рабочий проект сайта mzvuk.by: React 19 + Vite 6 + Tailwind 4.
Репозиторий: https://github.com/farik9797/m-zvuk · сайт: https://farik9797.github.io/m-zvuk/

## Локально

```bash
cd app
npm install
npm run dev            # разработка
npm run build          # сборка с относительными путями (для локального просмотра)
GITHUB_PAGES=true npm run build   # так же, как собирает CI
```

Готовую сборку смотреть через http-сервер: `dist/index.html` по `file://` не запустится —
ES-модули блокируются политикой origin.

## Публикация

Пуш в `main` запускает GitHub Actions (`.github/workflows/deploy.yml`) — сборка и деплой на Pages,
около 40 секунд.

```bash
cd app && git add -A && git commit -m "…" && git push
```

**Workflow-файл этим токеном не редактируется** — у `gh` нет scope `workflow`.
Если понадобится правка `.github/workflows/`, сначала `gh auth refresh -s workflow`
в интерактивном терминале.

## Где что лежит

| Что | Файл |
|---|---|
| Фирменная палитра (красный `#E22B2B` поверх шкалы `orange-*`) | `src/index.css` |
| Логотип | `src/assets/logo.png`, используется в `layout/Header.tsx` и `layout/Footer.tsx` |
| Демо-данные: товары, категории, услуги, новости, FAQ | `src/data/mockData.ts` |
| Базовый путь для Pages (`/m-zvuk/`) | `vite.config.ts` |
| Состояние корзины, избранного, сравнения | `src/context/AppContext.tsx` |

## Осторожно

`.env.example` объявляет `GEMINI_API_KEY`. Сейчас код его не использует. Если появятся вызовы
Gemini из фронтенда — ключ попадёт в публичный бандл; нужен серверный прокси.
