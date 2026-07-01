document.addEventListener('DOMContentLoaded', function() {
    const contactLinks = document.querySelectorAll('#contact-link, #hero-contact-link');
    const langButtons = document.querySelectorAll('.lang-btn');
    const translatableItems = document.querySelectorAll('[data-lang-ko][data-lang-en]');

    function currentLanguage() {
        return document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
    }

    function showContact(event) {
        event.preventDefault();
        const message = currentLanguage() === 'ko'
            ? '문의: insoft@insoft.kr'
            : 'Contact: insoft@insoft.kr';
        alert(message);
    }

    function changeLanguage(lang) {
        translatableItems.forEach((item) => {
            const text = lang === 'ko' ? item.dataset.langKo : item.dataset.langEn;
            if (text) {
                item.textContent = text;
            }
        });

        langButtons.forEach((button) => {
            button.classList.toggle('active', button.dataset.lang === lang);
        });
    }

    contactLinks.forEach((link) => {
        link.addEventListener('click', showContact);
    });

    langButtons.forEach((button) => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            changeLanguage(this.dataset.lang);
        });
    });

    changeLanguage(currentLanguage());
});
