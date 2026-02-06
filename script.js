/* BUY BUTTON ALERT */

const buyBtn = document.getElementById("buyBtn");
const orderBtns = document.querySelectorAll(".buy");

buyBtn.addEventListener("click", () => {
    alert("Redirecting to payment gateway...");
});

orderBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        alert("Order placed successfully!");
    });
});


/* FORM VALIDATION */

const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", e => {

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {

        msg.textContent = "❌ Please fill all fields";
        msg.style.color = "red";

    } else {

        msg.textContent = "✅ Message sent successfully";
        msg.style.color = "green";

        form.reset();
    }

});
