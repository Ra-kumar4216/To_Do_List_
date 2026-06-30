# To-Do List

A simple, no-nonsense to-do list app built with vanilla JavaScript — no frameworks, no libraries, just the DOM and localStorage doing exactly what they're supposed to do.

I built this early on while learning core JavaScript, and kept it intentionally minimal. The goal wasn't to make something flashy — it was to actually understand how DOM manipulation, event delegation, and browser storage work under the hood before reaching for a framework that hides all of it.

## What it does

- Add a task, and it shows up instantly in the list
- Click **Edit** on any task to update it in place — no separate edit screen, no page reload
- Click **Remove** to delete a task
- Refresh the page and your tasks are still there, because everything is persisted to `localStorage`

That's it. No accounts, no backend, no sync. Just a fast, local task list that works the moment you open the page.

## How it's built

- **`index.html`** — the structure: an input field, an add button, and an empty list that gets populated by JavaScript
- **`style.css`** — clean card-style list items with hover states and a simple green accent for the primary action
- **`script.js`** — all the logic:
  - `addTodo()` creates new list items dynamically, each with its own Edit and Remove buttons
  - `updateTodo()` handles both edit and delete through a single click listener on the list, using event delegation instead of attaching a listener to every button
  - `saveLocalTodos()`, `getLocalTodos()`, and `deleteLocalTodos()` manage reading and writing the task array to `localStorage` as JSON
  - On page load, `getLocalTodos()` re-renders everything that was saved in a previous session

The interesting part for me was the edit flow — instead of building a separate edit form, clicking "Edit" repurposes the same input box and add button, just swapping the button's label and binding it to update the existing task instead of creating a new one.

## Running it locally

No build step, no dependencies. Just clone it and open the file:

```bash
git clone https://github.com/Ra-kumar4216/To_Do_List_.git
cd "To_Do_List_/To Do List"
```

Then open `index.html` in your browser. That's the entire setup.

## Tech Stack

`HTML5` `CSS3` `JavaScript (Vanilla)` `localStorage API`

---

Built by [Ratan Kumar](https://github.com/Ra-kumar4216) · [Portfolio](https://ratankumar-portfolio.vercel.app) · [LinkedIn](https://www.linkedin.com/in/ratan-kumar-metha/)
