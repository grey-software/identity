<script setup>
const props = defineProps(["text", "link"]);
</script>

<template>
  <a href="#"
    ><span>Sign In</span>
</a>
</template>


<style scoped>
a {
  @apply text-center m-0 py-[14px] bg-white text-black rounded-[8px] border-black border-[1px];
  @apply dark:text-white dark:bg-black dark:border-white;
  @apply tab-pt:px-[32px];
  @apply pc-sm:px-[36px] pc-sm:py-[20px] pc-sm:rounded-[8px];
  @apply short:px-[24px] short:py-[8px];
  transition: all 0.3s ease-out;
}

span {
  @apply w-max text-[22px] leading-[34px] font-medium tracking-normal;
  @apply tab-pt:text-[24px];
  @apply pc-sm:text-[28px];
  @apply short:text-[22px];
}

a:hover {
  @apply bg-black text-white;
  @apply dark:bg-white dark:text-black;
}
</style>
