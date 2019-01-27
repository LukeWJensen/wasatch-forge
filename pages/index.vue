<template>
    <div class="home">
        <div class="hero">
            <BackgroundVideo :poster-src="posterSrc" :vid-src="vidSrc"/>
        </div>
    </div>
</template>

<script>
    import BackgroundVideo from '~/components/BackgroundVideo'

    export default {
        layout: 'home',
        components: {
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

    .hero {
        position: relative;
        height: calc(100vh - #{$header-height});
    }
</style>
