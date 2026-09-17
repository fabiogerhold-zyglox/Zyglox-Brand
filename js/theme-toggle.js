(function () {
    const root = document.documentElement;
    const saved = localStorage.getItem('zyglox-theme') || 'dark';

    function setTheme(next) {
        root.dataset.theme = next;
        localStorage.setItem('zyglox-theme', next);

        document.querySelectorAll('.theme-switch-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.themeSet === next);
        });
    }

    setTheme(saved);

    document.querySelectorAll('.theme-switch-btn').forEach(btn => {
        btn.addEventListener('click', () => setTheme(btn.dataset.themeSet));
    });
})();
