<template>
    <div :class="alignClass" class="background-image absolute-fill">
        <transition name="background-image-img">
            <img
                :src="imgSrc"
                :key="imgSrc"
                alt=""
                class="background-image-img"
            >
        </transition>
        <div v-if="tint" class="background-image-tint absolute-fill"/>
        <div v-else class="background-image-tint--half absolute-fill"/>
    </div>
</template>

<script>
    export default {
        name: 'BackgroundImage',
        props: {
            imgSrc: String,
            alt: String,
            align: String,
            tint: Boolean
        },
        computed: {
            alignClass () {
                return this.align ? `background-image--align-${this.align}` : ''
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/_the-goods";

    .background-image {
        transform : translateZ(-2px) scale(3);

        @include screen-xs-sm {
            top: $header-height-mobile;
        }

        body.ios & {
            position: fixed;
            transform : none;
            top: $header-height-mobile;
            z-index: 0;
        }

        body.edge &,
        body.msie & {
            transform : none;
        }

        &-img {
            position : absolute;
            width    : 100%;

            @include screen-xl {
                top : -5%;
            }

            &-enter-active,
            &-leave-active {
                transition : opacity 1s $cubic-out;
            }

            &-enter,
            &-leave-to {
                opacity : 0;
            }
        }

        &-tint {
            background : linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.65) 100%);

            &--half {
                background : linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 60%, rgba(0, 0, 0, 0.4) 100%);
            }
        }
    }
</style>
