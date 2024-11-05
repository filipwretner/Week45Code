# Week45Code
 
// Övning 1: Använda Selektorer

// Uppgift:
// Använd getElementById för att hämta h1-elementet.
// Använd getElementsByClassName för att hämta alla p-element med klassen text.
// Använd querySelector för att hämta första li-elementet.
// Logga resultaten i konsolen.

// ------------------------------
// Övning 2: Ändra Innehåll och Attribut

// Uppgift:
// Ändra texten i h1-elementet till "Välkommen till min fantastiska sida!".

// Lägg till ett nytt img-element i HTML:
// <img id="bild" src="bild1.jpg" alt="Bild 1">

// I JavaScript, byt ut bilden till bild2.jpg och uppdatera alt-texten till "Bild 2".

// Ändra texten i första paragrafen till "Detta är den uppdaterade paragrafen.".

// ------------------------------
// Övning 3: Dynamisk Styling

// Uppgift:
// Ändra bakgrundsfärgen på body till #f0f0f0 när sidan laddas.

// Lägg till en CSS-klass i <style>-taggen i HTML:
// <style>
//   .highlight {
//     background-color: yellow;
//   }
// </style>

// Använd classList för att lägga till klassen highlight till alla li-element.

// ------------------------------
// Övning 4: Ändra Attribut på Flera Element

// Uppgift:
// Skapa tre bilder på sidan med class="bild" och olika src-attribut.

// Använd JavaScript för att:

// Hämta alla bilder med klassen bild.
// Ändra src-attributet på varje bild till en ny bildfil (t.ex., "nyBild1.jpg", "nyBild2.jpg", "nyBild3.jpg").
// Ändra alt-texten på varje bild till "Uppdaterad bild".

// Syfte:
// Öva på att använda getElementsByClassName och loopa över en HTMLCollection för att ändra attribut på flera element.
// ------------------------------
// Övning 5: Navigera DOM-Trädet

// Uppgift:
// Skapa en lista (<ul>) med flera listobjekt (<li>) inuti en container-<div> med id="listaContainer".

// Använd JavaScript för att:

// Hämta div-elementet med id="listaContainer".
// Navigera till <ul>-elementet inuti div-elementet.
// Ändra textinnehållet för det andra <li>-elementet till "Uppdaterad punkt".

// Syfte:
// Öva på att navigera mellan föräldrar och barn i DOM-trädet med egenskaper som parentNode, children, firstElementChild, lastElementChild.
// ------------------------------

// ------------------------------
// Övning 6: Använda querySelectorAll och Looping över NodeList

// Uppgift:
// Skapa flera div-element på sidan med class="ruta".

// Använd JavaScript för att:

// Hämta alla element med klassen ruta med querySelectorAll.
// Ändra bakgrundsfärgen på varannan ruta till en annan färg (t.ex., ändra varannan till grå).
// Lägg till texten "Ruta [nummer]" inuti varje div, där [nummer] är dess position i listan.

// Syfte:
// Öva på att använda querySelectorAll, loopa över en NodeList, och manipulera flera element baserat på deras position.

// ------------------------------
// Övning 7: Utforska Olika Selektorer

// Uppgift:
// Använd följande HTML-mall:

// <!DOCTYPE html>
// <html lang="sv">
// <head>
//   <meta charset="UTF-8">
//   <title>Selektorer Övning</title>
// </head>
// <body>
//   <h1 id="rubrik">Min Webbsida</h1>
//   <p class="beskrivning">Detta är en beskrivande text.</p>
//   <p class="beskrivning">Detta är en annan beskrivande text.</p>
//   <div data-info="viktig" class="box">
//     <span>Något viktigt innehåll</span>
//   </div>
//   <ul>
//     <li class="item">Item 1</li>
//     <li class="item highlight">Item 2</li>
//     <li class="item">Item 3</li>
//   </ul>
//   <script src="script.js"></script>
// </body>
// </html>

// Använd JavaScript för att hämta och logga följande element:

// Elementet med id="rubrik" med hjälp av getElementById.
// Alla element med klassen beskrivning med hjälp av getElementsByClassName.
// Det första <li>-elementet med klassen highlight med hjälp av querySelector.
// Alla <li>-element med klassen item med hjälp av querySelectorAll.
// Elementet med attributet data-info="viktig" med hjälp av querySelector.

// Syfte:
// Öva på att använda olika typer av selektorer för att hämta element från DOM.
// ------------------------------
// Övning 8: Ändra Innehåll med innerHTML och textContent

// Uppgift:
// Fortsätt använda HTML-mallen från Övning 7.

// Använd JavaScript för att:

// Ändra innehållet i div-elementet med class="box" till:

// <h2>Ny Rubrik</h2>
// <p>Detta är nytt innehåll.</p>
// Använd innerHTML.

// Ändra texten i första paragrafen med klassen beskrivning till "Uppdaterad beskrivning." Använd textContent.

// Observera skillnaden mellan att använda innerHTML och textContent.

// Syfte:
// Förstå skillnaden mellan innerHTML och textContent och när man bör använda dem.
// ------------------------------
// Övning 9: Navigera i DOM-trädet

// Uppgift:
// Använd HTML-mallen från Övning 7.

// Använd JavaScript för att:

// Hämta ul-elementet på sidan.
// Hämta det första li-elementet inom ul genom att navigera i DOM-trädet.
// Ändra texten i det sista li-elementet till "Sista item".

// Syfte:
// Öva på att navigera mellan förälder- och barnnoder i DOM med hjälp av egenskaper som parentNode, children, firstElementChild, lastElementChild, nextElementSibling, och previousElementSibling.
// ------------------------------
// Övning 10: Ändra Stilar på Flera Element med Loopar
// Uppgift:
// Använd HTML-mallen från Övning 7.

// Använd JavaScript för att:

// Hämta alla p-element med klassen beskrivning.
// Loopa igenom dem och ändra textfärgen till blå.
// Ändra bakgrundsfärgen på alla li-element med klassen item till ljusgrå (#f2f2f2).

// Syfte:
// Öva på att loopa över en HTMLCollection eller NodeList för att manipulera flera element.

// ------------------------------
// Övning 11: Jämföra textContent, innerText och innerHTML

// Uppgift:
// Använd följande HTML-kod i din sida:

// <div id="textContainer">
//   <p>Detta är en <strong>viktig</strong> text.</p>
//   <!-- En dold paragraf -->
//   <p style="display: none;">Denna text är dold.</p>
// </div>

// Använd JavaScript för att:

// Hämta div-elementet med id="textContainer".
// Logga värdena av textContent, innerText och innerHTML för detta element.
// Notera skillnaderna mellan dessa egenskaper.

// Syfte:
// Förstå skillnaderna mellan textContent, innerText och innerHTML.

// Förväntad Output och Förklaring:
// textContent: Returnerar all text inom elementet, inklusive text från dolda element och utan att tolka HTML-taggar.

// innerText: Returnerar synlig text, exkluderar text från dolda element och tar hänsyn till CSS-stilar.

// innerHTML: Returnerar HTML-innehållet som en sträng, inklusive alla taggar.
// ------------------------------
// Övning 12: Ändra Attribut på Element

// Uppgift:
// Lägg till följande länk i din HTML:

// <a id="minLänk" href="https://www.example.com" title="Besök Example.com">Besök vår sida</a>

// Använd JavaScript för att:

// Hämta länken med id="minLänk".
// Ändra href-attributet till https://www.google.com.
// Ändra title-attributet till "Besök Google".
// Ändra länktexten till "Sök på Google".

// Syfte:
// Öva på att använda setAttribute och att ändra textinnehållet i ett länkelement.
// ------------------------------
// Övning 13: Använda CSS-klasser för Styling

// Uppgift:
// Lägg till följande CSS-stilar i din <head>:

// <style>
//   .dold {
//     display: none;
//   }
//   .framträdande {
//     color: red;
//     font-weight: bold;
//   }
// </style>

// Använd JavaScript för att:

// Hämta alla li-element med klassen item.
// Lägg till klassen dold på det andra li-elementet för att dölja det.
// Lägg till klassen framträdande på det första li-elementet för att göra det mer framträdande.

// Syfte:
// Öva på att manipulera classList för att lägga till och ta bort CSS-klasser på element.