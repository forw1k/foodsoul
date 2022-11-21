<template>
  <div class="item">
    <div class="item__img">
      <img :src="item.icon" class="item__icon" alt="logo" />
    </div>
    <div class="item__description">{{ item.display_name }}</div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
const props = defineProps({
  item: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss">
.item {
  padding: 15px;
  border: 1px solid #ccc;
  &__img {
    margin-bottom: 15px;
  }
}
</style>
