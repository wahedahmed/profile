const translations = {
    ar: {
        // Navbar
        navProfile: "الملف الشخصي",
        navSkills: "المهارات",
        navWork: "الأعمال",
        navResume: "السيرة الذاتية",
        navContact: "تواصل",
        navLang: "اللغة",
        // Index Page
        pageTitleIndex: "Mini Portfolio | الملف الشخصي",
        heroGreeting: "مرحباً، أنا وحيد احمد",
        heroTitle: "أخصائي تقنية معلومات", // Changed to IT Specialist
        heroAboutMe: "أخصائي دعم تقنية معلومات متخصص مع خبرة واسعة في دعم المستخدمين النهائيين، حل المشاكل، وصيانة الأنظمة. ماهر في أنظمة التشغيل، الشبكات، أمان البيانات، وأدوات الدعم التقني. قدرة مثبتة على تحسين أداء النظام وضمان الوصول الآمن، مع التركيز على التوثيق الفعال وحل المشكلات بفعالية.", // Changed to match IT Summary
        btnHireMe: "وظفني الآن",
        btnMyWork: "أعمالي",
        // Footer
        footerCopyright: "&copy; 2025 جميع الحقوق محفوظة.",
        footerContact: "تواصل معي",
        // Contact Modal
        modalTitle: "تواصل معي",
        formNamePlaceholder: "اسمك الكامل",
        formEmailPlaceholder: "بريدك الإلكتروني",
        formWebsitePlaceholder: "الموقع الإلكتروني (اختياري)",
        formMessagePlaceholder: "رسالتك",
        formSubmitBtn: "إرسال الرسالة",

        // Skills Page
        pageTitleSkills: "Mini Portfolio | المهارات",
        skillsHeading: "مهاراتي",
        skillProgrammingLang: "لغات البرمجة",
        skillProgrammingLangDesc: "خبرة واسعة في JavaScript، HTML، CSS، و SQL لتطوير تطبيقات ويب قوية وواجهات مستخدم تفاعلية.",
        skillFrameworksLibs: "أطر العمل والمكتبات",
        skillFrameworksLibsDesc: "إتقان استخدام React لبناء واجهات مستخدم معيارية وقابلة للتوسع، وBootstrap لتصميم متجاوب وسريع.",
        skillDevToolsSystems: "أدوات وأنظمة التطوير",
        skillDevToolsSystemsDesc: "استخدام Git لإدارة الإصدارات، Active Directory لإدارة المستخدمين، وOffice 365 للإنتاجية المؤسسية.",
        skillNetworkingSecurity: "الشبكات والأمن",
        skillNetworkingSecurityDesc: "فهم أساسيات LAN/WAN، DHCP، DNS، VPN، وإدارة حلول الأمن مثل برامج مكافحة الفيروسات والنسخ الاحتياطي للبيانات.",
        skillOSTroubleshooting: "أنظمة التشغيل واستكشاف الأخطاء",
        skillOSTroubleshootingDesc: "خبرة قوية في Windows و Linux، بالإضافة إلى مهارات تحليلية ممتازة في استكشاف الأخطاء وإصلاحها وحل المشكلات التقنية المعقدة.",
        skillCompetenciesSoft: "الكفاءات والمهارات الشخصية",
        skillCompetenciesSoftDesc: "مهارات في تحليلات البيانات، منهجيات Agile، الأمن السيبراني، الحوسبة السحابية، بالإضافة إلى التواصل الفعال وحل المشكلات والعمل الجماعي.",

        // Work Page
        pageTitleWork: "Mini Portfolio | الأعمال",
        workHeading: "أعمالي",
        workProject1Title: "نظام تخطيط موارد المؤسسة (ERP)",
        workProject1Desc: "تطوير نظام ERP متكامل لإدارة العمليات الداخلية لشركة، يشمل المخزون والمبيعات والموارد البشرية.",
        workProject1Btn: "عرض المشروع (قريبًا)",
        workProject2Title: "تطوير الواجهة الخلفية لمنصة تجارة إلكترونية",
        workProject2Desc: "بناء وتحسين APIs قوية وخدمات الواجهة الخلفية لمنصة تجارة إلكترونية عالية الأداء، مع ضمان أمان البيانات.",
        workProject2Btn: "عرض المشروع (قريبًا)",
        workProject3Title: "لوحة تحكم (Dashboard) متجاوبة للواجهة الأمامية",
        workProject3Desc: "تصميم وتطوير لوحة تحكم سهلة الاستخدام ومتجاوبة بالكامل باستخدام React و Bootstrap، لتحسين تجربة المستخدم.",
        workProject3Btn: "عرض المشروع (قريبًا)",
        workProject4Title: "نظام إدارة مصنع الألبان",
        workProject4Desc: "مشروع تخرج يهدف إلى أتمتة وتبسيط عمليات إدارة مصنع ألبان، من الإنتاج إلى التوزيع.",
        workProject4Btn: "عرض المشروع (قريبًا)",
        workProject5Title: "تكامل حلول الأمن السيبراني",
        workProject5Desc: "تنفيذ وتكوين حلول أمنية متقدمة لحماية شبكات وأنظمة الشركات من التهديدات السيبرانية.",
        workProject5Btn: "عرض المشروع (قريبًا)",
        workProject6Title: "ترحيل وإدارة الأنظمة على السحابة",
        workProject6Desc: "تخطيط وتنفيذ ترحيل البنية التحتية والتطبيقات إلى بيئات الحوسبة السحابية (مثل AWS/Azure) وإدارة الموارد السحابية.",
        workProject6Btn: "عرض المشروع (قريبًا)",

        // Resume Page
        pageTitleResume: "Mini Portfolio | السيرة الذاتية",
        resumeHeading: "السيرة الذاتية",
        resumeSubheading: "يمكنك تحميل سيرتي الذاتية للرجوع إليها، وأتمنى أن نلتقي قريبًا! :)",
        btnDownloadResume: "تحميل السيرة الذاتية",
        fileSize: "حجم الملف: 125 كيلو بايت (PDF)",

        profSummaryTitle: "الملخص الاحترافي",
        profSummaryContent: "أخصائي دعم تقنية معلومات متخصص مع خبرة واسعة في دعم المستخدمين النهائيين، حل المشاكل، وصيانة الأنظمة. ماهر في أنظمة التشغيل، الشبكات، أمان البيانات، وأدوات الدعم التقني. قدرة مثبتة على تحسين أداء النظام وضمان الوصول الآمن، مع التركيز على التوثيق الفعال وحل المشكلات بفعالية.",

        experienceTitle: "الخبرة المهنية",
        expJobTitle1: "أخصائي دعم تقنية معلومات",
        expCompany1: "شركة ضوء الشعلة الكهربائية",
        expDates1: "مارس 2023 - مايو 2024",
        expDuty1_1: "تقديم الدعم للمستخدمين النهائيين وحل مشاكل الأجهزة والبرامج والشبكات.",
        expDuty1_2: "تثبيت وصيانة الأنظمة وتطبيقات المؤسسة.",
        expDuty1_3: "إدارة حسابات المستخدمين عبر Active Directory وضمان الوصول الآمن.",
        expDuty1_4: "صيانة سجلات أصول تقنية المعلومات وتنفيذ إجراءات النسخ الاحتياطي.",

        expJobTitle2: "مساعد تقنية معلومات",
        expCompany2: "شركة ضوء الشعلة الكهربائية",
        expDates2: "يوليو 2022 - فبراير 2023",
        expDuty2_1: "الاستجابة لطلبات الدعم الفني عبر قنوات مختلفة.",
        expDuty2_2: "المساعدة في الحفاظ على اتصال الشبكة وأمن النظام.",
        expDuty2_3: "تثبيت وتهيئة معدات تقنية المعلومات والأجهزة الطرفية.",
        expDuty2_4: "توثيق إجراءات تقنية المعلومات القياسية ودعم عمليات مكافحة الفيروسات.",

        projectsTitle: "المشاريع", // هذا القسم موجود في الـ CV السابق، ولكنه غير موجود في الـ IT_CV.
        // تم إبقاء مفاتيحه في الـ lang.js لكن لن يتم عرضها في resume.html
        project1Name: "المشروع 1: [اسم المشروع الأول هنا]",
        project1Desc: "وصف موجز لدورك وإنجازاتك في المشروع 1.",
        project2Name: "المشروع 2: [اسم المشروع الثاني هنا]",
        project2Desc: "وصف موجز لدورك وإنجازاتك في المشروع 2.",
        project3Name: "المشروع 3: [اسم المشروع الثالث هنا]",
        project3Desc: "وصف موجز لدورك وإنجازاتك في المشروع 3.",


        techSkillsTitle: "المهارات التقنية",
        skillOS: "أنظمة التشغيل: Windows, Linux",
        skillNetworking: "الشبكات: LAN/WAN, DHCP, DNS, VPN",
        skillSystems: "الأنظمة: Active Directory, Office 365, Windows Server",
        skillSecurity: "الأمن: إدارة برامج مكافحة الفيروسات، التحكم في الوصول، النسخ الاحتياطي للبيانات",
        skillSupportTools: "أدوات الدعم: سطح المكتب البعيد، أنظمة التذاكر (مثل Jira)",
        skillGeneral: "عام: مجموعة برامج Microsoft Office، توثيق تقنية المعلومات، استكشاف الأخطاء وإصلاحها",

        certificationsTitle: "الشهادات",
        cert1: "MCSA",
        cert2: "CCNA",

        educationTitleGeneral: "التعليم", // تم تغيير المفتاح ليتجنب التضارب مع educationTitle
        eduDegreeGeneral: "بكالوريوس في تقنية المعلومات",
        eduInstituteGeneral: "المعهد العالي للإدارة والتكنولوجيا",
        eduDatesGeneral: "أغسطس 2018 - أغسطس 2021",
        eduGradeGeneral: "التقدير: جيد",
        eduProjectGeneral: "مشروع التخرج: نظام إدارة مصنع الألبان (التقدير: ممتاز)",

        languagesTitle: "اللغات",
        langArabic: "العربية: لغة أم",
        langEnglish: "الإنجليزية: محترف",

        softSkillsTitle: "المهارات الشخصية",
        softSkill1: "التواصل الفعال",
        softSkill2: "حل المشكلات",
        softSkill3: "التعاون الجماعي",

        contactEmail: "wahedahmed.wa22@gmail.com", // إضافة الإيميل من الـ CV
        contactWhatsapp: "0590525341", // إضافة الواتساب من الـ CV 
        contactLocation: "الخبر الشمالية، المملكة العربية السعودية",
        
               // Contact Modal - Social Media Version
        contactDesc: "اختر إحدى الوسائل التالية للتواصل معي مباشرة",
        contactInfo: "يمكنك التواصل معي مباشرة عبر الضغط على أي من الأزرار أعلاه. سأكون سعيداً بالرد على استفساراتك في أقرب وقت ممكن. أوقات التواصل من 9 صباحاً حتى 5 مساءً بتوقيت السعودية.",
        whatsappBtnText: "التواصل عبر واتساب",
        telegramBtnText: "التواصل عبر تلجرام",
        facebookBtnText: "التواصل عبر فيس بوك",
        contactInfoTitle: "معلومات التواصل",
        contactInfoContent: "يمكنك التواصل معي مباشرة عبر الضغط على أي من الأزرار أعلاه. سأكون سعيداً بالرد على استفساراتك في أقرب وقت ممكن. أوقات التواصل من 9 صباحاً حتى 5 مساءً بتوقيت السعودية.",
        socialIconsTitle: "وسائل التواصل الأخرى"// إضافة الموقع من الـ CV 
    },





    en: {
        // Navbar
        navProfile: "Profile",
        navSkills: "Skills",
        navWork: "Work",
        navResume: "Resume",
        navContact: "Contact",
        navLang: "Language",
        // Index Page
        pageTitleIndex: "Mini Portfolio | Profile",
        heroGreeting: "Hello, I'm Wahed Ahmed",
        heroTitle: "IT Specialist", // Changed to IT Specialist
        heroAboutMe: "Dedicated IT Support Specialist with extensive experience in end-user support, troubleshooting, and system maintenance. Proficient in operating systems, networking, data security, and technical support tools. Proven ability to enhance system performance and ensure secure access, with a focus on effective documentation and problem-solving.", // Changed to match IT Summary
        btnHireMe: "Hire Me Now",
        btnMyWork: "My Work",
        // Footer
        footerCopyright: "&copy; 2025 All rights reserved.",
        footerContact: "Contact Me",
        // Contact Modal
        modalTitle: "Contact Me",
        formNamePlaceholder: "Your Full Name",
        formEmailPlaceholder: "Your Email",
        formWebsitePlaceholder: "Website (Optional)",
        formMessagePlaceholder: "Your Message",
        formSubmitBtn: "Send Message",

        // Skills Page
        pageTitleSkills: "Mini Portfolio | Skills",
        skillsHeading: "My Skills",
        skillProgrammingLang: "Programming Languages",
        skillProgrammingLangDesc: "Extensive experience in JavaScript, HTML, CSS, and SQL for developing robust web applications and interactive user interfaces.",
        skillFrameworksLibs: "Frameworks & Libraries",
        skillFrameworksLibsDesc: "Proficient in using React for building modular and scalable user interfaces, and Bootstrap for responsive and rapid design.",
        skillDevToolsSystems: "Development Tools & Systems",
        skillDevToolsSystemsDesc: "Skilled in using Git for version control, Active Directory for user management, and Office 365 for enterprise productivity.",
        skillNetworkingSecurity: "Networking & Security",
        skillNetworkingSecurityDesc: "Understanding of LAN/WAN fundamentals, DHCP, DNS, VPN, and managing security solutions like antivirus and data backup.",
        skillOSTroubleshooting: "Operating Systems & Troubleshooting",
        skillOSTroubleshootingDesc: "Strong proficiency in Windows and Linux, coupled with excellent analytical skills in troubleshooting and resolving complex technical issues.",
        skillCompetenciesSoft: "Competencies & Soft Skills",
        skillCompetenciesSoftDesc: "Skills in Data Analytics, Agile Methodologies, Cybersecurity, Cloud Computing, in addition to Effective Communication, Problem-solving, and Team Collaboration.",

        // Work Page
        pageTitleWork: "Mini Portfolio | Work",
        workHeading: "My Work",
        workProject1Title: "Enterprise Resource Planning (ERP) System",
        workProject1Desc: "Developed a comprehensive ERP system for managing internal company operations, including inventory, sales, and human resources.",
        workProject1Btn: "View Project (Soon)",
        workProject2Title: "E-commerce Platform Backend Development",
        workProject2Desc: "Built and optimized robust APIs and backend services for a high-performance e-commerce platform, ensuring data security.",
        workProject2Btn: "View Project (Soon)",
        workProject3Title: "Responsive Frontend Dashboard",
        workProject3Desc: "Designed and developed a user-friendly and fully responsive dashboard using React and Bootstrap, improving user experience.",
        workProject3Btn: "View Project (Soon)",
        workProject4Title: "Dairy Factory Management System",
        workProject44Desc: "Graduation project aimed at automating and streamlining dairy factory management operations, from production to distribution.",
        workProject4Btn: "View Project (Soon)",
        workProject5Title: "Cybersecurity Solutions Integration",
        workProject5Desc: "Implemented and configured advanced security solutions to protect corporate networks and systems from cyber threats.",
        workProject5Btn: "View Project (Soon)",
        workProject6Title: "Cloud Migration & Management",
        workProject6Desc: "Planned and executed infrastructure and application migration to cloud computing environments (e.g., AWS/Azure) and managed cloud resources.",

        // Resume Page
        pageTitleResume: "Mini Portfolio | Resume",
        resumeHeading: "Resume",
        resumeSubheading: "You can download my resume for your reference, and I hope we meet very soon! :)",
        btnDownloadResume: "Download Resume",
        fileSize: "File Size: 125 KB (PDF)",

        profSummaryTitle: "Professional Summary",
        profSummaryContent: "Dedicated IT Support Specialist with extensive experience in end-user support, troubleshooting, and system maintenance. Proficient in operating systems, networking, data security, and technical support tools. Proven ability to enhance system performance and ensure secure access, with a focus on effective documentation and problem-solving.",

        experienceTitle: "Professional Experience",
        expJobTitle1: "IT Support Technician",
        expCompany1: "Shuaa Electric Company",
        expDates1: "Mar 2023 - May 2024",
        expDuty1_1: "Provided end-user support and resolved hardware, software, and network issues.",
        expDuty1_2: "Installed and maintained systems and enterprise applications.",
        expDuty1_3: "Managed user accounts via Active Directory and ensured secure access.",
        expDuty1_4: "Maintained IT asset records and implemented backup routines.",

        expJobTitle2: "IT Assistant",
        expCompany2: "Shuaa Electric Company",
        expDates2: "Jul 2022 - Feb 2023",
        expDuty2_1: "Responded to technical support requests across various channels.",
        expDuty2_2: "Assisted in maintaining network connectivity and system security.",
        expDuty2_3: "Installed and configured IT equipment and peripherals.",
        expDuty2_4: "Documented standard IT procedures and supported antivirus operations.",

        projectsTitle: "Projects", // This section is not in the IT_CV PDF, but kept in lang.js for consistency
        project1Name: "Project 1: [First Project Name Here]",
        project1Desc: "Brief description of your role and achievements in Project 1.",
        project2Name: "Project 2: [Second Project Name Here]",
        project2Desc: "Brief description of your role and achievements in Project 2.",
        project3Name: "Project 3: [Third Project Name Here]",
        project3Desc: "Brief description of your role and achievements in Project 3.",

        techSkillsTitle: "Technical Skills",
        skillOS: "Operating Systems: Windows, Linux",
        skillNetworking: "Networking: LAN/WAN, DHCP, DNS, VPN",
        skillSystems: "Systems: Active Directory, Office 365, Windows Server",
        skillSecurity: "Security: Antivirus Management, Access Control, Data Backup",
        skillSupportTools: "Support Tools: Remote Desktop, Ticketing Systems (e.g., Jira)",
        skillGeneral: "General: Microsoft Office Suite, IT Documentation, Troubleshooting",

        certificationsTitle: "Certifications",
        cert1: "MCSA",
        cert2: "CCNA",

        educationTitleGeneral: "Education", // Changed key to avoid conflict with general 'educationTitle'
        eduDegreeGeneral: "Bachelor's Degree in Information Technology",
        eduInstituteGeneral: "Higher Institute of Management and Technology",
        eduDatesGeneral: "Aug 2018 - Aug 2021",
        eduGradeGeneral: "Grade: Good",
        eduProjectGeneral: "Graduation Project: Dairy Factory Management System (Grade: Excellent)",

        languagesTitle: "Languages",
        langArabic: "Arabic: Native",
        langEnglish: "English: Proficient",

        softSkillsTitle: "Soft Skills",
        softSkill1: "Effective Communication",
        softSkill2: "Problem-solving",
        softSkill3: "Team Collaboration",

        contactEmail: "wahedahmed.wa22@gmail.com",
        contactWhatsapp: "0590525341", // 
        contactLocation: "Al-Khobar Al-Shamalia, Saudi Arabia", //
        
                // Contact Modal - Social Media Version
        contactDesc: "Choose one of the following methods to contact me directly",
        contactInfo: "You can contact me directly by clicking on any of the buttons above. I will be happy to respond to your inquiries as soon as possible. Contact hours are from 9 AM to 5 PM Saudi time.",
        whatsappBtnText: "Contact via WhatsApp",
        telegramBtnText: "Contact via Telegram",
        facebookBtnText: "Contact via Facebook",
        contactInfoTitle: "Contact Information",
        contactInfoContent: "You can contact me directly by clicking on any of the buttons above. I will be happy to respond to your inquiries as soon as possible. Contact hours are from 9 AM to 5 PM Saudi time.",
        socialIconsTitle: "Other Social Media"
    }
};

// وظيفة لتطبيق الترجمة
function applyTranslations(lang) {
    // تحديث سمة lang و dir لعنصر HTML
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // تحديث عنوان الصفحة
    const pageTitleElement = document.querySelector('title');
    if (pageTitleElement && pageTitleElement.dataset.langKey) {
        pageTitleElement.innerText = translations[lang][pageTitleElement.dataset.langKey] || pageTitleElement.innerText;
    }

    // تحديث جميع العناصر التي تحتوي على سمة data-lang-key
    document.querySelectorAll('[data-lang-key]').forEach(element => {
        const key = element.dataset.langKey;
        if (translations[lang] && translations[lang][key]) {
            // التعامل مع الـ placeholders في input/textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.innerText = translations[lang][key];
            }
        }
    });

    // حفظ اللغة المختارة في localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// عند تحميل الصفحة، طبق اللغة المحفوظة أو العربية كافتراضي
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('selectedLanguage') || 'ar'; // الافتراضي هو العربية
    applyTranslations(savedLang);

    // إضافة مستمعي الأحداث لأزرار تبديل اللغة
    document.querySelectorAll('[data-lang-set]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault(); // منع السلوك الافتراضي للرابط
            const newLang = e.target.dataset.langSet;
            applyTranslations(newLang);
        });
    });
});