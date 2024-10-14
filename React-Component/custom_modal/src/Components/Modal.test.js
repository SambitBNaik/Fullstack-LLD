import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component',()=>{
    const handleCloseModal=jest.fn();
    const content="Test Modal Content";

    beforeEach(()=>{
        handleCloseModal.mockClear();
    });

    test('does not render when showmodal is false',()=>{
        render(<Modal showModal={false} content={content} handleCloseModal={handleCloseModal}/>);
        const modalElement= screen.queryByText(content);
        expect(modalElement).toBeNull();
    });

    test('renders when showModal is true',()=>{
        render(<Modal showModal={true} content={content} handleCloseModal={handleCloseModal}/>);
        const modalElement= screen.getByText(content);
        expect(modalElement).toBeInTheDocument();
    });

    test('calls handleCloseModal when backdrop is clicked',()=>{
        render(<Modal showModal={true} content={content} handleCloseModal={handleCloseModal}/>);
        const backdrop = screen.getByRole('dialog').parentElement;
        fireEvent.click(backdrop);
        expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });

    test('does not call handleCloseModal when modal content is clicked',()=>{
        render(<Modal showModal={true} content={content} handleCloseModal={handleCloseModal}/>);
        const modalContent= screen.getByText(content).parentElement.parentElement;
        fireEvent.click(modalContent);
        expect(handleCloseModal).not.toHaveBeenCalled();
    });

    test('calls handleCloseModal when close icon is clicked',()=>{
        render(<Modal showModal={true} content={content} handleCloseModal={handleCloseModal}/>);
        const closeIcon= screen.getAllByLabelText(/Close Modal/i);
        fireEvent.click(closeIcon);
        expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });

    test('calls handleCloseModal when "Cancel" button is clicked',()=>{
        render(<Modal showModal={true} content={content} handleCloseModal={handleCloseModal}/>);
        const cancelButton= screen.getByText(/Cancel/i);
        fireEvent.click(cancelButton);
        expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });

    test('calls handleCloseModal when "Ok" button is clicked',()=>{
        render(<Modal showModal={true} content={content} handleCloseModal={handleCloseModal} />);
        const okButton = screen.getByText(/Ok/i);
        fireEvent.click(okButton);
        expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });

    test('calls handleCloseModal when Escape key is pressed',()=>{
        render(<Modal showModal={true} content={content} handleCloseModal={handleCloseModal}/>);
        fireEvent.keyDown(document,{key:'Escape', code:'Escape'});
        expect(handleCloseModal).toHaveBeenCalledTimes(1);
    });
});