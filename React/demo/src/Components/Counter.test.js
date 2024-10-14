    import react from 'react';
    import {render, screen, fireEvent} from '@testing-library/react';
    import '@testing-library/jest-dom';

    import Counter from './Counter';


    describe('Counter Counter Component',()=>{
        test('renders counter component',()=>{
            render(<Counter/>);

            expect(screen.getByText(/Counter/i)).toBeInTheDocument();

            expect(screen.getByText(/The count value is 0/i)).toBeInTheDocument();

            const incrementButton= screen.getByText('Increment Value')
            fireEvent.click(incrementButton);
            

            expect(screen.getByText(/The count value is 1/i)).toBeInTheDocument();

        });


        test('render decrement count value',()=>{
            render(<Counter/>);

            const incrementButton=screen.getByText('Increment Value');

            fireEvent.click(incrementButton);

            const decrementButton=screen.getByText('Decrement Value');

            fireEvent.click(decrementButton);

            expect(screen.getByText(/The count value is 0/i)).toBeInTheDocument();
        });


        test('check for the reset',()=>{
            render(<Counter/>);

            const incrementButton=screen.getByText('Increment Value');

            fireEvent.click(incrementButton);

            const resetValue=screen.getByText('Reset');

            fireEvent.click(resetValue);

            expect(screen.getByText(/The count value is 0/i)).toBeInTheDocument();

        });
    });


