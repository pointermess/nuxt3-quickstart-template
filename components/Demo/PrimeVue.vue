<script setup>

const $theme = useTheme();
const test = () => {
  $theme.toggleTheme()
}
</script>

<template>
  <div class="w-1/3 rounded-xl bg-green-500 px-4 py-2">
    <div class="pt-4">
      <div class="text-center">Contains:</div>
      <p class="grid grid-cols-2 gap-2">
        <Button label="Primary" @click="test" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
        <Button label="Contrast" severity="contrast" />
      </p>
    </div>
  </div>
</template>

<style scoped>

</style>