<template>
  <div class="content">
    <my-search
      v-model="searchQuery"
      @input="dataStore.getData(searchQuery)"
      :placeholder="'Set query'"
      class="search"
    />
    <my-loader v-if="dataStore.loader" />
    <div v-else class="list">
      <my-item
        v-for="item in dataStore.data"
        :key="item.place_id"
        :item="item"
        class="list__item"
      />
    </div>
  </div>
</template>

<script setup>
import MySearch from '@/components/MySearch';
import MyItem from '@/components/MyItem';
import MyLoader from '@/components/MyLoader.vue';
import { ref } from 'vue';
import { useDataStore } from '@/store/dataStore';

const searchQuery = ref('');
const dataStore = useDataStore();
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
input {
  border: none;
  outline: none;
}
.search {
  margin-bottom: 30px;
  width: 300px;
}
.list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 20px;
  &__item {
    width: 100%;
    height: 300px;
  }
}
@media (max-width: 768px) {
  .list {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 10px;
  }
}
@media (max-width: 500px) {
  .list {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-gap: 10px;
  }
  .search {
    width: 100%;
  }
}
</style>
