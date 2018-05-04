import Vue from 'vue'
import Vuex from "vuex"
import mutations from './mutations'

Vue.use(Vuex)

const state = {
  dialog1_show: false,
  dialog2_show: false,
}
export default new Vuex.Store({
  state,
  mutations,
})
