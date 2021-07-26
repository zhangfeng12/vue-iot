/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './store/state.js'
import mutations from './store/mutations.js'
import actions from './store/actions.js'
import * as getters from './store/getters.js'
Vue.use(Vuex);
const store =
  new Vuex.Store({
    state,
    mutations,
    actions,
    getters
  });

export default store