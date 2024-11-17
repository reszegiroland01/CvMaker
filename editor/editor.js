

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
function renderEditExperience(){

    if (experienceArray.length !== 0) {
        let editExperienceDiv = `
        <div>
            <p class="text-[20px] text-gray-700 font-bold py-4">Készségek szerkesztése</p>
            <div id="editExperienceList"></div>
        </div>`;
        document.getElementById("editExperience").innerHTML = editExperienceDiv;

        const editExperienceList = document.getElementById("editExperienceList");
        editExperienceList.innerHTML = ""

        experienceArray.forEach((experience, index) => {
            let experienceItem = document.createElement('div');
            experienceItem.className = "experience-item";
    
            experienceItem.innerHTML = `${experience.name} ${experience.level}`;
    
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "✖";
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
        experienceHTML += `<div><p class="font-semibold text-[#262B33] text-[12px] font-['Molengo']">Készségek</p></div>`;

        experienceArray.forEach((experience) => {
            experienceHTML += `<div>${experience.name} ${experience.level}</div>`;
        });
    }
    experienceContainer.innerHTML = experienceHTML;
}

function addLinks(){
    let linkName = document.getElementById("linkName").value
    let linkURL = document.getElementById("linkURL").value
    
    let linkObject = {
        name: linkName,
        url: linkURL,
    };
    linksArray.push(linkObject);

    // console.log(linksArray)

    document.getElementById("linkName").value = "";
    document.getElementById("linkURL").value = "";

    renderLinks()
    renderEditLinks()
}
function renderEditLinks(){
    if (linksArray.length !== 0) {
        let editLinksDiv = `
        <div>
            <p class="text-[20px] text-gray-700 font-bold py-4">Linkek szerkesztése</p>
            <div id="editLinksList"></div>
        </div>`;
        document.getElementById("editLinks").innerHTML = editLinksDiv;

        const editLinksList = document.getElementById("editLinksList");
        editLinksList.innerHTML = ""

        linksArray.forEach((link, index) => {
            let linksItem = document.createElement('div');
            linksItem.className = "links-item";
    
            linksItem.innerHTML = `${link.name} ${link.url}`;
    
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "✖";
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
        linksHTML += `<div><p class="font-semibold text-[#262B33] text-[12px] font-['Molengo']">Linkek</p></div>`;

        linksArray.forEach((link) => {
            linksHTML += `<div><a href="${link.url}" target="_blank">${link.name}</a></div>`; 
        });
    }
    linksContainer.innerHTML = linksHTML; 
}










function addLanguage(){
    let languageName = document.getElementById("languageName").value
    let languageLevel = document.getElementById("languages").value

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

function renderEditLanguage(){
    if (languagesArray.length !== 0) {
        let editLanguageDiv = `
        <div>
            <p class="text-[20px] text-gray-700 font-bold py-4">Nyelvek szerkesztése</p>
            <div id="editLanguageList"></div> 
        </div>`;
        document.getElementById("editLanguage").innerHTML = editLanguageDiv;

        const editLanguageList = document.getElementById("editLanguageList");
        editLanguageList.innerHTML = ""

        languagesArray.forEach((language, index) => {
            let languagesItem = document.createElement('div');
            languagesItem.className = "languages-item";
    
            languagesItem.innerHTML = `${language.name} ${language.level}`;
    
            let deleteButton = document.createElement('button');
            deleteButton.textContent = "✖";
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
        languagesHTML += `<div><p class="font-semibold text-[#262B33] text-[12px] font-['Molengo']">Nyelvek</p></div>`

        languagesArray.forEach((language)=>{
            languagesHTML += `<div>${language.name} ${language.level}</div>`
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


