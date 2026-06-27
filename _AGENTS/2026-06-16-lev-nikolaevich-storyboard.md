# Раскадровка Лев Николаевич

## Задача
Сделать раскадровку для каждого из 5 клипов из `E:\106_LEV\06 промпты.txt`: один клип на один лист, один персонаж, с опорой на предоставленный референс.

## Краткий вывод
Создан печатный HTML-артефакт с 5 листами A4 landscape. Каждый лист содержит референс персонажа, 4 ключевых кадра, схему движения внутри круга, диалог и ограничения по сцене/камере.

После уточнения пользователя дополнительно создана генераторная версия: 5 PNG storyboard-листов, по одному листу на клип, каждый лист содержит 4 маленьких кинематографичных кадра с одним персонажем. Также создан общий контакт-лист для визуальной проверки.

После создания top-down плана движения собран один итоговый лист раскадровки из 5 ключевых кадров: точки 2-6, без отдельного входа 1 и выхода 7. На лист добавлена мини-карта маршрута.

Дополнительно собран отдельный лист раскадровки жестов на 9 кадров: жест к груди, открытая ладонь, две руки близко/вперед, прощальная ладонь. Лист собран из уже сгенерированных панелей, чтобы сохранить визуальную преемственность.

Добавлен хронометраж и постановка ног: общий таймлайн 0:00-0:40, точки 1-7, секундные привязки к клипам, направление стоп и краткая логика переносов веса. Есть PNG-лист и Markdown-таблица.

## Измененные файлы
- `outputs/lev-nikolaevich-storyboard.html`
- `assets/lev-nikolaevich-reference.jpeg`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-clip-01.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-clip-02.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-clip-03.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-clip-04.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-clip-05.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboards-contact.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-topdown-movement-map.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-5-keyframes-plan.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-gesture-storyboard-9-frames.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-timing-footwork-plan.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-timing-footwork-plan.md`

## Риски
- Это детерминированная производственная раскадровка в HTML, а не генеративные фотореалистичные кадры. Если нужны именно AI-картинки для каждого кадра, лучше делать отдельным проходом по утвержденной структуре.
- В генераторной версии возможна небольшая вариативность лица/костюма между панелями, но формат листов, один персонаж, круг света и движение по клипам визуально проверены.
- Для понимания траектории отдельно создана простая top-down схема: круг света показан как круг, движение отмечено точками 1-7 и пунктирной линией.

## Полезные источники
- `E:\106_LEV\06 промпты.txt`
- `E:\106_LEV\! ALL COLLECT\2 F\улучши_качество._увелич_детализацию._убери_202606121707.jpeg`

## Follow-up 2026-06-17
- По новым skills `cinematic-storyboard-director` + `storyboard-auditor` собран чистовой v2-лист:
  - `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-v2-new-skills.png`
- Рядом сохранен audit report:
  - `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-v2-audit.md`
- В v2 вынесены прямо на лист: таймкоды, маршрут, карта сверху, направление стоп и проверочный verdict.

## Follow-up 2026-06-17 v3
- По замечанию пользователя про недостаточный разворот персонажа и слабый жест ладонью проведен повторный аудит.
- Создан v3-лист с заменой проблемных жестовых кадров:
  - `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-v3-gesture-fixes.png`
- Сохранен разбор и prompt patches для финальной перегенерации кадров 4 и 6:
  - `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-v3-audit-and-fixes.md`
- Важный вывод: v3 лучше как постановочная раскадровка, но финальный кадр 6 все еще нужно перегенерировать, чтобы сам персонаж был реально развернут плечами и стопой к левому выходу.

## Follow-up 2026-06-17 v4
- По уточнению пользователя исправлена top-down карта:
  - `7` совмещена с `1` как общий левый вход/выход.
  - точки `3` и `6` сдвинуты чуть правее.
- Создан v4-лист:
  - `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-v4-map-corrections.png`
- Сохранена короткая заметка по правкам:
  - `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-v4-map-corrections.md`
