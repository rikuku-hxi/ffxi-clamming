let ITEM = {
    "Bibiki Slug": { weight: 3, value: 10, abundance: "3pz", img: "img/bell-fill.svg" },
    "Fish Scales": { weight: 3, value: 83, abundance: "3pz", img: "img/bell-fill.svg" },
    "Pugil Scales": { weight: 3, value: 24, abundance: "3pz", img: "img/bell-fill.svg" },
    "Bibiki Urchin": { weight: 6, value: 750, abundance: "6pz", img: "img/bell-fill.svg" },
    "Bkn. Willow Fish. Rod": { weight: 6, value: 0, abundance: "6pz", img: "img/bell-fill.svg" },
    "Coral Fragment": { weight: 6, value: 1750, abundance: "6pz", img: "img/bell-fill.svg" },
    "Crab Shell": { weight: 6, value: 371, abundance: "6pz", img: "img/bell-fill.svg" },
    "Elm Log": { weight: 6, value: 390, abundance: "6pz", img: "img/bell-fill.svg" },
    "Goblin Armor": { weight: 6, value: 0, abundance: "6pz", img: "img/bell-fill.svg" },
    "Goblin Mail": { weight: 6, value: 1000, abundance: "6pz", img: "img/bell-fill.svg" },
    "Goblin Mask": { weight: 6, value: 300, abundance: "6pz", img: "img/bell-fill.svg" },
    "Hobgoblin Bread": { weight: 6, value: 91, abundance: "6pz", img: "img/bell-fill.svg" },
    "Hobgoblin Pie": { weight: 6, value: 153, abundance: "6pz", img: "img/bell-fill.svg" },
    "HQ Crab Shell": { weight: 6, value: 3125, abundance: "6pz", img: "img/bell-fill.svg" },
    "HQ Pugil Scales": { weight: 6, value: 260, abundance: "6pz", img: "img/bell-fill.svg" },
    "Lacquer Tree Log": { weight: 6, value: 7000, abundance: "6pz", img: "img/bell-fill.svg" },
    "Maple Log": { weight: 6, value: 15, abundance: "6pz", img: "img/bell-fill.svg" },
    "Nebimonite": { weight: 6, value: 300, abundance: "6pz", img: "img/bell-fill.svg" },
    "Oxblood": { weight: 6, value: 13000, abundance: "6pz", img: "img/bell-fill.svg" },
    "Pamtam Kelp": { weight: 6, value: 7, abundance: "6pz", img: "img/bell-fill.svg" },
    "Petrified Log": { weight: 6, value: 3500, abundance: "6pz", img: "img/bell-fill.svg" }, 
    "Seashell": { weight: 6, value: 30, abundance: "6pz", img: "img/bell-fill.svg" },
    "Shall Shell": { weight: 6, value: 300, abundance: "6pz", img: "img/bell-fill.svg" },
    "Titanictus Shell": { weight: 6, value: 350, abundance: "6pz", img: "img/bell-fill.svg" },
    "Turtle Shell": { weight: 6, value: 1224, abundance: "6pz", img: "img/bell-fill.svg" },
    "Uragnite Shell": { weight: 6, value: 1455, abundance: "6pz", img: "img/bell-fill.svg" },
    "Vongola Clam": { weight: 6, value: 192, abundance: "6pz", img: "img/bell-fill.svg" },
    "Pebble": { weight: 7, value: 4, abundance: "7pz", img: "img/bell-fill.svg" },
    "White Sand": { weight: 7, value: 250, abundance: "7pz", img: "img/bell-fill.svg" },
    "Jacknife": { weight: 11, value: 53, abundance: "11pz", img: "img/bell-fill.svg" },
    "Tropical Clam": { weight: 20, value: 5100, abundance: "20pz", img: "img/bell-fill.svg" },
};

let customValues = {};


let totalWeight = 0;
let totalValue = -500;
let bucketItemCount = 0;

// variable to store screenWidth
let screenWidth;
function getScreenSize() {
    screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

    console.log("Screen width: " + screenWidth);
    // console.log("Screen height: " + screenHeight);
}

// Call the function on page load
getScreenSize();

// Call the function whenever the window is resized
window.addEventListener('resize', getScreenSize);


function incrementWeight(item) {
    const itemWeight = ITEM[item].weight;
    const itemValue = customValues[item] !== undefined ? customValues[item] : ITEM[item].value;

    totalWeight += itemWeight;
    totalValue += itemValue;
    bucketItemCount++;

    updateTotalWeightDisplay();
    updateTotalValueDisplay();
    updateBucketItemCount();

    const totalWeightDisplay = document.getElementById("TotalWeightDisplay");
    if (
        (totalWeight >= 45 && totalWeight <= 50) ||
        (totalWeight >= 95 && totalWeight <= 100) ||
        (totalWeight >= 145 && totalWeight <= 150) ||
        (totalWeight >= 195 && totalWeight <= 200)
    ) {
        totalWeightDisplay.className = "warning";
    } else if (
        (totalWeight >= 39 && totalWeight < 45) ||
        (totalWeight >= 89 && totalWeight < 95) ||
        (totalWeight >= 139 && totalWeight < 145) ||
        (totalWeight >= 189 && totalWeight <= 195)
    ) {
        totalWeightDisplay.className = "orange-warning";
    } else if (
        (totalWeight >= 30 && totalWeight < 39) ||
        (totalWeight >= 80 && totalWeight < 89) ||
        (totalWeight >= 130 && totalWeight < 139) ||
        (totalWeight >= 180 && totalWeight <= 189)
    ) {
        totalWeightDisplay.className = "yellow-warning";
    } else {
        totalWeightDisplay.className = "no-warning";
    }

    listBucketItems(item);
}

function updateTotalWeightDisplay() {
    const totalWeightDisplay = document.getElementById("TotalWeightDisplay");
    totalWeightDisplay.innerHTML = totalWeight;
}

function updateTotalValueDisplay() {
    const totalValueDisplay = document.getElementById("TotalValueDisplay");
    const formattedValue = totalValue.toLocaleString();
    totalValueDisplay.innerHTML = formattedValue + "g";

    if (totalValue < 0) {
        totalValueDisplay.style.backgroundColor = "#9a1818";
    } else {
        totalValueDisplay.style.backgroundColor = "#008000";
    }
}

function updateBucketItemCount() {
    const bucketItemCountElement = document.getElementById("BucketItemCount");
    bucketItemCountElement.innerHTML = bucketItemCount;
}

function displayItemButtons() {
    const calculator = document.getElementById("calculator");
    calculator.innerHTML = "";

    let html = '<form name="calculator">';
    let count = 0;

    for (const item in ITEM) {
        // html += `<input class="button" type="button" value="<img src='img/bell-fill.svg' class='buttonImg'> ${item}" name="${item}" data-toggle="tooltip" data-placement="top" title="${ITEM[item].abundance}" onclick="incrementWeight('${item}')"/>`;
        // html += `<button class="button text-left" type="button" name="${item}" data-toggle="tooltip" data-placement="top" title="${ITEM[item].abundance}" onclick="incrementWeight('${item}')"><img src="${ITEM[item].img}" class='buttonImg'> ${item}</button>` ;
        html += `<button class="button text-left" type="button" name="${item}" data-toggle="tooltip" data-placement="top" title="${ITEM[item].abundance}" onclick="incrementWeight('${item}'); hideTooltip(this)"><img src="${ITEM[item].img}" class='buttonImg'> ${item}</button>`;
        // if(screenWidth<=560 || (screenWidth<=1110 && screenWidth>=980)){
        if (screenWidth <= 1110) {
            if (count % 2 === 1) {
                html += "<br/>";
            }
        }else if(screenWidth>=1111){
            if (count % 3 === 2) {
                html += "<br/>";
            }
        }

        count++;
    }

    html += "</form>";
    calculator.innerHTML = html;
}

function listBucketItems(item) {
    const bucket = document.getElementById("bucket");
    const html = bucket.innerHTML;

    bucket.innerHTML = `<span>${item}</span><br/>${html}`;
}

function emptyBucket() {
    totalWeight = 0;
    totalValue = -500;
    bucketItemCount = 0;

    updateTotalWeightDisplay();
    updateTotalValueDisplay();
    updateBucketItemCount();

    document.getElementById("TotalWeightDisplay").className = "no-warning";
    document.getElementById("bucket").innerHTML = "";
}

function calculateTotalValue() {
    totalValue = -500;
  
    const bucket = document.getElementById("bucket");
    const itemsInBucket = bucket.getElementsByTagName("span");
  
    for (let i = 0; i < itemsInBucket.length; i++) {
      const itemName = itemsInBucket[i].innerText;
      const itemValue = customValues[itemName] !== undefined ? customValues[itemName] : ITEM[itemName].value;
      totalValue += itemValue;
    }
  
    updateTotalValueDisplay();
  }
  


function resetValues() {
    customValues = {};
  
    // Reset all custom values to their default values
    for (const item in ITEM) {
      customValues[item] = ITEM[item].value;
    }
  
    // Update the custom values form
    createCustomValuesForm();
    
    // Store custom values in local storage
    saveCustomValues();
  }
  

  function createCustomValuesForm() {
    const calculator = document.getElementById("calculator");
    const inputs = calculator.getElementsByClassName("custom-price-input");
  
    // Remove existing custom price inputs
    while (inputs.length > 0) {
      inputs[0].parentNode.removeChild(inputs[0]);
    }
  
    for (const item in ITEM) {
      const currentValue = customValues[item] !== undefined ? customValues[item] : ITEM[item].value;
  
      const input = document.createElement("input");
      input.type = "text";
      input.value = currentValue;
      input.classList.add("custom-price-input");
      input.addEventListener("input", (event) => {
        customValues[item] = parseInt(event.target.value);
        calculateTotalValue();
        saveCustomValues(); // Update and save custom values on input change
      });
  
      const button = calculator.querySelector(`[name="${item}"]`);
      button.parentNode.insertBefore(input, button.nextSibling);
    }
  }
  function saveCustomValues() {
    // Store custom values in local storage
    localStorage.setItem("customValues", JSON.stringify(customValues));
  }
  
  function loadCustomValues() {
    // Retrieve custom values from local storage
    const storedValues = localStorage.getItem("customValues");
  
    if (storedValues) {
      customValues = JSON.parse(storedValues);
    }
  }
  
  function printPage() {
    displayItemButtons();
    loadCustomValues(); // Load custom values from local storage
    createCustomValuesForm();
    calculateTotalValue();
  }

//to hide the toolip
function hideTooltip(element) {
    $(element).tooltip("hide");
  }
