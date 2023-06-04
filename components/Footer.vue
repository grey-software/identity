<script setup>
const footerLinks = [
  {
    text: "Twitter",
    link: "https://twitter.com/grey_software",
    icon: "cib:twitter",
  },
  {
    text: "Instagram",
    link: "https://www.instagram.com/greysoftware/",
    icon: "cib:instagram",
  },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/company/grey-software",
    icon: "cib:linkedin-in",
  },
];
</script>

<template>
  <footer class="footer-links">
    <FooterLink
      v-for="link in footerLinks"
      :key="link.text"
      :text="link.text"
      :link="link.link"
      :icon="link.icon"
    />
  </footer>
</template>

<style>
.footer-links {
  @apply flex justify-between w-full px-[48px] max-w-[500px] mx-auto;
  color: var(--brand-grey);
}

.icon {
  @apply h-[24px] w-[24px];
  @apply mob-lg:h-[32px] mob-lg:w-[32px];
  @apply short:h-[24px] short:w-[24px];
}
</style>