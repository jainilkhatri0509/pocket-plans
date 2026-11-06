# Part 2 — Activity Engine

**Team member:** Jainil Khatri

This folder contains the Part 2 submission for Pocket Plans: the activity catalogue, activity cards and illustrations, matching logic, and Supabase poll functions.

| File | Purpose |
| --- | --- |
| `src/activities.js` | Campus activity catalogue with time, cost, mood and checklist data |
| `src/ActivityCard.jsx` | Activity cards used by the website |
| `src/PlanArt.jsx` | Activity illustrations |
| `src/match.js` | Matching activities to the selected preferences |
| `src/pollApi.js` | Requests to the Supabase poll functions |
| `supabase/polls.sql` | Database tables and functions for creating polls and recording votes |
| `tests/match.test.js` | Tests for activity matching |
| `src/App.jsx` | The intermediate activity catalogue page from this submission |

## Running the complete website

This folder is a record of the Part 2 submission. It depends on files from the other parts and is not a standalone application. The complete integrated website, including the final `src/App.jsx`, is in the repository root.

Run these commands from the repository root, where `package.json` is located:

```sh
npm ci
npm run dev
```

[Live website](https://pocket-plans-ten.vercel.app/) · [Part 2 pull request](https://github.com/jainilkhatri0509/pocket-plans/pull/2)
