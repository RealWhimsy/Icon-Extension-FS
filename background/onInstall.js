
chrome.runtime.onInstalled.addListener(function() {
    var mainCategoryImages, subCategoryImages;

    mainCategoryImages = {
        "1" : "res/MainCategory/MainCategory_1_edited.png",
        "2" : "res/MainCategory/MainCategory_2_edited.png",
        "3" : "res/MainCategory/MainCategory_3_edited.png",
        "4" : "res/MainCategory/MainCategory_4_edited.png",
        "5" : "res/MainCategory/MainCategory_5_edited.png",
        "6" : "res/MainCategory/MainCategory_6_edited.png",
        "7" : "res/MainCategory/MainCategory_7_edited.png",
        "8" : "res/MainCategory/MainCategory_8_edited.png",
        "9" : "res/MainCategory/MainCategory_9_edited.png",
    };


    subCategoryImages = {
        "1" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
        "2" : "res/SubCategory/PIT_contact_icon44.png",
        "3" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
        "4" : "res/SubCategory/PIT_financial_icon9.png",
        "5" : "res/SubCategory/PIT_health_icon22.png",
        "6" : "res/SubCategory/PIT_IP_icon30.png",
        "7" : "res/SubCategory/PIT_location_icon29.png",
        "8" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
        "9" : "res/SubCategory/purpose_ads_icon1.png",
        "10" : "res/SubCategory/purpose_analytics_icon13.png",
        "11" : "res/SubCategory/purpose_legal_icon3.png",
        "12" : "res/SubCategory/RetentionPeriod_indefinite_icon72.png",
        "13" : "res/SubCategory/RetentionPeriod_limited_icon70.png",
    };
    chrome.storage.sync.set({mainCategoryImages: mainCategoryImages}, function() {
        console.log("I was installed");
    });

    chrome.storage.sync.set({subCategoryImages: subCategoryImages}, function() {

    });

    chrome.storage.sync.set({availableMainIcons: mainCategoryImages}, function() {

    });

    chrome.storage.sync.set({availableSubIcons: subCategoryImages}, function() {

    });
});