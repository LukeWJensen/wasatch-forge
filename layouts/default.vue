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
        mixins: [LayoutsMixin]
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-container {
        background : $color-off-white;
        min-height : 100vh;
    }

    .page-content {
        background  : $color-off-white;
        font-size   : 1.8rem;
        line-height : 1.6;
        margin      : 8rem auto;
        position    : relative;
        z-index     : 1;

        section {
            columns     : 300px 2;
            column-gap  : 6rem;
        }

        p {
            margin: 0 0 2.4rem 0;
        }
    }
</style>
