<template>
    <div :class="{'nav-drawer--open': $store.state.nav.drawerOpen}" class="nav-drawer">
        <ul class="nav-drawer-links barlow">
            <NavDrawerItem
                :highlight="true"
                text="Book Lessons"
                to="/book-lessons"
            />
            <NavDrawerSubNav text="About">
                <NavDrawerItem
                    text="The Shop"
                    to="/shop"
                />
                <NavDrawerItem
                    text="The Blacksmiths"
                    to="/blacksmiths"
                />
                <NavDrawerItem
                    text="Our History"
                    to="/history"
                />
            </NavDrawerSubNav>
            <NavDrawerItem text="Store" to="/store"/>
            <NavDrawerItem text="Contact" to="/contact"/>
        </ul>
        <button class="nav-drawer-close" @click="handleCloseClick">close menu</button>
    </div>
</template>

<script>
    import NavDrawerItem from '~/components/nav/NavDrawerItem'
    import NavDrawerSubNav from '~/components/nav/NavDrawerSubNav'

    export default {
        name: 'NavDrawer',
        components: { NavDrawerItem, NavDrawerSubNav },
        data () {
            return {
                drawerOpen: false,
            }
        },
        beforeDestroy () {
            this.$store.dispatch('nav/setDrawerOpen', false)
        },
        methods: {
            handleCloseClick () {
                this.$store.dispatch('nav/setDrawerOpen', false)
            }
        }
    }
</script>

<style lang="scss">
    @import "../../assets/scss/the-goods";

    .nav-drawer {
        background : $color-off-white;
        height     : 100vh;
        padding    : 4.6rem 2.8rem;
        position   : fixed;
        right      : 0;
        top        : 0;
        transform  : translateX(101%);
        transition : transform 250ms $cubic-out;
        width      : 32rem;
        z-index    : 7;

        &--open {
            transform : translateX(0);
        }

        &-links {
            display        : flex;
            flex-direction : column;
            padding        : 2rem 0 0 2rem;
        }

        &-close {
            background : transparent;
            border     : none;
            color      : transparent;
            font-size  : 1.4rem;
            height     : 2.6rem;
            overflow   : hidden;
            padding    : 0;
            position   : absolute;
            right      : 3.4rem;
            top        : 3rem;
            width      : 2.6rem;

            &:before, &:after {
                background : $color-off-black;
                content    : '';
                height     : 100%;
                left       : 50%;
                position   : absolute;
                width      : 0.4rem;
                top        : 0;
            }

            &:before {
                transform : rotate(45deg);
            }

            &:after {
                transform : rotate(-45deg);
            }
        }
    }
</style>
