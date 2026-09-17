const I18N = {
    init() {
        this.currentLang = localStorage.getItem('zyglox-lang') ||
            (navigator.language.startsWith('de') ? 'de' : 'en');
        this.apply(this.currentLang);
        this.bindToggle();
    },

    apply(lang) {
        this.currentLang = lang;
        localStorage.setItem('zyglox-lang', lang);

        document.querySelectorAll('[data-en][data-de]').forEach(el => {
            el.textContent = el.getAttribute('data-' + lang);
        });

        document.querySelectorAll('option[data-en][data-de]').forEach(el => {
            el.textContent = el.getAttribute('data-' + lang);
        });

        document.querySelectorAll('[data-en-placeholder][data-de-placeholder]').forEach(el => {
            el.placeholder = el.getAttribute('data-' + lang + '-placeholder');
        });

        document.documentElement.lang = lang;

        document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    },

    bindToggle() {
        document.querySelectorAll('.lang-toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => this.apply(btn.dataset.lang));
        });
    }
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
