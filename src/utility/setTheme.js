
// Root style CSS properties.
const presets = [
    'bg-primary',
    'bg-secondary',
    'accent-1',
    'accent-2',
    'border',
    'navbar-bg',
    'text-primary',
    'text-primary-2',
    'text-secondary',
    'text-secondary-2'
];


/**
 * @description: Just do a loop through the preset styles (see globals.css) and then
 * change it to the other theme that you want.
 */
export default function setTheme() {
    // if there is no theme, set it to lightmode

    const theme = localStorage.getItem('CURRENT_THEME');
    let newTheme = null;

    if (!theme || theme == 'dark') {
        newTheme = 'lightmode';
        localStorage.setItem("CURRENT_THEME", 'light');
    } else if (theme == 'light') {
        newTheme = 'darkmode';
        localStorage.setItem("CURRENT_THEME", 'dark');
    }

    for(const preset of presets) {
        document.documentElement.style.setProperty(
            '--'+preset,
            getComputedStyle(document.documentElement)
                .getPropertyValue(`--${newTheme}-${preset}`)
        );
    }
}