<template>
    <div class="page-store page">
        <Hero heading="Store" align="left"/>
        <div class="page-content">
            <div class="container">
                <Ecwid/>
            </div>
        </div>
    </div>
</template>

<script>
    import Hero from '~/components/Hero'
    import InlineLink from '~/components/InlineLink'
    import BackgroundImage from '~/components/BackgroundImage'
    import Ecwid from '~/components/Ecwid'

    export default {
        components: { Hero, BackgroundImage, InlineLink, Ecwid }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .page-store {

        .hero {
            max-height : 42rem;
        }

        .page-content {
            padding : 4rem 0;

            @include screen-lg-xl {
                padding : 8rem 0;
            }

            .container {
                min-height : 400px;

            }
        }
    }

</style>
