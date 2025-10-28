# TaskMaster Pro - React Task Manager Application

A fully functional, responsive React application built with Vite, React hooks, and Tailwind CSS. This project demonstrates modern front-end development practices including component architecture, state management, API integration, and responsive design.

## 🚀 Live Demo

**Deployed URL: https://react-js-jsx-and-css-mastering-fron-ten-kappa.vercel.app

## 📋 Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setup Instructions](#setup-instructions)
- [Usage Guide](#usage-guide)
- [Component Documentation](#component-documentation)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Assignment Requirements](#assignment-requirements)
- [Author](#author)

## ✨ Features

### Task Management
- ✅ Add new tasks with instant feedback
- ✅ Mark tasks as completed/uncompleted
- ✅ Delete tasks with confirmation
- ✅ Filter tasks by status (All, Active, Completed)
- ✅ Persistent storage using localStorage
- ✅ Real-time task statistics and counters

### API Integration
- ✅ Fetches data from JSONPlaceholder API (100 blog posts)
- ✅ Responsive grid layout for data display
- ✅ Loading states with animated spinner
- ✅ Error handling with retry functionality
- ✅ Search functionality across titles and content
- ✅ Pagination with page navigation

### Theme System
- ✅ Light/Dark mode toggle
- ✅ Persistent theme preference
- ✅ Smooth transitions between themes
- ✅ Context-based theme management

### Responsive Design
- ✅ Mobile-first approach
- ✅ Tablet and desktop optimized layouts
- ✅ Touch-friendly interactions
- ✅ Adaptive navigation

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Hooks** - useState, useEffect, useContext, custom hooks
- **Context API** - Global state management
- **JSONPlaceholder API** - Mock REST API for testing
- **localStorage** - Client-side data persistence

## 📁 Project Structure

```
src/
├── components/
│   ├── Button.jsx           # Reusable button component with variants
│   ├── Card.jsx             # Card container component
│   ├── Navbar.jsx           # Navigation bar with theme toggle
│   ├── Footer.jsx           # Footer with links
│   ├── Layout.jsx           # Layout wrapper component
│   ├── TaskManager.jsx      # Task management component
│   └── ApiDataDisplay.jsx   # API data display component
├── context/
│   └── ThemeContext.jsx     # Theme context provider
├── hooks/
│   └── useLocalStorage.jsx  # Custom localStorage hook
├── App.jsx                  # Main application component
├── App.css                  # Application styles
└── main.jsx                 # Application entry point
```

## 🔧 Setup Instructions

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn package manager
- Git
- Modern web browser (Chrome, Firefox, Safari, or Edge)

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone [[your-github-classroom-repo-url](https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-terrence3333.git)]
   cd [[repository-name](https://github.com/PLP-MERN-Stack-Development/react-js-jsx-and-css-mastering-front-end-development-terrence3333.git)]
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📖 Usage Guide

### Managing Tasks

1. **Add a Task**
   - Type your task in the input field
   - Click "Add Task" button or press Enter
   - Task appears in the list below

2. **Complete a Task**
   - Click the checkbox next to the task
   - Task text will show strikethrough styling
   - Task moves to "Completed" filter

3. **Delete a Task**
   - Click the red "Delete" button next to any task
   - Task is permanently removed

4. **Filter Tasks**
   - Click "All" to view all tasks
   - Click "Active" to view uncompleted tasks
   - Click "Completed" to view completed tasks
   - Filter buttons show count for each category

### Exploring API Data

1. **View Blog Posts**
   - Scroll to the "API Data - Blog Posts" section
   - Posts are displayed in a responsive grid

2. **Search Posts**
   - Use the search bar to filter posts by title or content
   - Results update in real-time

3. **Navigate Pages**
   - Use "Previous" and "Next" buttons to navigate
   - Current page and total pages displayed
   - 6 posts per page

### Theme Switching

- Click the sun/moon icon in the navbar
- Theme preference is saved automatically
- Works across all components

## 🧩 Component Documentation

### Button Component

**Props:**
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `size`: 'sm' | 'md' | 'lg' (default: 'md')
- `disabled`: boolean (default: false)
- `onClick`: function
- `children`: React node
- `className`: string (additional classes)

**Usage:**
```jsx
<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>
```

### Card Component

**Props:**
- `title`: string (optional)
- `children`: React node
- `className`: string (additional classes)

**Usage:**
```jsx
<Card title="My Card">
  <p>Card content goes here</p>
</Card>
```

### TaskManager Component

Self-contained component with internal state management.

**Features:**
- Custom `useLocalStorage` hook for persistence
- Task CRUD operations
- Filter functionality
- Task statistics

### ApiDataDisplay Component

**Features:**
- Async data fetching with useEffect
- Loading and error states
- Search functionality
- Pagination logic

## 🔌 API Integration

**Endpoint:** `https://jsonplaceholder.typicode.com/posts`

**Response Format:**
```json
{
  "userId": 1,
  "id": 1,
  "title": "Post title",
  "body": "Post content..."
}
```

**Implementation Details:**
- Fetches all 100 posts on component mount
- Handles loading state with spinner
- Handles error state with retry option
- Client-side search and pagination

## 📸 Screenshots




## ✅ Assignment Requirements

### Task 1: Project Setup ✓
- [x] Created React application using Vite
- [x] Installed and configured Tailwind CSS
- [x] Set up project structure with components and utility folders
- [x] Configured routing structure

### Task 2: Component Architecture ✓
- [x] Button component with variants (primary, secondary, danger)
- [x] Card component for content display
- [x] Navbar component for navigation
- [x] Footer component with links
- [x] Layout component including Navbar and Footer
- [x] Props-based customization

### Task 3: State Management and Hooks ✓
- [x] TaskManager component implemented
- [x] Add new tasks functionality
- [x] Mark tasks as completed
- [x] Delete tasks functionality
- [x] Filter tasks (All, Active, Completed)
- [x] useState for component state
- [x] useEffect for side effects
- [x] useContext for theme management
- [x] Custom useLocalStorage hook

### Task 4: API Integration ✓
- [x] Fetch data from JSONPlaceholder API
- [x] Display data in grid layout
- [x] Loading state implementation
- [x] Error state handling
- [x] Pagination functionality
- [x] Search feature for filtering results

### Task 5: Styling with Tailwind CSS ✓
- [x] Responsive design (mobile, tablet, desktop)
- [x] Theme switcher (light/dark mode)
- [x] Tailwind utility classes throughout
- [x] Custom animations and transitions

## 🎓 Learning Outcomes

This project demonstrates proficiency in:

- **React Fundamentals**: Component composition, props, and lifecycle
- **Hooks Mastery**: useState, useEffect, useContext, and custom hooks
- **State Management**: Local state, global state with Context API
- **API Integration**: Async operations, error handling, loading states
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern CSS**: Utility-first framework and dark mode implementation
- **Code Organization**: Clean architecture and best practices
- **User Experience**: Smooth animations, intuitive interactions

## 🚀 Deployment

This application can be deployed to:

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

**Deployed URL:** [Add your deployment URL here after deploying]

## 🐛 Known Issues

- None at this time

## 🔮 Future Enhancements

- [ ] Add task categories/tags
- [ ] Implement task due dates
- [ ] Add task priority levels
- [ ] Export tasks to CSV
- [ ] User authentication
- [ ] Cloud synchronization
- [ ] Task sharing functionality
- [ ] Advanced filtering options

## 📝 Notes

- All tasks are stored in browser localStorage
- API data is fetched from JSONPlaceholder (mock data)
- Theme preference persists across sessions
- Application is fully keyboard accessible


# Project Setup Guide

Follow these steps to set up the TaskMaster Pro application in VS Code.

## 📁 Folder Structure

Create the following folder structure in your project:

```
taskmaster-pro/
├── public/
├── src/
│   ├── components/
│   │   ├── ApiDataDisplay.jsx
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Footer.jsx
│   │   ├── Layout.jsx
│   │   ├── Navbar.jsx
│   │   └── TaskManager.jsx
│   ├── context/
│   │   └── ThemeContext.jsx
│   ├── hooks/
│   │   └── useLocalStorage.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Step-by-Step Setup

### Step 1: Create Project Directory

```bash
mkdir taskmaster-pro
cd taskmaster-pro
```

### Step 2: Create All Folders

```bash
mkdir public src
cd src
mkdir components context hooks
cd ..
```

### Step 3: Copy Files

Copy each file from the artifacts into their respective locations:

#### Root Level Files:
1. Copy `package.json` to root
2. Copy `.gitignore` to root
3. Copy `.eslintrc.cjs` to root
4. Copy `index.html` to root
5. Copy `vite.config.js` to root
6. Copy `tailwind.config.js` to root
7. Copy `postcss.config.js` to root
8. Copy `README.md` to root

#### src/ Files:
1. Copy `App.jsx` to `src/`
2. Copy `App.css` to `src/`
3. Copy `index.css` to `src/`
4. Copy `main.jsx` to `src/`

#### src/components/ Files:
1. Copy `Button.jsx` to `src/components/`
2. Copy `Card.jsx` to `src/components/`
3. Copy `Navbar.jsx` to `src/components/`
4. Copy `Footer.jsx` to `src/components/`
5. Copy `Layout.jsx` to `src/components/`
6. Copy `TaskManager.jsx` to `src/components/`
7. Copy `ApiDataDisplay.jsx` to `src/components/`

#### src/context/ Files:
1. Copy `ThemeContext.jsx` to `src/context/`

#### src/hooks/ Files:
1. Copy `useLocalStorage.jsx` to `src/hooks/`

### Step 4: Install Dependencies

```bash
npm install
```

This will install all required packages:
- React & React DOM
- Vite
- Tailwind CSS
- PropTypes
- And all dev dependencies

### Step 5: Start Development Server

```bash
npm run dev
```

The application will open at `http://localhost:5173`

## ✅ Verification Checklist

After setup, verify that:

- [ ] All files are in their correct folders
- [ ] No import errors in the console
- [ ] Application runs without errors
- [ ] Dark/Light mode toggle works
- [ ] You can add, complete, and delete tasks
- [ ] Tasks persist after page refresh
- [ ] API data loads successfully
- [ ] Search and pagination work
- [ ] Application is responsive on mobile

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🐛 Troubleshooting

### Problem: Module not found errors

**Solution:** Make sure all imports match the file structure exactly. Check that:
- File names are correct (case-sensitive)
- File extensions are included (.jsx)
- Relative paths are correct (../ for parent directory)

### Problem: Tailwind styles not working

**Solution:** 
1. Verify `tailwind.config.js` is in root
2. Check that `index.css` imports Tailwind directives
3. Restart the dev server

### Problem: Dark mode not working

**Solution:**
1. Check `tailwind.config.js` has `darkMode: 'class'`
2. Verify ThemeContext is properly imported in App.jsx
3. Check that ThemeProvider wraps the entire app

### Problem: localStorage not persisting

**Solution:**
1. Check browser console for errors
2. Verify useLocalStorage hook is correctly imported
3. Make sure browser allows localStorage

## 📝 Next Steps

1. Take screenshots of your application for the README
2. Deploy to Vercel/Netlify/GitHub Pages
3. Update README.md with:
   - Your deployment URL
   - Your name and information
   - Actual screenshots

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)
- [Vite Documentation](https://vitejs.dev)
- [MDN Web Docs](https://developer.mozilla.org)

## 💡 Tips

- Use VS Code extensions:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - ESLint
  - Prettier

- Keep the dev server running while coding for hot module replacement
- Check browser console for any errors or warnings
- Test on different screen sizes using browser dev tools

---

**Happy Coding! 🚀**
