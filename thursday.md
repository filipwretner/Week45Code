// Övning 1: Lägg till och Ta Bort Paragrafer

// Uppgift:
// Skapa två knappar på sidan:

// En knapp med id="läggTillKnapp" och texten "Lägg till paragraf".
// En knapp med id="taBortKnapp" och texten "Ta bort paragraf".

// Använd JavaScript för att:

// När "Lägg till paragraf" klickas, skapa en ny paragraf med unik text och lägg till den i innehåll-diven.
// När "Ta bort paragraf" klickas, ta bort den senaste tillagda paragrafen.

// Syfte:
// Öva på att använda createElement, appendChild, och removeChild baserat på användarens interaktion.

// Ert JS Svar:

// ----------------------------------------------------------------------------

// Övning 2: Dynamisk Skapa en Lista med Kontrollknappar

// Uppgift:
// Skapa en div-container med id="listaContainer", en input-fält med id="itemInput", och en knapp med id="läggTillItemKnapp" och texten "Lägg till item".

// Använd JavaScript för att:

// När "Lägg till item" klickas, skapa en ny li-element med texten från input-fältet och en "Ta bort"-knapp.
// Lägg till den nya li-elementet till en ul-lista inuti listaContainer.
// När "Ta bort"-knappen i ett li-element klickas, ta bort just det li-elementet.

// Syfte:
// Öva på att skapa komplexa element med inre strukturer och lägga till händelsehanterare till dynamiskt skapade element.

// HTML-tillägg för Övning 2 MEN Skapa gärna detta med Javascript istället för att manuellt bara kopiera och klistra in nedan Text.:

// <h2>Dynamisk Lista</h2>
// <div id="listaContainer">
//   <input type="text" id="itemInput" placeholder="Lägg till ett item">
//   <button id="läggTillItemKnapp">Lägg till item</button>
//   <!-- Ul-element kommer att skapas dynamiskt -->
// </div>

// ----------------------------------------------------------------------------
// Övning 3: Dynamisk Skapa en Lista med Kontrollknappar

// Uppgift:
// Skapa ett formulär med två input-fält:

// Ett input type="text" med id="sektionRubrik" för rubriktext.
// Ett textarea med id="sektionText" för textinnehåll.
// En knapp med id="läggTillSektionKnapp" och texten "Lägg till sektion".
// Lägg till en tom div med id="sektionContainer".

// Använd JavaScript för att:

// När "Lägg till sektion" klickas, skapa en ny section-element.
// Inom section, skapa en h2-element med rubriktexten och en p-element med textinnehållet.
// Lägg till en "Ta bort sektion"-knapp i varje section som tar bort just den sektionen när den klickas.
// Lägg till den nya section till sektionContainer.

// Syfte:
// Öva på att skapa strukturerade HTML-sektioner dynamiskt och hantera deras borttagning.

// HTML-tillägg för Övning 3 MEN Skapa gärna detta med Javascript istället för att manuellt bara kopiera och klistra in nedan Text.:

{
  /* <h2>Dynamisk Sektion Skapare</h2>
<form id="sektionFormulär">
  <input type="text" id="sektionRubrik" placeholder="Rubrik för sektion" required>
  <textarea id="sektionText" placeholder="Text för sektion" required></textarea>
  <button type="button" id="läggTillSektionKnapp">Lägg till sektion</button>
</form>
<div id="sektionContainer"></div> */
}

// ----------------------------------------------------------------------------
// Övning 4: Dynamisk Tabellbyggare

// Uppgift:
// Skapa ett formulär med tre input-fält:

// input type="text" med id="tabellRubrik" för tabellens rubrik.
// input type="number" med id="antalRader" för antal rader.
// input type="number" med id="antalKolumner" för antal kolumner.
// En knapp med id="läggTillTabellKnapp" och texten "Skapa Tabell".
// Lägg till en tom div med id="tabellContainer".

// Använd JavaScript för att:

// När "Skapa Tabell" klickas, skapa en ny table-element med en rubrik (thead) och ett tbody.
// Lägg till angivet antal rader och kolumner i tbody.
// Lägg till en "Ta bort tabell"-knapp bredvid tabellen som tar bort just den tabellen när den klickas.
// Lägg till rubriken som caption eller som en separat h3 över tabellen.

// Syfte:
// Öva på att skapa mer komplexa strukturer som tabeller dynamiskt.

// HTML-tillägg för Övning 4 MEN Skapa gärna detta med Javascript istället för att manuellt bara kopiera och klistra in nedan Text.:

<h2>Dynamisk Tabellbyggare</h2>
<form id="tabellFormulär">
  <input type="text" id="tabellRubrik" placeholder="Tabellrubrik" required>
  <input type="number" id="antalRader" placeholder="Antal rader" min="1" required>
  <input type="number" id="antalKolumner" placeholder="Antal kolumner" min="1" required>
  <button type="button" id="läggTillTabellKnapp">Skapa Tabell</button>
</form>
<div id="tabellContainer"></div>
----------------------------------------------------------------------------

// Övning 5: Dynamisk Skapa En FAQ-sektion

// Uppgift:
// Skapa ett formulär med två input-fält:

// input type="text" med id="frågaInput" för en fråga.
// textarea med id="svarInput" för svaret.
// En knapp med id="läggTillFAQKnapp" och texten "Lägg till FAQ".
// Lägg till en tom div med id="faqContainer".

// Använd JavaScript för att:

// När "Lägg till FAQ" klickas, skapa en ny div-element som innehåller en h4-element för frågan och en p-element för svaret.
// Lägg till en "Ta bort FAQ"-knapp i varje FAQ som tar bort just den FAQ
// när den klickas.
// Lägg till den nya FAQ
// till faqContainer.

// Syfte:
// Öva på att skapa strukturerade FAQ-sektioner dynamiskt och hantera deras borttagning.

// HTML-tillägg för Övning 5 MEN Skapa gärna detta med Javascript istället för att manuellt bara kopiera och klistra in nedan Text.:

// <h2>Dynamisk FAQ-sektion</h2>
// <form id="faqFormulär">
//   <input type="text" id="frågaInput" placeholder="Skriv en fråga" required>
//   <textarea id="svarInput" placeholder="Skriv svaret" required></textarea>
//   <button type="button" id="läggTillFAQKnapp">Lägg till FAQ</button>
// </form>
// <div id="faqContainer"></div>
// ----------------------------------------------------------------------------

// Övning 6: Dynamisk Skapa En Sektion med Rubrik och Text

// Uppgift:
// Använd HTML-mallen från Övning 4.

// Använd JavaScript för att:

// Skapa en ny section-element.
// Inom section, skapa en h2-element med rubriktexten och en p-element med textinnehållet.
// Lägg till en "Ta bort sektion"-knapp i varje section som tar bort just den sektionen när den klickas.
// Lägg till den nya section till sektionContainer.

// Syfte:
// Öva på att skapa strukturerade HTML-sektioner dynamiskt och hantera deras borttagning.

// HTML-tillägg för Övning 6 MEN Skapa gärna detta med Javascript istället för att manuellt bara kopiera och klistra in nedan Text.:

// <h2>Dynamisk Sektion Skapare</h2>
// <form id="sektionFormulär">
//   <input type="text" id="sektionRubrik" placeholder="Rubrik för sektion" required>
//   <textarea id="sektionText" placeholder="Text för sektion" required></textarea>
//   <button type="button" id="läggTillSektionKnapp">Lägg till sektion</button>
// </form>
// <div id="sektionContainer"></div>