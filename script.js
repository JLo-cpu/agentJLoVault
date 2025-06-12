
function login() {
  var user = document.getElementById("username").value;
  var pass = document.getElementById("password").value;

  // You can set your own username and password here
  if(user === "agent" && pass === "vagabond2025") {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("error").innerText = "Access Denied!";
  }
}
