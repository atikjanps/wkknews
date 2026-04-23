let posts = JSON.parse(localStorage.getItem("posts")) || [];

function saveData() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

function showTab(tab) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  event.target.classList.add("active");
}

function addPost(type) {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let url = document.getElementById("url").value;

  if (!url) return alert("URL required!");

  let post = {
    title,
    desc,
    url,
    type,
    likes: 0
  };

  posts.push(post);
  saveData();
  renderPosts();
}

function renderPosts() {
  let imgBox = document.getElementById("images");
  let vidBox = document.getElementById("videos");
  let favBox = document.getElementById("major");
  let chatBox = document.getElementById("chat");

  imgBox.innerHTML = "";
  vidBox.innerHTML = "";
  favBox.innerHTML = "";
  chatBox.innerHTML = "";

  posts.forEach((p, i) => {

    let content = "";

    if (p.type === "image") {
      content = `<img src="${p.url}">`;
      imgBox.innerHTML += createCard(p, i, content);
      chatBox.innerHTML += createCard(p, i, content);
    }

    if (p.type === "video") {
      let embed = p.url.replace("watch?v=", "embed/");
      content = `<iframe src="${embed}" frameborder="0"></iframe>`;
      vidBox.innerHTML += createCard(p, i, content);
    }

    if (p.likes >= 3) {
      favBox.innerHTML += createCard(p, i, content);
    }

  });
}

function createCard(p, i, content) {
  return `
  <div class="card">
    ${content}
    <h3>${p.title}</h3>
    <p>${p.desc}</p>

    <div class="actions">
      <button onclick="likePost(${i})">❤️ ${p.likes}</button>
      <button onclick="deletePost(${i})">🗑️</button>
    </div>

    <input placeholder="Comment..." />
  </div>
  `;
}

function likePost(i) {
  posts[i].likes++;
  saveData();
  renderPosts();
}

function deletePost(i) {
  posts.splice(i, 1);
  saveData();
  renderPosts();
}

renderPosts();
