//js cho phần đăng kí, đăng nhập
let users = [];

function openLoginModal() {
    document.getElementById('loginModal').style.display = "block";
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = "none";
}

function openRegisterModal() {
    document.getElementById('registerModal').style.display = "block";
    closeLoginModal();
}

function closeRegisterModal() {
    document.getElementById('registerModal').style.display = "none";
}

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    users.push({ name, email, password });
    alert(`Registration successful!\nName: ${name}\nEmail: ${email}`);
    closeRegisterModal();
    openLoginModal();
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
        alert(`Login successful!\nEmail: ${email}`);
        closeLoginModal();
        window.location.href = "Homepage.html";
    } else {
        alert('Incorrect email or password.');
    }
});

