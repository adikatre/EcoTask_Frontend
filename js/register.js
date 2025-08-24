document.getElementById("registerBtn").addEventListener("click", async () => {
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const display_name = document.getElementById("display_name").value;

  const res = await fetch(API_BASE + "/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password, display_name })
  });

  const data = await res.json();
  if (res.ok) {
    document.getElementById("msg").className = "text-green-600 mt-2 text-sm";
    document.getElementById("msg").innerText = "Registration successful. Redirecting...";
    setTimeout(() => window.location = "login.html", 1500);
  } else {
    document.getElementById("msg").innerText = data.error || "Registration failed";
  }
});
