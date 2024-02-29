<script setup lang="ts">
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

const $theme = useTheme()
const toggle = () => {
  $theme.toggleTheme()
}
const setLigth = () => {
  $theme.setLightTheme()
}
const setDark = () => {
  $theme.setDarkTheme()
}
</script>

<template>
  <div class="w-full mt-4">
    <div class="text-center  text-lg font-semibold">
      Themes
    </div>
    <div class="rounded-xl  bg-green-400 dark:bg-green-500 px-4 py-4 mt-2 flex gap-2 flex-col">
      <Button  severity="secondary" @click="toggle" class="w-full flex justify-center">
        <font-awesome-icon v-if="$theme.isDarkLayout.value" :icon="['fas', 'moon']" class="h-4 mr-2" />
        <font-awesome-icon v-else :icon="['fas', 'sun']" class="h-4 mr-2" />
        Toggle
      </Button>
      <Button severity="secondary" @click="setLigth" class="w-full dark:opacity-40 opacity-100">
        <font-awesome-icon :icon="['fas', 'sun']" class="h-4 mr-2" />
        Light Mode
      </Button>
      <Button severity="secondary" @click="setDark" class="w-full opacity-40 dark:opacity-100">
        <font-awesome-icon :icon="['fas', 'moon']" class="h-4 mr-2" />
        Dark Mode
      </Button>
      <div class="p-2 text-center text-xs">
        <b>Current Theme: {{ $theme.isDarkLayout.value ? 'Dark Mode' : 'Light Mode' }}</b><br /><br />

        Themes supported for PrimeVue and Tailwind!
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>