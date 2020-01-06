
let chosenMainIcons, chosenSubIcons, availableMainIcons, availableSubIcons, hasRun;

let mainIconChosen, subIconChosen = false;


chrome.storage.sync.get(['availableMainIcons'], function(result) {
    console.log(result);
    availableMainIcons = result;
});

chrome.storage.sync.get(['availableSubIcons'], function(result) {
    availableSubIcons = result;
});

var currentMainIcon, currentSubIcon;

checkIfAllIconsAlreadyShown();



function chooseMainIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableMainIcons).length;
    randomIndex = Math.floor(randomIndex);

    currentMainIcon = availableMainIcons[randomIndex];
    delete availableMainIcons[randomIndex];
    chrome.storage.sync.set({availableMainIcons: availableMainIcons}, function() {
        console.log("deleted chosen main icon");
    });
    mainIconChosen = true;
}

function chooseSubIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableSubIcons).length;
    randomIndex = Math.floor(randomIndex);

    currentSubIcon = availableSubIcons[randomIndex];
    delete availableSubIcons[randomIndex];
    chrome.storage.sync.set({availableSubIcons: availableSubIcons}, function() {
        console.log("deleted chosen sub icon");
    });
    subIconChosen = true;
}


function checkIfAllIconsAlreadyShown() {

}