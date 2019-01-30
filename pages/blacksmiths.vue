<template>
    <div class="page-book-lessons">
        <Hero heading="The Blacksmiths" align="left">
            <BackgroundImage :img-src="heroImgSrc" :tint="false"/>
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
                return require('~/assets/images/hero/forge.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';
</style>
