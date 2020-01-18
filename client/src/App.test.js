import React from 'react';
import ReactDOM from 'react-dom';
import { render, getByTestId, getByText } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import UserCard from './components/userCard';
import Users from './components/Users';
import {useDarkMode} from './hooks/useDarkMode';

test('renders without crashing', () => {
    render(<App />);
});

test ('Test if dark mode is working', () =>{
  const {container} = render(<App />);
  const darkMode = getByTestId(container, "dark_mode");
  expect(darkMode.textContent).toBe("Dark Mode On" || "Dark Mode Off");
  expect(darkMode.textContent).not.toBe("");
})
// test ('Test if users are loading', () =>{
//   const {container} = render(<UserCard />);
//   const user = getByTestId(container, "username");
//   expect(user.textContent).not.toBe("");
// })
