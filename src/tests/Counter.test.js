import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import Counter from "../components/Counter";

test('renders counter message', () => {
  render(<Counter/>);
  const title = screen.getByText(/Counter/i)
  expect(title).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter/>);
  const number = screen.getByTestId(/count/i);
  expect(number).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  render(<Counter/>);
  userEvent.click(screen.getByText("+"));
  const number = screen.getByTestId(/count/i);
  expect(number).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  render(<Counter/>);
  userEvent.click(screen.getByText("-"));
  const number = screen.getByTestId(/count/i);
  expect(number).toHaveTextContent("-1");
});
