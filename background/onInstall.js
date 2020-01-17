chrome.runtime.onInstalled.addListener(function () {
    var mainCategoryImages, subCategoryImages, dummyDate, iconLog;

    mainCategoryImages = {
        "1":
            {
                "categoryNumber" : 1,
                "imagePath": "res/MainCategory/MainCategory_1_edited.png",
                "description": "Wir sammeln und nutzen Daten über Dich."
            },
        "2":
            {
                "categoryNumber" : 2,
                "imagePath": "res/MainCategory/MainCategory_2_edited.png",
                "description": "Einige der Inhalte, Werbung und Funktionen unseres Dienstes können von Dritten bereitgestellt werden, z.B. von unseren Werbetreibenden. Diese Dritten können bestimmte Informationen über Ihre Nutzung der Dienste sammeln oder erhalten."
            },
        "3":
            {
                "categoryNumber" : 5,
                "imagePath": "res/MainCategory/MainCategory_5_edited.png",
                "description": "Es werden alle Information, die Sie auf unserer Website eingeben oder uns auf andere Weise mitteilen, gespeichert. Solange es notwendig ist oder auch länger, wenn dies vom Gesetz erlaubt oder verlangt wird."
            },
    };


    subCategoryImages =
        {
            "1":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Computer Information",
                    "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                    "description" : "Es werden gerätespezifische Informationen, wie z.B. Ihr Hardwaremodell, die Betriebssystemversion, eindeutige Gerätekennungen und Informationen zum Mobilfunknetz, einschließlich der Telefonnummer, gesammelt."
                },
            "2":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Contact Information",
                    "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                    "description" : "Es werden Kontaktinformationen gesammelt. Zum Beispiel Ihr Name und Ihre Adresse. Möglicherweise auch Ihre Telefonnummer oder E-Mail-Adresse."
                },
            "3":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Cookies",
                    "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                    "description" : "Cookies werden beispielsweise verwendet, um eine eindeutige Identifikationsnummer zu speichern, die an Ihren Computer oder Ihr Gerät gebunden ist, damit Sie über mehreren Browsersitzungen und über mehrere Websites hinweg als derselbe Benutzer erkannt werden."
                },
            "4":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Payment Information",
                    "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                    "description" : "Es werden Zahlungs- und Rechnungsinformationen gespeichert. Es werden auch Kreditinformationen von Kreditbüros geesammelt, die verwendet werden, um Betrug zu verhindern und aufzudecken und um bestimmte Kredit- oder Finanzdienstleistungen anzubieten."
                },
            "5":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Health Information",
                    "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                    "description" : "Es werden medizinische Informationen gesammelt, wie Ihre Krankengeschichte, gegenwärtige Symptome, zukünftige Zustände oder Behandlungen, oder irgendwelche anderen medizinische oder gesundheitsrelevanten-Informationen, die Sie oder Ihr Krankenversicherer teilen."
                },
            "6":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "IP and Device",
                    "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                    "description" : "Es werden Ihre Gerätekennung oder IP-Adresse erfasst, wenn Sie unsere Websites besuchen, unsere Anwendungen auf Websites oder Plattformen von Drittanbietern verwenden oder von uns gesendete E-Mails öffnen."
                },
            "7":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "Location Data",
                    "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                    "description" : "Es werden Informationen über Ihren tatsächlichen Standort erfasst und verarbeitet. Es werden verschiedene Technologien zur Standortbestimmung benutzt, darunter die IP-Adresse, GPS und andere Sensoren, mit denen beispielsweise Informationen zu in der Nähe befindlichen Geräten, WLAN-Zugangspunkten und Mobilfunkmasten erfasst werden."
                },
            "8":
                {
                    "subcategory" : "Personal Information Type",
                    "subcategoryValue" : "User Activity",
                    "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                    "description" : "Bestimmte Informationen werden automatisch erfasst und in Serverprotokollen gespeichert. Dies beinhaltet: Details darüber, wie Sie unseren Service genutzt haben, wie z. B. Ihre Suchanfragen, die Zeit, die sie auf der Seite verbringen, die Seiten, die sie besuchen, Mausbewegungen und Klicks, usw."
                },
            "9":
                {
                    "subcategory" : "Purpose",
                    "subcategoryValue" : "Ads",
                    "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                    "description" : "Diese Informationen werden verwendet, um Ihnen maßgeschneiderte Inhalte anzubieten - beispielsweise auf Sie zugeschnittene Anzeigen und Werbung."
                },
            "10":
                {
                    "subcategory" : "Purpose",
                    "subcategoryValue" : "Analytics",
                    "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                    "description" : "Die gesammelten Informationen wie demographische Daten, Interessen und Verhaltenesweisen, werden für Forschungs- und Analysezwecke genutzt, um Nutzer besser zu verstehen und die Produkte und Dienstleistungen zu verbessern."
                },
            "11":
                {
                    "subcategory" : "Purpose",
                    "subcategoryValue" : "Legal",
                    "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                    "description" : "Persönliche Daten werden im notwendingen und angemessenen Rahmen verwendet, um die Rechte, die Privatsphäre, die Sicherheit oder das Eigentum des Dienstes, seiner Mitarbeiter oder Vertreter oder anderer Benutzer zu schützen und um geltendes Recht einzuhalten."
                }
        };



    iconLog = {"logData" : [{}]};

    dummyDate = new Date(2000, 1, 1, 1, 1, 1, 1);
    chrome.storage.local.set({mainCategoryImages: mainCategoryImages}, function () {
        console.log("I was installed");
    });
    

    chrome.storage.local.set({availableMainIcons: mainCategoryImages}, function () {

    });

    chrome.storage.local.set({subCategoryImages : subCategoryImages}, function () {
    });

    chrome.storage.local.set({availableSubIcons: subCategoryImages}, function () {

    });


    chrome.storage.local.set({'lastShownTimestamp': dummyDate.valueOf()}, function () {

    });

    chrome.storage.local.set({'iconLog': iconLog}, function () {

    });
});
