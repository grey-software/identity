<script setup lang="ts">
const colorModes = ["system", "light", "dark"];
const colorMode = useColorMode();
let colorModeIndex = colorModes.findIndex((mode) => mode == colorMode.preference);
const toggleColorMode = () => {
  console.log(colorMode.preference);
  colorModeIndex = (colorModeIndex + 1) % 3;
  colorMode.preference = colorModes[colorModeIndex];
  console.log(colorMode.preference);
};
</script>

<template>
  <div id="color-mode-toggle" @click="toggleColorMode">
    <Icon
      v-if="colorMode.preference == 'system'"
      name="ph:monitor"
      size="24px"
    />
    <Icon
      v-else-if="colorMode.preference == 'light'"
      name="ph:sun"
      size="24px"
    />
    <Icon
      v-else-if="colorMode.preference == 'dark'"
      name="charm:moon"
      size="24px"
    />
  </div>
</template>

<style>
#color-mode-toggle:hover {
  cursor: pointer;
}
</style>
