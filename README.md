
# ✅ My Todo App

### A simple and modern task management application

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Create React App](https://img.shields.io/badge/Create_React_App-5.x-09D3AC?style=for-the-badge&logo=create-react-app&logoColor=white)](https://create-react-app.dev/)
[![React Icons](https://img.shields.io/badge/React_Icons-5.x-E91E63?style=for-the-badge)](https://react-icons.github.io/react-icons/)

---

## ✨ Overview

**My Todo App** is a clean and responsive todo application that helps users manage daily tasks with add, edit, delete, and completion features. Tasks can include optional due dates, and all data is automatically saved to `localStorage` so your list persists across page refreshes.

Built with React 18 and Create React App, the project focuses on core React concepts — component composition, lifting state up, controlled forms, and side effects with `useEffect`.

---

## 🚀 Features

| Feature | Description |
|---|---|
| ➕ **Add Task** | Create new todos with description and optional due date & time |
| ✏️ **Edit Task** | Update existing todos; form auto-opens in edit mode |
| 🗑️ **Delete Task** | Remove todos from the list with a single click |
| ✅ **Toggle Complete** | Mark todos as done/undone by double-clicking |
| 👁️ **Form Toggle** | Show or hide the add task form from the header |
| 💾 **Local Persistence** | Todos are saved to `localStorage` on every change |
| 📱 **Responsive** | Mobile-friendly layout with adaptive styling |
| 🎨 **Modern UI** | Gradient background, card layout, and smooth animations |

---

## 🛠️ Tech Stack

### Core
- **[React 18](https://react.dev/)** — UI library with hooks-based state management
- **[Create React App](https://create-react-app.dev/)** — Zero-config build tooling
- **[React DOM](https://react.dev/)** — Rendering with `createRoot` API

### UI & Styling
- **Custom CSS** — Gradient themes, animations, and responsive breakpoints
- **[Google Fonts (Poppins)](https://fonts.google.com/specimen/Poppins)** — Modern typography
- **[react-icons](https://react-icons.github.io/react-icons/)** — Edit and delete icons (`TiEdit`, `TiDelete`)

### Data
- **localStorage** — Client-side persistence for todo list
- **Initial seed data** — Sample todos loaded on first visit

---

## 📁 Project Structure

```
src/
├── components/
│   ├── AddTask.jsx       # Form to add and edit todos
│   ├── Header.jsx        # App title and form visibility toggle
│   └── TodoList.jsx      # Todo list with edit, delete, and complete actions
│
├── helper/
│   └── Data.jsx          # Initial sample todo data
│
├── pages/
│   └── Home.jsx          # Main page — state management and component coordination
│
├── App.js                # Root component
├── App.css               # Global styles and component styling
└── index.js              # React DOM entry point
```

---

## 🏗️ State Architecture

```
Home (pages/Home.jsx)
├── isFormVisible         # Controls add/edit form visibility
├── editingTodo           # Currently selected todo for editing (null when adding)
└── todos                 # Array of todo objects
    └── { id, text, day, isDone }

localStorage
└── "todos" key           # JSON-serialized todo array (synced via useEffect)
```

| State | Managed In | Description |
|---|---|---|
| `todos` | `Home.jsx` | Main todo list; initialized from `localStorage` or seed data |
| `editingTodo` | `Home.jsx` | Tracks which todo is being edited |
| `isFormVisible` | `Home.jsx` | Toggles add task form visibility |
| `todo`, `todoDate` | `AddTask.jsx` | Local form input state |

---

## ⚙️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) ≥ 14
- [Yarn](https://yarnpkg.com/) (recommended) — or npm

### 1. Clone the repository

```bash
git clone https://github.com/cankurtduygu/todo-app-react-vs2.git
cd todo-app-react-vs2
```

### 2. Install dependencies

```bash
yarn install
```

### 3. Start the development server

```bash
yarn start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for production

```bash
yarn build
```

The optimized build will be output to the `build/` folder.

### 5. Run tests

```bash
yarn test
```

---

## 🧩 How It Works

### Adding a Todo

1. Fill in the task description (required) and optional due date.
2. Click **Submit** — a new todo is prepended to the list with `isDone: false`.
3. `useEffect` in `Home.jsx` saves the updated list to `localStorage`.

### Editing a Todo

1. Click the edit icon on any todo.
2. The form opens with pre-filled values and switches to **Update** mode.
3. Submit updates the matching todo by `id`; cancel clears edit state.

### Completing a Todo

Double-click any todo item to toggle its `isDone` status. Completed todos get a strikethrough style and muted background.

### Deleting a Todo

Click the delete icon. The todo is removed via `filter()` and the list is persisted.

---

## 🌐 Deployment

This app is a static React SPA and can be deployed to **Netlify**, **Vercel**, or **GitHub Pages**:

```bash
yarn build
```

Deploy the contents of the `build/` folder to your hosting provider of choice.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feat/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is open source and available for educational purposes.

---

<p align="center">
  Made with ❤️ and React
  <br />
  ⭐ <strong>Star this repo if you find it useful!</strong>
</p>
