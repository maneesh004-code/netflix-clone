// FAQ Toggle
const faqBoxes = document.querySelectorAll('.faqbox');
faqBoxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.classList.toggle('open');
    });
});

// Email validation on "Get Started"
const emailInput = document.querySelector('.hero input');
const getStartedBtn = document.querySelector('.btn-red');

getStartedBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (validateEmail(email)) {
        alert(`Welcome! Starting with: ${email}`);
        emailInput.value = "";
    } else {
        alert("Please enter a valid email address.");
    }
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Sign In Modal functionality
const signInBtn = document.querySelector('.btn-red-sm');
signInBtn.addEventListener('click', () => {
    createSignInModal();
});

function createSignInModal() {
    // Remove if already exists
    const existingModal = document.querySelector('.signin-modal');
    if (existingModal) existingModal.remove();

    const modal = document.createElement('div');
    modal.className = 'signin-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-btn">&times;</span>
            <h2>Sign In</h2>
            <input type="text" id="loginEmail" placeholder="Email" />
            <input type="password" id="loginPassword" placeholder="Password" />
            <button class="btn btn-red" id="loginBtn">Login</button>
            <p class="login-message"></p>
        </div>
    `;
    document.body.appendChild(modal);

    // Close modal
    modal.querySelector('.close-btn').addEventListener('click', () => {
        modal.remove();
    });

    // Login button functionality
    const loginBtn = modal.querySelector('#loginBtn');
    const loginMsg = modal.querySelector('.login-message');

    loginBtn.addEventListener('click', () => {
        const email = modal.querySelector('#loginEmail').value.trim();
        const password = modal.querySelector('#loginPassword').value.trim();

        if (validateEmail(email) && password.length >= 4) {
            loginMsg.textContent = "✅ Login Successful!";
            loginMsg.style.color = "lightgreen";
            setTimeout(() => {
                modal.remove();
            }, 1500);
        } else {
            loginMsg.textContent = "❌ Invalid email or password (min 4 characters).";
            loginMsg.style.color = "salmon";
        }
    });
}

// Language button mock
const langBtn = document.querySelector('.btn');
langBtn.addEventListener('click', () => {
    alert("Language options coming soon!");
});
