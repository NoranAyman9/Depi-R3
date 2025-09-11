const nidInput = document.getElementById("nidInput");
const checkBtn = document.getElementById("checkBtn");
const output = document.querySelector(".output");

checkBtn.addEventListener("click", () => {
    let value = nidInput.value.trim();
    showData(value);
});

function showData(nid) {
    if (nid.length !== 14 || isNaN(nid)) {
        output.innerHTML = `<h4 class="text-primary">Invalid Number</h4>`;
        return;
    }

    let century;
    if (nid[0] === "2") {
        century = 1900;
    } else if (nid[0] === "3") {
        century = 2000;
    } else {
        century = "does not exist";
    }

    let year = century + parseInt(nid.slice(1, 3));
    let month = nid.slice(3, 5);
    let day = nid.slice(5, 7);
    let birthDate = `${day}-${month}-${year}`;

    const governorates = {
        "01": "Cairo",
        "02": "Alexandria",
        "03": "Port Said",
        "04": "Suez",
        "11": "Damietta",
        "12": "Dakahlia",
        "13": "Sharqia",
        "14": "Qalyubia",
        "15": "Kafr El Sheikh",
        "16": "Gharbia",
        "17": "Monufia",
        "18": "Beheira",
        "19": "Ismailia",
        "21": "Giza",
        "22": "Beni Suef",
        "23": "Fayoum",
        "24": "Minya",
        "25": "Asyut",
        "26": "Sohag",
        "27": "Qena",
        "28": "Aswan",
        "29": "Luxor",
        "31": "Red Sea",
        "32": "New Valley",
        "33": "Matruh",
        "34": "North Sinai",
        "35": "South Sinai",
        "88": "Outside Egypt"
    };

    let governateCode = nid.slice(7, 9);
    let governate = governorates[governateCode] || "does not exist";

    let genderDigit = parseInt(nid[12]);
    let gender;
    if (genderDigit % 2 === 0) {
        gender = "Female";
    } else {
        gender = "Male";
    }

    output.innerHTML = `
        <div class="text-center">
        <h5>Century: ${century}</h5>
        <h5>Birth Date: ${birthDate}</h5>
        <h5>Governate: ${governate}</h5>
        <h5>Gender: ${gender}</h5>
        </div>
    `;
    }