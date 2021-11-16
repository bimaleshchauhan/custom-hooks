import { render, screen } from '@testing-library/react';
import App from './App';
import * as ApiService from './api/user'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// test('fetch data successfully', async() => {
//   const data = await ApiService.getuser();
//   expect(data.ok).toBe(true)
// });

test('check fetched data correct', async() => {
  const data = await ApiService.getuser();
  console.log("test data",data)
  expect(data.page).toBe(1)
});
