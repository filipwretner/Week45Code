// Övning 1: Lägg till och ta bort paragrafer
const addButton = document.getElementById("läggTillKnapp");

addButton.addEventListener("click", () => {

    const divContent = document.getElementById("innehåll");
    const newParagraph = document.createElement("p");

    newParagraph.innerText = "Ny paragraf";
    divContent.appendChild(newParagraph);

});

const removeButton = document.getElementById("taBortKnapp");

removeButton.addEventListener("click", () => {

    const divContent = document.getElementById("innehåll");
    const lastParagraph = document.querySelectorAll("p");

    if (lastParagraph) {
        divContent.removeChild(divContent.lastElementChild);
    }

});

// ----------------------------------------------------------------------------
// Övning 2: Dynamisk Skapa en Lista med Kontrollknappar

// // Lägg till div
// const listaContainer = document.createElement("div");
// listaContainer.dataset.id = "listaContainer";
// document.body.appendChild(listaContainer);

// // Lägg till input
// const input = document.createElement("input");
// input.dataset.type = "text";
// input.dataset.id = "itemInput";
// input.dataset.placeholder = "Lägg till ett item";
// listaContainer.appendChild(input);

// // Lägg till knapp
// const addItemButton = document.createElement("button");
// addItemButton.setAttribute("id", "läggTillItemKnapp");
// addItemButton.innerText = "Lägg till Item";
// listaContainer.appendChild(addItemButton);

// // Lägg till tom ul
// const addUl = document.createElement("ul");
// listaContainer.appendChild(addUl);

// addItemButton.addEventListener("click", () => { // Lyssnar efter click på den knapp vi skapade

//     if (input.value.trim() !== "") { // Kollar om vi skrivit in något i formuläret

//         const addLi = document.createElement("li");
//         addLi.innerText = input.value.trim();
//         addUl.appendChild(addLi);
    
//         const removeItemButton = document.createElement("button");
//         removeItemButton.setAttribute("id", "taBortItemKnapp");
//         removeItemButton.innerText = "Ta Bort Item";
//         removeItemButton.addEventListener("click", () => {addUl.removeChild(addLi)}); // Eftersom varje knapp blir kopplat till ett li så väljer den alltid rätt element att ta bort
//         addLi.appendChild(removeItemButton);
        
//         input.value = ""; // Tömmer input varje gång vi lagt till ett item
//     }

// });

// ----------------------------------------------------------------------------
// Övning 3

// const addH2 = document.createElement("h2");
// addH2.textContent = "Dynamisk Sektion Skapare";
// document.body.appendChild(addH2);

// const addForm = document.createElement("form");
// addForm.dataset.id = "sektionFormulär";
// document.body.appendChild(addForm);

// const addInput = document.createElement("input");
// addInput.setAttribute("type", "text");
// addInput.setAttribute("id", "sektionRubrik");
// addInput.setAttribute("placeholder", "Rubrik för sektion");
// addForm.appendChild(addInput);

// const addTextarea = document.createElement("textarea");
// addTextarea.setAttribute("id", "sektionText");
// addTextarea.setAttribute("placeholder", "Text för sektion");
// addForm.appendChild(addTextarea);

// const addButtonTwo = document.createElement("button");
// addButtonTwo.setAttribute("type", "button");
// addButtonTwo.setAttribute("id", "läggTillSektionKnapp");
// addButtonTwo.innerText = "Lägg till sektion";
// addForm.appendChild(addButtonTwo);

// const addDiv = document.createElement("div");
// addDiv.setAttribute("id", "sektionContainer");
// document.body.appendChild(addDiv);

// const buttonTwo = document.getElementById("läggTillSektionKnapp");
// buttonTwo.addEventListener("click", () => {

//     const heading = document.getElementById("sektionRubrik").value.trim();
//     const text = document.getElementById("sektionText").value.trim();
    
//     const addSection = document.createElement("section");
//     const addH3 = document.createElement("h3");
//     const addParagraph = document.createElement("p");
//     addH3.textContent = heading;
//     addParagraph.textContent = text;

//     const removeButtonTwo = document.createElement("button");
//     removeButtonTwo.textContent = "Ta bort sektion";
//     removeButtonTwo.addEventListener("click", () => {addDiv.removeChild(addSection)});

//     addSection.appendChild(addH3);
//     addSection.appendChild(addParagraph);
//     addSection.appendChild(removeButtonTwo);

//     addDiv.appendChild(addSection);

//     document.getElementById("sektionRubrik").value = "";
//     document.getElementById("sektionText").value = "";
// });

// ----------------------------------------------------------------------------
// Övning 4: Dynamisk Tabellbyggare

const addTable = document.getElementById("läggTillTabellKnapp");
addTable.addEventListener("click", () => {

    const header = document.getElementById("tabellRubrik");
    const rows = document.getElementById("antalRader");
    const columns = document.getElementById("antalKolumner");

    const addTable = document.createElement("table");

});

// ----------------------------------------------------------------------------
// Övning 5: Dynamisk Skapa En FAQ-sektion



// ----------------------------------------------------------------------------
// Övning 6: Dynamisk Skapa En Sektion med Rubrik och Text
// Använd HTML-mallen från Övning 4.

