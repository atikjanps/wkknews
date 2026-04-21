let posts = [
  {
    id: 1,
    title: "Tech News",
    image: "https://picsum.photos/400/200",
    desc: "Short description here",
    full: "Full article here...",
    likes: 10,
    comments: 5,
    views: 100,
    watchTime: 20
  }
];

// 🔥 Algorithm
function getScore(p){
  return (p.likes*3) + (p.comments*5) + (p.views*1) + (p.watchTime*4);
}

// Sort For You
function getForYou(){
  return [...posts].sort((a,b)=> getScore(b)-getScore(a));
}

// Render Posts
function render(){
  let forYou = document.getElementById("foryou");
  forYou.innerHTML = "";

  getForYou().forEach(p=>{
    forYou.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <div class="card-content">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <button onclick="openPost(${p.id})">Read More</button>
        </div>
      </div>
    `;
  });
}

// Read More
function openPost(id){
  let p = posts.find(x=>x.id===id);
  alert(p.title + "\n\n" + p.full);
}

// Page Switch
function showPage(page){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(page).classList.add("active");
}

render();
