<template>
    <div :style="{ backgroundImage: `url(${imgSrc})` }" class="hero-image"></div>
</template>

<script>
    export default {
        name: 'Hero',
        props: {
            imgSrc: String
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .hero-image {
        background-size     : cover;
        background-position : center center;
        height              : 70vh;
        left                : 0;
        position            : absolute;
        top                 : 0;
        width               : 100%;
        z-index: 0;

        @include screen-xs {
            height : 35vh;
        }
    }
</style>
