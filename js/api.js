const API_BASE = "http://localhost:5000";

function getToken() {
  return localStorage.getItem("token");
}

async function apiGet(path) {
  const res = await fetch(API_BASE + path, {
    headers: { Authorization: "Bearer " + getToken() }
  });
  return res.json();
}

async function apiPost(path, body) {
  const res = await fetch(API_BASE + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getToken()
    },
    body: JSON.stringify(body)
  });
  return res.json();
}
