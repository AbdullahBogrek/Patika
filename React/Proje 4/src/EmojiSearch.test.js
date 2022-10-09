import React from "react"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import '@testing-library/jest-dom/extend-expect';

import App from "./App"

describe('Emoji Search Tests', () => { 
    beforeEach(() => {
        render(<App />)
    })
    
    test('header must be rendered', () => {
        const header = screen.getByText("Emoji Search")
        expect(header).toBeInTheDocument()
    })

    test('emoji list must be rendered successfully', () => {
        const items = screen.getAllByText(/click to copy emoji/i)
        expect(items.length).toEqual(20)
    })

    test('emoji list must be rerender by using filter text', () => {
        const filterText = "face"
        const searchInput = screen.getByLabelText('search-input')        
        userEvent.paste(searchInput, filterText)
        const items = screen.getAllByText(/click to copy emoji/i)
        expect(items.length).toBeGreaterThan(3)
    })

    test('emoji must be copy when clicking on', () => {
        const emoji = screen.getAllByTestId('row')
        expect(emoji[0]).toHaveAttribute('data-clipboard-text');
    })
})