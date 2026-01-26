# Used Color Properties

All color properties currently configured in this theme, organized by UI area.

## Base Colors

| Property | UI Element |
|----------|------------|
| `foreground` | Default foreground color for text throughout VS Code |
| `focusBorder` | Border color of focused elements (buttons, inputs, etc.) |
| `descriptionForeground` | Color for description text (secondary/muted text) |
| `errorForeground` | Color for error text messages |

## Editor

| Property | UI Element |
|----------|------------|
| `editor.background` | Main editor background |
| `editor.foreground` | Default text color in editor |
| `editor.lineHighlightBackground` | Background of the line the cursor is on |
| `editor.selectionBackground` | Background of selected text |
| `editor.inactiveSelectionBackground` | Selection background when editor is not focused |
| `editor.selectionHighlightBackground` | Background of other occurrences of selected text |
| `editor.wordHighlightBackground` | Background of word under cursor (read access) |
| `editor.wordHighlightStrongBackground` | Background of word under cursor (write access) |
| `editor.findMatchBackground` | Background of current search match |
| `editor.findMatchHighlightBackground` | Background of other search matches |
| `editorCursor.foreground` | Color of the text cursor |
| `editorLineNumber.foreground` | Line number color |
| `editorLineNumber.activeForeground` | Active line number color |
| `editorIndentGuide.background1` | Color of indent guide lines |
| `editorIndentGuide.activeBackground1` | Color of active indent guide (current scope) |
| `editorWhitespace.foreground` | Color of whitespace characters (when visible) |
| `editorBracketMatch.background` | Background of matching bracket |
| `editorBracketMatch.border` | Border of matching bracket |
| `editorGutter.background` | Background of the gutter (line numbers area) |
| `editorGutter.addedBackground` | Added line indicator (git) |
| `editorGutter.modifiedBackground` | Modified line indicator (git) |
| `editorGutter.deletedBackground` | Deleted line indicator (git) |
| `editorGutter.foldingControlForeground` | Fold/unfold control color |

## Editor Widgets

| Property | UI Element |
|----------|------------|
| `editorWidget.background` | Background of editor widgets (find/replace, etc.) |
| `editorWidget.border` | Border of editor widgets |
| `editorWidget.resizeBorder` | Border when resizing widgets |
| `editorHoverWidget.background` | Background of hover tooltip |
| `editorHoverWidget.border` | Border of hover tooltip |
| `editorSuggestWidget.background` | Background of autocomplete dropdown |
| `editorSuggestWidget.border` | Border of autocomplete dropdown |
| `editorSuggestWidget.selectedBackground` | Background of selected autocomplete item |

## Editor Groups & Tabs

| Property | UI Element |
|----------|------------|
| `editorGroup.border` | Border between editor groups (split view) |
| `editorGroupHeader.tabsBackground` | Background of the tab bar |
| `editorGroupHeader.noTabsBackground` | Background when tabs are disabled |
| `tab.activeBackground` | Background of the active tab |
| `tab.activeForeground` | Text color of the active tab |
| `tab.inactiveBackground` | Background of inactive tabs |
| `tab.inactiveForeground` | Text color of inactive tabs |
| `tab.border` | Border between tabs |
| `tab.activeBorder` | Bottom border of active tab |
| `tab.activeBorderTop` | Top border of active tab (accent line) |

## Sticky Scroll

| Property | UI Element |
|----------|------------|
| `editorStickyScroll.background` | Background of sticky scroll header |
| `editorStickyScrollHover.background` | Background on hover |

## Bracket Highlighting

| Property | UI Element |
|----------|------------|
| `editorBracketHighlight.foreground1` | First level bracket color |
| `editorBracketHighlight.foreground2` | Second level bracket color |
| `editorBracketHighlight.foreground3` | Third level bracket color |
| `editorBracketHighlight.foreground4` | Fourth level bracket color |
| `editorBracketHighlight.foreground5` | Fifth level bracket color |
| `editorBracketHighlight.foreground6` | Sixth level bracket color |
| `editorBracketHighlight.unexpectedBracket.foreground` | Unmatched/mismatched brackets |

## Inlay Hints

| Property | UI Element |
|----------|------------|
| `editorInlayHint.background` | Background of inlay hints |
| `editorInlayHint.foreground` | Text color of inlay hints |
| `editorInlayHint.typeForeground` | Type annotation inlay hints |
| `editorInlayHint.parameterForeground` | Parameter name inlay hints |

## Editor Diagnostics

| Property | UI Element |
|----------|------------|
| `editorError.foreground` | Squiggly underline for errors |
| `editorError.background` | Background highlight for error lines |
| `editorWarning.foreground` | Squiggly underline for warnings |
| `editorWarning.background` | Background highlight for warning lines |
| `editorInfo.foreground` | Squiggly underline for info |
| `editorInfo.background` | Background highlight for info lines |
| `editorHint.foreground` | Squiggly underline for hints |

## Overview Ruler (Scrollbar Minimap)

| Property | UI Element |
|----------|------------|
| `editorOverviewRuler.errorForeground` | Error markers in scrollbar |
| `editorOverviewRuler.warningForeground` | Warning markers in scrollbar |
| `editorOverviewRuler.infoForeground` | Info markers in scrollbar |
| `editorOverviewRuler.border` | Border of overview ruler |

## Activity Bar (Left Icon Bar)

| Property | UI Element |
|----------|------------|
| `activityBar.background` | Background of the activity bar |
| `activityBar.foreground` | Color of active icon |
| `activityBar.border` | Border between activity bar and sidebar |
| `activityBar.inactiveForeground` | Color of inactive icons |
| `activityBarBadge.background` | Background of notification badges |
| `activityBarBadge.foreground` | Text color of notification badges |

## Side Bar (File Explorer, etc.)

| Property | UI Element |
|----------|------------|
| `sideBar.background` | Background of the sidebar |
| `sideBar.foreground` | Text color of files/folders |
| `sideBar.border` | Border between sidebar and editor |
| `sideBarTitle.foreground` | Color of sidebar title (e.g., "EXPLORER") |
| `sideBarSectionHeader.background` | Background of section headers |
| `sideBarSectionHeader.foreground` | Text color of section headers |
| `sideBarSectionHeader.border` | Border below section headers |

## Lists and Trees (File Explorer, Search Results, etc.)

| Property | UI Element |
|----------|------------|
| `list.activeSelectionBackground` | Background of selected item (focused) |
| `list.activeSelectionForeground` | Text color of selected item (focused) |
| `list.inactiveSelectionBackground` | Background of selected item (unfocused) |
| `list.inactiveSelectionForeground` | Text color of selected item (unfocused) |
| `list.hoverBackground` | Background when hovering over item |
| `list.hoverForeground` | Text color when hovering |
| `list.focusBackground` | Background of focused item |
| `list.focusForeground` | Text color of focused item |
| `list.highlightForeground` | Color of matched text in search |

## Status Bar (Bottom Bar)

| Property | UI Element |
|----------|------------|
| `statusBar.background` | Background of status bar |
| `statusBar.foreground` | Text color in status bar |
| `statusBar.border` | Top border of status bar |
| `statusBar.debuggingBackground` | Background when debugging |
| `statusBar.debuggingForeground` | Text color when debugging |
| `statusBar.noFolderBackground` | Background when no folder open |
| `statusBar.noFolderForeground` | Text color when no folder open |

## Title Bar

| Property | UI Element |
|----------|------------|
| `titleBar.activeBackground` | Background of title bar (focused window) |
| `titleBar.activeForeground` | Text color of title bar (focused) |
| `titleBar.inactiveBackground` | Background of title bar (unfocused) |
| `titleBar.inactiveForeground` | Text color of title bar (unfocused) |
| `titleBar.border` | Border below title bar |

## Panel (Terminal, Output, Problems, etc.)

| Property | UI Element |
|----------|------------|
| `panel.background` | Background of the panel area |
| `panel.border` | Top border of the panel |
| `panelTitle.activeBorder` | Bottom border of active panel tab |
| `panelTitle.activeForeground` | Text color of active panel tab |
| `panelTitle.inactiveForeground` | Text color of inactive panel tabs |

## Terminal

| Property | UI Element |
|----------|------------|
| `terminal.foreground` | Default text color in terminal |
| `terminal.background` | Background of terminal |
| `terminal.ansiBlack` | ANSI black color |
| `terminal.ansiRed` | ANSI red color (errors, deletions) |
| `terminal.ansiGreen` | ANSI green color (success, additions) |
| `terminal.ansiYellow` | ANSI yellow color (warnings) |
| `terminal.ansiBlue` | ANSI blue color (directories, info) |
| `terminal.ansiMagenta` | ANSI magenta color |
| `terminal.ansiCyan` | ANSI cyan color |
| `terminal.ansiWhite` | ANSI white color |
| `terminal.ansiBrightBlack` | ANSI bright black (gray) |
| `terminal.ansiBrightRed` | ANSI bright red |
| `terminal.ansiBrightGreen` | ANSI bright green |
| `terminal.ansiBrightYellow` | ANSI bright yellow |
| `terminal.ansiBrightBlue` | ANSI bright blue |
| `terminal.ansiBrightMagenta` | ANSI bright magenta |
| `terminal.ansiBrightCyan` | ANSI bright cyan |
| `terminal.ansiBrightWhite` | ANSI bright white |
| `terminalCursor.foreground` | Terminal cursor color |

## Input Controls

| Property | UI Element |
|----------|------------|
| `input.background` | Background of text inputs |
| `input.foreground` | Text color in inputs |
| `input.border` | Border of text inputs |
| `input.placeholderForeground` | Placeholder text color |
| `inputOption.activeBorder` | Border of active input option (checkbox) |

## Dropdown

| Property | UI Element |
|----------|------------|
| `dropdown.background` | Background of dropdowns |
| `dropdown.foreground` | Text color in dropdowns |
| `dropdown.border` | Border of dropdowns |

## Button

| Property | UI Element |
|----------|------------|
| `button.background` | Background of buttons |
| `button.foreground` | Text color of buttons |
| `button.hoverBackground` | Background of buttons on hover |

## Scrollbar

| Property | UI Element |
|----------|------------|
| `scrollbar.shadow` | Shadow at top of scrollable area |
| `scrollbarSlider.background` | Scrollbar thumb background |
| `scrollbarSlider.hoverBackground` | Scrollbar thumb on hover |
| `scrollbarSlider.activeBackground` | Scrollbar thumb when dragging |

## Badge

| Property | UI Element |
|----------|------------|
| `badge.background` | Background of badges (counts) |
| `badge.foreground` | Text color of badges |

## Progress Bar

| Property | UI Element |
|----------|------------|
| `progressBar.background` | Color of progress bars |

## Links

| Property | UI Element |
|----------|------------|
| `textLink.foreground` | Color of links |
| `textLink.activeForeground` | Color of links on click |

## Git Decorations (File Explorer)

| Property | UI Element |
|----------|------------|
| `gitDecoration.addedResourceForeground` | Color of added files |
| `gitDecoration.modifiedResourceForeground` | Color of modified files |
| `gitDecoration.deletedResourceForeground` | Color of deleted files |
| `gitDecoration.untrackedResourceForeground` | Color of untracked files |
| `gitDecoration.ignoredResourceForeground` | Color of ignored files |
| `gitDecoration.conflictingResourceForeground` | Color of conflicting files |

## Diff Editor

| Property | UI Element |
|----------|------------|
| `diffEditor.insertedTextBackground` | Background of inserted lines |
| `diffEditor.removedTextBackground` | Background of removed lines |

## Peek View (Go to Definition popup)

| Property | UI Element |
|----------|------------|
| `peekView.border` | Border of peek view |
| `peekViewEditor.background` | Background of peek view editor |
| `peekViewEditor.matchHighlightBackground` | Highlight in peek view editor |
| `peekViewResult.background` | Background of results list |
| `peekViewResult.fileForeground` | File name color in results |
| `peekViewResult.lineForeground` | Line content color in results |
| `peekViewResult.matchHighlightBackground` | Match highlight in results |
| `peekViewResult.selectionBackground` | Selected result background |
| `peekViewResult.selectionForeground` | Selected result text color |
| `peekViewTitle.background` | Title bar background |
| `peekViewTitleDescription.foreground` | Description text color |
| `peekViewTitleLabel.foreground` | Title text color |

## Minimap

| Property | UI Element |
|----------|------------|
| `minimap.background` | Background of minimap |
| `minimapGutter.addedBackground` | Color of added lines in minimap gutter |
| `minimapGutter.modifiedBackground` | Color of modified lines in minimap gutter |
| `minimapGutter.deletedBackground` | Color of deleted lines in minimap gutter |

## Breadcrumbs

| Property | UI Element |
|----------|------------|
| `breadcrumb.foreground` | Text color of breadcrumb items |
| `breadcrumb.focusForeground` | Text color of focused breadcrumb |
| `breadcrumb.activeSelectionForeground` | Text color of selected breadcrumb |
| `breadcrumbPicker.background` | Background of breadcrumb dropdown |

## Keybinding Labels

| Property | UI Element |
|----------|------------|
| `keybindingLabel.background` | Background of keyboard shortcut badges |
| `keybindingLabel.foreground` | Text color of keyboard shortcut badges |
| `keybindingLabel.border` | Border of keyboard shortcut badges |

## Icons

| Property | UI Element |
|----------|------------|
| `icon.foreground` | Default icon color |

## Debug

| Property | UI Element |
|----------|------------|
| `debugToolBar.background` | Background of debug toolbar |
| `debugToolBar.border` | Border of debug toolbar |
| `debugIcon.breakpointForeground` | Breakpoint icon color |
| `debugIcon.startForeground` | Start/play icon color |
| `debugIcon.pauseForeground` | Pause icon color |
| `debugIcon.stopForeground` | Stop icon color |

## Notifications

| Property | UI Element |
|----------|------------|
| `notificationCenter.border` | Border of notification center |
| `notificationCenterHeader.background` | Header background in notification center |
| `notificationCenterHeader.foreground` | Header text in notification center |
| `notifications.background` | Background of notification popups |
| `notifications.foreground` | Text color in notifications |
| `notifications.border` | Border around notifications |
| `notificationLink.foreground` | Link color in notifications |
| `notificationsErrorIcon.foreground` | Error icon color |
| `notificationsWarningIcon.foreground` | Warning icon color |
| `notificationsInfoIcon.foreground` | Info icon color |

## Quick Input / Command Palette

| Property | UI Element |
|----------|------------|
| `quickInput.background` | Background of command palette |
| `quickInput.foreground` | Text color in command palette |
| `quickInputList.focusBackground` | Background of highlighted item |
| `quickInputList.focusForeground` | Text color of highlighted item |
| `quickInputTitle.background` | Title area background |

## Merge Conflicts

| Property | UI Element |
|----------|------------|
| `merge.currentHeaderBackground` | Current branch header background |
| `merge.currentContentBackground` | Current branch content background |
| `merge.incomingHeaderBackground` | Incoming branch header background |
| `merge.incomingContentBackground` | Incoming branch content background |
| `merge.border` | Border between merge sections |
| `merge.commonHeaderBackground` | Common ancestor header background |
| `merge.commonContentBackground` | Common ancestor content background |

## Testing

| Property | UI Element |
|----------|------------|
| `testing.iconPassed` | Passed test icon color |
| `testing.iconFailed` | Failed test icon color |
| `testing.iconSkipped` | Skipped test icon color |
| `testing.iconQueued` | Queued test icon color |
| `testing.iconUnset` | Unrun test icon color |

---

## Token Colors (Syntax Highlighting)

| Scope | What it colors |
|-------|----------------|
| `comment`, `punctuation.definition.comment` | Comments |
| `comment.block.documentation` | Documentation comments (JSDoc, etc.) |
| `constant`, `constant.language`, `constant.character` | Constants (null, undefined, etc.) |
| `constant.numeric`, `constant.other` | Numbers and other constants |
| `entity.name.function`, `meta.function-call`, `support.function` | Function names and calls |
| `entity.name.type`, `entity.name.class`, `entity.name.namespace`, `support.type`, `support.class` | Type/class names |
| `entity.name.tag` | HTML/XML tag names |
| `entity.other.attribute-name` | HTML/XML attributes |
| `keyword`, `keyword.control`, `keyword.operator.new`, etc. | Keywords (if, else, return, etc.) |
| `keyword.operator`, `keyword.operator.assignment`, etc. | Operators (=, +, -, etc.) |
| `string`, `string.quoted`, `string.template` | String literals |
| `string.regexp` | Regular expressions |
| `constant.character.escape`, `string.escape` | Escape sequences (\n, \t, etc.) |
| `variable`, `variable.other` | Variables |
| `variable.language`, `variable.parameter` | Special variables (this, self) and parameters |
| `punctuation.bracket`, `punctuation.definition`, etc. | Brackets and punctuation |
| `constant.language.boolean` | Boolean values (true, false) |
| `meta.preprocessor`, `keyword.control.directive` | Preprocessor directives (#include, etc.) |
| `markup.heading`, `markup.heading.markdown` | Markdown headings |
| `markup.italic` | Italic text in markdown |
| `markup.bold` | Bold text in markdown |
| `markup.strikethrough` | Strikethrough text in markdown |
| `markup.underline.link`, `string.other.link` | Links in markdown |
| `markup.inline.raw`, `markup.raw` | Code blocks in markdown |
| `markup.quote.markdown` | Block quotes in markdown |
| `markup.list.numbered`, `markup.list.unnumbered` | List items in markdown |
| `fenced_code.block.language.markdown` | Language identifier in fenced code blocks |
| `entity.name.section`, `entity.name.label` | Section names and labels |
| `support.variable`, `meta.object-literal.key` | Object keys |
| `entity.other.inherited-class` | Inherited class names |
| `support.type.property-name.json` | JSON property names |
| `entity.name.tag.yaml` | YAML keys |

---

## Semantic Token Colors

These provide language-aware highlighting (more accurate than TextMate scopes):

| Token | What it colors |
|-------|----------------|
| `function` | Function calls |
| `function.declaration` | Function definitions |
| `method` | Method calls |
| `method.declaration` | Method definitions |
| `variable` | Regular variables |
| `variable.readonly` | Constants (const) |
| `variable.declaration` | Variable declarations |
| `parameter` | Function parameters |
| `property` | Object properties |
| `property.readonly` | Readonly properties |
| `class` | Class names |
| `interface` | Interface names |
| `type` | Type names |
| `enum` | Enum names |
| `enumMember` | Enum values |
| `namespace` | Namespace/module names |
| `keyword` | Keywords |
| `string` | String literals |
| `number` | Number literals |
| `regexp` | Regular expressions |
| `comment` | Comments |
| `operator` | Operators |
