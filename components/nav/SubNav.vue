<template>
    <li
        ref="li"
        :class="[
            {'main-nav-item--highlight': highlight},
            {'main-nav-item--hovering': hovering},
            {'main-nav-item--hovered': hovered}
        ]"
        class="main-nav-item main-nav-item--subnav"
        @mouseover="handleMouseOver"
        @mouseleave="handleMouseLeave"
    >
        <span class="main-nav-item-text">
            {{ text }}
            <span class="main-nav-subnav-arrow">&#9660;</span>
        </span>
        <span class="main-nav-item-line"/>
        <ul
            :class="{'main-nav-subnav--active': hovering}"
            :style="{top: `${subnavOffsetTop}px`}"
            class="main-nav-subnav"
        >
            <div class="main-nav-subnav-inner">
                <slot/>
            </div>
        </ul>
    </li>
</template>

<script>
    import NavItemMixin from '~/mixins/NavItemMixin'

    export default {
        name: 'SubNav',
        mixins: [NavItemMixin],
        props: {
            text: String,
            highlight: Boolean
        },
        data () {
            return {
                hovering: false,
                hovered: false,
                height: 0
            }
        },
        computed: {
            subnavOffsetTop () {
                return this.height
            }
        },
        mounted () {
            this.height = this.$refs.li.clientHeight
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
    @import "../../assets/scss/the-goods";

    .main-nav-item--subnav {

        &.main-nav-item {

            &:hover {
                cursor : default;
            }
        }
    }

    .main-nav-subnav {
        left           : -4rem;
        opacity        : 0;
        pointer-events : none;
        padding        : 2rem;
        position       : absolute;
        transform      : translateY(1.5rem);
        transition     : transform 400ms $cubic-out, opacity 300ms $cubic-out;

        &--active {
            opacity        : 1;
            pointer-events : auto;
            transform      : translateY(0);
        }

        &:hover {
            cursor : default;
        }

        &-inner {
            background    : $color-off-black;
            border-radius : 0.2rem;
            padding       : 1rem 0;
            box-shadow: 2px 2px 8px 2px rgba(0,0,0,0.1);
        }

        &-arrow {
            font-size    : 1rem;
            font-weight  : bolder;
            padding-left : 1rem;
            position     : absolute;
            right        : -1.6rem;
            bottom       : 0.7rem;
        }
    }
</style>
