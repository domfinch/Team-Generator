const { it, expect } = require("@jest/globals")
const { describe } = require("yargs")
const Employee = require("../lib/Employee")

describe("employee test", () => {
    const employee = new Employee('dom', '9', '@email.com')
    it("should return name", () => {
        expect(employee.getName()).toBe('Dom')
    })
    it("should return ID", () => {
        expect(employee.getID()).toBe('9')
    })
    it("should return email", () => {
        expect(employee.getEmail()).toBe('@email.com')
    })
})
