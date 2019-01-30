<template>
    <div class="background-image absolute-fill">
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
            tint: Boolean
        },
        data () {
            return {}
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/_the-goods";

    .background-image {

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
            background : rgba(0, 0, 0, 0.5);
        }
    }
</style>
