export const state = () => ({
    drawerOpen: false
})

export const mutations = {
    setDrawerOpen (state, bool) {
        state.drawerOpen = bool
    }
}

export const actions = {
    setDrawerOpen ({ state, commit }, bool) {
        commit('setDrawerOpen', bool)
        commit('modal/setActive', bool, {root: true})
    }
}
