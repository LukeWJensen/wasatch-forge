<template>
    <div class="page-blacksmiths page">
        <Hero heading="The Blacksmiths" align="left"/>
        <div class="page-content">
            <div class="container">

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
                        <h2 class="blacksmith-name">Steven Moon</h2>
                        <div class="text-two-col">
                            <p>Steven is a Journeyman Bladesmith and resident knife specialist at Wasatch Forge.  He has produced dozens of high-quality mono steel and pattern-welded blades and is best know for his drop-point hunting knives.</p>
                            <p>Steven’s greatest passion is complicated pattern-welded steels. His complex patterning is unrivaled around the forge and he is happy to share his knowledge with students in his Wasatch Forge pattern-welding workshops. He also helps teach the introductory bladesmith class and is responsible for shop upkeep, maintenance, and facilitating new projects for the forge.</p>
                            <p>Steven was medically retired as a Staff Sergeant from the United States Army where he served honorably for eight years. More than just a craft, smithing is a way of life for him has and has served as an essential therapeutic creative outlet to help treat his service-related disabilities.</p>
                            <p>A Utah native, Steven lives in Clearfield with his wife, daughter and dogs.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 blacksmith-img d-flex flex-column justify-content-center">
                        <img :src="require('~/assets/images/blacksmiths/steven.jpg')">
                    </div>
                </section>

                <section class="blacksmith-row row">
                    <div class="col-12 col-md-4 blacksmith-img d-flex flex-column justify-content-center">
                        <img :src="require('~/assets/images/blacksmiths/lou.jpg')">
                    </div>
                    <div class="col-12 col-md-8 blacksmith-bio d-flex flex-column justify-content-center">
                        <h2 class="blacksmith-name">Lou Dunham</h2>
                        <div class="text-two-col">
                            <p>Lou is a full-time artisan craftsperson whose skillset is littered with crafts that fell out of common usage a couple centuries ago. In addition to blacksmithing, these skills include woodworking, wilderness survival, and traditional folk crafts. In his opinion, blacksmithing is a song, where woodworking is a dance. They belong together, and Lou delights in combining his skillsets to produce gorgeous artistic pieces. Though these include knives and swords, he finds traditional smithing more fulfilling than grinder work.</p>
                            <p>Lou is a theatre major, and it shows. Having grown up more in the mountains and deserts of Utah than in its cities, he is barely civilized and not terribly tame. It has often been remarked that he seems to have walked out of the pages of a fantasy novel.</p>
                            <p>Lou took one of the earliest Blacksmithing Classes offered by the University of Utah Continuing Education program. After leaving backstage work to care for his grandparents, he has worked continuously at Wasatch Forge ever since.</p>
                            <p>Outside of the forge, Lou can be found wandering deer-trails in the rockies, howling at the moon, and hosting roleplaying games for groups of friends - occasionally at the same time.</p>
                        </div>
                    </div>
                </section>

                <section class="blacksmith-row row">
                    <div class="col-12 col-md-8 blacksmith-bio d-flex flex-column justify-content-center">
                        <h2 class="blacksmith-name">Walter Enoch Elieson</h2>
                        <div class="text-two-col">
                            <p>Enoch works as an event planning coordinator and member of the design team.</p>
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
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .blacksmith-row {
        margin : 4rem auto;

        @include screen-lg-xl {
            margin : 8rem auto;
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
        line-height : 1.2;
        margin      : 0 0 2rem 0;

        @include screen-md-lg-xl {
            line-height : 1;
        }
    }
</style>
