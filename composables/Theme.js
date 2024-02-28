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

    toggleTheme: () => {
        if ($pv == null) return;

        let otherTheme = themes[(currentTheme.value-1)*-1];
        $pv.changeTheme(themes[currentTheme.value], otherTheme, 'theme-link', () => {});
        if (otherTheme.indexOf('dark') == -1){
            document.documentElement.classList.add('light');
            document.documentElement.classList.remove('dark');
        } else {
            document.documentElement.classList.remove('light');
            document.documentElement.classList.add('dark');
        }

        (currentTheme.value + 1 == 1) ? currentTheme.value = 1 : currentTheme.value = 0;
    }
}



export const useTheme = () => theme;