# Welcome Bonus

Responsive card for a welcome bonus offer, where a visitor can rate the offer once with five stars. Built in January 2022 as a take-home assignment.

**Live demo:** [test-task-welcome-bonus-react.vercel.app](https://test-task-welcome-bonus-react.vercel.app)

## Features

- The card shows a top choice label with the logo, the bonus offer, an 18+ notice, the score, a Get Bonus button and a visit link. Both links are placeholders (`/#`).
- The five stars are radio inputs styled with CSS: they light up on hover, and the chosen star fills together with the ones before it.
- The first vote adds one to the Rated by counter (shown with thousands separators), shows a thank-you alert and disables the stars.
- The grid rearranges at 992, 768 and 480 px. Below 480 px the card shows a shorter offer, a 9.7 score instead of 9.9 and five preselected stars instead of four.

## Tech stack

- **Framework:** React 17, TypeScript 4
- **Styling:** SCSS (Dart Sass 1), Manrope from Google Fonts
- **Tooling:** Create React App 5 with react-app-rewired, ESLint 8 (Airbnb config, typescript-eslint, simple-import-sort), Stylelint 14, Prettier 2
- **Hosting:** Vercel

## Getting started

Requires Node.js 16 or 18 and Yarn 1.

```bash
git clone https://github.com/androfficial/react-welcome-bonus.git
cd react-welcome-bonus
yarn install
yarn start
```

## Scripts

| Command | Description |
| --- | --- |
| `yarn start` | Starts the development server |
| `yarn build` | Builds the production bundle into `build/` |
| `yarn eslint` | Lints the `.ts` and `.tsx` files |
| `yarn eslint:fix` | Lints the `.ts` and `.tsx` files and fixes what it can |
| `yarn stylelint` | Lints the SCSS files in `src/styles/` |
| `yarn stylelint:fix` | Lints the SCSS files and fixes what it can |
| `yarn format` | Checks formatting with Prettier |
| `yarn format:fix` | Formats the files with Prettier |

## Project structure

```text
src/
  api/          submitSelectedRating: POST helper for the vote, not called yet
  assets/       logo and icons, re-exported from one index
  components/   App: the page shell
  pages/        Bonus: the card and the voting logic
  services/     formatNumber: thousands separators
  styles/       SCSS: reset, buttons and card styles
  types/        Create React App type references
```

## Notes

- Votes stay in the page. `submitSelectedRating` in `src/api/api.ts` is prepared to POST the rating as JSON once a backend exists.
- The same assignment in vanilla JavaScript is [welcome-bonus](https://github.com/androfficial/welcome-bonus).
