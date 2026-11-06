# Pocket Plans

**[Live website](https://pocket-plans-ten.vercel.app/)** · **[GitHub repository](https://github.com/jainilkhatri0509/pocket-plans)**

A campus break planner built with HTML, CSS, React and JavaScript. Select your available time, budget per person, company and mood. The planner offers activities that meet all four choices and gives you a three-step checklist for each one.

## Features

- Find a break by available time, budget per person, company and mood.
- Browse 21 campus activities, search by keyword and filter by mood.
- Save favourite plans and track their three-step checklists in the browser.
- Share a group poll with friends and view votes stored in Supabase.
- Use the responsive interface on a phone or laptop.

## Technology

| Technology | Used for |
| --- | --- |
| HTML | Page entry point and document structure |
| CSS | Layout, colours, responsive styling and plan tickets |
| React | Components, navigation and interactive screens |
| JavaScript | Activity matching, search, browser storage and API requests |
| Vite | Local development and production builds |
| Supabase / PostgreSQL | Group polls and votes |
| Vercel | Website hosting |

## Team responsibilities

The project was divided into three parts. The leader integrated the contributions into the runnable project on `main`.

| Assigned part | Responsibility | Integration pull request |
| --- | --- | --- |
| Participant 1 — Campus design | Campus illustration, shared icons and responsive page layout | [PR #1](https://github.com/jainilkhatri0509/pocket-plans/pull/1) |
| Participant 2 — Activity engine / group leader | Activity catalogue, activity cards and illustrations, matching logic and Supabase poll functions | [PR #2](https://github.com/jainilkhatri0509/pocket-plans/pull/2) |
| Participant 3 — Interactive planner | Planner controls, activity browsing, saved plans, checklist dialogs and group voting interface | [PR #3](https://github.com/jainilkhatri0509/pocket-plans/pull/3) |

## Project structure

```text
index.html          HTML entry point
package.json        Dependencies and npm commands
public/             Site icon and public assets
src/                React components, CSS and JavaScript logic
supabase/polls.sql   Database tables and poll functions
tests/              Activity matching tests
```

Run and deploy the project from the repository root. The original campus upload folder and planner ZIP are retained as submission records; the integrated application is in the root folders listed above.

## Run it

Install Node.js 22.12 or newer. In the folder containing `package.json`, run:

```sh
npm ci
npm run dev
```

Open the address printed by Vite. For a production check, run `npm test`, `npm run build` and `npm run preview`.

## Try it

1. Leave the controls at **30 minutes**, **Up to ₹50**, **With friends**, **Open to anything**. Select **Find my plan**. The first match is **The chai loop**, a 25-minute break estimated at ₹30 per person.
2. Tick a checklist item and save the plan. Close the ticket and open **Saved**. Reload and reopen the ticket to see the same progress.
3. Try **15 minutes**, **Free only**, **Just me**, **Social** to see the empty state. Change the mood to **Calm** to find a free, short break.
4. Open **All ideas** to browse 21 activities. Search for **garba**, **tiffin** or **library**, or choose a mood. For a short gap after a lab, try **10 minutes**, **Free only** and **Calm** in the planner.

## How it works

**Group poll** uses Supabase Postgres. Choose two or three activities, create a poll, then share its link. Friends vote without signing in. A browser can change its vote, the totals refresh every eight seconds, and the leading activity opens its checklist. Poll links close after 24 hours. Clearing browser storage or using a different browser creates a new voting identity.

The database setup is in `supabase/polls.sql`. Polls and ballots live in private tables. The browser uses a publishable key and three restricted database functions for creating a poll, reading totals and voting. The supplied defaults in `src/pollApi.js` point to the class project. To use another Supabase project, run the SQL migration there and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` before building. Use only a publishable key in the frontend.

- `index.html` loads the JavaScript entry point. React renders the planner, activity cards and break tickets.
- `src/activities.js` contains the activity catalogue. Costs are sample estimates per student. Adapt these to your campus canteen prices.
- `src/match.js` applies all four filters. Catalogue order determines which matching activity appears first.
- `src/storage.js` keeps saved IDs and checklist progress in this browser. Each device has its own pocket.
- `src/CampusMap.jsx` and `src/PlanArt.jsx` draw the original campus illustrations. Fontsource packages serve the fonts with the app.

## Deploy from GitHub

In Vercel, import the completed repository, choose **Vite**, use the repository root, install with `npm ci`, build with `npm run build` and publish `dist`. No environment variables are required. If Pocket Plans already has a live Vercel project in your team, connect the repository to that project under **Settings → Git**. Use `main` as the production branch.

Before submission, open the production URL in a private browser window and test one plan. Submit the public repository URL and the working production URL in the Google Form.

