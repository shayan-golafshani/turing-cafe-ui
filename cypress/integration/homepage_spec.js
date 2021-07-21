/* dummy test*/
/*Write tests covering what should be displayed on the page when the user first visits.*/
describe('Feedback Loop login flows', () => {

    beforeEach(()=> {
        cy.visit('http://localhost:3000')
    })

    it('Should confirm that true is equal to true', () => {
      expect(true).to.equal(true)
    });

    it('Should show a header', () => {
        cy.get('h1').contains('Turing Cafe Reservations')
      });
  
    it('Should contain a user reservation card with corresponding info', () => {
        cy.get('.reservationCard[id="1"]').contains('Guest Name: Christie')
        cy.get('.reservationCard[id="1"]').contains('Reservation Date: 12/29')
        cy.get('.reservationCard[id="1"]').contains('Reservation Time: 7:00')
        cy.get('.reservationCard[id="1"]').contains('Party Size: 12')
    })
    
    it('Should contain four inputs and a submit button', () => {
        cy.get('input[name="guestName"]').type('John')
        cy.get('input[name="date"]').type('07/21')
        cy.get('input[name="time"]').type('7:00')
        cy.get('input[name="number"]').type('20')
        cy.get('button').click()
    })
  });