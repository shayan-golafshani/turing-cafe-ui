//Write a test to check the user flow of adding a new reservation to the page.

describe('Adding a reservation user flow', () => {

    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })

    it('Should check that when data is put into the form, the value is reflected in that form input and a new card is created at the bottom', () => {
        cy.get('input[name="guestName"]').type('John').should('have.value', 'John')
        cy.get('input[name="date"]').type('07/21').should('have.value', '07/21')
        cy.get('input[name="time"]').type('7:00').should('have.value', '7:00')
        cy.get('input[name="number"]').type('20').should('have.value', '20')
        cy.get('button').click()

        cy.get('.reservationCard').contains('Guest Name: John').should('contain', 'John')
        cy.get('.reservationCard').contains('Reservation Date: 07/21').should('contain', '07/21')
        cy.get('.reservationCard').contains('Reservation Time: 7:00').should('contain', '7:00')
        cy.get('.reservationCard').contains('Party Size: 20').should('contain', '20')
    })
})