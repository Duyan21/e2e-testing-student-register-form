// const { beforeEach } = require("node:test"); --> delete so it can run 
import register from '../pages/formPage' 
Cypress.on('uncaught:exception', (err,runable) => {
    return false;   
});

describe ("Student Resgistration Form", () => {
    beforeEach (() => {
        cy.visit('https://demoqa.com/automation-practice-form')
    })    

    it('TC01', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        rf.submit() 
    })

    it('TC02', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        cy.emailEmpty()
        rf.submit() 
    })

    it('TC03', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire3()
        rf.submit() 
    })

    it('TC04', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        cy.hobbiesEmpty()
        rf.submit() 
    })

    it('TC05', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire4()
        rf.submit() 
    })

    it('TC06', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        cy.addressEmpty()
        rf.submit() 
    })

    it('TC07', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire5()
        rf.submit() 
    })

    it('TC08', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.submit()
    })

    it('TC09', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.submit()
    })

    it('TC10', () => {
        const rf= new register();
        rf.submit()
    })

    it('TC11-1', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        cy.firstNameEmpty()
        rf.submit() 
    })

    it('TC11-2', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        cy.lastNameEmpty()
        rf.submit() 
    })

    it('TC11-3', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        cy.firstNameEmpty()
        cy.lastNameEmpty()
        rf.submit() 
    })

    it('TC12', () => {
        const rf= new register();
        rf.requireValid2("An", "Ho", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        rf.submit() 
    })

    it('TC13-1', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        cy.mobileEmpty()
        rf.submit() 
    })

    it('TC13-2', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "123456")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        rf.submit() 
    })

    it('TC13-3', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234aaaa")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        rf.submit() 
    })

    it('TC14-1', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        cy.firstNameEmpty()
        rf.submit() 
    })

    it('TC14-2', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        cy.lastNameEmpty()
        rf.submit() 
    })

    it('TC14-3', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        cy.firstNameEmpty()
        cy.lastNameEmpty()
        rf.submit() 
    })

    it('TC15', () => {
        const rf= new register();
        rf.requireValid2("An", "Ho", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        rf.submit() 
    })

    it('TC16-1', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "1234567890")
        rf.unrequire1("samho@gmail.com", "20")
        cy.mobileEmpty()
        rf.submit() 
    })

    it('TC16-2', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "12345")
        rf.unrequire1("samho@gmail.com", "20")
        rf.submit() 
    })

    it('TC16-3', () => {
        const rf= new register();
        rf.requireValid1("An", "Ho", "Male", "12345aaaa")
        rf.unrequire1("samho@gmail.com", "20")
        rf.submit() 
    })

    it('TC17', () => {
        const rf= new register();
        rf.requireUnvalid("An", "Ho", "123456aaa")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        rf.submit()
    })

    it('TC18', () => {
        const rf= new register();
        rf.requireUnvalid("An", "Ho", "123456aaa")
        rf.submit()
    })

    it('TC19', () => {
        const rf= new register();
        rf.requireUnvalid("An", "Ho", "123456aaa")
        rf.unrequire1("samho@gmail.com", "20")
        rf.unrequire2()
        rf.submit()
    })
    
})