import { defineStore } from 'pinia';
import { ref } from 'vue';
import { requestData } from '@/api/request';

export const useDataStore = defineStore('dataStore', () => {
  const data = ref([]);
  const loader = ref(false);

  const getData = async (searchQuery) => {
    loader.value = true;
    const response = await requestData(searchQuery);
    const result = await response.json();
    data.value = result;
    loader.value = false;
  };

  return {
    data,
    getData,
    loader,
  };
});
