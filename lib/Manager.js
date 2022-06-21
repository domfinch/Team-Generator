const Employee = require("./Employee")

class Manager extends Employee {
    constructor (name, id, email, managerOffice) {
        super(name, id, email)
        this.managerOffice = managerOffice
    }
    getId() {
        return this.id
    }
    getmanagerOffice() {
        return this. managerOffice
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager
