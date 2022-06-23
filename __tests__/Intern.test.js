

const Intern = require("../lib/intern");


describe("test the manger class", () => {
    const intern = new Intern ( 'jaren', '6', 'Universtiy','@email.com')
    it("Should return name", () => {
        expect(intern.getName()).toBe('jaren')
    })
    it("Should return ID", () => {
        expect(intern.getId()).toBe('6')
    })
    it("Should return email", () => {
        expect(intern.getSchool()).toBe('Universtiy')
    })
    it("Should return school", () => {
        expect(intern.getEmail()).toBe('@email.com')
    })
})