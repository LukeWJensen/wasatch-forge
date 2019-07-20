<template>
    <div id="app">
        <div class="page-container">
            <Header/>
            <BackgroundImage
                v-if="this.$route.name !== 'index'"
                :img-src="heroImgSrc"
                :tint="useTint"
            />
            <div class="bg-img-mask"/>
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
    import BackgroundImage from '~/components/BackgroundImage'
    import NavDrawer from '~/components/nav/NavDrawer'
    import Footer from '~/components/Footer'
    import ModalBg from '~/components/ModalBg'

    export default {
        components: { Header, BackgroundImage, NavDrawer, Footer, ModalBg },
        mixins: [LayoutsMixin],
        computed: {
            heroImgSrc () {
                return require(`~/assets/images/hero/${this.$route.name}.jpg`)
            },
            useTint () {
                return this.$route.name !== 'history'
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-container {
        background                 : $color-off-white;
        height                     : 100vh;
        overflow-x                 : hidden;
        overflow-y                 : auto;
        position                   : relative;
        perspective                : 1px;

        body.ios & {
            height : auto;
        }
    }

    .page-content {
        background     : $color-off-white;
        font-size      : 1.8rem;
        line-height    : 1.5;
        letter-spacing : 0.02em;
        margin         : 0 auto;
        padding        : 4rem 0;
        position       : relative;
        z-index        : 3;

        @include screen-xs-sm {
            padding : 0.1rem 1.5rem;
        }

        @include screen-md-lg-xl {
            padding : 0.1rem 0;
        }

        p:not(.callout),
        ul {
            margin : 0 0 1.8rem 0;

            @include screen-md-lg-xl {
                margin : 0 0 2.4rem 0;
            }
        }
    }

    .bg-img-mask {
        background-color: $color-off-white;
        height: 80vh;
        position: absolute;
        top : calc(#{$header-height-mobile} + 52vw);
        width: 100%;
        z-index: 2;

        @include screen-sm {
            top : calc(#{$header-height-mobile} + 44vw);
        }

        @include screen-md-lg {
            top : calc(#{$header-height-desk} + 44vw);
        }

        @include screen-xl {
            top : calc(#{$header-height-desk} + 36vw);
        }
    }
</style>
