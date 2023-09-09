const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };

  fetch("/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "login success") {
        location.href = "/";
      } else {
        alert(res.message);
      }
    })
    .catch((err) => console.error(new Error()));
}
