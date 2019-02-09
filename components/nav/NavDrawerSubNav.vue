<template>
    <li :class="{ 'nav-drawer-item--subnav--open': subNavOpen }" class="nav-drawer-item nav-drawer-item--subnav">
        <span class="nav-drawer-item-text" @click="handleSubNavItemTextClick">
            {{ text }}
            <span class="nav-drawer-subnav-arrow">&#9660;</span>
        </span>
        <ul
            :style="{ maxHeight: `${subNavOpen ? subNavHeight : 0}px` }"
            class="nav-drawer-subnav"
        >
            <div class="nav-drawer-subnav-inner">
                <slot/>
            </div>
        </ul>
    </li>
</template>

<script>
    export default {
        name: 'NavDrawerSubNav',
        props: {
            text: String,
            highlight: Boolean
        },
        data () {
            return {
                subNavOpen: false,
                subNavHeight: 0
            }
        },
        created () {
            // get the clientHeight of the NavDrawerItem children
            this.$on('reportHeight', this.handleReportHeight)
        },
        methods: {
            handleSubNavItemTextClick () {
                this.subNavOpen = !this.subNavOpen
            },
            handleReportHeight (height) {
                // add the clientHeights of the NavDrawerItem children together to get the total height of the .nav-drawer-subnav
                this.subNavHeight += height
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/the-goods";

    .nav-drawer-item--subnav {
        overflow : hidden;

        &:hover {
            cursor : pointer;
        }

        .nav-drawer-item-text {
            display : block;
        }

        &--open {

            .nav-drawer-subnav-arrow {
                transform : rotate(-180deg);
            }
        }
    }

    .nav-drawer-subnav-arrow {
        display          : inline-flex;
        font-size        : 1.2rem;
        left             : 0.2rem;
        position         : relative;
        top              : -0.1rem;
        transform-origin : center;
        transition       : transform 500ms $cubic-out;
    }

    .nav-drawer-subnav {
        height     : 100vh;
        transition : max-height 400ms $cubic-out;

        .nav-drawer-item {
            font-family    : "Open Sans", sans-serif;
            font-size      : 1.6rem;
            font-weight    : 700;
            opacity        : 0;
            text-transform : capitalize;
            transform      : translateY(2rem);
            transition     : opacity 400ms $cubic-out, transform 300ms $cubic-out;

            &:nth-child(1) {
                transition-delay : 75ms;
            }

            &:nth-child(2) {
                transition-delay : 150ms;
            }

            &:nth-child(3) {
                transition-delay : 225ms;
            }

            .nav-drawer-item--subnav--open & {
                opacity   : 1;
                transform : translateY(0);
            }
        }
    }
</style>
