let currentLang = localStorage.getItem("lang") || "en";

const translations = {
    en: {
        nav_home: "Home",
        nav_about_me: "About Me",
        nav_my_project: "My Projects",
        nav_contact: "Contact",
        nav_portfolio: "portfolio",
        hello: "hello, I'm",
        name: "valera arnovich",
        job1: "I'm a Web Engineer and",
        job2: "a Flet Engineer",
        about_title: "About Me:",
        about_text_1: "I'm 22 years old, currently studying Full Stack Development at HackerU, while actively working with HTML, CSS, JavaScript, and Python. I'm especially passionate about building custom interfaces and desktop/web applications using Python and the Flet framework.",
        about_text_2: "I enjoy digging into deep, complex things — not to make them seem impressive, but because that's where the structure and real understanding begin. I simplify not to impress, but because it feels natural. If something can be explained clearly, I’ll find a way. If a UI can be more intuitive, I’ll make it so.",
        about_text_3: "My goal is to create not just working code, but thoughtful, clean, and human-centered solutions — products that feel intentional, logical, and alive. Open to collaboration — freelance, pet projects, internships. Always looking for meaningful tasks where thinking matters, honesty is valued, and the human side of development isn’t forgotten.",
        projects_title: "My Projects:",
        project_1: "burger restaurant also minimalist design",
        project_2: "small project store minimalist design in Hebrew",
        project_3: "My third project",
        form_name: "Name*",
        form_email: "Email*",
        form_message: "Message*",
        form_name_in: "your name..",
        form_email_in: "your email..",
        form_message_in: "Write something..",
        form_submit: "send",
        contact_title: "Contact Me:",
        contact_subtext: "Feel free to reach out for any inquiries or collaborations.",
        footer_rights: "All rights reserved",
        footer_made: "Made with ❤️ by Valera Arnovich",
    },
    ru: {
        nav_home: "Главная",
        nav_about_me: "Обо мне",
        nav_my_project: "Мои проекты",
        nav_contact: "Контакты",
        nav_portfolio: "Портфолио",
        hello: "привет, я",
        name: "валера арнович",
        job1: "я веб-инженер и",
        job2: "инженер Flet",
        about_title: "Обо мне:",
        about_text_1: "Мне 22 года, сейчас я изучаю Full Stack разработку в HackerU и активно работаю с HTML, CSS, JavaScript и Python. Особенно увлечён созданием пользовательских интерфейсов и веб/десктоп приложений с использованием Python и Flet.",
        about_text_2: "Мне нравится погружаться в сложные вещи — не ради впечатления, а чтобы понять структуру и суть. Я упрощаю не ради показухи, а потому что это естественно. Если что-то можно объяснить проще — я это сделаю. Если интерфейс можно сделать понятнее — я улучшу его.",
        about_text_3: "Моя цель — писать не просто рабочий код, а вдумчивые, чистые и ориентированные на человека решения. Продукты, которые ощущаются логичными, живыми и продуманными. Открыт к сотрудничеству — фриланс, проекты, стажировки. Ищу задачи, где важны мышление, честность и человеческий подход к разработке.",
        projects_title: "Мои проекты:",
        project_1: "бургерная также имеет минималистичный дизайн",
        project_2: "Минималистичный дизайн небольшого магазина проектов на иврите",
        project_3: "Мой третий проект",
        form_name: "Имя*",
        form_email: "Почта*",
        form_message: "Сообщение*",
        form_name_in: "ваш имя и фамилия",
        form_email_in: "ваш email",
        form_message_in: "пишите что вы хотите",
        form_submit: "Отправить",
        contact_title: "Свяжитесь со мной:",
        contact_subtext: "Свяжитесь со мной по любым вопросам или сотрудничеству.",
        footer_rights: "Все права защищены",
        footer_made: "Сделано с ❤️ Валерой Арновичем",
    },
};

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        const translation = translations[currentLang][key];
        if (!translation) return;

        if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
            if (el.type === "submit") {
                el.value = translation;
            } else {
                el.placeholder = translation;
            }
        } else {
            el.textContent = translation;
        }
    });
}

document.getElementById("lang-toggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "ru" : "en";
    localStorage.setItem("lang", currentLang);
    applyTranslations();
});

// При загрузке
applyTranslations();
