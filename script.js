let posts = [];

function addPost(type) {
  let title = document.getElementById("title").value;
  let desc = document.getElementById("desc").value;
  let url = document.getElementById("url").value;

  let post = {
    title,
    desc,
    url,
    type, // 👈 مهم
    likes: 0
  };

  posts.push(post);
  renderPosts();
}
