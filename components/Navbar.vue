<script setup></script>

<template>
  <nav>
    <NuxtLink to="/">
      <img
        class="logo"
        :src="$colorMode.value == 'light' ? '/logo.png' : 'logo-dark.png'"
        alt=""
      />
    </NuxtLink>
    <div class="nav-ctas">
      <NuxtLink to="mailto:org@grey.software"
        ><Icon name="ic:outline-email" />
      </NuxtLink>
      <NuxtLink to="https://api.whatsapp.com/send?phone=%2B923139288208"
        ><Icon name="ic:baseline-whatsapp" />
      </NuxtLink>
      <ColorModeToggle />
    </div>
  </nav>
</template>

<style scoped>
nav {
  @apply flex flex-row justify-between items-center px-[24px];
  @apply tab-pt:px-[32px];
  @apply pc-sm:px-[48px];
  background-color: var(--primary);
}

.logo {
  @apply h-[28px];
  @apply mob-lg:h-[32px];
  @apply tab-pt:h-[42px];
  @apply pc-lg:h-[48px];
  @apply short:h-[28px];
}

.nav-ctas {
  @apply flex items-center justify-end gap-3;
  @apply tab-pt:gap-6;
  @apply tab-ls:gap-8;
  @apply pc-sm:gap-10;
}

.icon {
  @apply h-[28px] w-[28px];
  @apply mob-lg:h-[32px] mob-lg:w-[32px];
  @apply tab-pt:h-[42px] tab-pt:w-[42px];
  @apply tab-ls:h-[38px] tab-ls:w-[38px];
  @apply pc-sm:h-[42px] pc-sm:w-[42px];
  @apply short:h-[28px] short:w-[28px];
}
</style>
