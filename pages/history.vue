<template>
    <div class="page-book-lessons">
        <Hero heading="Our History" align="left">
            <BackgroundImage :img-src="heroImgSrc" :tint="false"/>
        </Hero>
        <div class="container">
            <div class="page-content">
                <section class="col-10 offset-1">
                    <p>
                        Wasatch Forge was started by two good friends with a common passion: bringing steel to life using fire as a tool.
                        Matt and Mike have sought since the beginning to share their passion with others &mdash; through the craftsmanship of their wares, the hospitality of their shop, and by sharing their knowledge with anyone and everyone.
                    </p>
                </section>
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
                return require('~/assets/images/hero/working.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';
</style>
