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
  <router-view></router-view>
</template>

<style lang="less">
@import "./utilities/reset.less";

#app {
    font-family: "Karla", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
}

h1 {
    font-family: "Krona One", Helvetica, Arial, sans-serif;
}

a {
    color: inherit;
    text-decoration: none;
}
</style>
