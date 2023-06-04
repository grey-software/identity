<script setup lang="ts"></script>

<template>
  <header class="hero">
    <h1 class="hero-title text-left tab-pt:text-center">
      Bootcamps <br class="block tab-pt:hidden" />
      <span class="text-accent"> & Universities</span>
      <br class="hidden tab-pt:block"/>
      Can't Teach You  <br class="hidden mob-lg:block" />
      Everything!
    </h1>
    <!-- <div class="cta-container">
      <ButtonPrimary link="https://resources.grey.software" text="Resources" />
      <ButtonSecondary link="https://linkedin.com/in/arsalabangash" text="Mentorship" />
    </div> -->
  </header>
</template>

<style scoped>
.hero {
  @apply w-full px-[18px] pt-[32px];
  @apply mob-lg:pt-[48px];
  @apply tab-pt:px-[32px] tab-pt:pt-[108px];
  @apply tab-ls:pt-[100px];
  @apply pc-sm:pt-[96px];
  @apply short:pt-[32px];
}

.hero-title {
  @apply pb-[42px] text-[42px] leading-[56px] tracking-[0.005em] font-extrabold text-black dark:text-white;
  @apply mob-lg:pb-[42px] mob-lg:text-[48px] mob-lg:leading-[66px] mob-lg:tracking-[0.01em];
  @apply tab-pt:text-[56px] tab-pt:leading-[64px];
  @apply tab-ls:text-[64px] tab-ls:leading-[78px] tab-ls:tracking-[0.02em];
  @apply pc-sm:text-[78px] pc-sm:leading-[82px];
  @apply pc-lg:text-[96px] pc-lg:leading-[100px];
  @apply short:text-[32px] short:leading-[40px] short:pb-[24px];
}
.cta-container {
  @apply grid gap-[16px] w-full m-0;
  @apply tab-pt:flex tab-pt:items-center tab-pt:justify-evenly tab-pt:max-w-[494px] tab-pt:m-auto;
  @apply short:gap-[0px] short:max-w-[408px];
}
</style>
