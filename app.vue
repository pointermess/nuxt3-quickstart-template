<template>
  <div class="p-16 w-full flex justify-center items-center flex-col gap-8">
IsDarkMode {{ $theme.isDarkLayout }}

    <DemoHeader />

    <DemoPrimeVue />
  </div>
</template>
<script setup>
const $pv = usePrimeVue();
const $theme = useTheme();
let currentTheme = 0;
let themes = [
    'timetracker-dark',
    'timetracker-light'
]

useHead({
  link: [
    {
      rel: 'stylesheet',
      id: 'theme-link',
      href: '/themes/timetracker-dark/theme.css',
    }
  ]
})


onMounted(() => {
  useTheme().initPrimeVue($pv);
})

</script>
<style lang="scss">
body{
  @apply bg-white dark:bg-red-200;
}
</style>