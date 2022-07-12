<script setup>
defineProps({
  name: String,
  url: String,
  icon: String
});
</script>

<template>
  <router-link :to=url class="route">
    <div class="route--icon">
      <fa :icon=icon />
    </div>
    <div class="route--name">
      {{ name }}
    </div>
  </router-link>
</template>

<style scoped lang="less">
.route {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 8px;
  align-items: center;
  padding: 0px 12px;
  margin-bottom: -1px;
  border-radius: 10px 10px 0 0;
  font-size: 16px;

  transform: skewX(-10deg);

  & > * {
    transform: skewX(10deg);
  }

  &:hover {
    background: hsla(255, 100%, 50%, 1);
    color: white;
    font-weight: 700;
  }
}

.selected {
  background: hsla(255, 100%, 50%, 1);
  color: white;
  font-weight: 700;
}
</style>