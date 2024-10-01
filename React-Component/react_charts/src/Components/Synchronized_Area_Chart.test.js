// import react from 'react';
// import {render,screen} from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
// import Synchronized_Area_Chart from './Synchronized_Area_Chart';


// class ResizeObserver{
//     observe(){}
//     unobserve(){}
//     disconnect(){}
// }

// window.ResizeObserver= ResizeObserver;

// describe('Synchronized_Area_Chart component',()=>{
//     test('renders the component correctly',()=>{
//         render(<Synchronized_Area_Chart/>);

//         expect(screen.getByText(/A demo of Synchronyzed AreaCharts/i)).toBeInTheDocument();

//         const svgElements= screen.getAllByRole('img',{hidden: true});
//         expect(svgElements.length).toBe(2);

//         expect(screen.getAllByText(/Maybe some other content/i)).toBeInTheDocument();
//     });
// });


import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Synchronized_Area_Chart from './Synchronized_Area_Chart';

// Mock ResizeObserver for recharts
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}
window.ResizeObserver = ResizeObserver;

describe('Synchronized_Area_Chart component', () => {
  test('renders the component correctly', () => {
    render(<Synchronized_Area_Chart />);

    // Check if the heading exists
    expect(screen.getByText(/A demo of Synchronyzed AreaCharts/i)).toBeInTheDocument();

    // Check if the SVG (chart) elements are rendered twice
    const svgElements = screen.getAllByRole('img', { hidden: true });
    expect(svgElements.length).toBe(2);

    // Check for any static text content
    expect(screen.getByText(/Maybe some other content/i)).toBeInTheDocument();
  });
});
