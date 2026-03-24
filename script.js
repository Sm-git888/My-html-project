const form = document.querySelector("#myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const fullName = document.querySelector("#fullName").value.trim();
    const subject = document.querySelector("#subject").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const message = document.querySelector("#message").value.trim();
    const terms = document.querySelector("#terms").checked;

    if (fullName.length < 3) {
        alert("Name must be at least 3 characters");
        return;
    }
    if (!email.includes("@")) {
        alert("Invalid Email");
        return;
    }
    if (phone.length < 10) {
        alert("Phone must be at least 10 digits");
        return;
    }
    if (subject.length < 5) {
        alert("Subject must be at least 5 characters");
        return;
    }
    if (message.length < 10) {
        alert("Message must be at least 10 characters");
        return;
    }
    if (!terms) {
        alert("Please agree to the terms");
        return;
    }

    const formData = {
        fullName: fullName,
        subject: subject,
        email: email,
        phone: phone,
        message: message
    };

    fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.text())
        .then(data => {
            alert(data);
            form.reset();
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Server error");
        });
});