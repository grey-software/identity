<script setup></script>
<template>
  <Navbar class="navbar" />
  <NuxtPage class="page" />
  <Footer class="footer" />
</template>

<style>
.navbar {
  @apply h-14vh;
  @apply short:h-[18vh];
}

.page {
  @apply h-[80vh];
  @apply tab-ls:h-[78vh];
  @apply short:h-[70vh];
}
.footer {
  @apply h-[6vh];
  @apply short:h-[12vh];
}
</style>
