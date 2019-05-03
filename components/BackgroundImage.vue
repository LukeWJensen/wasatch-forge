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
        overflow : hidden;

        &-img {
            position   : absolute;
            top        : 50%;
            left       : 50%;
            width      : 100%;
            min-height : 100%;
            transform  : translate(-50%, -50%);
            object-fit : cover;
        }

        &-tint {
            background : linear-gradient(rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 60%, rgba(0, 0, 0, 0.7) 100%);
        }

        &--align-top {

            .background-image-img {
                bottom          : auto;
                object-position : top;
                top             : 0;
                transform       : translate(-50%, 0);
            }
        }

        &--align-bottom {

            .background-image-img {
                bottom          : 0;
                object-position : bottom;
                top             : auto;
                transform       : translate(-50%, 0);
            }
        }

        &--align-left {

            .background-image-img {
                left            : 0;
                object-position : left;
                right           : auto;
                transform       : translate(0, -50%);
            }
        }

        &--align-right {

            .background-image-img {
                left            : auto;
                object-position : right;
                right           : 0;
                transform       : translate(0, -50%);
            }
        }
    }
</style>
