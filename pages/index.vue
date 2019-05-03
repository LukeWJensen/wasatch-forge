<template>
    <div class="home">
        <Hero heading="Wasatch Forge">
            <BackgroundVideo
                :key="vidBreakpoint"
                :mobile-vid-src="require('~/assets/video/home_mobile.mp4')"
                :poster-src="require('~/assets/images/vid_posters/home_full.jpg')"
                :vid-src="require('~/assets/video/home_full.mp4')"
            />
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
            vidBreakpoint () {
                return this.$store.state.size.deviceSize === 'xs' ||
                    this.$store.state.size.deviceSize === 'sm'
                    ? 'mobile'
                    : 'desktop'
            }
        }
    }
</script>
