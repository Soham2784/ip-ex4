// Class Definition for Person

// Form Validation
function validateForm() {
    let phone = document.getElementById("phone").value;
    let tagline = document.getElementById("tagline").value;

    // Validate phone number (must be exactly 10 digits)
    if (!/^\d{10}$/.test(phone)) {
        alert("Phone number must be exactly 10 digits.");
        return false;
    }

    // Validate tagline length (restrict to 50 characters)
    if (tagline.length > 50) {
        alert("Tagline cannot exceed 50 characters.");
        return false;
    }

    // More form validation can go here...

    return true;
}

// Process Order and Generate Receipt
function processOrder(event) {
    event.preventDefault(); // Prevent form from submitting

    if (validateForm()) {
        const date = new Date();
        const receiptDate = date.toLocaleString();

        // Retrieve form values
        const name = document.getElementById("name").value;
        const address = document.getElementById("address").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;
        const tagline = document.getElementById("tagline").value;
        const color = document.getElementById("color").value;
        const size = document.getElementById("size").value;
        const quantity = document.getElementById("quantity").value;

        // Create a Person object
        const customer = new Person(name, address, email, phone);

        // Display receipt
        alert(`
            Receipt: \n
            Name: ${customer.name}\n
            Address: ${customer.address}\n
            Email: ${customer.email}\n
            Phone: ${customer.phone}\n
            T-Shirt Details:\n
            Tagline: ${tagline}\n
            Color: ${color}\n
            Size: ${size}\n
            Quantity: ${quantity}\n
            Receipt Date: ${receiptDate}
        `);

        // You can also log to the console
        console.log(customer.displayInfo());
    }
}

// Attach event listener to form submission
window.onload = function () {
    document.getElementById("orderForm").addEventListener("submit", processOrder);
};
