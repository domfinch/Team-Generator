
const Manager = require("../lib/manager");


describe("test the manger class", () => {
    const manager = new Manager( 'jeff', '2', '@email.com')
    it("Should return name", () => {
        expect(manager.getName()).toBe('jeff')
    })
    it("Should return ID", () => {
        expect(manager.getId()).toBe('2')
    })
    it("Should return email", () => {
        expect(manager.getEmail()).toBe('@email.com')
    })
})