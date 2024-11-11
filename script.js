// Wait until the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent form from submitting

        // Retrieve form data
        const name = document.getElementById("name").value;
        const RollNo = document.getElementById("RollNo").value;
        const phone = document.getElementById("phone").value;
        const room = document.getElementById("room").value;
        const Reason = document.getElementById("Reason").value;
        const date = document.getElementById("date").value;
        const time = document.getElementById("time").value;

        // Basic validation
        if (!name || !RollNo|| !phone || !room || !Reason || !date || !time) {
            alert("Please fill out all fields.");
            return;
        }

        // Simple email validation check
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!email.match(emailPattern)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Confirmation message
        alert("Entry registered successfully!\n\n" +
            "Name: " + name + "\n" +
            "RollNo: " + RollNo + "\n" +
            "Phone: " + phone + "\n" +
            "Room: " + room + "\n" +
            "Reason: " + Reason+ "\n" +
            "Date: " + date + "\n" +
            "Time: " + time
        );

        // Clear the form after submission
        form.reset();
    });
});