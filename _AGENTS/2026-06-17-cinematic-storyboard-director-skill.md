# Cinematic Storyboard Director Skill

## Задача
Создать собственный локальный skill на базе идей `ai-video-prompt-writer`, но адаптированный под практическую кино-раскадровку: движение, жесты, ноги, хронометраж, continuity и AI-video prompts.

## Сделано
- Создан skill `cinematic-storyboard-director` в `C:\Users\User\.codex\skills`.
- Основной workflow записан в `SKILL.md`.
- Детальные контракты выходов вынесены в `references/output-contracts.md`.
- UI metadata создана в `agents/openai.yaml`.
- Skill проверен через `quick_validate.py`: `Skill is valid!`.

## Тест
На сценарии Льва Николаевича создан тестовый сравнительный документ:
- `outputs/skill-tests/cinematic-storyboard-director-lev-test.md`

Вывод теста: оригинальный `ai-video-prompt-writer` полезен как общий prompt/storyboard reference, но новый skill лучше подходит для текущего проекта, потому что принудительно решает физическую постановку: маршрут, тайминг, стопы, жесты и верификацию.

## Измененные файлы
- `C:\Users\User\.codex\skills\cinematic-storyboard-director\SKILL.md`
- `C:\Users\User\.codex\skills\cinematic-storyboard-director\agents\openai.yaml`
- `C:\Users\User\.codex\skills\cinematic-storyboard-director\references\output-contracts.md`
- `outputs/skill-tests/cinematic-storyboard-director-lev-test.md`

## Возможное улучшение
Следующий отдельный skill можно сделать как `storyboard-auditor`: проверка уже сгенерированных листов на неверное количество кадров, обрезанные подписи, невозможные ноги, неправильный маршрут, лишних персонажей и drift камеры.
