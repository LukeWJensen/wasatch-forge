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
        height : 100vh;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;
        perspective: 1px;
    }

    .page-content {
        background     : $color-off-white;
        font-size      : 1.8rem;
        line-height    : 1.5;
        letter-spacing : 0.02em;
        margin         : 4rem auto;
        position       : relative;
        z-index        : 1;

        @include screen-xs-sm {
            padding: 0 1.5rem;
        }

        @include screen-md-lg-xl {
            margin : 8rem auto;
        }

        p:not(.callout),
        ul {
            margin : 0 0 1.8rem 0;

            @include screen-md-lg-xl {
                margin : 0 0 2.4rem 0;
            }
        }
    }
</style>
