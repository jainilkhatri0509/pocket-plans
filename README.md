# Pocket Plans

A campus break planner built with HTML, CSS, React and JavaScript. Select your available time, budget per person, company and mood. The planner offers activities that meet all four choices and gives you a three-step checklist for each one.

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

