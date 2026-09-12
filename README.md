# 🚀 DevStack - Ideal Development Stack Builder

A modern, interactive web application that helps developers explore frontend, backend, database, and tooling options to curate their ideal development stack for any project.

---

## 🛠️ Technologies Used

- **Frontend Library:** React (TypeScript / TSX)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Notifications:** React Toastify
- **Data Source:** JSON (Local Mock API)

---

## ✨ Key Features

1. **Interactive Tech Catalog:** Browse popular development technologies filtered by categories with clean card layouts, badges, and rating indicators.
2. **Real-Time Stack Builder:** Add or remove technologies from your active stack with instant visual feedback and dynamic state tracking.
3. **Responsive UI & Interactive Notifications:** Fully responsive layout with custom gradient themes, mobile-friendly design, and toast notifications for user actions.

---

## 💡 React Questions & Answers

### 1. What is JSX, and why is it used in React?
**JSX (JavaScript XML)** is a syntax extension for JavaScript that lets us write HTML-like elements inside JavaScript code. It is used in React because it makes building UI components much easier, more readable, and intuitive compared to plain JavaScript code (`React.createElement`).

### 2. What is the difference between props and state?
- **Props (Properties):** Read-only data passed from a parent component down to a child component. The child cannot modify props directly.
- **State:** Internal, managed data held within a component that can change over time (e.g., when a user interacts with the app). When state updates, the component re-renders automatically.

### 3. What does the `useState` hook do, and where did you use it in this project?
The `useState` hook allows a functional component to hold and manage its own internal state. 
- **In this project:** It was used in `App.tsx` to store the fetched list of technologies (`technologies`) and track the items added by the user to their active stack (`stack`).

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook handles side effects in React components, such as data fetching, subscriptions, or DOM manipulation.
- **Why it was needed:** We used `useEffect` to trigger an asynchronous `fetch()` call once when the component mounts, loading the `technologies.json` file without freezing or blocking the component rendering process.

### 5. Why does every item in a `.map()` list need a unique `key` prop?
React relies on the `key` prop to identify which items in a list have changed, been added, or removed. A unique key helps React update only the modified list items efficiently instead of re-rendering the entire list from scratch.

### 6. What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding specific elements or components based on certain logic or state conditions.
- **Example from this project:** In the `StackSidebar` component, we used conditional rendering to display an empty state message when the stack is empty, or the list of selected items when items exist:
```tsx
{stack.length === 0 ? (
  <div>Your Stack is empty</div>
) : (
  <div className="space-y-2">{/* Selected Items List */}</div>
)}