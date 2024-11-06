// Övning 1: Använda Selektorer

// const heading = document.getElementById("huvudrubrik"); // getElementById
// console.log(heading);

// const paragraphs = document.getElementsByClassName("text"); // getElementsByClassName
// console.log(paragraphs);

// const firstItem = document.querySelector("li.item"); // querySelector väljer bara den första, för att t.ex. få det andra elementet: använd querySelectorAll och sen index i array
// console.log(firstItem);

// Övning 2: Ändra Innehåll och Attribut

// const heading = document.getElementById("huvudrubrik"); // Ändra rubrik text
// huvudrubrik.textContent = "Välkommen till min fantastiska sida!"; // textContent är standard
// console.log(heading);

// const image = document.getElementById("bild"); // Ändra bild och bildtext
// bild.src = "bild2.jpg";
// bild.alt = "Bild 2"

// const firstP = document.querySelector("p.text"); // Ändra text i första paragrafen
// firstP.textContent = "Detta är den uppdaterade paragrafen."

// Övning 3: Dynamisk Styling

// document.body.style.backgroundColor = "#f0f0f0"; // Ändra bakgrundsfärg på body

// const list = document.querySelectorAll("li.item"); // Lägger till alla items i listan till en array
// console.log(list);

// list.forEach(item => item.classList.add("highlight")); // Lägger till classen "highlight" på varje item i listan

// Övning 4: Ändra Attribut på Flera Element

// Skapat tre bilder med klassen bild i HTML

// const images = document.getElementsByClassName("bild"); // Hämtar alla element med klassen bild

// const newImages = ["nyBild1.jpg", "nyBild2.jpg", "nyBild3.jpg"]; // Array med addresserna för de nya bilderna

// for (let i = 0; i < images.length; i++) { // Looper alla element som hämtades i första steget
//     images[i].src = newImages[i]; // Ersätter värdet på varje index
//     images[i].alt = "Uppdaterad bild"; // Uppdaterar alt för varje index
// }

// for (let i = 0; i < images.length; i++) { // Loopar utan andra arrayen, ersätter attributen 'src' och 'alt' med strängar som representerar de nya bilderna
//     images[i].setAttribute('src', 'nyBild' + (i + 1) + '.jpg');
//     images[i].setAttribute('alt', 'Uppdaterad bild');
// }

// Övning 5: Navigera DOM-Trädet

// Skapade en lista (ul) med tre listobjekt (li) i HTML, omringat av en div med id: listaContainer

// const container = document.getElementById("listaContainer"); // Hämta div elementet

// const ulElement = container.firstElementChild; // Navigera till ul

// liElement = container.lastElementChild; // Eftersom ul är det enda elementChild i containern så blir detta samma som firstElementChild
// const liElement = ulElement.lastElementChild; // Går in på item 3 i listan eftersom varje li räknas som ett child
// const liElement = ulElement.parentNode; // Går tillbaka till div containerna eftersom det är parent till ul

// const liElement = ulElement.children; 
// console.log(liElement);
// liElement[1].textContent = "Uppdaterad punkt";

// Övning 6: Använda querySelectorAll och Looping över NodeList

// Skapat flera div element med klassen "ruta"
// const rutor = document.querySelectorAll("div.ruta"); // Väljer alla div-element med klassen ruta
// console.log(rutor);

// for (let i = 0; i < rutor.length; i++) { // Med for-loop

//     if (i % 2 === 0) { // Villkor för varanann index
//         rutor[i].style.backgroundColor = "gray"; 
//     } else {
//         rutor[i].style.backgroundColor = "white";
//     }

//     rutor[i].textContent = `Ruta ${i + 1}`; // Ändra text på varje index
// }

// rutor.forEach((ruta, index) => { // Med forEach

//     if (index % 2 === 0) {
//         ruta.style.backgroundColor = "gray";
//     } else {
//         ruta.style.backgroundColor = "white";
//     }

//     ruta.textContent = `Ruta ${index + 1}`;
// });

// Övning 7: Utforska Olika Selektorer

// Använder seven.html

// const header = document.getElementById("rubrik");
// console.log(header);

// const description = document.getElementsByClassName("beskrivning");
// console.log(description);

// const firstList = document.querySelector("li.highlight");
// console.log(firstList);

// const fullList = document.querySelectorAll("li.item");
// console.log(fullList);

// const info = document.querySelector("[data-info='viktig']")
// console.log(info);

// Övning 8: Ändra Innehåll med innerHTML och textContent

// Uppgift:

// Fortsätt använda HTML-mallen från Övning 7.

// const boxContent = document.querySelector("div.box");
// Går också att använda getElementsByClassName med syntax blir då:
// const boxContent = document.getElementsByClassName("box")[0];
// getElementsByClassName skapar en HTML collection och vi måste då specifiera vilket index vi vill åt

// boxContent.innerHTML = `
//     <h2>Ny Rubrik</h2>
//     <p>Detta är nytt innehåll</p>
// `; // Använd innerHTML när du villa ändra HTML struktur

// const firstDescription = document.querySelector(".beskrivning"); // punkt innan gör att det inte spelar någon roll vilket element klassen är i

// firstDescription.textContent = "Uppdaterad beskrivning"; // Använd textContent när du bara vill ändra text

// Övning 9: Navigera i DOM-trädet

// Uppgift:
// Använd HTML-mallen från Övning 7.

// const ulElement = document.querySelector("ul");

// const firstLi = ulElement.firstElementChild;
// console.log(`Första li element: ${firstLi.textContent}`);

// const lastLi = ulElement.lastElementChild;
// lastLi.textContent = "Sista item";

// Övning 10: Ändra Stilar på Flera Element med Loopar

// Uppgift:
// Använd HTML-mallen från Övning 7.

// const description = document.getElementsByClassName("beskrivning");

// for (let i = 0; i < description.length; i++) {
//     description[i].style.color = "blue";
// }

// const liElements = document.querySelectorAll("li.item");

// liElements.forEach(item => {item.style.backgroundColor = "#f2f2f2";});

// Övning 11: Jämföra textContent, innerText och innerHTML

// const divContainer = document.getElementById("textContainer");

// console.log(`textContent: ${divContainer.textContent}`); // Får ut all text
// console.log(`textContent: ${divContainer.innerText}`); // Får ut all synlig text
// console.log(`textContent: ${divContainer.innerHTML}`); // Får ut all HTML kod

// // Övning 12: Ändra Attribut på Element

// const lin = document.getElementById("minLänk");

// lin.setAttribute("href", "https://www.google.com"); // Väljer först vilket attribut, sen vad den ska "säga"
// lin.setAttribute("title", "Besök Google");
// lin.textContent = "Sök på Google";

// // Övning 13: Använda CSS-klasser för Styling

// const fullList = document.querySelectorAll("li.item");

// fullList[1].classList.add("dold");

// fullList[0].classList.add("framträdande");
