chrome.runtime.onInstalled.addListener(function () {
    var mainCategoryImages, subCategoryImages, dummyDate, iconLog;

    mainCategoryImages = {
        "1":
            {
                "categoryNumber" : 1,
                "imagePath": "res/MainCategory/MainCategory_1_edited.png",
                "description": "Wir sammeln und nutzen Daten über Dich.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                                "description" : "Es werden gerätespezifische Informationen, wie z.B. Ihr Hardwaremodell, die Betriebssystemversion, eindeutige Gerätekennungen und Informationen zum Mobilfunknetz, einschließlich der Telefonnummer, gesammelt."
                            },
                        "2":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                                "description" : "Es werden Kontaktinformationen gesammelt. Zum Beispiel Ihr Name und Ihre Adresse. Möglicherweise auch Ihre Telefonnummer oder E-Mail-Adresse."
                            },
                        "3":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                                "description" : "Cookies werden beispielsweise verwendet, um eine eindeutige Identifikationsnummer zu speichern, die an Ihren Computer oder Ihr Gerät gebunden ist, damit Sie über mehreren Browsersitzungen und über mehrere Websites hinweg als derselbe Benutzer erkannt werden."
                            },
                        "4":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                                "description" : "Es werden Zahlungs- und Rechnungsinformationen gespeichert. Es werden auch Kreditinformationen von Kreditbüros geesammelt, die verwendet werden, um Betrug zu verhindern und aufzudecken und um bestimmte Kredit- oder Finanzdienstleistungen anzubieten."
                            },
                        "5":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                                "description" : "Es werden medizinische Informationen gesammelt, wie Ihre Krankengeschichte, gegenwärtige Symptome, zukünftige Zustände oder Behandlungen, oder irgendwelche anderen medizinische oder gesundheitsrelevanten-Informationen, die Sie oder Ihr Krankenversicherer teilen."
                            },
                        "6":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                                "description" : "Es werden Ihre Gerätekennung oder IP-Adresse erfasst, wenn Sie unsere Websites besuchen, unsere Anwendungen auf Websites oder Plattformen von Drittanbietern verwenden oder von uns gesendete E-Mails öffnen."
                            },
                        "7":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                                "description" : "Es werden Informationen über Ihren tatsächlichen Standort erfasst und verarbeitet. Es werden verschiedene Technologien zur Standortbestimmung benutzt, darunter die IP-Adresse, GPS und andere Sensoren, mit denen beispielsweise Informationen zu in der Nähe befindlichen Geräten, WLAN-Zugangspunkten und Mobilfunkmasten erfasst werden."
                            },
                        "8":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                                "description" : "Bestimmte Informationen werden automatisch erfasst und in Serverprotokollen gespeichert. Dies beinhaltet: Details darüber, wie Sie unseren Service genutzt haben, wie z. B. Ihre Suchanfragen, die Zeit, die sie auf der Seite verbringen, die Seiten, die sie besuchen, Mausbewegungen und Klicks, usw."
                            },
                        "9":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                                "description" : "Diese Informationen werden verwendet, um Ihnen maßgeschneiderte Inhalte anzubieten - beispielsweise auf Sie zugeschnittene Anzeigen und Werbung."
                            },
                        "10":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                                "description" : "Die gesammelten Informationen wie demographische Daten, Interessen und Verhaltenesweisen, werden für Forschungs- und Analysezwecke genutzt, um Nutzer besser zu verstehen und die Produkte und Dienstleistungen zu verbessern."
                            },
                        "11":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                                "description" : "Persönliche Daten werden im notwendingen und angemessenen Rahmen verwendet, um die Rechte, die Privatsphäre, die Sicherheit oder das Eigentum des Dienstes, seiner Mitarbeiter oder Vertreter oder anderer Benutzer zu schützen und um geltendes Recht einzuhalten."
                            }
                    }
            },
        "2":
            {
                "categoryNumber" : 2,
                "imagePath": "res/MainCategory/MainCategory_2_edited.png",
                "description": "Einige der Inhalte, Werbung und Funktionen unseres Dienstes können von Dritten bereitgestellt werden, z.B. von unseren Werbetreibenden. Diese Dritten können bestimmte Informationen über Ihre Nutzung der Dienste sammeln oder erhalten.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                                "description" : "Es werden gerätespezifische Informationen, wie z.B. Ihr Hardwaremodell, die Betriebssystemversion, eindeutige Gerätekennungen und Informationen zum Mobilfunknetz, einschließlich der Telefonnummer, gesammelt und an Dritte weitergegeben."
                            },
                        "2":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                                "description" : "Es werden Kontaktinformationen gesammelt und weitergegeben. Zum Beispiel Ihr Name und Ihre Adresse. Möglicherweise auch Ihre Telefonnummer oder E-Mail-Adresse."
                            },
                        "3":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                                "description" : "Cookies werden beispielsweise verwendet, um eine eindeutige Identifikationsnummer zu speichern, die an Ihren Computer oder Ihr Gerät gebunden ist, damit Sie über mehreren Browsersitzungen und über mehrere Websites hinweg als derselbe Benutzer erkannt werden."
                            },
                        "4":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                                "description" : "Es werden Zahlungs- und Rechnungsinformationen gespeichert und weitergegeben. Es werden auch Kreditinformationen von Kreditbüros geesammelt, die verwendet werden, um Betrug zu verhindern und aufzudecken und um bestimmte Kredit- oder Finanzdienstleistungen anzubieten."
                            },
                        "5":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                                "description" : "Es werden medizinische Informationen gesammelt und weitergegeben, wie Ihre Krankengeschichte, gegenwärtige Symptome, zukünftige Zustände oder Behandlungen, oder irgendwelche anderen medizinische oder gesundheitsrelevanten-Informationen, die Sie oder Ihr Krankenversicherer teilen."
                            },
                        "6":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                                "description" : "Es werden Ihre Gerätekennung oder IP-Adresse erfasst und weitergegeben, wenn Sie unsere Websites besuchen, unsere Anwendungen auf Websites oder Plattformen von Drittanbietern verwenden oder von uns gesendete E-Mails öffnen."
                            },
                        "7":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                                "description" : "Es werden Informationen über Ihren tatsächlichen Standort erfasst, verarbeitet und weitergegeben. Es werden verschiedene Technologien zur Standortbestimmung benutzt, darunter die IP-Adresse, GPS und andere Sensoren, mit denen beispielsweise Informationen zu in der Nähe befindlichen Geräten, WLAN-Zugangspunkten und Mobilfunkmasten erfasst werden."
                            },
                        "8":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                                "description" : "Bestimmte Informationen werden automatisch erfasst und in Serverprotokollen gespeichert und weitergegeben. Dies beinhaltet: Details darüber, wie Sie unseren Service genutzt haben, wie z. B. Ihre Suchanfragen, die Zeit, die sie auf der Seite verbringen, die Seiten, die sie besuchen, Mausbewegungen und Klicks, usw."
                            },
                        "9":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                                "description" : "Diese Informationen werden verwendet und weitergegeben, um Ihnen maßgeschneiderte Inhalte anzubieten - beispielsweise auf Sie zugeschnittene Anzeigen und Werbung."
                            },
                        "10":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                                "description" : "Die gesammelten Informationen wie demographische Daten, Interessen und Verhaltenesweisen, werden für Forschungs- und Analysezwecke weitergegeben, um Nutzer besser zu verstehen und die Produkte und Dienstleistungen zu verbessern."
                            },
                        "11":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                                "description" : "Persönliche Daten werden im notwendingen und angemessenen Rahmen verwendet und weitergegeben, um die Rechte, die Privatsphäre, die Sicherheit oder das Eigentum des Dienstes, seiner Mitarbeiter oder Vertreter oder anderer Benutzer zu schützen und um geltendes Recht einzuhalten."
                            }
                    }
            },
        "3":
            {
                "categoryNumber" : 5,
                "imagePath": "res/MainCategory/MainCategory_5_edited.png",
                "description": "Es werden alle Information, die Sie auf unserer Website eingeben oder uns auf andere Weise mitteilen, gespeichert. Solange es notwendig ist oder auch länger, wenn dies vom Gesetz erlaubt oder verlangt wird.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                                "description" : "Es werden gerätespezifische Informationen, wie z.B. Ihr Hardwaremodell, die Betriebssystemversion, eindeutige Gerätekennungen und Informationen zum Mobilfunknetz, einschließlich der Telefonnummer, gespeichert."
                            },
                        "2":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                                "description" : "Es werden Kontaktinformationen gespeichert. Zum Beispiel Ihr Name und Ihre Adresse. Möglicherweise auch Ihre Telefonnummer oder E-Mail-Adresse."
                            },
                        "3":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                                "description" : "Cookies werden beispielsweise verwendet, um eine eindeutige Identifikationsnummer zu speichern, die an Ihren Computer oder Ihr Gerät gebunden ist, damit Sie über mehreren Browsersitzungen und über mehrere Websites hinweg als derselbe Benutzer erkannt werden."
                            },
                        "4":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                                "description" : "Es werden Zahlungs- und Rechnungsinformationen gespeichert. Es werden auch Kreditinformationen von Kreditbüros geesammelt, die verwendet werden, um Betrug zu verhindern und aufzudecken und um bestimmte Kredit- oder Finanzdienstleistungen anzubieten."
                            },
                        "5":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                                "description" : "Es werden medizinische Informationen gespeichert, wie Ihre Krankengeschichte, gegenwärtige Symptome, zukünftige Zustände oder Behandlungen, oder irgendwelche anderen medizinische oder gesundheitsrelevanten-Informationen, die Sie oder Ihr Krankenversicherer teilen."
                            },
                        "6":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                                "description" : "Es werden Ihre Gerätekennung oder IP-Adresse gespeichert, wenn Sie unsere Websites besuchen, unsere Anwendungen auf Websites oder Plattformen von Drittanbietern verwenden oder von uns gesendete E-Mails öffnen."
                            },
                        "7":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                                "description" : "Es werden Informationen über Ihren tatsächlichen Standort erfasst, verarbeitet und gespeichert. Es werden verschiedene Technologien zur Standortbestimmung benutzt, darunter die IP-Adresse, GPS und andere Sensoren, mit denen beispielsweise Informationen zu in der Nähe befindlichen Geräten, WLAN-Zugangspunkten und Mobilfunkmasten erfasst werden."
                            },
                        "8":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                                "description" : "Bestimmte Informationen werden automatisch erfasst und in Serverprotokollen gespeichert. Dies beinhaltet: Details darüber, wie Sie unseren Service genutzt haben, wie z. B. Ihre Suchanfragen, die Zeit, die sie auf der Seite verbringen, die Seiten, die sie besuchen, Mausbewegungen und Klicks, usw."
                            },
                        "9":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                                "description" : "Diese Informationen werden verwendet, um Ihnen maßgeschneiderte Inhalte anzubieten - beispielsweise auf Sie zugeschnittene Anzeigen und Werbung."
                            },
                        "10":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                                "description" : "Die gesammelten Informationen wie demographische Daten, Interessen und Verhaltenesweisen, werden für Forschungs- und Analysezwecke gespeichert, um Nutzer besser zu verstehen und die Produkte und Dienstleistungen zu verbessern."
                            },
                        "11":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                                "description" : "Persönliche Daten werden im notwendingen und angemessenen Rahmen gespeichert, um die Rechte, die Privatsphäre, die Sicherheit oder das Eigentum des Dienstes, seiner Mitarbeiter oder Vertreter oder anderer Benutzer zu schützen und um geltendes Recht einzuhalten."
                            }
                    }
            },
    };


    subCategoryImages = {
        "1": "res/SubCategory/PIT_ComputerInformation_icon74.png",
        "2": "res/SubCategory/PIT_contact_icon44.png",
        "3": "res/SubCategory/PIT_cookies_tracking_icon52.png",
        "4": "res/SubCategory/PIT_financial_icon9.png",
        "5": "res/SubCategory/PIT_health_icon22.png",
        "6": "res/SubCategory/PIT_IP_icon30.png",
        "7": "res/SubCategory/PIT_location_icon29.png",
        "8": "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
        "9": "res/SubCategory/purpose_ads_icon1.png",
        "10": "res/SubCategory/purpose_analytics_icon13.png",
        "11": "res/SubCategory/purpose_legal_icon3.png",
        "12": "res/SubCategory/RetentionPeriod_indefinite_icon72.png",
        "13": "res/SubCategory/RetentionPeriod_limited_icon70.png",
    };

    iconLog = {"logData" : [{}]};

    dummyDate = new Date(2000, 1, 1, 1, 1, 1, 1);
    chrome.storage.local.set({mainCategoryImages: mainCategoryImages}, function () {
        console.log("I was installed");
    });

    chrome.storage.local.set({subCategoryImages: subCategoryImages}, function () {

    });

    chrome.storage.local.set({availableMainIcons: mainCategoryImages}, function () {

    });

    chrome.storage.local.set({availableSubIcons: subCategoryImages}, function () {

    });

    chrome.storage.local.set({'lastShownTimestamp': dummyDate.valueOf()}, function () {

    });

    chrome.storage.local.set({'iconLog': iconLog}, function () {

    });
});
