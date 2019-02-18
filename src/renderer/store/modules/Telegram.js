import { STATUS } from '../../../main/telegram'

const state = {
  phone: null,
  state: STATUS.NONE,
  additional: null
}

const mutations = {
  UPDATE_PHONE(state, phone) {
    state.phone = phone
  },
  UPDATE_CODE(state, code) {
    state.code = code
  },
  UPDATE_STATE(state, { phoneState, payload }) {
    state.state = phoneState
    state.additional = payload
  }
}

const actions = {
  registerPhone({ commit }, { phone }) {
    commit('UPDATE_PHONE', phone)
  },
  saveCode({ commit }, { code }) {
    commit('UPDATE_CODE', code)
  },
  updateState({ commit }, { state, payload }) {
    commit('UPDATE_STATE', { phoneState: state, payload })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}

