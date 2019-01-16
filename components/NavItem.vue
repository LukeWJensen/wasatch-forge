<template>
    <li
        ref="li"
        :class="[
            {'main-nav-item--highlight': highlight},
            {'main-nav-item--hovering': hovering},
            {'main-nav-item--hovered': hovered}
        ]"
        class="main-nav-item"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
    >
        <nuxt-link :to="to" class="main-nav-link">{{ text }}</nuxt-link>
    </li>
</template>

<script>
    export default {
        name: 'NavItem',
        props: {
            text: String,
            to: String,
            highlight: Boolean
        },
        data () {
            return {
                hovering: false,
                hovered: false
            }
        },
        methods: {
            handleMouseOver () {
                this.hovered = false
                this.hovering = true
            },
            handleMouseLeave () {
                this.hovering = false
                this.hovered = true
                this.$refs.li.addEventListener('transitionend', this.handleTransitionend)
            },
            handleTransitionend () {
                this.hovered = false
                this.$refs.li.removeEventListener('transitionend', this.handleTransitionend)
            }
        }
    }
</script>

<style lang="scss">
    @import "../assets/scss/the-goods";

    .main-nav-item {
        list-style     : none;
        font-size      : 2rem;
        font-weight    : 700;
        padding        : 0.5rem 0;
        position       : relative;
        margin         : 1.5rem 1.5rem 0 2.5rem;
        text-transform : uppercase;
        overflow       : hidden;

        &--highlight {
            background    : $color-molten;
            border-radius : 0.2rem;
            padding       : 0.4rem 1rem 0.6rem 1rem;
            transition    : color 250ms $cubic-in-out, background-color 250ms $cubic-in-out;

            &:after {
                display : none;
            }

            &:hover {
                background-color : $color-text-light;
                color            : $color-text-main;

                a {
                    color : $color-text-main;
                }
            }
        }

        &:after {
            background : $color-molten;
            bottom     : 0;
            content    : "";
            height     : 3px;
            left       : 0;
            width      : 100%;
            position   : absolute;
            transform  : translateX(-101%);
        }

        &:last-of-type {
            margin-right : 0;
        }

        &:hover {
            cursor : pointer;
        }

        &--hovering, &--hovered {

            &:after {
                transition : transform 250ms $cubic-out;
            }
        }

        &--hovering {

            &:after {
                transform : translateX(0)
            }
        }

        &--hovered {

            &:after {
                transform : translateX(101%);
            }
        }

        a {
            color : $color-text-light;

            &:hover {
                text-decoration : none;
            }
        }
    }
</style>
