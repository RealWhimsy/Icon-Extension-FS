
let mainCategoryIcon, subCategoryIcon, overlay, iconContainer, overlayBox, informationText, acceptButton, declineButton,
    buttonContainer, availableMainIcons, availableSubIcons, lastShownTimestamp, currentMainIcon, currentSubIcon, reasonInput;

let currentTime = Date.now();

chrome.storage.local.get('lastShownTimestamp', function(result) {
   if((currentTime - result['lastShownTimestamp']) / 1000 >= 3600) {
       createOverlay();
       createOverlayBox();
       createIcons();
       createButtons();
       createInformationText();
       createInputField();
       appendAllChildren();
       setNewTimestamp();

       on();
   }
});

function createInputField() {
    reasonInput = document.createElement('input');
    reasonInput.setAttribute('type', 'text');
    reasonInput.setAttribute('id', 'reason-input');
    reasonInput.setAttribute('placeholder', 'Bitte Grund für ihre Auswahl eingeben');

}

function createButtons() {
    createAcceptButton();
    createDeclineButton();
    createButtonContainer();
}

function createButtonContainer() {
    buttonContainer = document.createElement('div');
    buttonContainer.classList.add('row');
    buttonContainer.appendChild(acceptButton);
    buttonContainer.appendChild(declineButton);
    buttonContainer.setAttribute('id', 'buttonContainer');
}

function createAcceptButton() {
    acceptButton = document.createElement('button');
    acceptButton.innerHTML = "Accept";
    acceptButton.setAttribute('id', 'accept-button');
    acceptButton.classList.add('fs-button');
    acceptButton.addEventListener('click', function () {
        createNewLogEntry(true);
    });
}

function createDeclineButton() {
    declineButton = document.createElement('button');
    declineButton.innerHTML = "Decline";
    declineButton.setAttribute('id', 'decline-button');
    declineButton.classList.add('fs-button');
    declineButton.addEventListener('click', function () {
        createNewLogEntry(false);
    });
}

function createInformationText() {
    informationText = document.createElement('h4');
}

function createOverlayBox() {
    overlayBox = document.createElement('div');
    overlayBox.setAttribute('id', 'overlayBox');
}

function appendAllChildren() {
    overlay.appendChild(overlayBox);
    overlayBox.appendChild(iconContainer);
    overlayBox.appendChild(informationText);
    overlayBox.appendChild(buttonContainer);
    overlayBox.appendChild(reasonInput);
    document.body.appendChild(overlay);
}

function createOverlay() {
    overlay = document.createElement('overlay');
    overlay.setAttribute('id', 'overlay');
    overlay.classList.add('row');
}

function createIcons() {
    mainCategoryIcon = document.createElement('img');
    subCategoryIcon = document.createElement('img');
    setupIconContainer();
    setupIcons();
}

function setupIcons() {
    setupMainCategoryIcon();
}

function setupIconContainer() {
    iconContainer = document.createElement('div');
    iconContainer.classList.add('row');
    iconContainer.setAttribute('id', 'iconContainer');
    iconContainer.appendChild(mainCategoryIcon);
    iconContainer.appendChild(subCategoryIcon);
}

function setupMainCategoryIcon() {
    chrome.storage.local.get(['availableMainIcons'], function(result) {
        availableMainIcons = result['availableMainIcons'];
        if(Object.keys(availableMainIcons).length <= 0) {
            resetMainIcons();
        }
        displayMainIcon();
    });

}

function displayMainIcon() {
    getRandomMainIcon();
    setMainIconAsUsed();
    setupSubCategoryIcon();


    mainCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentMainIcon['imagePath']));
    mainCategoryIcon.setAttribute('id', 'mainCategoryIcon');
}

function setupSubCategoryIcon() {
    chrome.storage.local.get(['availableSubIcons'], function(result) {
        availableSubIcons = currentMainIcon['subcategories'];
        displaySubIcon();
    });
}

function displaySubIcon() {
    getRandomSubIcon();
    setIconDescription();

    subCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentSubIcon['imagePath']));
    subCategoryIcon.setAttribute('id', 'subCategoryIcon');
}

function getRandomMainIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableMainIcons).length;
    randomIndex = Math.floor(randomIndex);
    currentMainIcon = availableMainIcons[Object.keys(availableMainIcons)[randomIndex]];
    console.log(currentMainIcon);
    delete availableMainIcons[Object.keys(availableMainIcons)[randomIndex]];
}

function getRandomSubIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableSubIcons).length;
    randomIndex = Math.floor(randomIndex);
    currentSubIcon = availableSubIcons[Object.keys(availableSubIcons)[randomIndex]];
    console.log(currentSubIcon);
    delete availableSubIcons[Object.keys(availableSubIcons)[randomIndex]];
}

function setMainIconAsUsed() {
    chrome.storage.local.set({availableMainIcons: availableMainIcons}, function() {

    });
}

function setSubIconAsUsed() {
    chrome.storage.local.set({availableSubIcons: availableSubIcons}, function() {

    });
}

function setIconDescription() {
    let description = "" + currentMainIcon['description'] + "</br></br>" + currentSubIcon['description'];
    informationText.innerHTML = description;
}

function resetMainIcons() {
    let mainCategoryImages;
    chrome.storage.local.get(['mainCategoryImages'], function(result) {
        mainCategoryImages = result;
        chrome.storage.local.set({availableMainIcons: mainCategoryImages['mainCategoryImages']}, function() {
            setupMainCategoryIcon();
        });
    });
}

function resetSubIcons() {
    let subCategoryImages;
    chrome.storage.local.get(['subCategoryImages'], function(result) {
        subCategoryImages = result;
        chrome.storage.local.set({availableSubIcons: subCategoryImages['subCategoryImages']}, function() {
            setupMainCategoryIcon();
        });
    });
}


function setNewTimestamp() {
    chrome.storage.local.set({'lastShownTimestamp': Date.now().valueOf()}, function() {
        console.log("New timestamp: " + Date.now());
    });
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}