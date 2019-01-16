<template>
    <div class="container">
        <Hero :img-src="heroImgSrc"/>
        <div class="page-content">
            <h2>Stuff goes here</h2>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/Hero'

    export default {
        components: { Hero },
        data () {
            return {}
        },
        computed: {
            heroImgSrc () {
                return require('~/assets/images/hero/shop.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-content {
        margin     : 25vh auto 0 auto;
        position   : relative;
        background : $color-bg-light;
        min-height: 60vh;
        padding    : 5.5rem 10rem;
        z-index    : 1;
    }
</style>
