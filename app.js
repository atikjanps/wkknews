let news = JSON.parse(localStorage.getItem("news")) || [];

function displayNews(list) {
  let container = document.getElementById("newsList");
  container.innerHTML = "";

  list.forEach((item, index) => {
    container.innerHTML += `
      <div class="card">
        <img src="${item.image}">
        <p>${item.time}</p>
        <h3 onclick="openDetail(${index})">${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `;
  });
}

function openDetail(index) {
  localStorage.setItem("selectedNews", index);
  window.location.href = "detail.html";
}

function filterNews(cat) {
  let filtered = news.filter(n => n.category === cat);
  displayNews(filtered);
}

document.getElementById("search").addEventListener("input", (e) => {
  let val = e.target.value.toLowerCase();
  let filtered = news.filter(n =>
    n.title.toLowerCase().includes(val)
  );
  displayNews(filtered);
});

displayNews(news);
