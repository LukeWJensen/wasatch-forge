export const state = () => ({
    breakpoints: {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 1024,
        xl: 1300
    },
    deviceSize: 'xs'
})

export const mutations = {
    setDeviceSize (state, deviceSize) {
        state.deviceSize = deviceSize
    }
}
