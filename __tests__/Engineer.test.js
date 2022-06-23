const Engineer = require("../lib/intern");


describe("test the manger class", () => {
    const engineer = new Engineer ( 'jake', '5', 'github','@email.com')
    it("Should return name", () => {
        expect(engineer.getName()).toBe('jake')
    })
    it("Should return ID", () => {
        expect(engineer.getId()).toBe('5')
    })
    it("Should return email", () => {
        expect(engineer.getSchool()).toBe('github')
    })
    it("Should return school", () => {
        expect(engineer.getEmail()).toBe('@email.com')
    })
})