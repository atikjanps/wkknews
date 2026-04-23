let posts = [];
let favorites = [];

function showTab(tab) {
  document.querySelectorAll(".tab-content").forEach(el => el.classList.remove("active"));
  document.getElementById(tab).classList.add("active");

  document.querySelectorAll(".tabs button").forEach(btn => btn.classList.remove("active"));
  event.target.classList.add("active");
}

function addPost() {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let img = document.getElementById("img").value;

  let post = { title, desc, img, likes: 0 };
  posts.push(post);

  renderPosts();
}

function renderPosts() {
  let newTab = document.getElementById("new");
  let majorTab = document.getElementById("major");
  let chatTab = document.getElementById("chat");

  newTab.innerHTML = "";
  majorTab.innerHTML = "";
  chatTab.innerHTML = "";

  posts.forEach((p, index) => {
    let card = `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>

        <div class="actions">
          <button onclick="likePost(${index})">❤️ ${p.likes}</button>
          <button onclick="savePost(${index})">💾</button>
        </div>

        <input placeholder="Comment..." />
      </div>
    `;

    newTab.innerHTML += card;
    chatTab.innerHTML += card;

    if (p.likes >= 3) {
      majorTab.innerHTML += card;
    }
  });
}

function likePost(i) {
  posts[i].likes++;
  renderPosts();
}

function savePost(i) {
  favorites.push(posts[i]);
  alert("Saved!");
}

function addVideo() {
  let link = document.getElementById("videoLink").value;
  let videoBox = document.getElementById("videos");

  let iframe = `<iframe src="${link.replace("watch?v=", "embed/")}" frameborder="0"></iframe>`;
  videoBox.innerHTML += iframe;
}
