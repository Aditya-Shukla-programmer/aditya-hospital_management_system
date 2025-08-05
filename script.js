// Script for role-based login (will be used in login.html)
function loginUser() {
  const role = document.getElementById("role").value;
  const username = document.getElementById("username").value;

  if (username.trim() === "") {
    alert("Please enter a username");
    return;
  }

  localStorage.setItem("userRole", role);
  localStorage.setItem("username", username);

  alert(`Welcome, ${username}! Redirecting to dashboard...`);
  window.location.href = "dashboard.html";
}




