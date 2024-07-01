import { defineStore } from 'pinia'

export const useStyleStore = defineStore('style', {
  state: () => ({
    style: 'style-roundabout'
  }),
  actions: {
    setStyle(style: string) {
      this.style = style
    }
  }
})
