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

    const profilDiv = document.getElementById('profil');
    const experienceDiv = document.getElementById('experience');
    const educationDiv = document.getElementById('education');

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
            targetDiv = profilDiv;
            output.innerHTML = "";

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

            targetDiv = experienceDiv;
            output.innerHTML = "";

        } else if (selectedOption === 'third') {
            let shcoolNameValue = document.getElementById("schoolName").value
            let shcoolStartValue = document.getElementById("schoolStart").value
            let schoolEndValue = document.getElementById("schoolEnd").value
            let schoolText = output.innerHTML;

            let educationDataObject={
                schoolName: shcoolNameValue,
                schoolStart: shcoolStartValue,
                schoolEnd: schoolEndValue,
                schoolText: schoolText,
            }
            educationArray.push(educationDataObject)

            document.getElementById("schoolName").value = ""
            document.getElementById("schoolStart").value = ""
            document.getElementById("schoolEnd").value = ""

            targetDiv = educationDiv;
            output.innerHTML = "";
        }


        if (targetDiv) {
            if (profilArray.length > 0) {
                profilDiv.innerHTML = `
                <div class="flex gap-1 items-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#262B33" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                    <p class="font-semibold text-[#262B33] text-[18px] font-['Molengo']">Profil</p>
                 </div>`;
                profilDiv.innerHTML += profilArray.map(item => `
                    <div class="max-w-full whitespace-normal break-words">
                        <p class="text-[#262B33] text-[12px] leading-[18px] ml-5">${item.profilText}</p>
                    </div>`).join('');
            } else {
                profilDiv.innerHTML = ""; 
            }

            if (experienceTextArray.length > 0) {
                experienceDiv.innerHTML = `
                <div class="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#262B33" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                    <p class="font-semibold text-[#262B33] text-[18px] font-['Molengo']">Szakmai Tapasztalat</p>
                </div>`;
                experienceDiv.innerHTML += experienceTextArray.map(item => `
                    <div class="text-[#262B33] text-[12px] leading-[18px] ml-5">
                        <p class="text-[#262B33] text-[12px] font-bold">${item.jobTitle}</p>
                        <p class='flex gap-2 text-[#ABADB0] text-[10px]'>${item.jobTimeStart} - ${item.jobTimeEnd}</p>
                        <div class="max-w-full whitespace-normal break-words"> 
                            <p class='text-[12px]'>${item.jobText}</p>
                        </div>    
                    </div>
                `).join('');
            } else {
                experienceDiv.innerHTML = ""; 
            }

            if (educationArray.length > 0) {
                educationDiv.innerHTML = `
                <div class="flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#262B33" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                    </svg>
                    <p class="font-semibold text-[#262B33] text-[18px] font-['Molengo']">Végzettség</p>
                </div>`; 
                educationDiv.innerHTML += educationArray.map(item => `
                    <div class="text-[#262B33] text-[12px] leading-[18px] ml-5">
                        <p class="text-[#262B33] text-[12px] font-bold">${item.schoolName}</p>
                        <p class='flex gap-2 text-[#ABADB0] text-[10px]'>${item.schoolStart} - ${item.schoolEnd}</p>
                        <div class=" max-w-full whitespace-normal break-words overflow-auto ">    
                            <p class='text-[12px]'>${item.schoolText}</p>
                        </div>    
                    </div>
                `).join('');
            } else {
                educationDiv.innerHTML = ""; // Ha nincs adat, ne jelenjen meg
            }
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