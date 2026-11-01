¬import il from "../../../../../_shared/variables/imageLinks"


### Is the file is under tsmaps?

1. Open the file if it is not already open.



2. The **Breadcrumb bar** at the at the top of the editor shows the file's path. *- red rectangle*

3. If the first segment isn’t `tsmaps`, the `.cspell.json` filter will exclude the file from **Code Spell Checker** analysis. *- yellow rectangle*

{{::il.Vscode_CheckFileInTsmaps_img}}


¬TODO need to explain that tsmaps can be configured to be something else. Need to explain how to check that and how to edit it so the path matches the tsmaps name.


### Fix: Moving the file or updating `files`

1. If the file belongs in the spell-checked area, move it into the `tsmaps/` folder.

2. Alternatively, open `.cspell.json` in the workspace root.

3. Find the `files` array and add the file's location or a matching pattern.

4. Save the file.

### Verify: Confirming spell checking is active

1. Reopen the file and check for **blue squiggles** under any misspelled words.

2. If squiggles appear, spell checking is now active for this file.

---

## Row 2 — "Is the file type enabled?"

### Diagnosis: Running "CSpell: Show File Info"

1. Open the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`).

2. Type **"CSpell: Show File Info"** and select it from the list.

> In the image below, the command is highlighted in the Command Palette. *- red rectangle*

3. A panel opens showing the file's language ID and whether CSpell is enabled for that file type.

> In the image below, the panel shows `Language ID: markdown` and `Enabled: false`. *- orange rectangle*

{{::il.Vscode_CodeSpellChecker_FileInfo_1_img}}

### Fix: Adding the language ID to `enabledFileTypes`

1. Open `settings.json` (Command Palette → **Preferences: Open Settings (JSON)**).

2. Find the `cSpell.enabledFileTypes` object.

3. Add the language ID shown in the diagnosis panel, for example:

   ```json
   "cSpell.enabledFileTypes": {
     "markdown": true
   }
   ```

4. Save the file.

### Verify: Re-running "CSpell: Show File Info"

1. Run **"CSpell: Show File Info"** again.

2. Confirm the panel now shows `Enabled: true` for the file's language ID.

3. Check for blue squiggles under any misspelled words.

---

## Row 3 — "Is the file excluded?"

### Diagnosis: Checking `ignorePaths`

1. Open `.cspell.json` in the workspace root.

2. Find the `ignorePaths` array.

3. Check whether any pattern matches your file's path.

> In the image below, `ignorePaths` contains `"**/tsmaps/**"`, which excludes all files in the `tsmaps/` folder. *- red rectangle*

4. Also open `settings.json` and check `cSpell.ignorePaths` for the same kind of pattern.

{{::il.Vscode_CodeSpellChecker_IgnorePaths_1_img}}

### Fix: Removing the blocking pattern

1. In `.cspell.json`, remove the pattern that matches your file from `ignorePaths`.

2. In `settings.json`, remove the matching pattern from `cSpell.ignorePaths`.

3. Save both files.

### Verify: Confirming the file is checked

1. Reopen the file and check for **blue squiggles** under any misspelled words.

2. If squiggles appear, the file is no longer excluded.

---

## Row 4 — "Is CSpell enabled globally?"

### Diagnosis: Checking the status bar icon

1. Look at the VS Code status bar (bottom right).

2. Find the CSpell icon — a checkmark or an eye.

> In the image below, the icon shows a **crossed-out eye**, meaning CSpell is disabled. *- red rectangle*

3. If the icon is crossed out, CSpell is turned off globally.

{{::il.Vscode_CodeSpellChecker_StatusBar_1_img}}

### Fix: Enabling CSpell from the status bar

1. Click the CSpell icon in the status bar.

2. Select **Enable** from the menu that appears.

3. Alternatively, open the Extensions panel (`Ctrl+Shift+X` / `Cmd+Shift+X`), find **Code Spell Checker**, and ensure it is enabled.

### Verify: Confirming the icon is active

1. Look at the status bar again.

2. The CSpell icon should now show a **checkmark** or an **open eye** — not crossed out.

3. Open any file and confirm blue squiggles appear under misspelled words.

---

