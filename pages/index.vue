<template>
    <div class="home">
        <Hero heading="Wasatch Forge">
            <BackgroundVideo :poster-src="posterSrc" :vid-src="vidSrc"/>
        </Hero>
    </div>
</template>

<script>
    import Hero from '~/components/Hero'
    import BackgroundVideo from '~/components/BackgroundVideo'

    export default {
        layout: 'home',
        components: {
            Hero,
            BackgroundVideo
        },
        computed: {
            posterSrc () {
                return require('~/assets/images/vid_posters/home_full.jpg')
            },
            vidSrc () {
                return require('~/assets/video/home_full.mp4')
            },
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/the-goods";
</style>
