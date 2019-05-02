<template>
    <div id="app">
        <div class="page-container">
            <Header/>
            <NavDrawer v-if="deviceLargeUp"/>
            <nuxt/>
            <ModalBg/>
            <Footer/>
        </div>
    </div>
</template>

<script>
    import LayoutsMixin from '~/mixins/LayoutsMixin'
    import Header from '~/components/Header'
    import NavDrawer from '~/components/nav/NavDrawer'
    import Footer from '~/components/Footer'
    import ModalBg from '~/components/ModalBg'

    export default {
        components: { Header, NavDrawer, Footer, ModalBg },
        mixins: [LayoutsMixin]
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-container {
        background : $color-off-white;
        min-height : 100vh;

        @include screen-xs-sm {
            margin-top : $header-height-mobile;
        }
    }

    .page-content {
        background     : $color-off-white;
        font-size      : 1.8rem;
        line-height    : 1.5;
        letter-spacing : 0.02em;
        margin         : 4rem auto;
        position       : relative;
        z-index        : 1;

        @include screen-md-lg-xl {
            margin : 8rem auto;
        }

        p:not(.callout),
        ul {
            margin : 0 0 2.4rem 0;
        }
    }
</style>
