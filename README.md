# Game List PWA

A Progressive Web Application for managing your video game collection. Built with Angular 6, this app allows you to track games across different platforms (PC, PS5, Xbox).

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

**Note**: The project uses `--openssl-legacy-provider` flag to ensure compatibility with Node.js v20+.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

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

- **Angular 6.1**: Frontend framework
- **TypeScript 2.7**: Programming language
- **RxJS 6.2**: Reactive programming library
- **CSS Grid**: Responsive layout
- **localStorage API**: Client-side data persistence

## Known Compatibility Notes

This project was built with Angular 6 and has been configured to work with modern Node.js versions (v20+):
- Uses `sass` instead of deprecated `node-sass`
- Configured with `--openssl-legacy-provider` for webpack compatibility
- RxJS locked to version 6.2.2 for TypeScript 2.7 compatibility

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
