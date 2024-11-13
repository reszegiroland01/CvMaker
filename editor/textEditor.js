let profil = document.getElementById('profil');
let profilArray = [];

let experience = document.getElementById('experience');
let experienceTextArray = [];

let education = document.getElementById('education');
let educationArray = [];



function TextEditor() {
    const output = document.getElementById('output');
    const buttons = document.getElementsByClassName('tool--btn');
    const select = document.getElementById('options');
    const experienceData = document.getElementById('experienceData');
    const educationData = document.getElementById('educationData');

    // Formázási gombok eseménykezelői
    for (let btn of buttons) {
        btn.addEventListener('click', () => {
            const cmd = btn.dataset['command'];
            document.execCommand(cmd, false, null);
        });
    }

    select.addEventListener('change', () => {
        const selectedOption = select.value;
        experienceData.innerHTML = "";
        educationData.innerHTML = "";

        if (selectedOption === 'second') {

            experienceData.innerHTML = `
                <div class="mb-3">
                    <input type="text" placeholder="Munkahely és pozíció neve Pl: React fejlesztő a GE Healthcare, Budapest" id="jobTitleValue" class="border rounded p-2 mb-2 w-full">
                    <input type="text" placeholder="Munkavégzés kezdete Pl: 2020.01.01" id="jobTimeStart" class="border rounded p-2 mb-2 w-full">
                    <input type="text" placeholder="Munkavégzés vége Pl: 2024.01.01" id="jobTimeEnd" class="border rounded p-2 w-full">
                </div>
            `;

        } else if (selectedOption === 'third') {
            educationData.innerHTML = `
                <div class="mb-3">
                    <input type="text" placeholder="Intézmény és szakma neve Pl: Rendszerüzemeltető technikus, Csiha győző szakközép iskola" id="schoolName" class="border rounded p-2 mb-2 w-full">
                    <input type="text" placeholder="Tanulmány kezdete Pl: 2020.01.01" id="schoolStart" class="border rounded p-2 mb-2 w-full">
                    <input type="text" placeholder="Tanulmány vége Pl: 2024.01.01" id="schoolEnd" class="border rounded p-2 w-full">
                </div>
            `;
        }
    });


    document.getElementById('copy-btn').addEventListener('click', () => {
        const selectedOption = select.value;
        let targetDiv;

        if (selectedOption === 'first') {
            let profilTextValue = output.innerHTML;

            let profilDataObject = {
                profilText: profilTextValue,
            }
            profilArray.push(profilDataObject)
            targetDiv = document.getElementById('profil');


        } else if (selectedOption === 'second') {
            let jobTitleValue = document.getElementById("jobTitleValue").value
            let jobTimeStartValue = document.getElementById("jobTimeStart").value
            let jobTimeEndValue = document.getElementById("jobTimeEnd").value
            let jobText = output.innerHTML;

            let experienceDataObject = {
                jobTitle: jobTitleValue,
                jobTimeStart: jobTimeStartValue,
                jobTimeEnd: jobTimeEndValue,
                jobText: jobText,
            }
            experienceTextArray.push(experienceDataObject)

            document.getElementById("jobTitleValue").value = ""
            document.getElementById("jobTimeStart").value = ""
            document.getElementById("jobTimeEnd").value = ""

            targetDiv = document.getElementById('experience');
        } else if (selectedOption === 'third') {
            let shcoolNameValue = document.getElementById("schoolName").value
            let shcoolStartValue = document.getElementById("schoolStart").value
            let schoolEndValue = document.getElementById("schoolEnd").value
            let schoolText = output.innerHTML;

            let educationDataObject={
                schoolName: shcoolNameValue,
                schoolStart: shcoolStartValue,
                schoolEnd: schoolEndValue,
                schoolText: education,
                schoolText: schoolText,
            }
            educationArray.push(educationDataObject)

            document.getElementById("schoolName").value = ""
            document.getElementById("schoolStart").value = ""
            document.getElementById("schoolEnd").value = ""

            targetDiv = document.getElementById('education');
        }

        if (targetDiv && selectedOption === 'first') {
            targetDiv.innerHTML = profilArray.map(item =>
                `<div>${item.profilText}</div>`
            ).join('');
        }
        else if(targetDiv && selectedOption === 'second'){
            targetDiv.innerHTML = experienceTextArray.map(item => `
                <div>
                    <p class="text-[#262B33] text-[12px] font-bold">${item.jobTitle}</p>
                    <p class='flex gap-2 text-[#ABADB0] text-[10px]'>${item.jobTimeStart} - ${item.jobTimeEnd}</p>
                    <p class='text-[12px]'>${item.jobText}</p>
                </div>`)
        }
        else if(targetDiv && selectedOption === 'third'){
            targetDiv.innerHTML = educationArray.map(item => `
                <div>
                    <p class="text-[#262B33] text-[12px] font-bold">${item.schoolName}</p>
                    <p class='flex gap-2 text-[#ABADB0] text-[10px]'>${item.schoolStart} - ${item.schoolEnd}</p>
                    <p class='text-[12px]'>${item.schoolText}</p>
                </div>`)
        }
    });
}
document.addEventListener("DOMContentLoaded", TextEditor);









// // Mi a project?
// // Project célja

// // Mennyi idő lesz a fejlesztés 
// // Ebből mennyi időt használtam fel
// // Nehézségek
// // Hogyan oldottam meg
// // Miért volt nehéz

// // Mik a következő funkciók amiket le fogsz fejleszteni
// // Hol áll jelenleg a project?

// // Hogyan indultál neki a feladatnak
// // Mit változtatnál a projecten 