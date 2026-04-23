function uploadPost() {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const category = document.getElementById("category").value;

  if (!title || !image) {
    alert("مهرباني وکړه ټول معلومات ولیکه");
    return;
  }

  db.collection("posts").add({
    title: title,
    image: image,
    category: category,
    createdAt: new Date()
  })
  .then(() => {
    alert("خبر اپلوډ شو ✅");

    // inputs خالي کړه
    document.getElementById("title").value = "";
    document.getElementById("image").value = "";
  })
  .catch((error) => {
    console.log(error);
    alert("Error شو ❌");
  });
}
