class Employee {
    constructor(position, name, id, email, github) {
        this.position = position;
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    };

    getPosition() {
        return this.position;
    };

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

module.exports = Employee;