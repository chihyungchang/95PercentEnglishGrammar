# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Educational project teaching English grammar in Chinese. Features an interactive flip-book style interface for navigating through grammar lessons.

## Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build
```

## Architecture

React + Vite + Tailwind CSS v4 project with react-pageflip for book-style page animations.

```
src/
├── main.jsx              # App entry point
├── App.jsx               # Main component with flip-book logic
├── components/
│   └── pages/            # Individual page components (use forwardRef)
│       ├── CoverPage.jsx         # 封面
│       ├── TableOfContents.jsx   # 目录（可点击跳转）
│       ├── Page1.jsx             # 英文句子结构分类
│       ├── Page2.jsx     # 简单句的基本句型
│       ├── Page3.jsx     # 简单句的更多句型（主谓宾宾、主谓宾补、There be）
│       ├── Page4.jsx     # 从句详解（名词性从句概述、位置、例句）
│       ├── Page5.jsx     # 从句（续）：降级原理、主语从句、宾语从句详解
│       ├── Page6.jsx     # 从句（续）：表语从句、同位语从句详解
│       ├── Page7.jsx     # 定语从句（定语概念、类型、位置、例句）
│       ├── Page8.jsx     # 定语从句详解（不定式短语、定语从句、终极综合版）
│       ├── Page9.jsx     # 状语从句（状语概念、八种分类）
│       ├── Page10.jsx    # 状语从句详解（副词位置、原因状语从句）
│       └── BackCover.jsx # 封底
└── styles/
    └── index.css         # Tailwind entry + global styles
```

## Key Files

- `tailwind.config.js` - Custom colors and fonts
- `postcss.config.js` - Uses @tailwindcss/postcss for Tailwind v4
- `vite.config.js` - Vite configuration

## Adding New Pages

1. Create a new page component in `src/components/pages/`
2. Use `forwardRef` to wrap the component (required by react-pageflip)
3. Import and add to the `<HTMLFlipBook>` in `App.jsx`
4. Update `totalPages` count in `App.jsx`

## Page Structure

Each page component should:
- Use `forwardRef` and pass ref to the root div
- Set `data-density="hard"` for cover pages
- Use notebook-style background with lined pattern

## Tailwind Colors

Defined in `tailwind.config.js`:
- `grammar-red` (#c0392b): Subject (主语)
- `grammar-green` (#1e8449): Verb (谓语)
- `accent` (#2d5aa0): Object (宾语)
- `grammar-purple` (#8e44ad): Linking verb (系动词)
- `highlight` (#d4a017): Predicate (表语)
- `ink` (#1a1a2e): Text color
- `paper` (#fdfcf8): Page background

## Book Configuration

Current HTMLFlipBook settings (App.jsx):
- Size: 700 x 950 pixels
- Double-page view (usePortrait={false})
- 13 pages total (Cover, TOC, Page1-10, BackCover)
