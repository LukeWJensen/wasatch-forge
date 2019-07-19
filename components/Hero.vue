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
        height          : 60vw;

        @include screen-xs-sm {
            margin-top : $header-height-mobile;
        }

        @include screen-md-lg-xl {
            height : 36vw;
        }

        .home & {
            height : calc(100vh - #{$header-height-mobile});

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

            @include screen-xs-sm {
                padding : 0 3rem;
            }

            .hero-align-left & {
                margin : auto auto 3rem auto;

                @include screen-lg-xl {
                    margin : auto auto 7rem auto;
                }
            }

            .home & {
                margin-bottom : 20vh;
            }
        }

        &-heading {
            color          : rgba(255, 255, 255, 0.85);
            font-family    : Copperplate, serif;
            font-size      : 4.2rem;
            font-weight    : 500;
            line-height    : 3.4rem;
            left           : -0.5rem;
            margin         : auto;
            max-width      : 600px;
            opacity        : 0;
            position       : relative;
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
                animation : headingEnter 0.7s $cubic-out 0.4s forwards;
            }

            body.init .home & {
                animation : headingEnterDramatic 1s $cubic-out 1s forwards;
            }
        }
    }
</style>
