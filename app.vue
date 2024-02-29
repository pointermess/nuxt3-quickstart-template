<template>
  <div class="p-16 flex flex-col justify-center items-center">
    <div class="text-center text-2xl">
      <font-awesome-icon :icon="['fas', 'home']" style="height:1em; margin-right:0.4em;" />
      <b>Nuxt3</b> template
    </div>

    <div class="w-1/2 rounded-lg bg-green-300 dark:bg-green-600 px-4 py-2 mt-4 text-xs flex justify-center items-center text-center">
      <div class="flex-1">SCSS</div>
      <div class="flex-1">Tailwind</div>
      <div class="flex-1">Font-Awesome</div>
      <div class="flex-1">PrimeVue</div>
      <div class="flex-1">Full theme-ing</div>
      <div class="flex-1"><i>Tauri Ready</i></div>
    </div>

    <div class="grid grid-cols-2 gap-2 w-1/2">
      <DemoPrimeVue />
      <DemoThemes />
    </div>
  </div>
</template>
<script setup>
const $pv = usePrimeVue();

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
  @apply bg-gray-200 dark:bg-gray-900;
}
</style>