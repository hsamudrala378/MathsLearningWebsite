
const signupTab = document.getElementById("signupTab");
const loginTab = document.getElementById("loginTab");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");

signupTab.addEventListener("click", () => {
  signupForm.classList.remove("hidden");
  loginForm.classList.add("hidden");
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
});

loginTab.addEventListener("click", () => {
  loginForm.classList.remove("hidden");
  signupForm.classList.add("hidden");
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
});


signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const pass = document.getElementById("signupPassword").value;
  const confirm = document.getElementById("signupConfirm").value;

  if (pass !== confirm) {
    alert("Passwords do not match!");
    return;
  }

  localStorage.setItem("user", JSON.stringify({ name, email, pass }));
  alert("Account created! Please sign in.");
  loginTab.click(); 
});


loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPassword").value;

  const storedUser = JSON.parse(localStorage.getItem("user"));
  if (storedUser && storedUser.email === email && storedUser.pass === pass) {
    alert(`Welcome, ${storedUser.name}`);
    window.location.href = "home.html"; // redirect to main page
  } else {
    alert("Invalid email or password!");
  }
});
