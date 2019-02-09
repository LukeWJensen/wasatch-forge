<template>
    <div class="page-book-lessons">
        <Hero heading="The Shop" align="left">
            <BackgroundImage :img-src="heroImgSrc" :tint="false"/>
        </Hero>
        <div class="container">
            <div class="page-content">
                <section class="col-10 offset-1">
                    <p>Wasatch Forge provides a workspace and a large variety of tools for all types of blacksmiths, regardless of skill or commitment level. The space offers 1440 sq. feet of warehouse space, a restroom and a small office. Inside the shop you’ll find everything you need to tackle a wide variety of tasks, from non-ferrous metal casting to working multi-bar, complex pattern damascus. It house three kinds of forges:</p>

                    <ul>
                        <li>A general purpose forge</li>
                        <li>A dedicated damascus forge</li>
                        <li>An enlarge ribbon burner</li>
                    </ul>

                    <p>Other amenities include:</p>

                    <ul>
                        <li>A 32” deep heat-treat oven</li>
                        <li>A 50 kg Say-Mak power hammer</li>
                        <li>A shop-built 27-ton hydraulic press</li>
                        <li>A variety of welders</li>
                        <li>Over 100 pairs of tongs and over 50 hammers</li>
                    </ul>

                    <p>Wasatch Forge takes great pride in making these tools available to the blacksmithing community in the Salt Lake Valley. However, its greatest resource by far is its friendly and knowledgeable staff. We offer classes 3 to 4 times per week, including everything from open-forge night to individual and large-group classes and events. Whether it’s a private lesson, a corporate activity or a blacksmith bachelors party, we’ve got you covered.</p>

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
                return require('~/assets/images/hero/shop.jpg')
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';
</style>
