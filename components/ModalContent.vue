<template>
    <transition name="fade">
        <div class="modal-content fixed-center">
            <SubscribeForm v-if="$store.state.modal.subscribeActive"/>
        </div>
    </transition>
</template>

<script>
    import SubscribeForm from '~/components/SubscribeForm'
    export default {
        components: { SubscribeForm },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
.modal-content {
    position : fixed;
    z-index  : 7;
}
</style>
