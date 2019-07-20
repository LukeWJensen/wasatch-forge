<template>
    <div class="page-book-lessons page">
        <Hero heading="Book Lessons" align="left"/>
        <div class="page-content">
            <div class="container">
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
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .acuity-scheduler {
        max-width : 840px;
        margin : 4rem auto;

        @include screen-lg-xl {
            margin : 8rem auto;
        }
    }
</style>
