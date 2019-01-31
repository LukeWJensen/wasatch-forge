<template>
    <div class="page-book-lessons">
        <Hero heading="The Blacksmiths" align="left">
            <BackgroundImage :img-src="heroImgSrc" :tint="false"/>
        </Hero>
        <div class="container">
            <div class="page-content">
                <section class="blacksmith-row row">
                    <div class="col-4 blacksmith-img">
                        <BackgroundImage :img-src="mattImgSrc"/>
                    </div>
                    <div class="col-8 blacksmith-bio">
                        <h2 class="blacksmith-name">Matt Danielson</h2>
                        <p>When you close your eyes and picture a blacksmith, you're probably already seeing Matt. He's a bear of a
                        blacksmith who makes our biggest anvil look small.</p>
                        <p>Matt's a sharer. He takes the forge on the road for demonstrations at festivals, conferences, even corporate events. He
                        opens the shop every Tuesday night for basic forging classes. He usually has a handful of apprentices.</p>
                        <p>Matt is also a member of the Society for Creative Anachronism, where he can often be seen towering over people on the
                        field, wearing 80 pounds of armor and swinging a two-handed great sword. Matt is the master of the local SCA blacksmiths
                        guild and quite a few reenactors get their first experience with medieval blacksmithing from Matt.</p>
                    </div>
                </section>
                <section class="blacksmith-row row">
                    <div class="col-8 blacksmith-bio">
                        <h2 class="blacksmith-name">Michael Miller-Imperiale</h2>
                        <p>Mike is a full-time dad and a part-time blacksmith who found smithing when he wanted to fall in love with work that didn't take him away from home as often as his previous career as a wilderness guide. It worked.</p>
                        <p>Smithing fits in nicely with Mike's favorite hobby, drinking beer. He's forged hundreds of bottle openers, ranging from stoicly utilitarian to intricately beautiful. Mike has mastered the art of opening a bottle of beer.</p>
                        <p>Mike teaches half-day and full-day artistic blacksmithing, accepts commissions, designs some of our most beautiful products, and takes the gorgeous product photos on our site.</p>
                    </div>
                    <div class="col-4 blacksmith-img">
                        <BackgroundImage :img-src="mikeImgSrc" align="top"/>
                    </div>
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
                return require('~/assets/images/hero/forge.jpg')
            },
            mattImgSrc () {
                return require('~/assets/images/blacksmiths/matt.jpg')
            },
            mikeImgSrc () {
                return require('~/assets/images/blacksmiths/mike.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .blacksmith-row {
        margin: 0 auto 8rem auto;

        &:nth-child(even) {
            .blacksmith-bio {
                padding : 0 5rem 0 0;
            }
        }
    }

    .blacksmith-img {
        position : relative;
        overflow : hidden;
    }

    .blacksmith-bio {
        padding : 0 0 0 5rem;
    }

    .blacksmith-name {
        line-height : 1;
        margin      : 0 0 2rem 0;
    }
</style>
