const Employee = require("./employee");

class Manager extends Employee {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    };

    getPosition() {
        return "Manager";
    }

    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getGithub() {
        return this.github;
    };
}

module.exports = Manager;