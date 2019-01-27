<template>
    <transition name="fade">
        <div
            v-if="$store.state.modal.active"
            class="modal-bg fixed-fill"
            @click="handleModalClick"
        />
    </transition>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        'name': 'Modal',
        data () {
            return {}
        },
        computed: {
            ...mapState( {
                navDrawerOpen: state => state.nav.drawerOpen
            } )
        },
        methods: {
            handleModalClick () {
                if ( this.navDrawerOpen) {
                    this.$store.dispatch('nav/setDrawerOpen', false)
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/the-goods";

    .modal-bg {
        background : rgba(0, 0, 0, 0.5);
        z-index    : 2;
    }

</style>
