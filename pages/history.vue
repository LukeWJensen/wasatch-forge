<template>
    <div class="page-our-history page">
        <Hero heading="Our History" align="left"/>
        <div class="page-content">
            <div class="container">
                <section class="col-12 col-lg-10 offset-lg-1">
                    <p class="callout">Wasatch Forge was started by four friends who wanted to get out of the shops on the sides of their houses and
                        into a communal&nbsp;workspace.</p>
                    <div class="text-two-col">
                        <p>Mike Miller-Imperiale, Matt Danielson, Victor Correa, and Preston Robertson realized this dream in 2012 when they secured
                            an office and shop space in Walton Park in Salt Lake city, Utah. After Victor and Preston moved on to other pursuits, Mike
                            and Matt continued growing Wasatch Forge through community outreach and lots of hard work.</p>
                        <p>During the winter of 2016, Mike decided to pursue his passion of ski instruction at Alta Ski Resort. Matt now runs the shop
                            with Walter Enoch Elieson and a couple of dedicated apprentices, Steven Moon and Brenden Cochran. The shop focuses on
                            teaching new blacksmiths and
                            spreading the passion for the craft.</p>
                    </div>
                    <img :src="require('~/assets/images/history/matt_and_mike_wide.jpg')" class="history-img">
                    <div class="text-two-col">
                        <p>The University of Utah sought out Wasatch Forge in 2014, hoping that the forge could offer classes to interested students
                            through their Continuing Education Program.</p>
                        <p>Education remains at the core of Wasatch Forge today, but its staff has also been hard at work developing lines of commonly
                            requested items, especially knives. To learn more, check out our
                            <nuxt-link to="/products">
                                <InlineLink text="products page"/>
                            </nuxt-link>
                            .
                        </p>
                    </div>
                    <div class="text-center history-subscribe-wrap">
                        <button class="cta cta--highlight" @click="activateModal">Subscribe To Our Newsletter</button>
                    </div>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/Hero'
    import BackgroundImage from '~/components/BackgroundImage'
    import InlineLink from '~/components/InlineLink'

    export default {
        components: { Hero, BackgroundImage, InlineLink },
        data () {
            return {
                modalActive: false
            }
        },
        methods: {
            activateModal () {
                this.$store.commit('modal/setActive', true)
                this.$store.commit('modal/setSubscribeActive', true)
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-our-history {

        .background-image-img {

            @include screen-md {
                top : -215%;
            }

            @include screen-lg {
                top : -135%;
            }

            @include screen-xl {
                top : -75%;
            }
        }
    }

    .history-img {
        margin : 1.2rem auto 2.8rem auto;
        width  : 100%;

        @include screen-md-lg-xl {
            margin : 5.2rem auto 6rem auto;
        }
    }

    .history-subscribe-wrap {
        margin : 4rem 0 5rem 0;

        @include screen-md-lg-xl {
            margin : 4rem 0 8rem 0;
        }
    }
</style>
