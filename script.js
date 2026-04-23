// Firebase config
const firebaseConfig = {
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function loadPosts(category) {
  const postsDiv = document.getElementById("posts");
  postsDiv.innerHTML = "";

  db.collection("posts")
    .where("category", "==", category)
    .get()
    .then(snapshot => {
      snapshot.forEach(doc => {
        const post = doc.data();

        postsDiv.innerHTML += `
          <div class="post">
            <img src="${post.image}">
            <h3>${post.title}</h3>
          </div>
        `;
      });
    });
}
