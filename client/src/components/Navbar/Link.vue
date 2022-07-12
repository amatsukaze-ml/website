<script setup>
defineProps({
    url: String,
    icon: String
});
</script>

<template>
   <a :href=url target="_blank" class="link">
     <fa :icon=icon />
   </a>
</template>

<style scoped lang="less">
.link {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 48px;
    width: 48px;
    font-size: 24px;
    border-radius: 10px;
    background: hsla(255, 100%, 50%, 1);
    transform: skewX(-10deg);
    color: white;
    transition: background 0.25s ease-in-out;

    & > * {
        transform: skewX(10deg);
    }

    &:hover {
        background: hsla(255, 100%, 60%, 1);
    }
}
</style>