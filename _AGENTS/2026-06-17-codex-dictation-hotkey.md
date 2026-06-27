# Codex dictation hotkey

Task: analyze why `Ctrl+*` does not start Codex voice input and apply a safe fix.

Findings:
- Windows dictation via `Win+H` works, so microphone permissions are not the cause.
- Codex Desktop stores the dictation shortcut in `C:\Users\User\.codex\keybindings.json`.
- The configured shortcut was `Ctrl+*`, which is unreliable on Windows/Russian layouts because `*` can mean a shifted symbol or `NumpadMultiply`.

Change:
- Updated `globalDictationToggle` from `Ctrl+*` to `Ctrl+Alt+Space`.
- Also updated active Codex global state `globalDictationToggleHotkey` from `Ctrl+*` to `Ctrl+Alt+Space`.

Risks:
- Codex may need a restart or settings reload before the global shortcut is re-registered.
- If `Ctrl+Alt+Space` conflicts with another app, choose another shortcut in Codex settings under General / Dictation or Keyboard Shortcuts.
