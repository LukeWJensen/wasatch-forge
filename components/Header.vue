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
    import Logo from'~/components/Logo'

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
        height     : $header-height;
        position   : relative;
        z-index    : 1;

        &-inner {
            display         : flex;
            align-items     : center;
            height          : 100%;
            justify-content : space-between;
            position        : relative;
        }
    }

    .header-logo {
        position  : absolute;
        left      : 50%;
        top       : 50%;
        transform : translate(-50%, -50%);

        .logo-svg {
            width   : 9rem;
            display : inline-flex;
        }
    }

    .nav-drawer-open {
        background         : transparent;
        border             : 0;
        display            : flex;
        flex-direction     : column;
        height             : 3rem;
        justify-content    : space-between;
        outline            : none;
        padding            : 0;
        -webkit-appearance : none;

        &-line {
            background : $color-off-black;
            display    : inline-flex;
            height     : 0.5rem;
            width      : 3.6rem;
        }
    }
</style>
