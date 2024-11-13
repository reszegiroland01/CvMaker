let linksArray = [];
let experienceArray = [];
let languagesArray = [];



function renderCV() {
    let firstName = document.getElementById("firstNameValue").value || "Teljes név" ;
    let lastName = document.getElementById("lastNameValue").value;
    let fullName = firstName + " " + lastName;
    
    let countryValue = document.getElementById("countryValue").value || "Ország";
    let cityValue = document.getElementById("cityValue").value || "Város"
    let emailValue = document.getElementById("emailValue").value || "Email";
    let telephoneNumberValue = document.getElementById("telephoneNumberValue").value || "Telefonszám";
    let jobValue = document.getElementById("jobValue").value || "Munka neve";

    document.getElementById("fullName").innerHTML = fullName;
    document.getElementById("countryName").innerHTML = countryValue 
    document.getElementById("cityName").innerHTML = cityValue
    document.getElementById("telephoneNumber").innerHTML = emailValue
    document.getElementById("emailAddress").innerHTML = telephoneNumberValue
    document.getElementById("jobTitle").innerHTML = jobValue


    //CHAT GPT Segített
    let imageInput = document.getElementById("imageInput");
    if (imageInput.files && imageInput.files[0]) {
        let reader = new FileReader();

        reader.onload = function (e) {
            document.getElementById("IMG").src = e.target.result; // Beállítja a kép src attribútumát
        };

        reader.readAsDataURL(imageInput.files[0]); // Kép fájl olvasása
    } else {
        document.getElementById("IMG").src = "../assets/default.png"; // Üres képet állít be, ha nincs feltöltve kép
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
    document.getElementById("experience").value = "";

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

    experienceArray.forEach((experience) => {
        experienceHTML += `<div>${experience.name} ${experience.level}</div>`;
    });

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
    
            linksItem.innerHTML = `${link.name} ${link.level}`;
    
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

    linksArray.forEach((link) => {
        linksHTML += `<div><a href="${link.url}" target="_blank">${link.name}</a></div>`; 
    });

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

    languagesArray.forEach((language)=>{
        languagesHTML += `<div>${language.name} ${language.level}</div>`
    })

    languagesContainer.innerHTML = languagesHTML;
}