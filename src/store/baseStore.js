import { defineStore } from 'pinia'

export const useBaseStore = defineStore('baseStore', {
  state: () => {
    return {
      HelloWord: '你好，世界！',
    }
  },
  actions: {},
  getters: {},
  // persist: {},
})
