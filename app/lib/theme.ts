export function initTheme(defaultDark = true) {
    if (typeof window === 'undefined') return;
    const html = document.documentElement;
    const stored = localStorage.getItem('theme');
    if (stored) {
        if (stored === 'dark') html.classList.remove('light');
        else html.classList.add('light');
    } else {
        if (defaultDark) html.classList.remove('light');
        else html.classList.add('light');
    }
}
export function toggleTheme() {
    const html = document.documentElement;
    if (html.classList.contains('light')) {
        html.classList.remove('light');
        localStorage.setItem('theme', 'dark');
    } else {
        html.classList.add('light');
        localStorage.setItem('theme', 'light');
    }
}