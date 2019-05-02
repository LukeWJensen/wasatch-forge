<template>
    <div :class="align ? `hero-align-${align}` : ''" class="hero">
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
        height          : 65vh;

        .home & {
            height : 100vh;

            @include screen-md-lg-xl {
                height : calc(100vh - #{$header-height-desk});
            }
        }

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
                margin : auto auto 6rem auto;
            }

            .home & {
                margin-bottom: 20vh;
            }
        }

        &-heading {
            color          : rgba(255, 255, 255, 0.85);
            font-family    : Copperplate, serif;
            font-size      : 6rem;
            font-weight    : 500;
            line-height    : 4.7rem;
            margin         : auto;
            max-width      : 600px;
            opacity        : 0;
            text-align     : center;
            text-transform : uppercase;
            transform      : translateY(-2rem);
            z-index        : 1;

            @include screen-md-lg-xl {
                font-size   : 9rem;
                line-height : 7rem;
            }

            .hero-align-left & {
                text-align : left;
                margin     : 0;
            }

            .hero-align-right & {
                text-align : right;
            }

            body.init & {
                animation : headingEnter 0.7s $cubic-out 0.2s forwards;
            }

            body.init .home & {
                animation : headingEnterDramatic 1s $cubic-out 1s forwards;
            }
        }
    }
</style>
