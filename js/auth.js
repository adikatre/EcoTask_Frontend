document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const res = await fetch(API_BASE + "/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });
  const data = await res.json();

  if (data.access_token) {
    localStorage.setItem("token", data.access_token);
    window.location = "index.html";
  } else {
    document.getElementById("msg").innerText = data.error || "Login failed";
  }
});
