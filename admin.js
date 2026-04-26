let news = JSON.parse(localStorage.getItem("news")) || [];

function addNews() {
  let item = {
    title: document.getElementById("title").value,
    image: document.getElementById("image").value,
    desc: document.getElementById("desc").value,
    category: document.getElementById("category").value,
    time: "now"
  };

  news.push(item);
  localStorage.setItem("news", JSON.stringify(news));

  alert("News Added!");
}
