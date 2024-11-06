// Övning 1: Enkel Räknare

// Uppgift:
// Skapa två knappar:

// En med id="ökaKnapp" och texten "Öka".
// En med id="minskaKnapp" och texten "Minska".
// **Lägg till ett p-element med id="räknare" som visar startvärdet 0.

// Använd JavaScript för att:

// Lägga till event listeners på knapparna.
// När "Öka" klickas, öka värdet med 1 och uppdatera texten i p-elementet.
// När "Minska" klickas, minska värdet med 1 och uppdatera texten.
// Syfte:
// Öva på att hantera klickhändelser och uppdatera DOM baserat på användarinteraktion.

let counter = 0;

const counterElement = document.getElementById("räknare");
const addButton = document.getElementById("ökaKnapp");
const removeButton = document.getElementById("minskaKnapp");

addButton.addEventListener("click", () => {
    counter += 1;
    counterElement.textContent = counter;
});

removeButton.addEventListener("click", () => {
    counter -= 1;
    counterElement.textContent = counter;
});

// ------------------------------------------------------------------------

// Övning 2: Formulärvalidering

// Uppgift:
// Skapa ett formulär med ett textfält (input type="text") och en knapp (input type="submit").

// Använd JavaScript för att:

// Lyssna på submit-händelsen på formuläret.
// Förhindra standardbeteendet (att sidan laddas om) med event.preventDefault().
// Kontrollera att textfältet inte är tomt.
// Om det är tomt, visa ett felmeddelande under formuläret.
// Om det inte är tomt, visa en bekräftelse.
// Syfte:
// Öva på att hantera formulärhändelser och validera användarinmatning.

const myForm = document.getElementById("mittFormulär");
const textArea = document.getElementById("textFält");
const message = document.getElementById("meddelande");

myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (textArea.value === "") { 
        message.textContent = "Textfältet får inte vara tomt";
    } else {
        message.textContent = "Formuläret skickades";
    }
});


// ------------------------------------------------------------------------

// Övning 3: Ändra Bild vid Musöver

// Uppgift:
// Lägg till en bild (img) med id="minBild" och src="bild1.jpg".

// Använd JavaScript för att:

// Lyssna på mouseover och mouseout-händelser på bilden.
// När muspekaren är över bilden, ändra src till bild2.jpg.
// När muspekaren lämnar bilden, ändra tillbaka till bild1.jpg.
// Syfte:
// Öva på att hantera mus-händelser och ändra attribut på element.

const image = document.getElementById("minBild");

image.addEventListener("mouseover", () => {
    image.src = "bild2.jpg";
    image.alt = "bild 2";
});

image.addEventListener("mouseout", () => {
    image.src = "bild1.jpg";
    image.alt = "bild 1";
});