chrome.runtime.onInstalled.addListener(function () {
    var mainCategoryImages, subCategoryImages, dummyDate, iconLog;

    mainCategoryImages = {
        "1":
            {
                "categoryNumber" : 1,
                "imagePath": "res/MainCategory/MainCategory_1_edited.png",
                "description": "Sammeln/Nutzung durch Serviceanbieter: Wie und warum der Serviceanbieter Nutzerinformationen sammelt.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Action Third Party",
                                "imagePath": "res/SubCategory/ATP_shared_with.png",
                                "description": "Der Drittanbieter erhält Informationen vom Erstanbieter (d. h. die erste Partei gibt Daten explizit an Dritte weiter)."
                            },
                        "2":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                                "description" : "Der Typ des Betriebssystems oder des Webbrowsers, den der Benutzer verwendet, oder ähnliche Computer- oder Geräteinformationen."
                            },
                        "3":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                                "description" : "Kontaktinformationen wie Name, E-Mail-Adresse, Telefonnummer, Straße usw."
                            },
                        "4":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                                "description" : "Identifikatoren, die vom Unternehmen oder von Dritten lokal auf dem Gerät des Benutzers gespeichert werden, einschließlich Cookies, Beacons oder Ähnlichem, die häufig zur eindeutigen Identifizierung von Benutzern verwendet werden, jedoch nicht für den Verbindungsaufbau mit dem Gerät des Benutzers oder die Bereitstellung eines Dienstes erforderlich sind."
                            },
                        "5":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "6":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                                "description" : "Es werden gesundheitsbezogene Daten gesammelt, z.B. Informationen zum Gesundheitszustand, Verschreibungen, medikamentöser Behandlung, sowie Daten aus der Gesundheitsüberwachung, wie Herzrate, Schrittzahlen, Aktivitätsgrad etc."
                            },
                        "7":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                                "description" : "Es werden z.B. permanente Identifikatoren wie Geräte-Ids oder MAC-Adresse, oder vorübergehende Identifikatoren wie die IP-Adresse gesammelt, die benötigt werden, um eine Verbindung für die aktuelle Internetsitzung herzustellen."
                            },
                        "8":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                                "description" : "Es werden ortsbezogene Daten gesammelt (z.B. die aktuelle Position des Nutzers), die von unterschiedlicher Granularität sein können, d.h. es könnte sich um die exakte Positon handeln, die Postleitzahl, oder auf Stadtebene. "
                            },
                        "9":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                                "description" : "Es werden Daten zu den Aktivitäten des Nutzers im Internet, auf einer Webseite oder App gesammelt, z.B. die Seiten, die besucht wurden, die Zeit, die auf diesen Seiten verbracht wurde, Online-Nutzerverhalten im allgemeinen etc."
                            },
                        "10":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "11":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                                "description" : "Die gesammelten Daten werden analytisch ausgewertet, z.B. um Nutzungs- und Zugriffsstatistiken von bestimmten Platformen zu erstellen."
                            },
                        "12":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                                "description" : "Die gesammelten Daten werden gegebenenfalls an die Legislative weitergegeben."
                            }
                    }
            },
        "2":
            {
                "categoryNumber" : 2,
                "imagePath": "res/MainCategory/MainCategory_2_edited.png",
                "description": "Teilen mit/Sammeln durch Drittparteien: Wie Nutzerinformationen mit Drittparteien geteilt oder gesammelt werden.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                                "description" : "Der Typ des Betriebssystems oder des Webbrowsers, den der Benutzer verwendet, oder ähnliche Computer- oder Geräteinformationen."
                            },
                        "2":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                                "description" : "Kontaktinformationen wie Name, E-Mail-Adresse, Telefonnummer, Straße usw."
                            },
                        "3":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                                "description" : "Identifikatoren, die vom Unternehmen oder von Dritten lokal auf dem Gerät des Benutzers gespeichert werden, einschließlich Cookies, Beacons oder Ähnlichem, die häufig zur eindeutigen Identifizierung von Benutzern verwendet werden, jedoch nicht für den Verbindungsaufbau mit dem Gerät des Benutzers oder die Bereitstellung eines Dienstes erforderlich sind."
                            },
                        "4":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "5":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                                "description" : "Es werden gesundheitsbezogene Daten gesammelt, z.B. Informationen zum Gesundheitszustand, Verschreibungen, medikamentöser Behandlung, sowie Daten aus der Gesundheitsüberwachung, wie Herzrate, Schrittzahlen, Aktivitätsgrad etc."
                            },
                        "6":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                                "description" : "Es werden z.B. permanente Identifikatoren wie Geräte-Ids oder MAC-Adresse, oder vorübergehende Identifikatoren wie die IP-Adresse gesammelt, die benötigt werden, um eine Verbindung für die aktuelle Internetsitzung herzustellen."
                            },
                        "7":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                                "description" : "Es werden ortsbezogene Daten gesammelt (z.B. die aktuelle Position des Nutzers), die von unterschiedlicher Granularität sein können, d.h. es könnte sich um die exakte Positon handeln, die Postleitzahl, oder auf Stadtebene. "
                            },
                        "8":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                                "description" : "Es werden Daten zu den Aktivitäten des Nutzers im Internet, auf einer Webseite oder App gesammelt, z.B. die Seiten, die besucht wurden, die Zeit, die auf diesen Seiten verbracht wurde, Online-Nutzerverhalten im allgemeinen etc."
                            },
                        "9":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "10":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                                "description" : "Die gesammelten Daten werden analytisch ausgewertet, z.B. um Nutzungs- und Zugriffsstatistiken von bestimmten Platformen zu erstellen."
                            },
                        "11":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                                "description" : "Die gesammelten Daten werden gegebenenfalls an die Legislative weitergegeben."
                            }
                    }
            },
        "3":
            {
                "categoryNumber" : 3,
                "imagePath": "res/MainCategory/MainCategory_3_edited.png",
                "description": "Nutzerentscheidungen und -kontrolle: Entscheidungsmöglichkeiten und Optionen, die den Nutzern zur Verfügung stehen.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                                "description" : "Der Typ des Betriebssystems oder des Webbrowsers, den der Benutzer verwendet, oder ähnliche Computer- oder Geräteinformationen."
                            },
                        "2":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                                "description" : "Kontaktinformationen wie Name, E-Mail-Adresse, Telefonnummer, Straße usw."
                            },
                        "3":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                                "description" : "Identifikatoren, die vom Unternehmen oder von Dritten lokal auf dem Gerät des Benutzers gespeichert werden, einschließlich Cookies, Beacons oder Ähnlichem, die häufig zur eindeutigen Identifizierung von Benutzern verwendet werden, jedoch nicht für den Verbindungsaufbau mit dem Gerät des Benutzers oder die Bereitstellung eines Dienstes erforderlich sind."
                            },
                        "4":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "5":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                                "description" : "Es werden gesundheitsbezogene Daten gesammelt, z.B. Informationen zum Gesundheitszustand, Verschreibungen, medikamentöser Behandlung, sowie Daten aus der Gesundheitsüberwachung, wie Herzrate, Schrittzahlen, Aktivitätsgrad etc."
                            },
                        "6":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                                "description" : "Es werden z.B. permanente Identifikatoren wie Geräte-Ids oder MAC-Adresse, oder vorübergehende Identifikatoren wie die IP-Adresse gesammelt, die benötigt werden, um eine Verbindung für die aktuelle Internetsitzung herzustellen."
                            },
                        "7":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                                "description" : "Es werden ortsbezogene Daten gesammelt (z.B. die aktuelle Position des Nutzers), die von unterschiedlicher Granularität sein können, d.h. es könnte sich um die exakte Positon handeln, die Postleitzahl, oder auf Stadtebene. "
                            },
                        "8":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                                "description" : "Es werden Daten zu den Aktivitäten des Nutzers im Internet, auf einer Webseite oder App gesammelt, z.B. die Seiten, die besucht wurden, die Zeit, die auf diesen Seiten verbracht wurde, Online-Nutzerverhalten im allgemeinen etc."
                            },
                        "9":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "10":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                                "description" : "Die gesammelten Daten werden analytisch ausgewertet, z.B. um Nutzungs- und Zugriffsstatistiken von bestimmten Platformen zu erstellen."
                            },
                        "11":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                                "description" : "Die gesammelten Daten werden gegebenenfalls an die Legislative weitergegeben."
                            }
                    }
            },
        "4":
            {
                "categoryNumber" : 4,
                "imagePath": "res/MainCategory/MainCategory_4_edited.png",
                "description": "Aufbewahrung von Daten: Wie lange Nutzerinformation gespeichert wird.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Retention Period",
                                "imagePath" : "res/SubCategory/RetentionPeriod_indefinite_icon72.png",
                                "description" : "Die gesammelten Daten werden auf unbegrenzte Zeit gespeichert."
                            },
                        "2":
                            {
                                "subcategory" : "Retention Period",
                                "imagePath" : "res/SubCategory/RetentionPeriod_limited_icon70.png",
                                "description" : "Die gesammelten Daten werden für begrenzte Zeit gespeichert."
                            }
                    }
            },
        "5":
            {
                "categoryNumber" : 5,
                "imagePath": "res/MainCategory/MainCategory_5_edited.png",
                "description": "Aufbewahrung von Daten: Wie lange Nutzerinformation gespeichert wird.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_ComputerInformation_icon74.png",
                                "description" : "Der Typ des Betriebssystems oder des Webbrowsers, den der Benutzer verwendet, oder ähnliche Computer- oder Geräteinformationen."
                            },
                        "2":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_contact_icon44.png",
                                "description" : "Kontaktinformationen wie Name, E-Mail-Adresse, Telefonnummer, Straße usw."
                            },
                        "3":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_cookies_tracking_icon52.png",
                                "description" : "Identifikatoren, die vom Unternehmen oder von Dritten lokal auf dem Gerät des Benutzers gespeichert werden, einschließlich Cookies, Beacons oder Ähnlichem, die häufig zur eindeutigen Identifizierung von Benutzern verwendet werden, jedoch nicht für den Verbindungsaufbau mit dem Gerät des Benutzers oder die Bereitstellung eines Dienstes erforderlich sind."
                            },
                        "4":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_financial_icon9.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "5":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_health_icon22.png",
                                "description" : "Es werden gesundheitsbezogene Daten gesammelt, z.B. Informationen zum Gesundheitszustand, Verschreibungen, medikamentöser Behandlung, sowie Daten aus der Gesundheitsüberwachung, wie Herzrate, Schrittzahlen, Aktivitätsgrad etc."
                            },
                        "6":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_IP_icon30.png",
                                "description" : "Es werden z.B. permanente Identifikatoren wie Geräte-Ids oder MAC-Adresse, oder vorübergehende Identifikatoren wie die IP-Adresse gesammelt, die benötigt werden, um eine Verbindung für die aktuelle Internetsitzung herzustellen."
                            },
                        "7":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_location_icon29.png",
                                "description" : "Es werden ortsbezogene Daten gesammelt (z.B. die aktuelle Position des Nutzers), die von unterschiedlicher Granularität sein können, d.h. es könnte sich um die exakte Positon handeln, die Postleitzahl, oder auf Stadtebene. "
                            },
                        "8":
                            {
                                "subcategory" : "Personal Information Type",
                                "imagePath" : "res/SubCategory/PIT_UserOnlineActivities_icon75.png",
                                "description" : "Es werden Daten zu den Aktivitäten des Nutzers im Internet, auf einer Webseite oder App gesammelt, z.B. die Seiten, die besucht wurden, die Zeit, die auf diesen Seiten verbracht wurde, Online-Nutzerverhalten im allgemeinen etc."
                            },
                        "9":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_ads_icon1.png",
                                "description" : "Es werden finanzielle Information gesammelt, z.B. Kredit-/Debitkartendaten, andere Zahlungsinformationen, Bonitätsbewertungen etc. "
                            },
                        "10":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_analytics_icon13.png",
                                "description" : "Die gesammelten Daten werden analytisch ausgewertet, z.B. um Nutzungs- und Zugriffsstatistiken von bestimmten Platformen zu erstellen."
                            },
                        "11":
                            {
                                "subcategory" : "Purpose",
                                "imagePath" : "res/SubCategory/purpose_legal_icon3.png",
                                "description" : "Die gesammelten Daten werden gegebenenfalls an die Legislative weitergegeben."
                            },
                        "12":
                            {
                                "subcategory" : "Retention Period",
                                "imagePath" : "res/SubCategory/RetentionPeriod_indefinite_icon72.png",
                                "description" : "Die gesammelten Daten werden auf unbegrenzte Zeit gespeichert."
                            },
                        "13":
                            {
                                "subcategory" : "Retention Period",
                                "imagePath" : "res/SubCategory/RetentionPeriod_limited_icon70.png",
                                "description" : "Die gesammelten Daten werden für begrenzte Zeit gespeichert."
                            }
                    }
            },
        "6":
            {
                "categoryNumber" : 6,
                "imagePath": "res/MainCategory/MainCategory_6_edited.png",
                "description": "Datensicherheit: Wie Nutzerinformation geschützt wird.",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "none",
                                "imagePath" : "res/SubCategory/no_icon.png",
                                "description" : ""
                            }
                    }
            },
        "7":
            {
                "categoryNumber" : 7,
                "imagePath": "res/MainCategory/MainCategory_7_edited.png",
                "description": "Richtlinienänderung: In welchem Rahmen werden Änderungen an der Richtline stattfinden",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "none",
                                "imagePath" : "res/SubCategory/no_icon.png",
                                "description" : ""
                            }
                    }
            },
        "8":
            {
                "categoryNumber" : 8,
                "imagePath": "res/MainCategory/MainCategory_8_edited.png",
                "description": "Mitverfolgung persönlicher Daten: Wird der Verzicht auf Mitverfolgung von persönlichen Daten erwähnt",
                "subcategories":
                    {
                        "1":
                            {
                                "subcategory" : "none",
                                "imagePath" : "res/SubCategory/no_icon.png",
                                "description" : ""
                            }
                    }
            },
        "9":
            {
                "categoryNumber" : 9,
                "imagePath": "res/MainCategory/MainCategory_9_edited.png",
                "description": "Datenreichweite: In welchen Ländern und Regionen werden die gesammelten Daten verarbeitet oder weitergeleitet",
                "subcategories":
                    {
                        "1":
                            {
                                "imagePath": "res/SubCategory/AudienceType_Europeans.PNG",
                                "description": "Wie Daten von europäischen Nutzern behandelt werden, z. B. Safe-Harbor-Bestimmungen oder DSGVO."
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