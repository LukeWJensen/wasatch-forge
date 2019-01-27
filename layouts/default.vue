<template>
    <div id="app">
        <div class="page-container">
            <Header/>
            <NavDrawer v-if="deviceLargeUp"/>
            <nuxt/>
            <Modal/>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import LayoutsMixin from '~/mixins/LayoutsMixin'
    import Header from '~/components/Header'
    import NavDrawer from '~/components/nav/NavDrawer'
    import Footer from '~/components/Footer'
    import Modal from '~/components/Modal'

    export default {
        components: { Header, NavDrawer, Footer, Modal },
        mixins: [ LayoutsMixin ]
    }
</script>

<style lang="scss" scoped>
    @import '../assets/scss/the-goods';

    .page-container {
        background : $color-bg-mid;
        min-height : 100vh;
    }
</style>
