let currentTheme = ref(0);
let themes = [
    'timetracker-dark',
    'timetracker-light'
]
let $pv = null;

let theme = {
    initPrimeVue(primeVue) {
        $pv = primeVue;
    },

    isDarkLayout: computed(() => currentTheme.value == 0),

    setDarkTheme: () => {
        if ($pv == null) return;
        $pv.changeTheme(themes[1], themes[0], 'theme-link', () => {});
        document.documentElement.classList.remove('light');
        document.documentElement.classList.add('dark');
        currentTheme.value = 0;
        localStorage.setItem('preferred-theme', 'light');
    },

    setLightTheme: () => {
        if ($pv == null) return;

        $pv.changeTheme(themes[0], themes[1], 'theme-link', () => {});
        document.documentElement.classList.add('light');
        document.documentElement.classList.remove('dark');
        currentTheme.value = 1;
        localStorage.setItem('preferred-theme', 'dark');
    },


    toggleTheme: () => {
        if (currentTheme == 0)
            theme.setLightTheme();
        else
            theme.setDarkTheme();
    }
}



export const useTheme = () => theme;