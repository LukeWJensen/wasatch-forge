<template>
    <div :class="`hero-align-${align}`" class="hero">
        <div class="hero-heading-wrap container">
            <h1 class="hero-heading">{{ heading }}</h1>
        </div>
        <slot/>
    </div>
</template>

<script>
    export default {
        name: 'Hero',
        props: {
            align: String,
            heading: String,
            imgSrc: String
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .hero {
        align-items     : center;
        display         : flex;
        flex-direction  : column;
        justify-content : center;
        overflow        : hidden;
        position        : relative;
        height          : calc(100vh - #{$header-height});

        &.hero-align-left {
            align-items     : flex-start;
            justify-content : flex-end;
        }

        &.hero-align-left {
            align-items : flex-end;
        }

        &-heading-wrap {
            z-index : 1;

            .hero-align-left & {
                margin : auto auto 10rem auto;
            }
        }

        &-heading {
            color          : $color-off-white;
            font-family    : Copperplate, serif;
            font-size      : 9rem;
            font-weight    : 500;
            line-height    : 7rem;
            margin         : auto;
            max-width      : 600px;
            text-align     : center;
            text-transform : uppercase;
            z-index        : 1;

            .hero-align-left & {
                text-align : left;
                margin: 0;
            }

            .hero-align-right & {
                text-align : right;
            }
        }
    }
</style>
