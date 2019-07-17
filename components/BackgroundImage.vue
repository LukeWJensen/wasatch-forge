<template>
    <div :class="alignClass" class="background-image absolute-fill">
        <img
            :src="imgSrc"
            alt=""
            class="background-image-img"
        >
        <div v-if="tint" class="background-image-tint absolute-fill"/>
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

        &-img {
          opacity  : 0;
          position : relative;
          top      : -250%;
          width    : 100%;

          @include screen-md {
            top: -125%;
          }

          @include screen-lg {
            top: -75%;
          }

          @include screen-xl {
            top: -15%;
          }

          body.init & {
            animation : bgImgEnter 0.4s $cubic-out 0.81s forwards;
          }
        }

        &-tint {
            background : linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.45) 60%, rgba(0, 0, 0, 0.65) 100%);
        }
    }
</style>
