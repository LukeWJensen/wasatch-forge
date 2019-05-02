<template>
    <div class="page-book-lessons">
        <Hero heading="Book Lessons" align="left">
            <BackgroundImage
                :img-src="heroImgSrc"
                :tint="true"
                align="top"
            />
        </Hero>
        <div class="container">
            <div class="page-content">
                <div class="acuity-scheduler">
                    <iframe
                        src="https://app.acuityscheduling.com/schedule.php?owner=13188978"
                        width="100%"
                        height="800"
                        frameBorder="0"
                    />
                    <script src="https://d3gxy7nm8y4yjr.cloudfront.net/js/embed.js" type="text/javascript"/>
                </div>
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

    .acuity-scheduler {
        max-width : 840px;
        margin    : 0 auto;
    }
</style>
