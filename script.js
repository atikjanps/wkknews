let newsData = [
  {
    id: 1,
    title: "Technology Update",
    image: "https://picsum.photos/300/150",
    desc: "Full detail of technology news here...",
    category: "major"
  },
  {
    id: 2,
    title: "Chat Story",
    image: "https://picsum.photos/300/151",
    desc: "Chat based discussion content...",
    category: "chat"
  }
];

let currentFilter = "all";

function renderNews() {
  let container = document.getElementById("newsContainer");
  container.innerHTML = "";

  let filtered = newsData.filter(item => {
    return currentFilter === "all" || item.category === currentFilter;
  });

  filtered.forEach(item => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <div class="card-content">
          <span>${item.category}</span>
          <h3>${item.title}</h3>
          <p onclick="toggleDetail(${item.id})">Read More</p>
          <div class="detail" id="detail-${item.id}">
            ${item.desc}
          </div>
        </div>
      </div>
    `;
  });
}

function filterNews(type) {
  currentFilter = type;

  document.querySelectorAll(".tabs button")
    .forEach(b => b.classList.remove("active"));

  event.target.classList.add("active");

  renderNews();
}

function addNews() {
  let title = document.getElementById("title").value;
  let image = document.getElementById("image").value;
  let category = document.getElementById("category").value;
  let desc = document.getElementById("desc").value;

  newsData.unshift({
    id: Date.now(),
    title,
    image,
    category,
    desc
  });

  renderNews();
}

function toggleDetail(id) {
  let box = document.getElementById("detail-" + id);

  if (box.style.display === "block") {
    box.style.display = "none";
  } else {
    box.style.display = "block";
  }
}

renderNews();
