class Student extends Person {
    constructor(name, address, email, phone, rollNo) {
        super(name, address, email, phone);
        if (rollNo === 0) {
            throw new Error('Roll number cannot be zero!');
        }
        this.rollNo = rollNo;
    }

    // Method Overriding Example
    displayInfo() {
        return `${super.displayInfo()}, Roll No: ${this.rollNo}`;
    }
}
