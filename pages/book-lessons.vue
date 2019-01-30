<template>
    <div class="page-book-lessons">
        <Hero heading="Book Lessons" align="left">
            <BackgroundImage :img-src="heroImgSrc" :tint="true"/>
        </Hero>
        <div class="container">
            <div class="page-content">
                <h2>Stuff goes here</h2>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/Hero'
    import BackgroundImage from '~/components/BackgroundImage'

    export default {
        components: { Hero, BackgroundImage },
        data () {
            return {}
        },
        computed: {
            heroImgSrc () {
                return require('~/assets/images/hero/class.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-content {
        margin     : 25vh auto 0 auto;
        position   : relative;
        background : $color-off-white;
        min-height: 60vh;
        padding    : 5.5rem 10rem;
        z-index    : 1;
    }
</style>
