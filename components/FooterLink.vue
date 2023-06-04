<script setup>
const props = defineProps(["text", "link", "icon"]);
</script>

<template>
  <NuxtLink target="_blank" :to="link" class="footer-link"
    ><Icon :name="icon"/>
  </NuxtLink>
</template>

<style>
.footer-link {
  color: var(--brand-grey);
  transition: all 0.3s ease-out;
}

.footer-link:hover {
  color: var(--brand-blue);
}
</style>
