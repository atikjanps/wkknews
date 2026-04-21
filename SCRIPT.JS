let posts = [];

// ➕ ADD POST (Article / Video)
function addPost(){
  let type = document.getElementById("type").value;
  let title = document.getElementById("title").value;
  let media = document.getElementById("media").value;
  let desc = document.getElementById("desc").value;

  posts.unshift({
    id: Date.now(),
    type,
    title,
    media,
    desc,
    likes: Math.floor(Math.random()*100),
    comments: Math.floor(Math.random()*50),
    views: Math.floor(Math.random()*500),
    watchTime: Math.floor(Math.random()*200)
  });

  render();
}

// 🧠 FOR YOU ALGO
function score(p){
  return (p.likes*3)+(p.comments*5)+p.views+(p.watchTime*4);
}

// 🗑️ DELETE
function deletePost(id){
  posts = posts.filter(p=>p.id !== id);
  render();
}

// 📺 RENDER
function render(){

  let articles = document.getElementById("articles");
  let foryou = document.getElementById("foryou");
  let videos = document.getElementById("videos");

  articles.innerHTML = "";
  foryou.innerHTML = "";
  videos.innerHTML = "";

  let sorted = [...posts].sort((a,b)=>score(b)-score(a));

  sorted.forEach(p=>{

    let card = `
      <div class="card">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <button onclick="deletePost(${p.id})">Delete</button>
      </div>
    `;

    // ARTICLE
    if(p.type === "article"){
      articles.innerHTML += `
        <div class="card">
          <img src="${p.media}">
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <button onclick="deletePost(${p.id})">Delete</button>
        </div>
      `;
    }

    // FOR YOU
    foryou.innerHTML += card;

    // VIDEO
    if(p.type === "video"){
      videos.innerHTML += `
        <div class="card">
          <video controls src="${p.media}"></video>
          <h3>${p.title}</h3>
          <p>${p.desc}</p>
          <button onclick="deletePost(${p.id})">Delete</button>
        </div>
      `;
    }
  });
}

// 📱 PAGE SWITCH
function show(id){
  document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

render();
