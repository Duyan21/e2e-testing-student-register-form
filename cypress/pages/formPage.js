///<reference types="Cypress" />
class register{
    
    // Include firstName, lastName, gender, mobile 
    // Valid data
    requireValid1 (firstName, lastName, gender, mobile){
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName); 
        cy.get('input[type="radio"]').check(gender, {force:true});  
        cy.get('#userNumber').type(mobile)
    }

    // Include firstName, lastName, mobile 
    // Valid data
    requireValid2 (firstName, lastName, mobile){
        cy.get('#firstName').type(firstName);
        cy.get('#lastName').type(lastName); 
        cy.get('#userNumber').type(mobile)
    }
    
    // Include firstName, lastName, gender, mobile 
    // Unvalid data 
    // unvalid of gender is not to check it
    // unvalid of f.Name and l.Name are left them empty
    requireUnvalid(firstName, lastName, mobile){
        cy.get('#firstName').type(firstName).clear();
        cy.get('#lastName').type(lastName).clear();   
        cy.get('#userNumber').type(mobile)
    } 
     
    // Incluce email, D.O.B, hobbies, address
    unrequire1 (email, date) {    
        cy.get('#userEmail').type(email)
        cy.get('#dateOfBirthInput').click('center')
        cy.get('div[role="option"]').contains(date).click('center', {force:true}) 
        cy.get('#hobbies-checkbox-1').click('center', {force:true})
        cy.get('#currentAddress').type('District 10')
    }

    // Include subjects, state and city, picture
    unrequire2 () {
        cy.get('#subjectsInput').type('Maths{enter}')
        cy.get('div[class=" css-yk16xz-control"]').type('NCR{enter}')
        cy.get('div[class=" css-tlfecz-indicatorContainer"]').type('Noida{enter}')
        cy.get('#uploadPicture').attachFile('picture.txt')
    }

    // Include state and city, picture
    unrequire3 () {
        cy.get('div[class=" css-yk16xz-control"]').type('NCR{enter}')
        cy.get('div[class=" css-tlfecz-indicatorContainer"]').type('Noida{enter}')
        cy.get('#uploadPicture').attachFile('picture.txt')
    }

    // Include subjects, state and city
    unrequire4 () {
        cy.get('#subjectsInput').type('Maths{enter}')
        cy.get('div[class=" css-yk16xz-control"]').type('NCR{enter}')
        cy.get('div[class=" css-tlfecz-indicatorContainer"]').type('Noida{enter}')
    }

    // Include subjects, picture
    unrequire5 () {
        cy.get('#subjectsInput').type('Maths{enter}')
        cy.get('#uploadPicture').attachFile('picture.txt')
    }

    // Click the submit
    submit() {
        cy.get('#submit').click('center')
    }

}
export default register