
let mainCategoryIcon, subCategoryIcon, overlay, iconContainer, overlayBox, informationText, acceptButton, declineButton,
    buttonContainer, lastShownTimestamp, currentMainIcon, currentSubIcon, reasonInput;

let currentTime = Date.now();

chrome.storage.local.get('lastShownTimestamp', function(result) {
   // if((currentTime - result['lastShownTimestamp']) / 1000 >= 3600) {
       createOverlay();
       createOverlayBox();
       createIcons();
       createButtons();
       createInformationText();
       createInputField();
       appendAllChildren();
       setNewTimestamp();

       on();
   // }
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
    chooseMainIcon();
}

function setupIconContainer() {
    iconContainer = document.createElement('div');
    iconContainer.classList.add('row');
    iconContainer.setAttribute('id', 'iconContainer');
    iconContainer.appendChild(mainCategoryIcon);
    iconContainer.appendChild(subCategoryIcon);
}


function displayMainIcon() {
    setMainIconAsUsed();
    chooseSubIcon();

    mainCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentMainIcon['imagePath']));
    mainCategoryIcon.setAttribute('id', 'mainCategoryIcon');
}

function displaySubIcon() {
    setIconDescription();

    subCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentSubIcon['imagePath']));
    subCategoryIcon.setAttribute('id', 'subCategoryIcon');
}

function setIconDescription() {
    let description = "" + currentMainIcon['description'] + "</br></br>" + currentSubIcon['description'];
    informationText.innerHTML = description;
}

function resetSubIcons() {
    let subCategoryImages;
    chrome.storage.local.get(['subCategoryImages'], function(result) {
        subCategoryImages = result;
        chrome.storage.local.set({availableSubIcons: subCategoryImages['subCategoryImages']}, function() {
            chooseMainIcon();
        });
    });
}

function setSubIconAsUsed() {
    chrome.storage.local.set({availableSubIcons: availableSubIcons}, function() {

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