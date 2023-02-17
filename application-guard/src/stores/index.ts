import { defineStore } from 'pinia'
import state from '@/stores/state'
import getters from '@/stores/getters'

export const useStore = defineStore('application-guard', {
  state,
  actions: {},
  getters,
})
