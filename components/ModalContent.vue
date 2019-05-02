<template>
    <transition name="fade">
        <div v-show="$store.state.modal.active && !$store.state.nav.drawerOpen" class="modal-content fixed-center">
            <slot/>
        </div>
    </transition>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
.modal-content {
    position : fixed;
    z-index  : 6;
}
</style>
