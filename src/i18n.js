import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        en: {
            translation: {
                title: "Hi. I'm Russell.",
                fsd: "Full Stack Developer",
                sa: "Software Architect",
                photo: "Photographer",
                projects: "Projects",
                pj1: "Portfolio V1 made with React and Tailwind CSS",
                pj2: "Web Application with OpenWeather API made with Vue.js and Bootstrap",
                pj3: "Android Application with Firebase Authentication, Google Maps API & API REST from DummyJSON",
                pj4: "A simple calculator with a built-in dark mode made with HTML, CSS & Javascript",
                gh: "More on GitHub",
                bio: "Born in 2002 at San Pablo City, Philippines. I’m a Software Architect Specialist student at ITS Academy Angelo Rizzoli, a passionate Full Stack Developer, an anspiring Photographer. Ready for new opportunities and challenges to grow personally and professionally.",
                skills: "Skills",
                skilltext: "Problem Solving is what I do!",
                skillbtn: "See more",
                experiences: "Experiences",
                date1: "JAN 2024 - PRESENT",
                job1: "SOFTWARE DEVELOPER",
                company1: "Vantea SMART",
                jobdesc1: "Specializing in securing digital identities and managing system access. Designing and implementing IAM solutions, ensuring compliance and data integrity. Crucial role in mitigating cybersecurity risks.",
                date2: "SEPT 2023 - DEC 2023",
                job2: "ICE CREAM SCOOPER",
                company2: "Grom",
                jobdesc2: "Purpose of my role: satisfying customers through product sales and achieving company goals.",
                date3: "FEB 2019 – MAR 2019",
                job3: "MARKETING ASSISTANT",
                company3: "Vargas S.r.l.",
                jobdesc3: "Main activities: negotiated contracts, made calls with clients, utilized Microsoft Excel for database management.",
                sk1: "Time Management",
                sk2: "Stress Management",
                sk3: "Team Work",
                sk4: "Patience",
                sk5: "Communication",
                sk6: "Costumer Service",
                sk7: "Memorization",
                sk8: "Cashier",
                sk9: "Contracts",
                sk10: "Adaptability",
                sk11: "Working under pressure",
                sk12: "Organization",
                sk13: "Strategy",
                sk14: "Invoices",
                worktog: "Let's connect!",
                worktogtext: "I'd love to hear from you! Whether it's a quick hello or a project idea, feel free to drop a message. Let's chat and see what we can create together!",    
                copyright: "Reproduction, reposting or modification of the content of this site is prohibited."
            }
        },
        it: {
            translation: {
                title: "Ciao. Sono Russell.",
                fsd: "Sviluppatore Full Stack",
                sa: "Architetto Software",
                photo: "Fotografo",
                projects: "Progetti",
                pj1: "Portfolio V1 fatto con React e Tailwind CSS",
                pj2: "Applicazione Web con OpenWeather API fatto con Vue.js e Bootstrap",
                pj3: "Applicazione Android con autenticazione Firebase, API di Google Maps e API REST di DummyJSON",
                pj4: "Una semplice calcolatrice con una modalità oscura incorporata realizzata con HTML, CSS e Javascript",
                gh: "Altro su GitHub",
                bio: "Nato nel 2002 a San Pablo City, Filippine. Sono uno studente Software Architect Specialist presso ITS Academy Angelo Rizzoli, un appassionato Sviluppatore Full Stack, un aspirante Fotografo. Pronto a nuove opportunità e sfide per crescere personalmente e professionalmente.",
                skills: "Competenze",
                skilltext: "Problem Solving è quello che faccio!",
                skillbtn: "Vedi altro",
                experiences: "Esperienze",
                date1: "GEN 2024 - PRESENTE",
                job1: "SVILUPPATORE SOFTWARE",
                company1: "Vantea SMART",
                jobdesc1: "Specializzato nella protezione delle identità digitali e nella gestione degli accessi ai sistemi. Progettare e implementare soluzioni IAM, garantendo conformità e integrità dei dati. Ruolo cruciale nella mitigazione dei rischi di sicurezza informatica.",
                date2: "SETT 2023 - DIC 2023",
                job2: "CONISTA",
                company2: "Grom",
                jobdesc2: "Scopo del mio ruolo: soddisfare i clienti attraverso la vendita dei prodotti e il raggiungimento degli obiettivi aziendali.",
                date3: "FEB 2019 – MAR 2019",
                job3: "ASSISTENTE MARKETING",
                company3: "Vargas S.r.l.",
                jobdesc3: "Principali attività: negoziazione contratti, telefonate con clienti, utilizzo Microsoft Excel per gestione database.",
                sk1: "Gestione del tempo",
                sk2: "Gestione dello stress",
                sk3: "Lavoro di squadra",
                sk4: "Pazienza",
                sk5: "Comunicazione",
                sk6: "Servizio Clienti",
                sk7: "Memorizzazione",
                sk8: "Cassiere",
                sk9: "Contratti",
                sk10: "Adattabilità",
                sk11: "Lavorare sotto pressione",
                sk12: "Organizzazione",
                sk13: "Strategia",
                sk14: "Fatture",
                worktog: "Connettiamoci!",
                worktogtext: "Mi piacerebbe sentire la tua opinione! Che si tratti di un saluto veloce o di un'idea di progetto, sentiti libero di lasciare un messaggio. Parliamo e vediamo cosa possiamo creare insieme!",
                copyright: "È vietata la riproduzione, la ripubblicazione o la modifica del contenuto di questo sito."
            }
        },
        phl: {
            translation: {
                title: "Hi. Ako si Russell.",
                fsd: "Full Stack Developer",
                sa: "Software Architect",
                photo: "Photographer",
                projects: "Mga proyekto",
                pj1: "Portfolio V1 na ginawa gamit ang React at Tailwind CSS",
                pj2: "Web Application na may OpenWeather API na ginawa gamit ang Vue.js at Bootstrap",
                pj3: "Android Application na may Firebase Authentication, Google Maps API, at API REST mula sa DummyJSON",
                pj4: "Isang simpleng calculator na may built-in na dark mode na ginawa gamit ang HTML, CSS at Javascript",
                gh: "More sa GitHub",
                bio: "Ipinanganak noong 2002 sa San Pablo City, Philippines. Isa akong Software Architect Specialist na nag-aaral sa ITS Academy Angelo Rizzoli, isang madamdamin na Full Stack Developer, isang masigasig na Photographer. Handa para sa mga bagong pagkakataon at hamon na lumago nang personal at propesyonal.",
                skills: "Mga kasanayan",
                skilltext: "Problem Solving ang ginagawa ko!",
                skillbtn: "Tingan pa",
                experiences: "Mga karanasan",
                date1: "JAN 2024 - PRESENT",
                job1: "SOFTWARE DEVELOPER",
                company1: "Vantea SMART",
                jobdesc1: "Dalubhasa sa pag-secure ng mga digital na pagkakakilanlan at pamamahala ng access sa system. Pagdidisenyo at pagpapatupad ng mga solusyon sa IAM, tinitiyak ang pagsunod at integridad ng data. Mahalagang papel sa pagpapagaan ng mga panganib sa cybersecurity.",
                date2: "SEPT 2023 - DEC 2023",
                job2: "ICE CREAM SCOOPER",
                company2: "Grom",
                jobdesc2: "Layunin ng aking tungkulin: bigyang-kasiyahan ang mga customer sa pamamagitan ng pagbebenta ng produkto at pagkamit ng mga layunin ng kumpanya.",
                date3: "FEB 2019 – MAR 2019",
                job3: "MARKETING ASSISTANT",
                company3: "Vargas S.r.l.",
                jobdesc3: "Pangunahing aktibidad: nakipag-usap sa mga kontrata, tumawag sa mga kliyente, gumamit ng Microsoft Excel para sa pamamahala ng database.",
                sk1: "Time Management",
                sk2: "Stress Management",
                sk3: "Team Work",
                sk4: "Pasensya",
                sk5: "Komunikasyon",
                sk6: "Serbisyo sa Kostumer",
                sk7: "Pagsasaulo",
                sk8: "Cashier",
                sk9: "Mga kontrata",
                sk10: "Adaptability",
                sk11: "Working under pressure",
                sk12: "Organisasyon",
                sk13: "Diskarte",
                sk14: "Invoices",  
                worktog: "Kumonekta tayo!",
                worktogtext: "Gusto kong marinig mula sa iyo! Mabilis man itong kumusta o ideya sa proyekto, huwag mag-atubiling mag-drop ng mensahe. Mag-chat tayo at tingnan kung ano ang magagawa nating magkasama!",
                copyright: "Ipinagbabawal ang pagpaparami, pag-repost o pagbabago ng nilalaman ng site na ito."
            }
        },
    }
});

export default i18n;
