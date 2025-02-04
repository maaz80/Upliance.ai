# CounterComp

CounterComp is a React-based web application built using TypeScript and Vite. This project includes multiple components with unique functionalities, such as a counter, a rich text editor, a user form, and a navbar that displays stored user data. The website utilizes Material-UI for styling and animations with react-spring.

## Features

1. **Counter Component**
   - A simple counter with increment, decrement, and reset functionality.
   - Background color changes dynamically based on the count value using react-spring animations.
   - Data is stored in `localStorage` to persist even after page reloads.

2. **Rich Text Editor**
   - A text editor built with ReactQuill.
   - Supports formatting, rich text editing, and content persistence using `localStorage`.

3. **User Form**
   - Collects user details such as name, address, email, and phone number.
   - Saves data in `localStorage` for persistence.
   - Generates a unique ID for each user.
   - Warns users if they try to leave the page with unsaved changes.
   - Shows a success message when data is saved.

4. **Navbar**
   - Displays stored user data (name and phone number) if available.
   - Shows 'Guest User' if no data is found.
   - Uses `localStorage` to fetch and display user information.

## Technologies Used

- **React**: Frontend framework for building UI components.
- **TypeScript**: Provides static typing for better code maintainability.
- **Vite**: Fast build tool for developing modern web applications.
- **Material-UI**: Pre-styled components for better UI/UX.
- **React-Quill**: A WYSIWYG editor for rich text formatting.
- **React-Spring**: Animation library for smooth UI transitions.
- **UUID**: Generates unique IDs for user records.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Installation and Setup

To run this project locally, follow these steps:

### 1. Clone the Repository
```sh
git clone https://github.com/your-repository/countercomp.git
cd countercomp
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Development Server
```sh
npm run dev
```
This will start the development server, and you can access the application at `http://localhost:5173/`.

### 4. Build for Production
```sh
npm run build
```
This command compiles the project for production use.

### 5. Preview the Production Build
```sh
npm run preview
```
This will serve the built project locally to test before deployment.

## Project Structure
```
|-- src/
|   |-- components/
|   |   |-- Counter.tsx
|   |   |-- Navbar.tsx
|   |   |-- RichTextEditor.tsx
|   |   |-- UserForm.tsx
|   |-- App.tsx
|-- public/
|-- package.json
|-- tsconfig.json
|-- vite.config.ts
```

## Deployment

You can deploy the app using platforms like Vercel, Netlify, or GitHub Pages.

## Author
Created by **Maaz Shakeel**

## License
This project is licensed under the MIT License.

