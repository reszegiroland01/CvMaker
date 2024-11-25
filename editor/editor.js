const templates = {
    template1: `
      <div id="PDFcontainer" class="w-[579px] min-h-[792px] flex justifyCenter items-center">
        <div id="PDFcontainer" class="bg-white shadow-md px-[40px] py-[20px] w-[579px] min-h-[792px] top-10 ">
            
            <div class="flex gap-10 mb-[25px]">
                <img src="" alt="Image preview"  id="IMG" style="display: none;" class="h-[70px] w-[70px] rounded-md bg-none">
                <div class="flex flex-col">
                    <p class="font-bold text-[30px] text-[#262B33] font-['Molengo']" id="fullName"></p>
                    <p class="text-[#ABADB0] text-[12px]" id="jobTitle"></p>
                </div>
            </div>
    
            <div class="flex ">
                <div class="w-[70%] flex flex-col gap-4" id="datadata">
                    <div id="profil"></div>
                    <div id="experience"></div>
                    <div id="education"></div>
                </div>
                
    
                <div class="w-[30%] flex flex-col gap-4 px-4 jus"> 
                    <div class="text-[12px]" id="personalInfo">
                        <p class="font-semibold text-[#262B33] text-[12px] font-['Molengo']">Adatok</p>
                        <div class="text-[12px]">
                            <p id="cityName"></p>
                            <p id="countryName"></p>
                            <p id="telephoneNumber"></p>
                            <p id="emailAddress"></p>
                        </div>
                    </div>
                    
                    <div class="text-[12px]" id="experienceDiv"></div>
                    
                    <div class="text-[12px] text-[#2196F3]" id="links"></div>
    
                    <div class="text-[12px]" id="languagesDIV"></div>
                </div>
            </div>
        </div>
        
    </div>
    `,
    template2: `
      <p>Template 2</p>
    `,
    template3: `
      <p>Template 3</p>
    `,
    template4: `
        <p>Template 4</p>
    `,
    template5: `
      <p>Template 5</p>
    `,
    template6: `
      <p>Template 6</p>
    `,
  };

  const selectedTemplate = localStorage.getItem('selectedTemplate');
  if (selectedTemplate) {
    const content = templates[selectedTemplate];
    document.getElementById('editorArea').innerHTML = content;  // A sablon betöltése a textarea-ba
  }

  

let linksArray = [];
let experienceArray = [];
let languagesArray = [];


function renderCV() {
    let firstNameValue = document.getElementById("firstNameValue").value;
    let lastNameValue = document.getElementById("lastNameValue").value;
    let fullName = firstNameValue + " " + lastNameValue;
    
    let countryValue = document.getElementById("countryValue").value;
    let cityValue = document.getElementById("cityValue").value;
    let emailValue = document.getElementById("emailValue").value;
    let telephoneNumberValue = document.getElementById("telephoneNumberValue").value;
    let jobValue = document.getElementById("jobValue").value;
    
    document.getElementById("fullName").innerHTML = fullName;
    document.getElementById("jobTitle").innerHTML = jobValue

    document.getElementById("countryName").innerHTML = countryValue 
    document.getElementById("cityName").innerHTML = cityValue
    document.getElementById("telephoneNumber").innerHTML = emailValue
    document.getElementById("emailAddress").innerHTML = telephoneNumberValue
    

    let personalInfoDiv = document.getElementById("personalInfo");
    if (countryValue === "" && cityValue === "" && emailValue === "" && telephoneNumberValue === "") {
        personalInfoDiv.style.display = "none";  // Ha minden mező üres, rejtse el
    } else {
        personalInfoDiv.style.display = "block";  // Ha van adat, mutassa
    }
    //CHAT GPT Segített
    let imageInput = document.getElementById("imageInput");
    let imagePreview = document.getElementById("IMG");
    let removeIMGButton = document.getElementById("removeIMG")
    
    if (imageInput.files && imageInput.files[0]) {
        removeIMGButton.innerHTML = "";

        // Gomb létrehozása és eseménykezelő hozzáadása
        const button = document.createElement("button");
        button.textContent = "✖";
        button.addEventListener("click", deleteIMG);
        removeIMGButton.appendChild(button);

        let reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.src = e.target.result; // Beállítja a kép src attribútumát
            imagePreview.style.display = "block"; 
        };
        reader.readAsDataURL(imageInput.files[0]); // Kép fájl olvasása

        function deleteIMG(){
            imageInput.value = "";
            imagePreview.src = "";
            imagePreview.style.display = "none"; 
            removeIMGButton.innerHTML = "";
        }  
    } 
}










function addExperience() {
    let experienceName = document.getElementById("experienceName").value;
    let experienceLevel = document.getElementById("experienceLevel").value;

    if(experienceName === "" || experienceLevel === ""){
        alert("Töltsd ki megfelelően a készségeket.")
    }else{
        let experienceObject = {
            name: experienceName,
            level: experienceLevel,
        };
        experienceArray.push(experienceObject);
    
        document.getElementById("experienceName").value = "";
        document.getElementById("experienceLevel").value = "";
        renderExperience();
        renderEditExperience();
    }
    

    
}
function renderEditExperience(){

    if (experienceArray.length !== 0) {
        let editExperienceDiv = `
        <div class="flex flex-col h-full w-[80%] gap-5">
            <p class="text-[20px] text-[#656E83] font-bold py-4">Készségek törlése</p>
            <div id="editExperienceList" class=" max-h-28 w-full overflow-y-auto text-[#828BA2] text-[18px] p-4 bg-[#EFF2F9] rounded-md min-w-[60%]"></div>
        </div>`;
        document.getElementById("editExperience").innerHTML = editExperienceDiv;

        const editExperienceList = document.getElementById("editExperienceList");
        editExperienceList.innerHTML = ""

        experienceArray.forEach((experience, index) => {
            let experienceItem = document.createElement('div');
            experienceItem.innerHTML = `${experience.name}`;
            experienceItem.classList = "flex justify-between"

            let deleteButton = document.createElement('button');
            deleteButton.textContent = "✖";
            deleteButton.classList = "text-blue-500 text-[18px]  ml-2"
            deleteButton.onclick = () => deleteExperience(index);
    
            experienceItem.appendChild(deleteButton);
            editExperienceList.appendChild(experienceItem);
            
        });
    }
    else{
        document.getElementById("editExperience").innerHTML = ""
    }
    
}

function deleteExperience(index){
    experienceArray.splice(index, 1);
    renderExperience();
    renderEditExperience()
}

function renderExperience() {
    let experienceContainer = document.getElementById("experienceDiv");
    let experienceHTML = "";

    if (experienceArray.length !== 0) {
        experienceHTML += `<div><p class="font-semibold text-[#262B33] text-[14px] font-['Molengo'] mb-2">Készségek</p></div>`;

        experienceArray.forEach((experience) => {
            experienceHTML += `
            <div class="flex flex-col mb-2">
                <div class="w-full h-full text-[12px]">${experience.name}</div>
                <div class="w-full h-[5px] bg-[#CFD6E6]">
                    <div class="bg-[#191E29] h-[5px] w-${experience.level}/5"></div>
                </div>
            </div>`;
        });
    }
    experienceContainer.innerHTML = experienceHTML;
}

function addLinks(){
    let linkName = document.getElementById("linkName").value
    let linkURL = document.getElementById("linkURL").value
    
    if(linkName === "" || linkURL === ""){
        alert("Töltsd ki megfelelően a linkeket.")
    }else{
        let linkObject = {
            name: linkName,
            url: linkURL,
        };
        linksArray.push(linkObject);
    
        document.getElementById("linkName").value = "";
        document.getElementById("linkURL").value = "";
    
        renderLinks()
        renderEditLinks()
    }

}
function renderEditLinks(){
    if (linksArray.length !== 0) {
        let editLinksDiv = `
        <div class="flex flex-col h-full w-[80%] gap-5">
            <p class="text-[20px] text-[#656E83] font-bold py-4">Linkek törlése</p>
            <div id="editLinksList" class=" max-h-28 w-full overflow-y-auto text-[#828BA2] text-[18px] p-4 bg-[#EFF2F9] rounded-md min-w-3/5"></div>
        </div>`;
        document.getElementById("editLinks").innerHTML = editLinksDiv;

        const editLinksList = document.getElementById("editLinksList");
        editLinksList.innerHTML = ""

        linksArray.forEach((link, index) => {
            let linksItem = document.createElement('div');
            linksItem.innerHTML = `${link.name}`;
            linksItem.classList = "flex justify-between"
    
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "✖";
            deleteButton.classList = "text-blue-500 text-[18px]  ml-2"
            deleteButton.onclick = () => deleteLinks(index);

            linksItem.appendChild(deleteButton);
            editLinksList.appendChild(linksItem);
        });
    }
    else{
        document.getElementById("editLinks").innerHTML = ""
    }
}
function deleteLinks(index){
    linksArray.splice(index, 1);
    renderLinks();
    renderEditLinks()
}

function renderLinks() {
    let linksContainer = document.getElementById("links");
    let linksHTML = ""; 

    if (linksArray.length !== 0){
        linksHTML += `<div><p class="font-semibold text-[#262B33] text-[14px] font-['Molengo']">Linkek</p></div>`;

        linksArray.forEach((link) => {
            linksHTML += `<div><a href="${link.url}" target="_blank">${link.name}</a></div>`; 
        });
    }
    linksContainer.innerHTML = linksHTML; 
}










function addLanguage(){
    let languageName = document.getElementById("languageName").value
    let languageLevel = document.getElementById("languages").value

    if(languageName === "" || languageLevel === ""){
        alert("Töltsd ki megfelelően a nyelveket.")
    }else{
        let languagesObject = {
            name: languageName,
            level: languageLevel,
        };
    
        languagesArray.push(languagesObject);
    
        document.getElementById("languageName").value = "";
        document.getElementById("languages").value = "";
    
        renderLanguage();
        renderEditLanguage();
    }

}

function renderEditLanguage(){
    if (languagesArray.length !== 0) {
        let editLanguageDiv = `
        <div class="flex flex-col h-full w-[80%] gap-5">
            <p class="text-[20px] text-[#656E83] font-bold py-4">Nyelvek törlése</p>
            <div id="editLanguageList" class=" max-h-28 w-full overflow-y-auto text-[#828BA2] text-[18px] p-4 bg-[#EFF2F9] rounded-md min-w-3/5"></div>
        </div>`;
        document.getElementById("editLanguage").innerHTML = editLanguageDiv;

        const editLanguageList = document.getElementById("editLanguageList");
        editLanguageList.innerHTML = ""

        languagesArray.forEach((language, index) => {
            let languagesItem = document.createElement('div');
            languagesItem.innerHTML = `${language.name} ${language.level}`;
            languagesItem.classList = "flex justify-between"
    
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "✖";
            deleteButton.classList = "text-blue-500 text-[18px]  ml-2"
            deleteButton.onclick = () => deleteLanguage(index);
    
            languagesItem.appendChild(deleteButton);
            editLanguageList.appendChild(languagesItem);
        });
    }
    else{
        document.getElementById("editLanguage").innerHTML = ""
    }
}
function deleteLanguage(index){
    languagesArray.splice(index, 1);
    renderLanguage();
    renderEditLanguage()
}

function renderLanguage(){
    let languagesContainer = document.getElementById("languagesDIV");
    let languagesHTML = "";

    if (languagesArray.length !== 0){
        languagesHTML += `<div><p class="font-semibold text-[#262B33] text-[14px] font-['Molengo']">Nyelvek</p></div>`

        languagesArray.forEach((language)=>{
            languagesHTML += `
            <div class="flex flex-col mb-2">
                <div class="w-full h-full text-[12px]">${language.name}</div>
                <div class="w-full h-[5px] bg-[#CFD6E6]">
                    <div class="bg-[#191E29] h-[5px] w-${language.level}/4"></div>
                </div>
            </div>`;
        })
    }
    languagesContainer.innerHTML = languagesHTML;
}


let btnGen = document.getElementById("btn");

btnGen.addEventListener("click", () => {
    
    
    var element = document.getElementById('PDFcontainer');
    var opt = {
        margin: 0,
        filename: 'CV.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, scrollY: 0, windowWidth: document.body.scrollWidth, windowHeight: document.body.scrollHeight},
        jsPDF: { unit: 'px', format: [579, 792], orientation: 'portrait', compress: true}
    };

    // PDF generálása és új fül megnyitása
    html2pdf().set(opt).from(element).output('blob').then((pdfBlob) => {
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, '_blank');
    });
});




