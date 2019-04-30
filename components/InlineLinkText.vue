<template>
    <span class="inline-link-text" v-html="text" />
</template>

<script>
    export default {
        name: 'InlineLinkText',
        props: {
            hovering: Boolean,
            idx: Number,
            word: String,
            wordsLength: Number
        },
        computed: {
            text () {
                return this.idx === this.wordsLength - 1 ? `${this.word}` : `${this.word}\u00A0`
            }
        }
    }
</script>

<style lang="scss">
@import '../assets/scss/the-goods';

.inline-link-text {
    color      : $color-off-black;
    display    : inline-block;
    position   : relative;
    transition : color 200ms $cubic-out;

    &:after {
        background-color : $color-molten;
        bottom           : -0.1rem;
        content          : "";
        height           : 0.3rem;
        left             : -0.4rem;
        position         : absolute;
        transform-origin : bottom;
        transition       : transform 300ms $cubic-out;
        width            : calc(100% + 0.8rem);
        will-change      : transform;
        z-index          : -1;
    }

    .inline-link--hover & {
        color : $color-off-white;

        &:after {
            transform : scaleY(9);
        }
    }

    .callout .inline-link--hover & {
        &:after {
            transform : scaleY(12);
        }
    }
}
</style>
