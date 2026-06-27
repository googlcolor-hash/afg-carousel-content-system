# Лев Николаевич - navigation review

Задача: сделать нормальную навигацию в HTML-панели и проверить ее строгим агентом.

Файлы:
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-prompt-control-panel.html`
- `package.json`
- `package-lock.json`
- `outputs/lev-nikolaevich-storyboards/nav-smoke-desktop.png`
- `outputs/lev-nikolaevich-storyboards/nav-smoke-mobile.png`

Что сделано:
- добавлено постоянное боковое меню на desktop;
- добавлен мобильный select для разделов;
- добавлены быстрые кнопки `Seedance 2` и `Наверх`;
- исправлен hash whitelist, чтобы `#content` не скрывал все вкладки;
- добавлены `role=tablist`, `role=tab`, `role=tabpanel`, `aria-selected`, `aria-controls`;
- таблицы на мобильном стали горизонтально скроллиться;
- fallback копирования теперь пробует `execCommand('copy')`, восстанавливает текст кнопки и пишет статус в `aria-live`;
- кнопкам программно задается `type=button`;
- добавлены действия для YouTube и референсов в исходниках.

Проверка:
- установлен локальный `playwright`;
- установлен Playwright Chromium;
- smoke-test прошел на desktop `1600x1000` и mobile `390x844`;
- проверены видимость вкладок, side menu, mobile select, `#content`, assets и скриншоты.

Агент:
- строгий агент нашел P1/P2/P3 замечания по навигации;
- P1/P2/P3 закрыты текущей правкой.

