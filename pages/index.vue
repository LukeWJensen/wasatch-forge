<template>
    <div class="container">
        <div class="home">
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
</style>
