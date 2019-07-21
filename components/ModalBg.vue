<template>
    <transition name="fade">
        <div
            v-if="$store.state.modal.active"
            class="modal-bg fixed-fill d-flex align-items-center justify-content-center"
            @click="handleModalClick"
        />
    </transition>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        'name': 'ModalBg',
        computed: {
            ...mapState({
                navDrawerOpen: state => state.nav.drawerOpen
            })
        },
        methods: {
            handleModalClick () {
                if (this.navDrawerOpen) {
                    this.$store.dispatch('nav/setDrawerOpen', false)
                } else {
                    this.$store.dispatch('modal/clearModal')
                }
            }
        }
    }
</script>

<style lang="scss">
@import "../assets/scss/the-goods";

.modal-bg {
    background : rgba(0, 0, 0, 0.8);
    z-index    : 6;
}

</style>
