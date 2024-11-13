// let templates = [
//     {
//         id: 1,
//         name: "Fehér",
//         image: "/assets/white.png",
        
//     },
//     {
//         id: 2,
//         name: "Kék",
//         image: "/assets/blue.png",
        
//     },
//     {
//         id: 3,
//         name: "Zöld",
//         image: "/assets/green.png",
        
//     },
//     {
//         id: 4,
//         name: "Piros",
//         image: "/assets/red.png",
        
//     },
//     {
//         id: 5,
//         name: "Szürke",
//         image: "/assets/gray.png",
        
//     },
//     {
//         id: 6,
//         name: "Fekete",
//         image: "./assets/black.png",
        
//     }
// ]



// function renderTemplates(){
//     let templatesDiv = document.getElementById("templates")
//     let templatesHTML = ``
//     templates.forEach((template)=>{
//         templatesHTML += 
//         `<div> 
//             <p>${template.name}</p>

//             <a href="#" onclick="selectTemplate(${template.id})">
//                 <img src="${template.image}" alt="${template.name}" style="width:100px; height:auto;">
//             </a>
//         </div>`
//     })

//     templatesDiv.innerHTML = templatesHTML;
// }
// renderTemplates()

// function selectTemplate(templateId){
//     localStorage.setItem("selectedTemplateId", templateId);
//     window.location.href = "./editor/editor.html";
// }

function navigate(){
    window.location.href = "./editor/editor.html";
}


function addText() {
    // Frissítsük a text változót a bemeneti mező aktuális értékével
    let text = document.getElementById("textinput").value; 
    // Frissítsük a p elemet az új szöveggel
    document.getElementById("text").innerText = text; 
}