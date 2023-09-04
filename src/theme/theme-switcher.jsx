// import { ChangeEventHandler } from 'react';
// import styles from './theme.css';

// const setDark = () => {
//   localStorage.setItem("theme", "dark");
//   document.documentElement.setAttribute("data-theme", "dark");
// };

// const setLight = () => {
//   localStorage.setItem("theme", "light");
//   document.documentElement.setAttribute("data-theme", "light");
// };

// const storedTheme = localStorage.getItem("theme");

// const prefersDark =
//   window.matchMedia &&
//   window.matchMedia("(prefers-color-scheme: dark)").matches;

// const defaultDark =
//   storedTheme === "dark" || (storedTheme === null && prefersDark);

// if (defaultDark) {
//   setDark();
// }

// const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
//   if (e.target.checked) {
//     setDark();
//   } else {
//     setLight();
//   }
// };

// const DarkMode = () => {
//   return (
//     <div className="toggle-theme-wrapper">
//       <span>☀️</span>
//       <label className="toggle-theme" htmlFor="checkbox">
//         <input
//           type="checkbox"
//           id="checkbox"
//           onChange={toggleTheme}
//           defaultChecked={defaultDark}
//         />
//         <div className="slider round"></div>
//       </label>
//       <span>🌒</span>
//     </div>
//   );
// };

// export default DarkMode;

// // import { useState, useEffect } from 'react';

// // export default function Layout({ children }) {
// //   const [currentMode, setCurrentMode] = useState('light');
// //   const [isChecked, setIsChecked] = useState(false);
// //   useEffect(() => {
// //     if (localStorage.getItem('mode') === 'dark') {
// //       setCurrentMode('dark');
// //       setIsChecked(true);
// //     }
// //   }, []);

// //   useEffect(() => {
// //     const theme = currentMode === 'light' ? lightTheme : darkTheme;
// //     Object.keys(theme).forEach((key) => {
// //       const value = theme[key];
// //       document.documentElement.style.setProperty(key, value);
// //     });
// //   }, [currentMode]);

// //   const toggleTheme = () => {
// //     const newMode = currentMode === 'light' ? 'dark' : 'light';
// //     setIsChecked(!isChecked);
// //     setCurrentMode(newMode);
// //     localStorage.setItem('mode', newMode);
// //   };
// // }
