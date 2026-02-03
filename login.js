function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let msg = document.getElementById("msg");

    if (user === "govardhan@123" && pass === "123456789") {
        msg.style.color = "green";
            
        msg.textContent = "Login successful!";
    } else {
        msg.style.color = "red";
        msg.textContent = "Invalid username or password!";
    }
}
document.getElementById("loginBtn").addEventListener('click', login);