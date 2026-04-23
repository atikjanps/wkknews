// Load data
let posts = JSON.parse(localStorage.getItem("posts")) || [];

// Save data
function saveData() {
  localStorage.setItem("posts", JSON.stringify(posts));
}

// Tabs
function showTab(tab, btn) {
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
}

// Add Post
function addPost(type) {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let url = document.getElementById("url").value;

  if (!url) {
    alert("URL required!");
    return;
  }

  let post = {
    id: Date.now(),
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

// Render
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

    // IMAGE
    if (p.type === "image") {
      content = `<img src="${p.url}">`;

      imgBox.innerHTML += createCard(p, i, content);
      chatBox.innerHTML += createCard(p, i, content);
    }

    // VIDEO
    if (p.type === "video") {
      let embed = p.url.replace("watch?v=", "embed/");
      content = `<iframe src="${embed}" frameborder="0"></iframe>`;

      vidBox.innerHTML += createCard(p, i, content);
    }

    // FAVORITES (likes >= 3)
    if (p.likes >= 3) {
      favBox.innerHTML += createCard(p, i, content);
    }

  });
}

// Card
function createCard(p, i, content) {
  return `
  <div class="card">
    ${content}
    <h3>${p.title}</h3>

    <a href="detail.html?id=${p.id}">Read More</a>

    <div class="actions">
      <button onclick="likePost(${i})">❤️ ${p.likes}</button>
      <button onclick="deletePost(${i})">🗑️</button>
    </div>
  </div>
  `;
}

// Like
function likePost(i) {
  posts[i].likes++;
  saveData();
  renderPosts();
}

// Delete
function deletePost(i) {
  posts.splice(i, 1);
  saveData();
  renderPosts();
}

// Start
renderPosts();
