<template>
    <div class="page-book-lessons">
        <Hero heading="Products" align="left">
            <BackgroundImage :img-src="heroImgSrc" :tint="true"/>
        </Hero>
        <div class="container">
            <div class="page-content">

                <p class="callout">Our online store is a work in progress, so please check back for updates or visit our
                    <nuxt-link to="/contact">
                        <InlineLink text="contact page"/>
                    </nuxt-link>
                    for ways to stay informed. If you'd like to place an order, please <a target="_blank" href="mailto:wasatchforge@gmail.com">
                        <InlineLink text="send us an email"/>
                    </a> with a description of your desired purchase and we will get in touch with you as quickly as possible!
                </p>

                <div class="product-row row">

                    <div class="product-col col-12 col-md-6 d-flex flex-column">
                        <div class="product-img">
                            <img :src="require('~/assets/images/products/knives.jpg')">
                        </div>
                        <div class="product-desc">
                            <h2>Knives</h2>
                            <p>Hand-crafted blades are quickly becoming our favorite thing. We make everything from kitchen cutlery to heavy duty
                                off-the-grid survival knives to elegant damascus blades.</p>
                            <button class="cta cta--highlight">
                                <a target="_blank" href="mailto:wasatchforge@gmail.com">Email Us</a>
                            </button>
                        </div>
                    </div>

                    <div class="product-col col-12 col-md-6 d-flex flex-column">
                        <div class="product-img">
                            <img :src="require('~/assets/images/products/bottle_openers.jpg')">
                        </div>
                        <div class="product-desc">
                            <h2>Hooks & Tools</h2>
                            <p>One of our staples that has kept us fed for a long time is our ornamental household hardware. These include J hooks, S
                                hooks, bottle openers, coat racks, small shelving and more.</p>
                            <button class="cta cta--highlight">
                                <a target="_blank" href="mailto:wasatchforge@gmail.com">Email Us</a>
                            </button>
                        </div>
                    </div>

                </div>
                <div class="product-row row">

                    <div class="product-col col-12 col-md-6 d-flex flex-column">
                        <div class="product-img">
                            <img :src="require('~/assets/images/products/tongs.jpg')">
                        </div>
                        <div class="product-desc">
                            <h2>Campfire cookware</h2>
                            <p>Spatulas, steak turners, hand-forged bbq tongs... We make everything you need to cook outdoors in style.</p>
                            <button class="cta cta--highlight">
                                <a target="_blank" href="mailto:wasatchforge@gmail.com">Email Us</a>
                            </button>
                        </div>
                    </div>

                    <div class="product-col col-12 col-md-6 d-flex flex-column">
                        <div class="product-img">
                            <img :src="require('~/assets/images/products/lessons.jpg')">
                        </div>
                        <div class="product-desc">
                            <h2>Lessons</h2>
                            <p>By far our favorite thing to create is blacksmiths. Whether you are a seasoned craftsman or just curious, we are here
                                to
                                teach you the skills you need to succeed.</p>
                            <nuxt-link class="cta cta--highlight" to="/book-lessons">Book Lessons</nuxt-link>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/Hero'
    import InlineLink from '~/components/InlineLink'
    import BackgroundImage from '~/components/BackgroundImage'

    export default {
        components: { Hero, BackgroundImage, InlineLink },
        data () {
            return {}
        },
        computed: {
            heroImgSrc () {
                return require('~/assets/images/hero/hooks.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .product-row {
        @include screen-md-lg-xl {
            margin-bottom : 6rem;
        }

        &:last-of-type {

            .product-col {

                &:last-of-type {
                    margin-bottom : 0;
                }
            }
        }
    }

    .product-col {
        margin-bottom: 6rem;

        @include screen-md-lg-xl {
            margin-bottom: 0;
        }
    }

    .product-img {
        overflow   : hidden;
        margin     : 0 0 1.2rem 0;
        max-height : 20rem;

        @include screen-md-lg-xl {
            max-height : 26rem;
        }

        img {
            width : 100%;

            @supports (object-fit: cover) {
                height          : 26rem;
                object-fit      : cover;
                object-position : center;
            }
        }
    }
</style>
