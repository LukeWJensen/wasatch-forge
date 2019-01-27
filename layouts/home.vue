<template>
    <div id="app">
        <div class="page-container">
            <Header/>
            <NavDrawer v-if="deviceLargeUp"/>
            <div class="main-content">
                <nuxt/>
            </div>
            <Modal/>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import LayoutsMixin from '~/mixins/LayoutsMixin'
    import NavDrawer from '~/components/nav/NavDrawer'
    import Header from '~/components/Header'
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
        min-height: 100vh;
    }

    .main-content {}
</style>
