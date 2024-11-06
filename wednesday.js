document.querySelector(".art-1 h3").innerText = "Potato"; // Övning 1

document.querySelectorAll("nav a")[0].innerText = "Start"; // Övning 2

document.querySelectorAll("nav a")[2].innerText = "Mail Us"; // Övning 3

document.querySelector(".art-2 p").textContent = "Redigerad info"; // Övning 4

const thirdButton = document.querySelector(".art-3 button"); // Övning 5
thirdButton.style.backgroundColor = "blue";
thirdButton.innerText = "Köp blue hoodie";

document.querySelector(".art-2").style.backgroundColor = "red"; // Övning 6

document.querySelectorAll("footer p")[0].innerText = "Ny address"; // Övning 7

const allP = document.querySelectorAll("p"); // Övning 8
allP.forEach(p => p.style.color = "purple");

const allButton = document.querySelectorAll("button"); // Övning 9
allButton.forEach(button => button.innerText = "Add to Cart");

document.querySelectorAll("nav a")[0].classList.add("active"); // Övning 10

// document.getElementsByClassName("logo")[0].classList.remove("logo"); // Övning 11

document.querySelector("nav").insertAdjacentHTML('beforeend', '<a href="#">test</a>'); // Övning 12

const newProduct = `
<article class="art-4">
    <figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
    <h2>Sinus Hoodie</h2>
    <h3>Forrest</h3>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.</p>
    <button>buy</button>
</article>
`;

document.querySelector("main").insertAdjacentHTML('beforeend', newProduct); // Övning 13

const logoEvent = document.querySelector(".logo"); // Övning 14
logoEvent.addEventListener("click", () => {
    console.log(`found you!`);
});

const allArticle = document.querySelectorAll("main article"); // Övning 15
allArticle.forEach(article => { // Loopar igenom varje article i main och lägger till en eventListener funktion
    article.addEventListener("click", () => {
        const productName = article.querySelector("h3").innerText;
        console.log(`Hi, Im article ${productName}`);
    });
});