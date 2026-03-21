const form = document.querySelector("#myForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const message = document.querySelector("#message").value.trim();
    const terms = document.querySelector("#terms").checked;

    if (firstName.length < 3 || lastName.length < 3) {
        alert("First and Last name should have at least 3 letters");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Your email address is not legal");
        return;
    }

    if (phone.length < 10) {
        alert("Phone number must be at least 10 digits");
        return;
    }

    if (message.length < 10) {
        alert("Message is too short min 10 chars");
        return;
    }

    if (!terms) {
        alert("Please agree to the Terms of Service");
        return;
    }


    alert("SUCCESS! Your message has been sent.");
    console.log({ firstName, lastName, email, phone, message });
});