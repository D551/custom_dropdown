/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DropDown from '../DropDown';
import { MOCK_DROPDOWN_LIST } from '../../../Constants/testConstants'
import { NO_USER_FOUND_OBJECT } from '../../../Constants/appConstants'

describe('should test the DropDown component', () => {
    const mockFunction = jest.fn();
    const mockProps = {
        options: MOCK_DROPDOWN_LIST,
        placeholder: '',
        onChange: () => { }
    }

    const setup = () => {
        const utils = render(< DropDown {...mockProps} />)
        const input = utils.getByTestId('input-box')
        return {
            input,
            ...utils,
        }
    }
    test('should render dropDown', () => {
        const { asFragment } = render(< DropDown {...mockProps} />);
        expect(asFragment(< DropDown {...mockProps} />)).toMatchSnapshot();
    });

    test('should render list onFocus of input box', () => {
        const { getByTestId } = render(< DropDown {...mockProps} />);
        fireEvent.focusIn(getByTestId('input-box'));
        expect(getByTestId('list-container')).toBeInTheDocument();
    });

    test('should render list onChnage of input box', () => {
        const { input, getByTestId } = setup();
        fireEvent.focusIn(getByTestId('input-box'));
        fireEvent.change(input, { target: { value: 'tMc' } });
        expect(input.value).toBe('tMc');
        expect(getByTestId('list-container')).toBeInTheDocument();
    });

    test('should hide the dropdown when clicked outside', () => {
        jest.spyOn(React, 'useState').mockReturnValue([false, mockFunction]);
        const { getByTestId } = setup();
        fireEvent.focusIn(getByTestId('input-box'));
        expect(mockFunction).toHaveBeenCalledWith(true);
        fireEvent.focusOut(getByTestId('input-box'));
        expect(mockFunction).toHaveBeenCalledWith(false);
    });

    test('Dropdown conatines 2 child when matching text is typed', () => {
        jest.spyOn(React, 'useState').mockReturnValue([false, mockFunction]);
        const { input, getByTestId } = setup();
        fireEvent.focusIn(getByTestId('input-box'));
        fireEvent.change(input, { target: { value: 'ha' } });
        expect(mockFunction).toHaveBeenCalledWith([MOCK_DROPDOWN_LIST[0], MOCK_DROPDOWN_LIST[1]]);
    });

    test('Should show no user found', () => {
        jest.spyOn(React, 'useState').mockReturnValue([false, mockFunction]);
        const { input, getByTestId } = setup();
        fireEvent.focusIn(getByTestId('input-box'));
        fireEvent.change(input, { target: { value: 'xxxx' } });
        expect(mockFunction).toHaveBeenCalledWith([NO_USER_FOUND_OBJECT]);
    });
});
