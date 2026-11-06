# 🎒 Pocket Plans

> **Your campus break planner** — find a little detour that fits your time, pocket money, company and mood.

[![Live Site](https://img.shields.io/badge/Live%20Site-pocket--plans--ten.vercel.app-brightgreen?style=flat-square)](https://pocket-plans-ten.vercel.app/)
[![Built with React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![Hosted on Vercel](https://img.shields.io/badge/Hosted%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)
[![Database](https://img.shields.io/badge/Database-Supabase-3ECF8E?style=flat-square&logo=supabase)](https://supabase.com)

**🔗 Live website:** [pocket-plans-ten.vercel.app](https://pocket-plans-ten.vercel.app/)

---

## ✨ What is Pocket Plans?

Students often have short breaks between lectures but spend half that time deciding what to do. **Pocket Plans** solves that.

Tell it how much time you have, your budget, who you are with, and your mood — and it instantly suggests a matching campus activity with a step-by-step checklist. Friends can also vote on a plan together using a live group poll link.

---

## 🚀 Features

| Feature | Description |
|---|---|
| 🧭 **Break Planner** | Filter by time, budget (₹), company and mood to find matching breaks |
| 📚 **Activity Library** | Browse all 21 campus ideas, search by keyword, filter by mood |
| 🔖 **Saved Plans** | Bookmark your favourite activities — saved in your browser |
| ✅ **Checklists** | Each activity has step-by-step guidance with progress tracking |
| 🗳️ **Group Polls** | Shortlist 2–3 ideas and share a live voting link with your group |
| 📱 **Responsive** | Works on both mobile and desktop |

---

## 🛠️ Tech Stack

| Technology | Role |
|---|---|
| **HTML** | Page structure and entry point |
| **CSS** | Styling, layout and responsive design |
| **React 19** | Component-based UI |
| **JavaScript** | Matching logic, search, storage and API calls |
| **Vite** | Dev server and production build |
| **Supabase / PostgreSQL** | Group polls and real-time vote storage |
| **Vercel** | Hosting and automatic deployments |
| **GitHub** | Version control and pull request workflow |

---

## 👥 Team

| Member | Contribution | PR |
|---|---|---|
| **Jetissha Gautam** | Campus design, illustrations, icons, responsive layout | [PR #1](https://github.com/jainilkhatri0509/pocket-plans/pull/1) |
| **Jainil Khatri** | Activity catalogue, cards, matching logic, Supabase integration | [PR #2](https://github.com/jainilkhatri0509/pocket-plans/pull/2) |
| **Yashvardhan Bafna** | Planner controls, browsing, saved plans, checklists, group voting UI | [PR #3](https://github.com/jainilkhatri0509/pocket-plans/pull/3) |

---

## 📂 Project Structure

```text
pocket-plans/
├── index.html              ← HTML entry point
├── package.json            ← Dependencies and scripts
├── public/
│   └── pocket.svg          ← Site icon
├── src/
│   ├── App.jsx             ← Main app, routing and state
│   ├── Planner.jsx         ← Break planner form
│   ├── ActivityCard.jsx    ← Individual activity card
│   ├── PlanDialog.jsx      ← Break ticket modal with checklist
│   ├── GroupPoll.jsx       ← Group poll creation and voting
│   ├── CampusMap.jsx       ← Hero campus map illustration
│   ├── PlanArt.jsx         ← Activity artwork
│   ├── Icons.jsx           ← SVG icon set
│   ├── activities.js       ← Activity catalogue (21 ideas)
│   ├── match.js            ← Filtering / matching logic
│   ├── storage.js          ← LocalStorage read/write
│   ├── pollApi.js          ← Supabase poll API calls
│   ├── design.css          ← Global design system
│   └── planner.css         ← Planner component styles
├── supabase/
│   └── polls.sql           ← Database setup and RPC functions
└── tests/                  ← Activity matching tests
```

---

## ⚙️ Running Locally

**Requirements:** Node.js 22.12+ and Git

```sh
# 1. Clone the repository
git clone https://github.com/jainilkhatri0509/pocket-plans.git
cd pocket-plans

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

**Production build:**
```sh
npm run build
npm run preview
```

**Run tests:**
```sh
npm test
```

---

## 🗄️ Database (Group Polls)

The group poll feature uses **Supabase** (PostgreSQL). The database schema and RPC functions are in `supabase/polls.sql`.

> ⚠️ Only use the **anon/publishable key** in the frontend. Never put database passwords or service role keys in client-side code.

---

## 🌐 Deployment

Hosted on **Vercel** at [pocket-plans-ten.vercel.app](https://pocket-plans-ten.vercel.app/).  
Connected to this GitHub repo — every push to `main` triggers an automatic deployment.

- **Build command:** `npm run build`
- **Output directory:** `dist`

---

## 📝 Notes

- Activity costs are **estimates per person** — actual prices may vary.
- Saved plans and checklists are stored in **your browser only** — they don't sync across devices.
- Group polls use a browser identity (not a login). Clearing storage or switching browsers creates a new voting identity.
- Polls expire after **24 hours** and vote totals refresh every **8 seconds**.
