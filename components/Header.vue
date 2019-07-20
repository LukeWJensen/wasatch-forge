<template>
    <header class="main-header copperplate">
        <div class="main-header-inner container">

            <nuxt-link class="header-logo" to="/">
                <Logo scheme="dark"/>
            </nuxt-link>

            <Nav v-if="navActive"/>

            <button
                v-if="!navActive"
                class="nav-drawer-open"
                @click="handleOpenClick"
            >
                <span class="nav-drawer-open-line nav-drawer-open-line--top"/>
                <span class="nav-drawer-open-line nav-drawer-open-line--mid"/>
                <span class="nav-drawer-open-line nav-drawer-open-line--bot"/>
            </button>

        </div>
    </header>
</template>

<script>
    import Nav from '~/components/nav/Nav'
    import NavDrawer from '~/components/nav/NavDrawer'
    import Logo from '~/components/Logo'

    export default {
        name: 'Header',
        components: { Nav, NavDrawer, Logo },
        data () {
            return {}
        },
        computed: {
            navActive () {
                return this.$store.state.size.deviceSize === 'lg' || this.$store.state.size.deviceSize === 'xl'
            }
        },
        methods: {
            handleOpenClick () {
                this.$store.dispatch('nav/setDrawerOpen', true)
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/scss/the-goods';

    .main-header {
        background : $color-off-white;
        height     : $header-height-mobile;
        position   : relative;
        transform  : translateZ(0);
        width      : 100%;
        z-index    : 6;

        @include screen-xs-sm {
            position : fixed;
            left     : 0;
            top      : 0;
        }

        @include screen-md-lg-xl {
            height : $header-height-desk;
        }

        &-inner {
            display         : flex;
            align-items     : center;
            height          : 100%;
            justify-content : space-between;
            position        : relative;

            @include screen-xs-sm {
                padding : 0 3rem;
            }
        }
    }

    .header-logo {
        position : relative;
        top      : 0.4rem;

        @include screen-lg-xl {
            left      : 50%;
            position  : absolute;
            top       : 50%;
            transform : translate(-50%, -50%);
        }

        .logo-svg {
            display : inline-flex;
            width   : 6.4rem;

            @include screen-md-lg-xl {
                width : 9rem;
            }
        }
    }

    .nav-drawer-open {
        background         : transparent;
        border             : 0;
        display            : flex;
        flex-direction     : column;
        height             : 3.2rem;
        justify-content    : space-between;
        outline            : none;
        padding            : 0;
        position           : relative;
        -webkit-appearance : none;
        z-index            : 10;

        &-line {
            background : $color-off-black;
            display    : inline-flex;
            height     : 0.6rem;
            width      : 4rem;
        }
    }
</style>
