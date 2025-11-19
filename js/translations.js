// Translation object for CRRZ website
const translations = {
    en: {
        nav: {
            home: "Home",
            about: "About",
            service: "Service",
            team: "Team",
            contact: "Contact"
        },
        slider: {
            tagline: "Data science solutions."
        },
        about: {
            title: "About us",
            paragraph1: "CRRZ is a team of ambitious programmers specializing in machine learning, data science, process automation, and data analysis. We transform raw data into actionable insights through advanced analytics and intelligent systems.",
            paragraph2: "Our expertise in machine learning enables us to develop systems that learn, adapt, and optimize processes, while our data analysis capabilities help uncover hidden patterns and opportunities. With a focus on process automation, we streamline operations and increase efficiency, empowering businesses to make data-driven decisions and thrive in the digital age."
        },
        service: {
            title: "Service",
            subtitle: "The Key Features of our Job",
            dataScience: {
                title: "Data Science",
                description: "We leverage statistical modeling, machine learning, and predictive analytics to help businesses gain actionable insights and optimize processes."
            },
            machineLearning: {
                title: "Machine Learning",
                description: "We develop advanced machine learning solutions that leverage data to drive innovation, automation, and actionable insights for businesses."
            },
            dataAnalysis: {
                title: "Data Analysis",
                description: "We provide comprehensive data analysis services, helping businesses identify patterns and make data-driven decisions for enhanced efficiency and growth."
            },
            cloud: {
                title: "Cloud Solutions",
                description: "We offer expertise in cloud technologies, enabling seamless storage, processing, and analysis of data with secure and efficient operations."
            }
        },
        team: {
            title: "Team",
            jan: {
                degree: "Master of computer science",
                skills: "Machine learning, Data science, Cloud solutions"
            },
            grega: {
                degree: "Master of Engineering",
                skills: "Data Analytics, BI tools"
            },
            uros: {
                degree: "Master of Multimedia",
                skills: "Cloud solutions, process automatization"
            }
        },
        contact: {
            title: "Contact"
        }
    },
    si: {
        nav: {
            home: "Domov",
            about: "O nas",
            service: "Storitve",
            team: "Ekipa",
            contact: "Kontakt"
        },
        slider: {
            tagline: "Pametne rešitve za zapletene podatkovne izzive."
        },
        about: {
            title: "O nas",
            paragraph1: "CRRZ je ekipa ambicioznih programerjev, specializiranih za strojno učenje, podatkovno znanost, avtomatizacijo procesov in analizo podatkov. Surove podatke pretvarjamo v uporabne vpoglede z napredno analitiko in inteligentnimi sistemi.",
            paragraph2: "Naša strokovna znanja v strojnem učenju nam omogočajo razvoj sistemov, ki se učijo, prilagajajo in optimizirajo procese, medtem ko naše zmogljivosti analize podatkov pomagajo odkriti skrite vzorce in priložnosti. S poudarkom na avtomatizaciji procesov poenostavljamo delovanje in povečujemo učinkovitost, kar podjetjem omogoča sprejemanje odločitev na podlagi podatkov in uspevanje v digitalni dobi."
        },
        service: {
            title: "Storitve",
            subtitle: "Ključne značilnosti našega dela",
            dataScience: {
                title: "Podatkovna znanost",
                description: "Uporabljamo statistično modeliranje, strojno učenje in napovedno analitiko, da podjetjem pomagamo pridobiti uporabne vpoglede in optimizirati procese."
            },
            machineLearning: {
                title: "Strojno učenje",
                description: "Razvijamo napredne rešitve strojnega učenja, ki uporabljajo podatke za spodbujanje inovacij, avtomatizacije in uporabnih vpogledov za podjetja."
            },
            dataAnalysis: {
                title: "Analiza podatkov",
                description: "Ponujamo celovite storitve analize podatkov, ki podjetjem pomagajo prepoznati vzorce in sprejemati odločitve na podlagi podatkov za večjo učinkovitost in rast."
            },
            cloud: {
                title: "Oblačne rešitve",
                description: "Ponujamo strokovno znanje o oblačnih tehnologijah, ki omogoča brezhibno shranjevanje, obdelavo in analizo podatkov z varnimi in učinkovitimi operacijami."
            }
        },
        team: {
            title: "Ekipa",
            jan: {
                degree: "Magister računalništva",
                skills: "Strojno učenje, Podatkovna znanost, Oblačne rešitve"
            },
            grega: {
                degree: "Magister inženirstva",
                skills: "Analitika podatkov, BI orodja"
            },
            uros: {
                degree: "Magister multimedije",
                skills: "Oblačne rešitve, avtomatizacija procesov"
            }
        },
        contact: {
            title: "Kontakt"
        }
    }
};

// Language switcher functionality
(function() {
    'use strict';
    
    // Get saved language or default to 'en'
    let currentLang = localStorage.getItem('crrz-lang') || 'en';
    
    // Function to get nested translation value
    function getTranslation(key, lang) {
        const keys = key.split('.');
        let value = translations[lang];
        for (let i = 0; i < keys.length; i++) {
            if (value && value[keys[i]]) {
                value = value[keys[i]];
            } else {
                return null;
            }
        }
        return value;
    }
    
    // Function to translate all elements
    function translatePage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;
        
        // Find all elements with data-translate attribute
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(function(element) {
            const key = element.getAttribute('data-translate');
            const translation = getTranslation(key, lang);
            if (translation) {
                element.textContent = translation;
            }
        });
        
        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.classList.remove('active');
        });
        document.getElementById('lang-' + lang).classList.add('active');
        
        // Save language preference
        localStorage.setItem('crrz-lang', lang);
        currentLang = lang;
    }
    
    // Initialize language on page load
    document.addEventListener('DOMContentLoaded', function() {
        translatePage(currentLang);
        
        // Add click handlers to language switcher buttons
        document.querySelectorAll('.lang-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const lang = this.getAttribute('data-lang');
                translatePage(lang);
            });
        });
    });
    
    // Expose translatePage function globally for manual calls if needed
    window.translatePage = translatePage;
    window.getCurrentLang = function() { return currentLang; };
})();

