# Minimal Monochrome

A minimal, monochrome color theme for VS Code. Ported from [tdfirth's Minimal theme](https://zed-themes.com/themes/-C_bTZ6lXwgXHHVcGmutv?name=Light) for the Zed editor. Meant to be complimented with [Minimal Monochrome Icons Theme](https://github.com/arihantverma/minimal-monochrome-vscode-icons)

## Philosophy

Most themes use color to differentiate syntax elements. While colorful, this approach can be visually noisy and distracting. Minimal Monochrome takes a different approach:

1. **Grayscale syntax** - Code uses only grayscale tones, with contrast through typography (bold for functions, types, keywords)
2. **Pastel semantic colors** - Functional UI elements (errors, warnings, git status, terminal) use soft, aesthetic pastel colors that don't overwhelm
3. **Reduced visual noise** - Comments and secondary text are muted, letting your code speak for itself
4. **Two variants** - Light and dark themes that follow the same principles

The result is a calm, focused editing experience where structure emerges from typography rather than a rainbow of colors.

## Preview

### Dark

![Minimal Monochrome Dark](./assets/dark.png)

### Light

![Minimal Monochrome Light](./assets/light.png)

## Installation

### From VS Code MarketplaceS

1. Open VS Code
2. Go to Extensions (`Cmd+Shift+X` on macOS, `Ctrl+Shift+X` on Windows/Linux)
3. Search for "Minimal Monochrome"
4. Click Install
5. Go to `Preferences > Color Theme` and select **Minimal Monochrome Dark** or **Minimal Monochrome Light**

### Manual Installation

1. Download or clone this repository
2. Copy the folder to your VS Code extensions directory:
   - macOS: `~/.vscode/extensions/`
   - Windows: `%USERPROFILE%\.vscode\extensions\`
   - Linux: `~/.vscode/extensions/`
3. Restart VS Code
4. Select the theme from `Preferences > Color Theme`

## Color Palette

### Dark Theme

#### Grayscale (Syntax)

| Element | Hex |
|---------|-----|
| Background | `#1A1A1A` |
| Foreground | `#EEEEEE` |
| Comments | `#7B7B7B` |
| Strings | `#B4B4B4` |
| Selection | `#606060` |

#### Pastel Semantic Colors

| Purpose | Hex |
|---------|-----|
| Error/Red | `#F5A3A7` (soft coral) |
| Success/Green | `#8BCFAC` (soft mint) |
| Warning/Yellow | `#F0C674` (soft golden) |
| Info/Blue | `#89B4D4` (soft sky) |
| Magenta | `#C9A5E0` (soft lavender) |
| Cyan | `#7DD4D0` (soft teal) |

### Light Theme

#### Grayscale (Syntax)

| Element | Hex |
|---------|-----|
| Background | `#FCFCFC` |
| Foreground | `#000000DF` |
| Comments | `#999999` |
| Strings | `#777777` |
| Selection | `#D0D0D0` |

#### Pastel Semantic Colors

| Purpose | Hex |
|---------|-----|
| Error/Red | `#C97A7D` (dusty rose) |
| Success/Green | `#5A9E6F` (sage) |
| Warning/Yellow | `#B8893A` (muted amber) |
| Info/Blue | `#5A8FB8` (steel blue) |
| Magenta | `#8B6BA8` (dusty purple) |
| Cyan | `#4A9EA8` (muted teal) |

## Recommended Settings

For the best experience, consider these VS Code settings:

```json
{
  "editor.fontFamily": "Zed Mono, JetBrains Mono, IBM Plex Mono, Cascadia Code, Monaspace Krypton, JetBrains Mono, FiraCode-Retina, Fira Mono, Monaco, Menlo, 'Courier New', monospace",
  "editor.lineHeight": 20,
  "editor.bracketPairColorization.enabled": false,
  "workbench.tree.indent": 16
}
```

## Credits

- Original theme by [tdfirth](https://github.com/tdfirth) for the [Zed editor](https://zed.dev)
- Ported to VS Code by [Arihant Verma](https://github.com/arihantverma)

## License

[MIT](LICENSE)
