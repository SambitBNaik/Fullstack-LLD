import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component',()=>{
  test('renders the main heading and open modal button',()=>{
    render(<App/>);
    const heading= screen.getByText(/Custome modal/i);
    const openButton= screen.getByText(/Open modal/i);
    expect(heading).toBeInTheDocument();
    expect(openButton).toBeInTheDocument();
  })
})