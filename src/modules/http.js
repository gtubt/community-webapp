const BASE_URL = `https://api.yildizozan.com`;

async function GET(path) {
  return await fetch(`${BASE_URL}${path}`);
}

async function POST(path, body) {
  return await fetch(`${BASE_URL}${path}`, {
    method: "POST",
    body: JSON.stringify(body)
  });
}

async function PUT(path, body) {
  return await fetch("/posts", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(body)
  });
}

async function PATCH(path, body) {
  return await fetch(`${BASE_URL}${path}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(body)
  });
}

async function DELETE(path, body) {
  return await fetch("/posts", {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`
    }
  });
}
