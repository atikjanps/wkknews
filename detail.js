let news = JSON.parse(localStorage.getItem("news"));
let index = localStorage.getItem("selectedNews");

let item = news[index];

document.getElementById("detail").innerHTML = `
  <img src="${item.image}">
  <h2>${item.title}</h2>
  <p>${item.desc}</p>
`;

let comments = JSON.parse(localStorage.getItem("comments")) || [];

function addComment() {
  let text = document.getElementById("comment").value;

  comments.push({ text, index });
  localStorage.setItem("comments", JSON.stringify(comments));

  showComments();
}

function showComments() {
  let c = comments.filter(c => c.index == index);

  document.getElementById("comments").innerHTML = c.map(x =>
    `<p>${x.text}</p>`
  ).join("");
}

showComments();
