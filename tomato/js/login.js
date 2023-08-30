const id = document.querySelector("#id");
const pw = document.querySelector("#pw");
const btn = document.querySelector("button");

btn.addEventListener("click", login);

function login() {
  const req = {
    id: id.value,
    pw: pw.value,
  };
  console.log(req);
  console.log(JSON.stringify(req));

  fetch("/login", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((toma) => toma.json())
    .then((bana) => console.log(bana));
}
