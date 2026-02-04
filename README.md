# Game List PWA

A modern Progressive Web Application for managing your video game collection. Built with Angular 19, this app allows you to track games across different platforms (PC, PS5, Xbox).

## Features

- ✨ **Add Games**: Create new game entries with name and platform
- 📝 **Edit Games**: Update existing game information
- 🗑️ **Delete Games**: Remove games from your collection
- 💾 **Local Storage**: All data persists in your browser's localStorage
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Platform Badges**: Color-coded badges for easy platform identification
  - PC (Purple)
  - PS5 (Blue)
  - Xbox (Green)

## Prerequisites

- Node.js v20+ installed
- npm v10+ installed

## Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install --legacy-peer-deps
```

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/games-list-pwa/` directory.

For production build:
```bash
ng build
```

## Project Structure

```
src/app/
├── components/
│   ├── game-list/          # Main list view component
│   └── game-form/          # Form component for add/edit
├── models/
│   └── game.model.ts       # Game and GameFormData interfaces
└── services/
    └── game.service.ts     # Game management service with localStorage
```

## Technologies Used

- **Angular 19.2**: Latest stable Angular framework with security patches
- **TypeScript 5.6**: Modern TypeScript with advanced type system
- **RxJS 7.8**: Reactive programming library
- **esbuild**: Ultra-fast JavaScript bundler
- **Angular CLI 21.1**: Latest CLI tools
- **CSS Grid**: Responsive layout
- **localStorage API**: Client-side data persistence

## What's New in Angular 19

This project has been upgraded to Angular 19.2.16, bringing numerous improvements:

- ⚡ **Faster Builds**: Using esbuild for significantly faster compilation
- 🔒 **Enhanced Security**: Latest security patches for XSS and XSRF vulnerabilities
- 📦 **Smaller Bundles**: Optimized bundle sizes for better performance
- 🛠️ **Modern Tooling**: Angular CLI 21 with improved developer experience
- 🚀 **Better Performance**: Framework optimizations and improved change detection
- ✅ **Native Node.js Support**: Works seamlessly with Node.js v20+ without legacy flags
- 🔥 **Hot Module Replacement (HMR)**: Enabled by default for faster development

## Security

This project uses Angular 19.2.16 which includes important security fixes:
- Fixed XSS vulnerabilities in SVG script attributes
- Fixed XSRF token leakage in HTTP client
- Patched SVG animation and MathML attribute vulnerabilities
- Remaining vulnerabilities are limited to development dependencies only

## Development Notes

- Uses the new `@angular-devkit/build-angular:application` builder
- Polyfills are now configured in `angular.json` instead of separate file
- TypeScript strict mode enabled for better code quality
- Components use `standalone: false` for NgModule compatibility
- HMR (Hot Module Replacement) is enabled for faster development

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or visit the [Angular CLI Documentation](https://angular.dev/tools/cli).
