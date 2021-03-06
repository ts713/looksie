import Vue from 'vue'
import Vuex from 'vuex'

import ShopifyService from '@/services/ShopifyService'

// Modules
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    },
  },
  actions: {
    async getStoreInfoAction({ commit }) {
      ShopifyService.getShopData()
        .then(
          (user => {
            if (user) {
              commit('setUser', user)
            }
          }),
        )
        .catch(
          commit('setUser', {
            id: '999', name: 'tom store', email: 'tom@gmail.com', shopUrl: 'https://shopify.com',
          }),
        )
    },
  },
  getters: {
    getUser(state) {
      return state.user
    },
  },
  modules: {
    app,
    appConfig,
    verticalMenu,
  },
  // strict: process.env.DEV,
})
