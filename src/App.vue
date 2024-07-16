<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

</script>

<template>
  <header>
    <Navbar></Navbar>
  </header>
  <main>
    <RouterView />
  </main>
  <Footer></Footer>

</template>

<style lang="scss" scoped>
main {
  width: 100% !important;
  max-width: 1220px;
  margin: 0 auto !important;
  min-height: calc(100vh - 113px);
}
</style>
