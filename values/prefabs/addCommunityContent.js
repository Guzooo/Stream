const PrefabGeneratePosts = (function () {
    return {
        addPosts
    };
    function addPosts(posts) {
        // Czyść istniejące posty
        console.log('dodaje posty')
        posts.forEach((post) =>{
            console.log(post.author);
        });
        const postContainer = document.getElementById("postContainer")
        postContainer.innerHTML = "";

        posts.forEach((post) => {
            const postElement = document.createElement("div");
            postElement.classList.add("post");

            const postHeader = document.createElement("div");
            postHeader.classList.add("post-header");
            postHeader.innerHTML = `<div class="post-author">${post.author}</div><div class="post-date">${post.date}</div>`;

            const postContent = document.createElement("div");
            postContent.classList.add("post-content");
            postContent.innerHTML = `Treść:<div>${post.content}</div>`;

            // Dodaj EventListener
            postContent.addEventListener('click', function() {
                if (this.style.maxHeight) {
                    this.style.maxHeight = null;
                } else {
                    this.style.maxHeight = 'none';
                }
            });

            postElement.appendChild(postHeader);
            postElement.appendChild(postContent);
            postContainer.appendChild(postElement);
        });
    }
})();
