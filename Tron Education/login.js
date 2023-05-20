const loginForm = document.getElementById("login-in");
const signUpForm = document.getElementById("login-up");
document.getElementById("sign-up").addEventListener("click", () => {
    loginForm.classList.add("none");
    signUpForm.classList.remove("none");
});
document.getElementById("sign-in").addEventListener("click", () => {
    signUpForm.classList.add("none");
    loginForm.classList.remove("none");
});

function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "vivekshelke006@gmail.com" && password === "Ajay@123") {
        alert("Successful login!");
        location.replace("index2.html");
    } else {
        alert("Invalid email or password");
    }
}
document.getElementById("Signup").addEventListener("click", function() {
    alert("You are registered successfully you can log in successfully");
});

function valid() {
    window.alert("To Acccess The Page Please Login");
}

function logOut() {
    window.alert("You are logged Out Successfully")
}