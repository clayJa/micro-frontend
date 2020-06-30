/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/**
 * 用户信息模块的vuex
 */

const state = {
  userInfo: {}
}

const getters = {
  userInfo: state => state.userInfo
}

const types = {
  SET_USER_INFO: 'SET_USER_INFO'
}

const mutations = {
  // 用户基本信息
  [types.SET_USER_INFO] (state, val) {
    state.userInfo = val
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
