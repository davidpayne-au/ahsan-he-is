This is a React app in typescript created by vite using the latest tailwindcss version 4. It's designed to be a simple and easy-to-use app that can be used as a starting point for any React app.

## Project structure
- `src/`: Contains the source code of the app.
  - `components/`: Contains reusable components. Each component should have its own directory with the following files:
    - `{{componentName}}.tsx`: The main component file.
    - `{{componentName}}.test.tsx`: The test file for the component.
    - `{{componentName}}.types.ts`: The types file for the component.
    - `index.ts`: The index file for the component.
    - `README.md`: The README file for the component.
  - `layouts/`: Contains layout components that define the structure of the app.
  - `pages/`: Contains page components.
  - `styles/`: Contains global styles and Tailwind CSS configuration.
  - `utils/`: Contains utility functions and helpers.
  - `hooks/`: Contains custom React hooks.
  - `context/`: Contains context providers for state management.
  - `assets/`: Contains static assets like images and icons.
  - `routes/`: Contains route definitions for the app.
  - `App.tsx`: The main app component.
  - `main.tsx`: The entry point of the app.
  - `index.css`: The main CSS file that imports Tailwind CSS styles.
- `public/`: Contains static files that are served directly.
- `index.html`: The main HTML file that serves the app.
- `package.json`: Contains project metadata and dependencies.
- `vite.config.ts`: Configuration file for Vite.
- this project is using Tailwind CSS version 4 so it does not need to additional tailwindcss config files.
- `tsconfig.json`: TypeScript configuration file.
- `.gitignore`: Specifies files and directories to ignore in Git.
- `README.md`: Documentation for the project.

## Code style and structure

- Use `npm` for package management.
- Use ESM not CommonJS
- When installing packages, use `npm install` instead of `yarn` or `pnpm`.
- When installing packages, prefer the most recent stable version using fetch to get the latest version.
- When exporting a module, use named exports instead of default exports.
- Use accessibility best practices, such as using semantic HTML elements and ARIA attributes
- Use meaningful names for variables and functions.
- The code is written in a way that it is easy to understand.
- The code is written in a way that it is easy to maintain.
- The code is written in a way that it is easy to test.
- Always check for updates to dependencies regularly.
- Use `npm run dev` to start the development server.
- Use `npm run build` to build the app for production.
- Use `npm run preview` to preview the production build.
- Use `npm run lint` to run the linter.
- Use `npm run format` to format the code.
- Use `npm run test` to run the tests.
- Use comments to explain complex logic or important areas of code.
- Use async/await for asynchronous operations.
- Use vitest for unit tests.
- Use arrow functions for event handlers and callbacks.
- Use arrow functions instead of functions.
- Use arrow functions instead of older React.FC syntax.
- Use functional components instead of class components.
- Use hooks for state management and side effects.
- Use TypeScript for type safety.
- Use `useState` and `useEffect` hooks for state and lifecycle management.
- Use `useContext` for context management.
- Use `useReducer` for complex state management.
- Use `useRef` for accessing DOM elements or storing mutable values.
- Use `useMemo` and `useCallback` for performance optimization.
- Use `useLayoutEffect` for synchronously running effects after DOM mutations.
- Use `import` instead of `require`.
- Use `export` instead of `module.exports`.
- Use `async/await` for asynchronous operations.
- Use `Promise.all` for parallel asynchronous operations.
- Use `try/catch` for error handling.
- Use `console.error` for error logging.
- Use `console.warn` for warnings.
- Use `console.info` for informational messages.
- Use `console.debug` for debugging messages.

Answer all questions concisely without apologies or filler phrases.
