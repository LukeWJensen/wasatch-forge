export const state = () => ({
    muted: true
})

export const mutations = {
    toggleMuted (state) {
        state.muted = !state.muted
    }
}
