# Project Architecture and Folder Structure

This project follows a professional, modular, and scalable directory structure designed for Next.js App Router, TypeScript, and Material UI (MUI).

## Directory Overview

Here is an explanation of the layout under `src/`:

```
src/
├── app/                  # Route Segments & Pages (Next.js App Router)
│   ├── layout.tsx        # Global App Router Layout (wraps ThemeRegistry)
│   ├── page.tsx          # Homepage
│   └── globals.css       # Global Vanilla CSS style overrides
│
├── theme/                # Custom Material UI (MUI) Design System
│   ├── theme.ts          # Custom colors, typography rules, shadows, and component style overrides
│   └── ThemeRegistry.tsx # AppRouterCacheProvider + ThemeProvider configuration wrapper
│
├── components/           # Reusable React UI Components
│   ├── common/           # Presentational / Atomic UI elements (Buttons, Loaders, Inputs, Cards)
│   ├── layout/           # Shared page layout elements (Header, Footer, Navigation, Sidebar)
│   └── feedback/         # Dialogs, Toast notifications, Modals, and alerts
│
├── hooks/                # Custom reusable React hooks (e.g. useAuth, useWindowSize, useMediaQuery)
│
├── context/              # React Context Providers for global state (e.g. Auth, Cart, Settings)
│
├── services/             # API client instances (Fetch/Axios configs) and request/response service layers
│
├── types/                # Shared TypeScript types, interfaces, and declarations
│
├── utils/                # Pure helper functions (formatting date/currency, validators, storage tools)
│
└── constants/            # Application constants (route paths, API endpoints, static assets keys)
```

## Key Patterns

1. **Material UI Integration**: All pages must be rendered within `ThemeRegistry`. The cache provider handles emotion style injection on the server to prevent FOUC.
2. **Path Aliases**: We use `@/` path alias mapping to the `src/` directory. For example, use `import Button from '@/components/common/Button'` instead of relative paths like `../../components/common/Button`.
3. **Vanilla CSS + MUI SX**: Use Material UI `sx` props or styling wrapper APIs for layout-specific changes. Avoid adding inline styles or complex raw CSS classes unless necessary (use `globals.css` only for baseline overrides).
