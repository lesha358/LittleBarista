# Деплой на Vercel (тестовая версия)

Проект использует **статический экспорт** (`output: 'export'`), совместимый с Timeweb (Docker + nginx).

## Важно: настройки в Vercel Dashboard

Чтобы избежать ошибки `routes-manifest.json couldn't be found`:

1. Зайдите в **Project Settings** → **General**
2. В блоке **Framework Preset** выберите **Other** (или **None**)
3. НЕ оставляйте **Next.js** — он ожидает server-build, а у нас статический export

Файл `vercel.json` уже настроен:
- Build Command: `npm run build`
- Output Directory: `out`
- Install Command: `npm install`

После смены Framework Preset на "Other" перезапустите деплой.
