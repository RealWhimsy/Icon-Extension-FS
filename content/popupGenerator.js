
let mainCategoryIcon, subCategoryIcon, overlay, iconContainer, overlayBox, informationText, acceptButton, declineButton,
    buttonContainer, availableMainIcons, availableSubIcons;

createOverlay();
createOverlayBox();
createIcons();
createInformationText();
createButtons();
appendAllChildren();


on();

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
    acceptButton.classList.add('fs-button');
}

function createDeclineButton() {
    declineButton = document.createElement('button');
    declineButton.innerHTML = "Decline";
    declineButton.classList.add('fs-button');
}

function createInformationText() {
    informationText = document.createElement('h4');
    informationText.innerHTML = "Dieses Icon beschreibt absolut gar nichts und ist hier nur zur Demo.";
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
    document.body.appendChild(overlay);
}

function createOverlay() {
    overlay = document.createElement('overlay');
    overlay.setAttribute('id', 'overlay');
    overlay.addEventListener('click', function () {
        off()
    });
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
    setupSubCategoryIcon();
}

function setupIconContainer() {
    iconContainer = document.createElement('div');
    iconContainer.classList.add('row');
    iconContainer.setAttribute('id', 'iconContainer');
    iconContainer.appendChild(mainCategoryIcon);
    iconContainer.appendChild(subCategoryIcon);
}

function setupMainCategoryIcon() {
    chrome.storage.sync.get(['availableMainIcons'], function(result) {
        availableMainIcons = result['availableMainIcons'];
        displayMainIcon();
    });

}

function displayMainIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableMainIcons).length;
    randomIndex = Math.floor(randomIndex);
    currentMainIcon = availableMainIcons[Object.keys(availableMainIcons)[randomIndex]];
    delete availableMainIcons[Object.keys(availableMainIcons)[randomIndex]];
    chrome.storage.sync.set({availableMainIcons: availableMainIcons}, function() {
        console.log("deleted chosen main icon");
    });
    mainIconChosen = true;

    console.log(currentMainIcon);
    mainCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentMainIcon));
    mainCategoryIcon.setAttribute('id', 'mainCategoryIcon');
}

function setupSubCategoryIcon() {
    chrome.storage.sync.get(['availableSubIcons'], function(result) {
        availableSubIcons = result['availableSubIcons'];
        displaySubIcon();
    });
}

function displaySubIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableSubIcons).length;
    randomIndex = Math.floor(randomIndex);

    currentSubIcon = availableSubIcons[Object.keys(availableSubIcons)[randomIndex]];
    delete availableSubIcons[Object.keys(availableSubIcons)[randomIndex]];
    chrome.storage.sync.set({availableSubIcons: availableSubIcons}, function() {
        
    });
    subIconChosen = true;
    subCategoryIcon.setAttribute('src', chrome.runtime.getURL(currentSubIcon));
    subCategoryIcon.setAttribute('id', 'subCategoryIcon');
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}