<template>
    <div class="page-blacksmiths">
        <Hero heading="The Blacksmiths" align="left">
            <BackgroundImage
                :img-src="heroImgSrc"
                :tint="true"
                align="right"
            />
        </Hero>
        <div class="container">
            <div class="page-content">

                <section class="blacksmith-row row">
                    <div class="col-12 col-md-4 blacksmith-img d-flex flex-column justify-content-center">
                        <img :src="require('~/assets/images/blacksmiths/matt.jpg')">
                    </div>
                    <div class="col-12 col-md-8 blacksmith-bio d-flex flex-column justify-content-center">
                        <h2 class="blacksmith-name">Matt Danielson</h2>
                        <div class="text-two-col">
                            <p>When you close your eyes and picture a blacksmith, you're probably already seeing Matt. He's a bear of a blacksmith who makes our biggest anvil look small.</p>
                            <p>Matt's a sharer. He takes the forge on the road for demonstrations at festivals, conferences, even corporate events. He usually has a handful of apprentices.</p>
                            <p>Matt apprenticed at a traditional blacksmith shop at <a href="https://www.thisistheplace.org/" target="_blank"><InlineLink text="This Is The Place Heritage Park"/></a> when he was 17 years old, and he's been heavily involved in the steel industry ever since. He has been teaching <a href="https://continue.utah.edu/lifelong/class/llcft_274_blacksmithing___an_introduction" target="_blank"><InlineLink text="classes"/></a> at the University of Utah Continuing Education program for several years.</p>
                            <p>As a member of the Society for Creative Anachronism, Matt can often be seen towering over people on the battle field, wearing 80 pounds of armor and swinging a two-handed great sword. Matt is the master of the local SCA blacksmiths guild and quite a few re-enactors get their first experience with medieval blacksmithing from Matt.</p>
                            <p>Matt is happily married to his high school sweetheart and is the proud father of 4 children.</p>
                        </div>
                    </div>
                </section>

                <section class="blacksmith-row row">
                    <div class="col-12 col-md-8 blacksmith-bio d-flex flex-column justify-content-center">
                        <h2 class="blacksmith-name">Walter Enoch Elieson</h2>
                        <div class="text-two-col">
                            <p>Enoch is a co-owner of Wasatch Forge and works as an event planning coordinator and member of the design team.</p>
                            <p>He is a veteran of the Unites States Marine Corps, where he served for 17 years and received numerous awards and recognitions. Much of his military career was spent designing equipment and executing training tactics. He also worked with foreign and domestic troops in training for combat operations.</p>
                            <p>When he's not working at the forge, Enoch also enjoys woodworking, historical reenactment, classic cars and four-wheeling.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 blacksmith-img d-flex flex-column justify-content-center">
                        <img :src="require('~/assets/images/blacksmiths/enoch.jpg')">
                    </div>
                </section>

                <section class="blacksmith-row row">
                    <div class="col-12 col-md-4 blacksmith-img d-flex flex-column justify-content-center">
                        <img :src="require('~/assets/images/blacksmiths/mike.jpg')">
                    </div>
                    <div class="col-12 col-md-8 blacksmith-bio d-flex flex-column justify-content-center">
                        <h2 class="blacksmith-name">Michael Miller-Imperiale</h2>
                        <div class="text-two-col">
                            <p>Mike is a full-time dad and a part-time blacksmith who found smithing when he wanted to fall in love with work that didn't take him away from home as often as his previous career as a wilderness guide. It worked.</p>
                            <p>Smithing fits in nicely with Mike's favorite hobby, drinking beer. He's forged hundreds of bottle openers, ranging from stoicly utilitarian to intricately beautiful. Mike has mastered the art of opening a bottle of beer.</p>
                            <p>Mike is currently working as a ski instructor at Alta. He forges at every opportunity he gets.</p>
                        </div>
                    </div>
                </section>

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
                return require('~/assets/images/hero/working.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-blacksmiths {

        .page-content {
            padding: 0;
        }
    }

    .blacksmith-row {
        margin : 0 auto 4rem auto;

        @include screen-lg-xl {
            margin : 0 auto 8rem auto;
        }

        &:first-child {
            @include screen-xs-sm {
                margin-top : 6rem;
            }
        }

        &:nth-child(even) {
            .blacksmith-bio {
                @include screen-lg-xl {
                    padding : 0 5rem 0 0;
                }
            }
        }
    }

    .blacksmith-img {
        position : relative;
        overflow : hidden;

        @include screen-xs-sm {
            margin: 0 0 2.2rem 0;
        }

        @include screen-md {
            justify-content: flex-start !important;
        }
    }

    .blacksmith-bio {
        @include screen-xs-sm {
            order: 1;
        }

        @include screen-lg-xl {
            padding : 0 0 0 5rem;
        }
    }

    .blacksmith-name {
        line-height : 1;
        margin      : 0 0 2rem 0;
    }
</style>
