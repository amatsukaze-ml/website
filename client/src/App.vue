<script setup>
import Navbar from './components/Navbar.vue';
import NavbarRoute from './components/Navbar/Route.vue';
</script>

<template>
  <Navbar>
    <NavbarRoute name="Home" icon="fa-solid fa-house" url="/" />
    <NavbarRoute name="About" icon="fa-solid fa-house" url="/about" />
    <NavbarRoute name="Mods" icon="fa-solid fa-gear" url="/mods" />
    <NavbarRoute name="Manual" icon="fa-solid fa-book-open" url="/manual" />
  </Navbar>
  <div class="view">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
@import "./utilities/reset.less";

body, html {
  height: 100%;
}

#app {
  font-family: "Karla", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  height: 100%;
}

.view {
  width: 100%;
  height: calc(100% - 57.8px);
}

h1 {
  font-family: "Krona One", Helvetica, Arial, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}
</style>
