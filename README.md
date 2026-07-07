# 🍔 BiteCraft - Premium Gourmet Restaurant Website

BiteCraft is a modern, responsive, and visually stunning multi-page gourmet restaurant web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Material UI (MUI v6)**. 

Every page is modularly componentized, separating layouts, states, and reusable block assets.

---

## 🚀 Key Features

<!-- *   **🛒 Interactive Cart State**: Integrated via a central React Context API (`src/context/CartContext.tsx`) syncing a dynamic shopping bag badge in the header whenever "Add to Cart" is clicked from any page. -->
*   **🥗 Dynamic Menu Filters**: An interactive search input query, category tab selection, and quick-filter vegetarian toggles (`src/components/menu/`).
*   **🎟️ Coupon Copy Codes**: Dashed, voucher-styled special offers cards that copy coupon codes to the clipboard with temporary confirmation badges.
*   **📅 Table Bookings Form**: Localized reservation forms with validation alerts.
*   **🗺️ Responsive Mockup Map**: Gradient map container with active pulsing coordinates.
*   **📁 Custom 404 Error Page**: Playful restaurant-themed error view ("Wandered Off the Menu?") with direct fallback action buttons.
*   **📂 Downloader QR & PDF Menu**: Real scannable QR code linking to a mathematically compiled menu PDF served directly from the public assets folders.

---

## 🛠️ Technology Stack & Styling

1.  **Core Framework**: Next.js 16.2.10 (App Router, Turbopack, React 19 compatibility).
2.  **Language**: TypeScript (Strongly typed grid layout structures, state modifiers, context providers).
3.  **UI Library**: Material UI (MUI v6) styled for modern glassmorphism.
4.  **Fonts**: Next.js Variable Fonts mapping typography settings to Outfit and Geist.
5.  **SSR Registry**: Wrote `@mui/material-nextjs/v16-appRouter` context wraps to eliminate visual flashes of unstyled content (FOUC).

---

## 📂 Project Directory Structure

```
food-website/
├── public/
│   ├── images/
│   │   ├── burger.png          (Hero gourmet cheeseburger)
│   │   ├── pizza.png           (Fresh Italian pepperoni)
│   │   ├── chef.png            (Executive Chef Marcus)
│   │   ├── interior.png        (Dining hall space)
│   │   └── qr_code.png         (Scannable digital QR)
│   └── menu.pdf                (Mathematically compiled PDF menu)
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx        (Story, Values, Chef timeline)
│   │   ├── contact/
│   │   │   └── page.tsx        (Form inputs, Address grids, Map box)
│   │   ├── faq/
│   │   │   └── page.tsx        (Accordions question list)
│   │   ├── gallery/
│   │   │   └── page.tsx        (Masonry pictures view)
│   │   ├── menu/
│   │   │   └── page.tsx        (Controls mapping & catalog grid)
│   │   ├── offers/
│   │   │   └── page.tsx        (Coupons grid layout)
│   │   ├── globals.css         (Boilerplate resets)
│   │   ├── layout.tsx          (Global headers & footers frame)
│   │   └── not-found.tsx       (Playful 404 page)
│   ├── components/
│   │   ├── common/
│   │   │   ├── FoodCard.tsx    (Unified rating & best seller card)
│   │   │   ├── PageHeader.tsx  (Gradient banner title blocks)
│   │   │   └── TestimonialCard.tsx (Customer review cards)
│   │   ├── layout/
│   │   │   ├── Header.tsx      (Responsive sticky blurred navbar)
│   │   │   └── Footer.tsx      (Digital QR column & address link grids)
│   │   ├── home/               (Modular home section components)
│   │   ├── about/              (Modular about section components)
│   │   ├── menu/               (Modular menu control components)
│   │   ├── gallery/            (Modular gallery view component)
│   │   ├── offers/             (Modular offers grids component)
│   │   ├── faq/                (Modular accordion components)
│   │   └── contact/            (Modular contact forms, info & map)
│   ├── constants/
│   │   └── menuData.ts         (Shared static catalog database file)
│   ├── context/
│   │   └── CartContext.tsx     (Shopping bag context)
│   └── theme/
│       ├── theme.ts            (Color tokens, shadow tokens, MUI overrides)
│       └── ThemeRegistry.tsx   (App Router SSR Theme Cache Provider)
```

---

## 🚀 Commands & Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) inside your web browser to view the application.

### 3. Build & Prerender for Production
```bash
npm run build
```
This compiles the application, runs TypeScript checks, and exports optimized static pages:
- `/` (Home)
- `/about` (About Us)
- `/menu` (Our Menu)
- `/gallery` (Photo Gallery)
- `/offers` (Promotions)
- `/faq` (Frequently Asked Questions)
- `/contact` (Contact Us)
- `/_not-found` (Custom 404 Error page)
