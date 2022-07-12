<script setup>
import NavbarLink from './Navbar/Link.vue';
</script>

<template>
    <div class="navbar">
        <div class="navbar--logo-container">
            <img class="navbar--logo" src="../assets/logo.png" />
        </div>
        <div class="navbar--content">
            <div class="navbar--content-navigation">
                <slot></slot>
            </div>
            <div class="navbar--content-socials">
                <NavbarLink url="https://discord.gg/YqnZHF5yF4" icon="fa-brands fa-discord" />
                <NavbarLink url="https://github.com/amatsukaze-ml?type=source" icon="fa-brands fa-github" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="less">
.navbar {
    display: flex;
    position: sticky;
    top: 0;
    background: linear-gradient(91.98deg, #5500FF 0%, #4000FF 6.65%);
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.06);

    &--logo {
        width: 100%;
        height: 100%;

        &-container {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;

            max-width: 64px;
            max-height: 64px;
        }
    }

    &--content {
        display: flex;
        flex: 1;
        background: white;
        margin-left: 16px;
        margin-right: -16px;
        margin-bottom: 2px;
        border-radius: 0 0 0 10px;
        transform: skewX(-10deg);

        // normalize children's skew.
        & > * {
            transform: skewX(10deg);
        }

        &-navigation {
            display: flex;
            flex-direction: row;
            flex: 1;
            gap: 4px;
            margin-left: 8px;
            margin-top: 2px;
        }

        &-socials {
            display: flex;
            gap: 8px;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            margin-right: 16px;
            padding-right: 24px;
        }
    }
}
</style>