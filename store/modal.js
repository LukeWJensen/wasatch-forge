export const state = () => ({
    active: false,
    subscribeActive: false,
})

export const mutations = {
    setActive (state, bool) {
        state.active = bool
    },
    setSubscribeActive (state, bool) {
        state.subscribeActive = bool
    }
}

export const actions = {
    clearModal ({ state, commit }) {
        commit('setActive', false)
        commit('setSubscribeActive', false)
    }
}
