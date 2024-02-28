<script setup lang="ts">
const $theme = useTheme()
const test = () => {
  $theme.toggleTheme()
}
</script>

<template>
  <div class="w-full mt-4">
    <div class="text-center  text-lg font-semibold">
      Themes
    </div>
    <div class="rounded-xl  bg-green-400 dark:bg-green-500 px-4 py-4 mt-2 flex gap-2 flex-col">
      <Button label="Primary" severity="info" @click="test" class="w-full" />
      <Button label="Primary" severity="secondary" @click="test" class="w-full" />
      <div class="p-2 text-center text-xs">
        <b>Current Theme: {{ $theme.isDarkLayout.value ? 'Dark Mode' : 'Light Mode' }}</b><br /><br />

        Themes supported for PrimeVue and Tailwind!
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>