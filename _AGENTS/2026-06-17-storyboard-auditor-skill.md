# Storyboard Auditor Skill

## Задача
Создать отдельный локальный skill для проверки уже готовых листов раскадровки, карт движения, жестов и хронометража.

## Сделано
- Создан skill `storyboard-auditor` в `C:\Users\User\.codex\skills`.
- Основной протокол аудита записан в `SKILL.md`.
- Детальный чеклист и паттерны исправлений вынесены в `references/audit-checklist.md`.
- UI metadata создана в `agents/openai.yaml`.
- Skill проверен через `quick_validate.py`: `Skill is valid!`.

## Тест
Проверен на существующих листах Льва Николаевича:
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-storyboard-5-keyframes-plan.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-timing-footwork-plan.png`
- `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-timing-footwork-plan.md`

Тестовый отчет:
- `outputs/skill-tests/storyboard-auditor-lev-test.md`

Вывод: листы в целом годятся; главный minor-risk в том, что направление стоп недостаточно видно внутри самого 5-кадрового листа и зависит от отдельного timing/footwork листа.

## Измененные файлы
- `C:\Users\User\.codex\skills\storyboard-auditor\SKILL.md`
- `C:\Users\User\.codex\skills\storyboard-auditor\agents\openai.yaml`
- `C:\Users\User\.codex\skills\storyboard-auditor\references\audit-checklist.md`
- `outputs/skill-tests/storyboard-auditor-lev-test.md`
- `_AGENTS/2026-06-17-storyboard-auditor-skill.md`

## Финальная доделка
- Повторно проверены оба связанных skill:
  - `C:\Users\User\.codex\skills\cinematic-storyboard-director`
  - `C:\Users\User\.codex\skills\storyboard-auditor`
- Оба проходят `quick_validate.py`: `Skill is valid!`.
- В `SKILL.md` не осталось `TODO`.
- Проверены ссылки на reference-файлы:
  - `cinematic-storyboard-director/references/output-contracts.md`
  - `storyboard-auditor/references/audit-checklist.md`
- `agents/openai.yaml` у обоих skill содержит актуальные `display_name`, `short_description` и `default_prompt`.

Вывод: оба skill готовы к практическому использованию.

## Follow-up 2026-06-17
- Thread renamed/pinned as `Лев — сделать раскадровку клипов`.
- `storyboard-auditor` revalidated after removing stale reference to deleted `audit-rubric.md`.
- Created combined production pack using `cinematic-storyboard-director` + `storyboard-auditor`:
  - `outputs/lev-nikolaevich-storyboards/lev-nikolaevich-production-pack-v2.md`
