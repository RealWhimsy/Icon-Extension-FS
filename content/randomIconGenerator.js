
let availableMainIcons, availableSubIcons;


function chooseMainIcon() {
    chrome.storage.local.get(['availableMainIcons'], function(result) {
        availableMainIcons = result['availableMainIcons'];
        if(Object.keys(availableMainIcons).length <= 0) {
            resetMainIcons();
        } else {
            getRandomMainIcon();
            displayMainIcon();
        }
    });
}

function chooseSubIcon() {
    chrome.storage.local.get(['availableSubIcons'], function(result) {
        availableSubIcons = currentMainIcon['subcategories'];
        getRandomSubIcon();
        displaySubIcon();
    });
}

function getRandomSubIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableSubIcons).length;
    randomIndex = Math.floor(randomIndex);
    currentSubIcon = availableSubIcons[Object.keys(availableSubIcons)[randomIndex]];
    delete availableSubIcons[Object.keys(availableSubIcons)[randomIndex]];
}

function getRandomMainIcon() {
    let randomIndex = Math.random();
    randomIndex = randomIndex * Object.keys(availableMainIcons).length;
    randomIndex = Math.floor(randomIndex);
    currentMainIcon = availableMainIcons[Object.keys(availableMainIcons)[randomIndex]];
    delete availableMainIcons[Object.keys(availableMainIcons)[randomIndex]];
}

function resetMainIcons() {
    let mainCategoryImages;
    chrome.storage.local.get(['mainCategoryImages'], function(result) {
        mainCategoryImages = result;
        chrome.storage.local.set({availableMainIcons: mainCategoryImages['mainCategoryImages']}, function() {
            availableMainIcons = result['availableMainIcons'];
            chooseMainIcon();
        });
    });
}

function setMainIconAsUsed() {
    chrome.storage.local.set({availableMainIcons: availableMainIcons}, function() {

    });
}
