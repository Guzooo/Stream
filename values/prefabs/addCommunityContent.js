//TODO
//funkcja powinna na podstawie jakiegoś modelu dodawać posty do kontenera na stronie 

// Przykładowy post
const examplePost = {
    author: "Autor: BronkStarGames",
    date: "Data wpisu: 10.10.2010r.",
    content: "Treść: Witajcie followersi, pora na update naszej pracy, dziś wypuszczamy wersję beta 0.3 naszej gry GreatAutoTheft 5. Polecam sprawdzić i dajcie nam znać co myślicie. Dodaliśmy samochody do jeżdżenia, tramwaje do wykolejania, przechodni do wymijania, kluby dla hazardzistów w którch nie będzie hazardu, oraz mechanikę pogoni przez policję która jeszcze pozostawia duzo do życzenia, ale już dostarcza świetnej rozrywki dla całej rodziny. Nad  updajtem pracowali głównie juliusz, gajusz oraz cezar, chłopaki odwalili kawał świetnej roboty i podobono super się przy tym bawilil, Wygląda to o wiele lepiej ale mamy jeszcze dużo roboty zanim będziemy gotowi wyuścić gotowy produkt. Nad następnym udpatem będzie pracował Brutus, miejmy nadzieje że nie zaprzepaści dziedzictwa Cezara. Trzymajcie się ciepło, cześć!"
};

// Utwórz tablicę z 20 przykładowymi postami
const posts = Array(20).fill(examplePost);

function addPosts(posts) {
    console.log('zaczynam dodawać posty do strony')
    // Czyść istniejące posty
    const postContainer = document.getElementById("postContainer")
    postContainer.innerHTML = "";

    // Wygeneruj i wklej każdy post
    posts.forEach((post) => {
        console.log('dodaję post do strony')
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const postHeader = document.createElement("div");
        postHeader.classList.add("post-header");
        postHeader.innerHTML = `<div class="post-author">${post.author}</div><div class="post-date">${post.date}</div>`;

        const postContent = document.createElement("div");
        postContent.classList.add("post-content");
        postContent.innerHTML = `Treść:<div class="scrollable-content">${post.content}</div>`;

        postElement.appendChild(postHeader);
        postElement.appendChild(postContent);

        postContainer.appendChild(postElement);
    });
}

addPosts(posts.slice(0, 10));
