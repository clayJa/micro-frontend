/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/**
 * 用户信息模块的vuex
 */

const state = {
  rxjsState: {}
}

const getters = {
  rxjsState: state => state.rxjsState
}

const types = {
  SET_RXJS_STATE: 'SET_RXJS_STATE'
}

const mutations = {
  // 用户基本信息
  [types.SET_RXJS_STATE] (state, val) {
    state.rxjsState = val
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
