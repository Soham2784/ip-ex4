class Person {
    constructor(name, address, email, phone) {
        this.name = name;
        this.address = address;
        this.email = email;
        this.phone = phone;
    }
    displayInfo = () => {
        return `Name: ${this.name}, Address: ${this.address}, Email: ${this.email}, Phone: ${this.phone}`;
    }
}