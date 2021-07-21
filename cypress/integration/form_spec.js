/* Write a test that checks that when data is put into the form, the value is reflected in that form input. */
describe('Filling out form user flow', () => {

    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })

    it('Should check that when data is put into the form, the value is reflected in that form input', () => {
        cy.get('input[name="guestName"]').type('John').should('have.value', 'John')
        cy.get('input[name="date"]').type('07/21').should('have.value', '07/21')
        cy.get('input[name="time"]').type('7:00').should('have.value', '7:00')
        cy.get('input[name="number"]').type('20').should('have.value', '20')
    })
})