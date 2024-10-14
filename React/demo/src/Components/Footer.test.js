import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from './Footer';
import UserProfile from './UserProfile';

// Mock userprofile component to check props
jest.mock('./UserProfile',()=>(props)=>(
    <div data-testid='user-profile'>
        <span>{props.Name}</span>
        <span>{props.City}</span>
        <span>{props.Email}</span>
        <span>{props.PhoneNumber}</span>
    </div>
));


describe('Footer Component',()=>{
    test('render multiple  UserProfile components correct props',()=>{
        render(<Footer/>);

        const profiles=screen.getAllByTestId('user-profile');
        expect(profiles).toHaveLength(4);


        //check the props of first user profile
        const firstProfile=profiles[0];
        expect(firstProfile).toHaveTextContent('john');
        expect(firstProfile).toHaveTextContent('London');
        expect(firstProfile).toHaveTextContent('john@gmail.com');
        expect(firstProfile).toHaveTextContent('1234567891');


        Profiles.forEach(Profile=>{
            expect(profile).toHaveTextContent('john');
            expect(profile).toHaveTextContent('London');
            expect(profile).toHaveTextContent('john@gmail.com');
            expect(profile).toHaveTextContent('1234567891');

        });

    });
});