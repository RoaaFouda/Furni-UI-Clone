# Furni 🪑

A modern furniture e-commerce storefront built with React and Material UI.

## Tech Stack

- **React** — component-based UI
- **Material UI (MUI)** — styling and responsive components
- **Vite** — development server and bundler

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

```
src/
├── assets/          # Images (chairs, couch, etc.)
├── components/      # UI sections
│   ├── Nav
│   ├── LandingSection
│   ├── HorizontalGrid
│   ├── WhyChooseUs
│   ├── InteriorDesign
│   └── SmallProductsSection
└── App.jsx
```

## Features

- Fully responsive (mobile & desktop)
- Single breakpoint pattern using `theme.breakpoints.down("md")`
- Burger menu drawer on mobile